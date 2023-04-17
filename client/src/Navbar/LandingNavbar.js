import React from "react";
import { useState, useRef, useEffect } from "react";
import Web3Modal from "web3modal";
import { providers } from "ethers";

const LandingNavbar = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const web3ModalRef = useRef();

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
    if (network.chainId !== 997) {
      window.alert("Change your network to 5irechain testnet");
      throw new Error("Change to 5irechain testnet");
    }

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
      <nav className="bg-neutral-50 h-16  flex flex-row justify-between">
        <div href="" class=" ">
          <h1 class="mt-4 ml-8 flex flex-col text-xl text-black font-semibold  ">
            Paysal-earn
          </h1>
        </div>
        <div class="relative inline-block ml-96 text-left mt-4 mr-8 flex flex-col">
          <div className="flex w-full text-black justify-around gap-x-1.5 rounded-lg px-10 py-2 text-base font-semibold ring-2 ring-inset ring-fuchsia-600">
            <a href="/ListDetails">Get started</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingNavbar;
