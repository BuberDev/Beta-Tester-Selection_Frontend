const web3 = new Web3(window.ethereum);
let accounts = [];
let owner;

window.ethereum.enable().then((_accounts) => {
    accounts = _accounts;
});

document.getElementById('connect').addEventListener('click', async () => {
    try {
        accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        document.getElementById('sign').disabled = false;
        const contractInstance = new web3.eth.Contract(abi, contractAddress);
        owner = await contractInstance.methods.owner().call();
        if (accounts[0] === owner) {
            document.getElementById('select').disabled = false;
        }
    } catch (error) {
        console.error("Error connecting to Metamask: ", error);
    }
});

document.getElementById('sign').addEventListener('click', async () => {
    registerAndDisplay('sign');
});

document.getElementById('select').addEventListener('click', async () => {
    registerAndDisplay('select');
});

async function registerAndDisplay(action) {
    const pendingAnimation = document.getElementById('pending-animation');
    pendingAnimation.style.display = 'block';

    const contractInstance = new web3.eth.Contract(abi, contractAddress);

    try {
        let method;
        switch (action) {
            case 'sign':
                method = contractInstance.methods.registerForBetaTesting();
                break;
            case 'select':
                method = contractInstance.methods.selectBetaTester();
                break;
        }
        await method.send({ from: accounts[0] });

        const count = await contractInstance.methods.getRegisteredAddressCount().call();
        document.getElementById('counter').innerText = count.toString();

        const addresses = await contractInstance.methods.getRegisteredAddresses().call();
        const addressesList = document.getElementById('addresses');
        addressesList.innerHTML = '';
        addresses.forEach(address => {
            const li = document.createElement('li');
            li.textContent = address;
            addressesList.appendChild(li);
        });
    } catch (error) {
        console.error(`Error performing ${action}: `, error);
    } finally {
        pendingAnimation.style.display = 'none';
    }
}
