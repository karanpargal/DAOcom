export const SalaryContractAddress =
  "0x189D6807030b09D86CA4c61c8bfE22DDcA4A682E";
export const SalaryContractAbi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "employee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salary",
        type: "uint256",
      },
    ],
    name: "paySalary",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
