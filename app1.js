let abi = [
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "subscriptionId",
        "type": "uint64"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "have",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "want",
        "type": "address"
      }
    ],
    "name": "OnlyCoordinatorCanFulfill",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "randomWord",
        "type": "uint256"
      }
    ],
    "name": "RequestFulfilled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "numWords",
        "type": "uint32"
      }
    ],
    "name": "RequestSent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "selectedBetaTester",
        "type": "address"
      }
    ],
    "name": "SelectedBetaTester",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllRegisteredAddresses",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_requestId",
        "type": "uint256"
      }
    ],
    "name": "getRequestStatus",
    "outputs": [
      {
        "internalType": "bool",
        "name": "fulfilled",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "randomWord",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "isRegistered",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lastRequestId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      },
      {
        "internalType": "uint256[]",
        "name": "randomWords",
        "type": "uint256[]"
      }
    ],
    "name": "rawFulfillRandomWords",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "registerForBetaTesting",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "registeredAddresses",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "requestIds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "requestRandomWords",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "s_requests",
    "outputs": [
      {
        "internalType": "bool",
        "name": "fulfilled",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "exists",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "randomWord",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "randomWord",
        "type": "uint256"
      }
    ],
    "name": "selectBetaTester",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
// Wczytaj 
let web3 = new Web3(Web3.givenProvider);

let contractAddress = "0x0997292F4DFf0400eaCEa903c68D9B96FF7D716A";
let contractDeployerAddress = "0xcF73f7B010dbFa39Bf3EE3D074B6F81f0C261841";
let currentUserAddress = null;
let registeredAddressesCount = 2;
let ABI =[];
 //abi wyciete aby nie zajmowac teraz wiele miejsca

  let contract = new web3.eth.Contract(abi, contractAddress);

  document.getElementById('connect-button').addEventListener('click', connect);
  
  async function connect() {
      if (typeof ethereum === 'undefined') {
          alert('Please install and activate Metamask.');
      } else {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          const account = accounts[0];
          currentUserAddress = account; 
          document.getElementById("connect-button").innerHTML = "Connected";
           document.getElementById("connect-button").disabled =  true
          showAccount(account);
          checkUserPermissions(); 
      }
  }
  
  async function checkUserPermissions() {
      const accountElement = document.getElementById('account-info');
      if(accountElement) {
          accountElement.innerText = `Checking permissions...`;
      }
  
      currentUserAddress = await ethereum.request({ method: 'eth_accounts' }); 
      if (currentUserAddress[0].toLowerCase() == contractDeployerAddress.toLowerCase()) {
          document.getElementById("select").disabled = false; 
          document.getElementById("sign").disabled = true; 
          accountElement.innerText = `Connected as the contract deployer`;
      } else {
          document.getElementById("sign").disabled = false; 
          accountElement.innerText = `Connected as a regular user`;
      }
  }

  let addressesElement
  function showRegisteredAddresses(addresses) {
    const addressesElement = document.getElementById('addresses');
    if(addressesElement) {
        addressesElement.innerHTML = addresses.map(address => `<li>${address}</li>`).join('');
    } else {
        console.log('Could not find element with id "addresses".');
    }
}

  function showAccount(account) {
      const accountElement = document.getElementById('account-info');
      
      if(accountElement) {
          accountElement.innerText = `Connected: ${account}`;
      } else {
          console.log('Could not find element with id "account-info".');
      }
  }
  function showRegisteredAddressesCount() {
    const countElement = document.getElementById('registered-addresses-count');
    if(countElement) {
        countElement.innerText = registeredAddressesCount;
    } else {
        console.log('Could not find element with id "registered-addresses-count".');
    }
}

showRegisteredAddressesCount();

async function signUpForBetaTesting() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];

    document.getElementById("pending-animation").style.display = "block"; 

    contract.methods.registerForBetaTesting().send({ from: account })
    .once('receipt', function(receipt){
        document.getElementById("pending-animation").style.display = "none"; 
        registeredAddressesCount += 1; 
        showRegisteredAddressesCount();
    
    }).on('receipt', (receipt) => {
        document.getElementById('message').textContent =
          'You are successfully signed up for beta testing!';
      })
      .on('error', (error, receipt) => {
        document.getElementById('message').textContent =
          'Error while signing up! You are already registered or something went wrong';
          document.getElementById("pending-animation").style.display = "none";
    });;
}

/* async function selectRandomBetaTester() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    document.getElementById("pending-animation").style.display = "block";
  
    // Wywołaj funkcję requestRandomWords() i uzyskaj requestId
    let response = await contract.methods.requestRandomWords().send({ from: account });
    console.log(response);
    // Pobierz requestId z eventu 'RequestSent'
    let requestId = response.events.RequestSent.returnValues.requestId;
  
    // Czekaj, aż żądanie zostanie spełnione
    let requestStatus = await contract.methods.getRequestStatus(requestId).call();
    console.log(requestStatus);

    // Pobierz wygenerowane losowe słowo (randomWord)
    let randomWord = requestStatus.randomWord;
    console.log(randomWord);
  
    // Wybierz beta testera na podstawie losowego słowa
    let selectedBetaTester = await contract.methods.selectBetaTester(randomWord).call();
    console.log("Selected Beta Tester:", selectedBetaTester);
    document.getElementById('selected-address-message').innerText = `Selected beta tester: ${selectedBetaTester}`;
  
    document.getElementById("pending-animation").style.display = "none";
  }
  
 */
  async function selectRandomBetaTester() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    document.getElementById("pending-animation").style.display = "block";
    await contract.events.RequestFulfilled({}, function(error, event) {
        if (error) {
            console.error('Error in SelectedBetaTester event handler:', error);
        } else {
            console.log('SelectedBetaTester event:', event);
        }
    });
    // Wywołaj funkcję requestRandomWords() i uzyskaj requestId
    let response = await contract.methods.requestRandomWords().send({ from: account });
    let requestId = response.events.RequestSent.returnValues.requestId;
    console.log('Request ID:', requestId);
  
    // Czekaj, aż żądanie zostanie spełnione
    let requestStatus = await contract.methods.getRequestStatus(requestId).call();
    while (!requestStatus.fulfilled) {
      console.log('Waiting for request to be fulfilled...');
      await new Promise(resolve => setTimeout(resolve, 5000)); // czekaj 5 sekund
      requestStatus = await contract.methods.getRequestStatus(requestId).call();
      console.log('Request Status:', requestStatus);
    }

    // Once the request is fulfilled, proceed with the rest of the function
    if (requestStatus.fulfilled) {
      console.log('Request fulfilled, selecting random beta tester.');
      // Rest of your code...
    } else {
      console.error('Request not fulfilled after waiting. Please check the Chainlink VRF setup.');
    }
}

  
  
  
  
  



async function getRegisteredAddresses() {
    const addresses = await contract.methods.getAllRegisteredAddresses().call();
    showRegisteredAddresses(addresses);
}



// Wywołaj funkcję getRegisteredAddresses() co sekundę, aby odświeżać listę
setInterval(getRegisteredAddresses, 1000);

