import React from "react";
import { useState, useRef, useEffect } from "react";
import Web3Modal from "web3modal";
import { providers } from "ethers";

const  Navbar = () => {
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
      <nav className=" fixed bg-neutral-50 w-[100%] h-16 flex flex-row border-b-2">
        <div href="" class=" ">
          <h1 class="mt-4 ml-1 text-xl text-black font-semibold  ">
            Paysal-earn
          </h1>
        </div>
        <div className="ml-96">
          <ul class="flex flex-col mt-4 border gap-7 rounded-lg  md:flex-row  md:text-sm md:font-medium md:border-0 ">
            <li>
              <div class="relative inline-block text-left">
                <div className="flex w-full text-black  justify-around gap-x-1 rounded-lg px-8 py-2 text-base font-semibold  ring-2 ring-inset ring-fuchsia-600">
                  <button> All Bounties</button>
                </div>
              </div>
            </li>

            <li>
              <div class="relative inline-block text-left">
                <div className="flex w-full text-black  justify-around gap-x-1 rounded-lg px-10 py-2 text-base font-semibold ring-2 ring-inset ring-fuchsia-600">
                  <button> All Opportunities</button>
                </div>
              </div>
            </li>
            <li>
              <div class="relative inline-block text-left">
                <div className="flex w-full  justify-around gap-x-1 rounded-lg px-10 py-2 text-base font-semibold text-black ring-2 ring-inset ring-fuchsia-600">
                  <button> All Grants</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="relative inline-block text-left mt-4 flex flex-col ml-72">
          <div className="flex w-full text-black  justify-around gap-x-1.5 rounded-lg px-10 py-2 text-base font-semibold ring-2 ring-inset ring-fuchsia-600">
            <a href="/ListDetails">Get started</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
