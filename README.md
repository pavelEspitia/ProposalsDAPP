# 🗳️ Proposals DApp – Technical Interview

This project is a simple decentralized application (dApp) built with **Next.js**, **Ethers.js**, and **Solidity**. It allows users to create proposals by submitting a title and description, and to fetch all existing proposals directly from the blockchain.


## ⚙️ Tech Stack

- **Solidity** – for the smart contract.
- **Next.js** – frontend framework.
- **Ethers.js** – blockchain interaction.
- **TailwindCSS** – rapid and responsive UI styling.

## 📜 Smart Contract

The contract supports:
- Creating proposals with a title and description.
- Retrieving a full list of proposals.

> Note: The contract has not been deployed on any public network at this stage.

## ⚠️ What’s Missing

- **Smart Contract Deployment:** The contract has not yet been deployed on a live network (e.g., Sepolia or mainnet). Until then, the frontend cannot interact with a real instance.
- **Wallet Connection:** While Ethers.js is prepared, wallet connection (e.g., MetaMask) via **RainbowKit** or **Wagmi** was not yet integrated.
- **Integrations:** with the `createProposal` method from the Smart Contract and fetching and displaying all proposals using the `getProposals` function.
- **Network validation and error handling:** No logic was added to ensure the user is on the correct network or to manage transaction errors thoroughly.
- **Smart Contract deploy:** The code for deploying the contract is not implemented, for time reasons what I planned to do is to compile and deplo the contract using RemixIDE.

## 💡 What I Would Do Next (as a Developer)

1. **Deploy the smart contract** to a testnet (Sepolia or Goerli) using Hardhat or Foundry.
2. **Integrate RainbowKit + Wagmi** to enhance wallet connectivity, session management, and user experience.
3. **Add advanced validation** to the form (minimum/maximum length, input sanitization, etc.).
4. **Use events for real-time sync:** Listen for a `ProposalCreated` event and update the UI without needing a manual refresh.
5. **Support multi-chain networks**, including automated network detection and switching.
6. **State management improvements:** Implement caching with Zustand, Redux Toolkit, or React Query.
7. **Testing:** Add unit and integration tests (with Foundry for Smart Contract, and Playwright for UI).
8. **Enhanced UI/UX:** Animations, real-time transaction feedback, and better loading indicators.

## 🚀 How to Run Locally

```bash
git clone https://github.com/pavelEspitia/ProposalsDAPP.git
cd proposals
npm install
npm run dev
