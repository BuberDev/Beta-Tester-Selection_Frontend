// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";


contract BetaTesting is VRFConsumerBaseV2, ConfirmedOwner {
    event RequestSent(uint256 requestId, uint32 numWords);
    event RequestFulfilled(uint256 requestId, uint256[] randomWords);
    event SelectedBetaTester(address selectedTester);

    struct RequestStatus {
        bool fulfilled; // whether the request has been successfully fulfilled
        bool exists; // whether a requestId exists
        uint256[] randomWords;
    }
    mapping(uint256 => RequestStatus)
        public s_requests; /* requestId --> requestStatus */
    VRFCoordinatorV2Interface COORDINATOR;

    // Your subscription ID.
    uint64 s_subscriptionId;

    // past requests Id.
    uint256[] public requestIds;
    uint256 public lastRequestId;

   
    bytes32 keyHash =
        0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c;

   
    uint32 callbackGasLimit = 100000;

    // The default is 3, but you can set this higher.
    uint16 requestConfirmations = 3;

   
    uint32 numWords = 1;

    
    constructor(
        uint64 subscriptionId
    )
        VRFConsumerBaseV2(0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625)
        ConfirmedOwner(msg.sender)
    {
        COORDINATOR = VRFCoordinatorV2Interface(
            0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625
        );
        s_subscriptionId = subscriptionId;
    }
    

    // Mapping to store address registration status
    mapping(address => bool) public isRegistered;

    // Array to store all registered addresses
    address[] public registeredAddresses;

    // Function to allow users to register for beta testing
    function registerForBetaTesting() external {
        require(!isRegistered[msg.sender], "Already registered for beta testing");
        isRegistered[msg.sender] = true;
        registeredAddresses.push(msg.sender);
    }

    // Function to return all addresses registered for beta testing
    function getAllRegisteredAddresses() external view returns (address[] memory) {
        return registeredAddresses;
    }

    // Function to select a beta tester based on a random number
    function selectBetaTester(uint256 randomNumber) external view returns (address) {
        require(registeredAddresses.length > 0, "No addresses registered for beta testing");
        uint256 index = randomNumber % registeredAddresses.length;
        return registeredAddresses[index];
    }



    // Assumes the subscription is funded sufficiently.
    function requestRandomWords()
        external
        onlyOwner
        returns (uint256 requestId)
    {
        // Will revert if subscription is not set and funded.
        requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        s_requests[requestId] = RequestStatus({
            randomWords: new uint256[](0),
            exists: true,
            fulfilled: false
        });
        requestIds.push(requestId);
        lastRequestId = requestId;
        emit RequestSent(requestId, numWords);
        return requestId;
    }

        // Modification in existing function to use selectBetaTester function
    function fulfillRandomWords(
        uint256 requestId,
        uint256[] memory randomWords
        ) internal override  {
        require(registeredAddresses.length > 0, "No addresses registered for beta testing");
        // Assuming only one random word was requested.
        uint256 index = randomWords[0] % registeredAddresses.length;
        address selectedBetaTester = registeredAddresses[index];
        
    }

    function selectRandomBetaTester(
        uint256 requestId,
        uint256[] memory randomWords
        ) public returns (address) {
        fulfillRandomWords(requestId, randomWords);
        uint256 index = randomWords[0] % registeredAddresses.length;
        address selected = registeredAddresses[index];
        emit SelectedBetaTester(selected);
        return selected;
    }

    

    function getRequestStatus(
        uint256 _requestId
    ) external view returns (bool fulfilled, uint256[] memory randomWords) {
        require(s_requests[_requestId].exists, "request not found");
        RequestStatus memory request = s_requests[_requestId];
        return (request.fulfilled, request.randomWords);
    }
}
