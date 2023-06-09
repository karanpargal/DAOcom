import React from "react";
import { useState, useRef, useEffect } from "react";
import Web3Modal from "web3modal";
import { providers } from "ethers";
import Logo from "../Assets/Logo.png"

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
      <nav className="bg-slate-50  border-b-2 border-violet-200 h-16  flex flex-row justify-between">
        <div href="" class=" ">
          <img class="w-40 h-18 mt-2  "  src={Logo}>
           
          </img>
        </div>
        <div class="relative inline-block ml-96 text-left mt-4 mr-8 flex flex-col">
          <div className="flex w-full text-black justify-around gap-x-1.5 rounded-xl px-8 py-1 text-base font-semibold ring-1 ring-offset ring-fuchsia-600 shadow-md shadow-violet-300  hover:text-white transition ease-in-out delay-150 bg-white hover:-translate-y-1  hover:scale-100 hover:bg-violet-300 duration-300  ">
            <a href="/ListDetails">Get started</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default LandingNavbar;
