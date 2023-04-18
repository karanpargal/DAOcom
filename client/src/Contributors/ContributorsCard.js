import React from "react";
import { useEffect, useState, useRef } from "react";
import Web3Modal from "web3modal";
import { providers } from "ethers";
import { ethers } from "ethers";
import {
  SalaryContractAddress,
  SalaryContractAbi,
  CrossChainAbi,
  CrossChainAva,
  CrossChainPoly,
} from "../constants";

const ContributorsCard = (props) => {
  const contributor = props.contributor;
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();

  const paySalary5ire = async () => {
    try {
      const signer = await getProviderOrSigner(true);

      const provider = await web3ModalRef.current.connect();
      const web3Provider = new providers.Web3Provider(provider);
      const address = await signer.getAddress();
      console.log(address);
      const network = await web3Provider.getNetwork();
      if (network.chainId !== 997) {
        window.alert("Change your network to 5irechain testnet");
        throw new Error("Change to 5irechain testnet");
      }
      const contract = new ethers.Contract(
        SalaryContractAddress,
        SalaryContractAbi,
        signer
      );
      const tx = await contract.paySalary(
        contributor.walletAddress,
        "10000000000000000",
        { gasLimit: 500000 }
      );
      console.log(SalaryContractAddress)

      window.alert("Rewards paid successfully");
      await tx.wait();
    } catch (e) {
      throw e;
    }
  };

  const paySalaryRouter = async () => {
    try {
      const signer = await getProviderOrSigner(true);

      const provider = await web3ModalRef.current.connect();
      const web3Provider = new providers.Web3Provider(provider);
      const address = await signer.getAddress();
      console.log(address);
      const network = await web3Provider.getNetwork();
      if (network.chainId !== 43113) {
        window.alert("Change your network to Avalanche testnet");
        throw new Error("Change to Avalanche testnet");
      }
      const contract = new ethers.Contract(
        CrossChainAva,
        CrossChainAbi,
        signer
      );
      const tx = await contract.transferCrossChain(
        "0",
        "80001",
        "30000000000",
        contributor.walletAddress,
        "1",
        { gasLimit: 50000 }
      );
      
      console.log(tx);
      await tx.wait();
      window.alert("Rewards paid successfully from Avalanche to Polygon");
    } catch (e) {
      throw e;
    }
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (e) {
      throw e;
    }
  };

  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const network = await web3Provider.getNetwork();

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "5ireChain",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);
  return (
    <div>
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-baseline text-gray-900 dark:text-white">
          <span class="text-3xl font-semibold tracking-tight">
            {contributor.name}
          </span>
        </div>
        <ul role="list" class="space-y-2 my-4">
          <li class="flex space-x-3">
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {contributor.department}
            </span>
          </li>
          <li class="flex space-x-3">
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {contributor.email}
            </span>
          </li>
          <li class="flex space-x-3">
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {contributor.walletAddress}
            </span>
          </li>
        </ul>
        <button
          type="button"
          onClick={paySalary5ire}
          class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Rewards using 5irechain
        </button>
        <button
          type="button"
          onClick={paySalaryRouter}
          class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 mt-2 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Rewards using router
        </button>
      </div>
    </div>
  );
};

export default ContributorsCard;
