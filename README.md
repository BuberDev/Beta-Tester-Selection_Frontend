# Beta Tester Selection — Hardhat / Chainlink Web3 Project

A Web3 project focused on building a decentralized beta tester selection system using **Solidity**, **Hardhat**, **ethers.js**, and **Chainlink** tooling.

The goal of this project is to demonstrate how a blockchain-based application can register participants, interact with smart contracts, and prepare a verifiable/randomized selection workflow for choosing beta testers in a transparent way.

## Why this project matters

This repository is relevant for Web3 and blockchain development because it shows a practical setup for smart contract development, testnet deployment, contract verification, and Chainlink-based blockchain integrations.

It demonstrates experience with:

* Solidity smart contract development environment
* Hardhat project configuration
* ethers.js integration
* Chainlink contracts dependency
* TypeChain support
* Goerli and Sepolia testnet configuration
* Etherscan verification setup
* Gas reporting and Solidity coverage tooling

## Tech Stack

* Solidity `0.8.18`
* Hardhat
* ethers.js v5
* Chainlink Contracts
* TypeChain
* Etherscan verification tooling
* Solidity coverage
* Hardhat gas reporter
* Goerli / Sepolia testnet configuration

## Current repository setup

The project includes a Hardhat-based development environment configured for:

* compiling Solidity contracts
* running Hardhat tests
* deploying to Ethereum testnets
* verifying contracts on Etherscan
* measuring gas usage
* working with Chainlink contracts

## Intended smart contract flow

The intended Web3 flow for the beta tester selection system is:

1. Users connect their wallet.
2. Users register for beta testing through a smart contract.
3. The contract stores participant addresses.
4. The owner/admin triggers a random selection process.
5. A selected beta tester address is returned in a transparent way.
6. Events are emitted so the frontend can update the UI.

## Example use cases

* Web3 beta tester selection
* Randomized allowlist selection
* Decentralized raffle-style selection
* Transparent participant registration
* Smart contract + frontend dApp integration

## Development commands

```bash
npm install
npx hardhat compile
npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

Deploy to a configured testnet:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## Environment variables

Create a `.env` file when deploying or verifying contracts:

```bash
GOERLI_RPC_URL=
PRIVATE_KEY=
ETHERSCAN_API_KEY=
COIN_MARKETCAP=
```

Never commit private keys or real secrets to the repository.

## Relevance to Blockchain Developer roles

This project is directly relevant to roles requiring:

* Solidity
* Hardhat
* Ethereum / EVM development
* ethers.js
* Chainlink integrations
* testnet deployment
* smart contract verification
* Web3 application architecture

## Author

Dawid Bubernak / BuberDev
