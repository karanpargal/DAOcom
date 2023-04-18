import React from "react";
import { useState, useRef, useEffect } from "react";
import Web3Modal from "web3modal";
import { providers } from "ethers";

const Dashboard = () => {
  const [orgData, setOrgData] = useState([]);
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
    console.log(web3Provider.getSigner());

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

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://daocom.onrender.com/orgs/", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (data[i].walletAddress === "0xC2e7D52caEecC220AF3f48785ebdF8b331a7B668") {
          setOrgData(data[i]);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <nav className=" fixed bg-neutral-50 h-16 flex flex-row border-b-2 w-[100%]">
          <div href="" class=" ">
            <h1 class="mt-4 ml-4 text-xl text-black font-semibold  ">
              Paysal-earn
            </h1>
          </div>
        </nav>
      </div>

      <div className="flex flex-row justify-around">
        <div className="flex flex-col">
          <div>
            <aside
              id="sidebar"
              class="relative left-0 z-40 w-64 h-screen mt-16  transition-transform-translate-x-full bg-neutral-50 border-r border-gray-200 sm:translate-x-0 "
              aria-label="Sidebar"
            >
              <div class="h-full px-3 pb-4 overflow-y-auto bg-neutral-50 flex flex-col divide-y ">
                <ul class="space-y-2 font-medium flex flex-col ">
                  <h1 className="text-left mt-4 text-gray-600">Workspace</h1>
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-black rounded-lg "
                    >
                      <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-black transition duration-75 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span class="ml-3">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Contributor"
                      class="flex items-center p-2 text-black rounded-lg "
                    >
                      <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-black transition duration-75 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span class="ml-3">Contributors</span>
                    </a>
                  </li>
                </ul>
                <ul class="space-y-2 font-medium mt-4 flex flex-col">
                  <h1 className="text-left text-gray-600">Your listings</h1>
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-black rounded-lg "
                    >
                      <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-black transition duration-75 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span class="ml-3">Bounties</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-black rounded-lg "
                    >
                      <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-black  transition duration-75 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span class="ml-3">Grants</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-black rounded-lg "
                    >
                      <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-black  transition duration-75 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span class="ml-3 ">Jobs</span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>

        <div id="Dashboard" className="flex flex-col text-black p-6 pt-0 ">
          <h1 className="text-3xl font-bold mt-10 mb-8 pt-12">DAO Details</h1>
          <div class="block  from-rose-100 to-teal-100  max-w-md p-6 bg-white rounded-lg shadow hover:bg-gray-100">
            <h5 class="mb-2 text-2xl font-bold text-black">
              {orgData.name}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {orgData.email}
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {orgData.industry}
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {orgData.walletAddress}
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2 pt-12">Departments</h1>
          </div>
          <div className="flex flex-row  m-auto space-x-10">
            <div>
              <a
                href="#"
                class="block from-rose-100 to-teal-100 divide-y-2 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
                  Technical
                </h5>
                <p class="font-normal text-gray-700 border-black">
                  Transforming business through innovative technology solutions.
                  Driving efficiency, agility, and growth for a connected world.
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <strong>Employees:</strong> 2
                </p>
              </a>
            </div>

            <div>
              <a
                href="#"
                class="block  from-rose-100 to-teal-100 divide-y-2 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
                  Marketing
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 border-black">
                  Creating Connections, Building Brands. Innovative marketing
                  solutions that engage, inspire, and drive growth. Your partner
                  in strategic marketing success.
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <strong>Employees:</strong> 1
                </p>
              </a>
            </div>

            <div>
              <a
                href="#"
                class="block  from-rose-100 to-teal-100 divide-y-2 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
              >
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
                  Operations
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 border-black">
                  Streamlining Processes, Driving Performance. Efficient
                  operations for sustainable growth. Your partner in optimizing
                  performance, reducing costs, and enhancing customer
                  experience.
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <strong>Employees:</strong> 0
                </p>
              </a>
            </div>

            <div>
              <div class="block  from-rose-100 to-teal-100 divide-y-2 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-black">
                  Business
                </h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 border-black">
                  Innovating for Success, Driving Growth. Strategic solutions
                  for sustainable business growth. Your partner in navigating
                  change, seizing opportunities, and achieving success.
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <strong>Employees:</strong> 1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center mt-10 pb-20 text-gray-500 text-xs">
        &copy;2023 PaySal Corp. All rights reserved.
      </p>
    </div>
  );
};

export default Dashboard;
