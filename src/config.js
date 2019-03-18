export const contractAddress = "0xb76b7e60B9B3BaC1D9C82B64E63e0F947182F4A4";
export const abi = [
  {
    constant: true,
    inputs: [],
    name: "totalCandidates",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x3866965c"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    name: "candidates",
    outputs: [
      {
        name: "id",
        type: "uint8"
      },
      {
        name: "name",
        type: "string"
      },
      {
        name: "voteCount",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x6d6277f4"
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x715018a6"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8da5cb5b"
  },
  {
    constant: true,
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8f32d59b"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "voters",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xa3ec138d"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "approved",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xd8b964e6"
  },
  {
    constant: false,
    inputs: [
      {
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xf2fde38b"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_candidateId",
        type: "uint8"
      },
      {
        indexed: false,
        name: "_voter",
        type: "address"
      }
    ],
    name: "Voted",
    type: "event",
    signature:
      "0xe26d09013db5853436d0e069f2b5af3caf6c53a61021da4166867166f7c90f9a"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_id",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_voter",
        type: "address"
      }
    ],
    name: "RequestApproval",
    type: "event",
    signature:
      "0xd777e646ae2393d6ea64a856295cf8f73625cd338c0536225d005892f8500995"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_voter",
        type: "address"
      }
    ],
    name: "VoterApproved",
    type: "event",
    signature:
      "0x85e209912e11195144f49695f608785c8a31876f9d5d831813c396126a21b484"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_candidateId",
        type: "uint8"
      },
      {
        indexed: false,
        name: "_name",
        type: "string"
      }
    ],
    name: "CandidateAdded",
    type: "event",
    signature:
      "0xca917e5bbbc18d5359674a32cef84c888a6855d48b99d9e65e1a688707dff5c7"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event",
    signature:
      "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "string"
      }
    ],
    name: "addCandidate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x462e91ec"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_voterID",
        type: "uint256"
      }
    ],
    name: "registerVoter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xa13f2f8d"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_approvedAddr",
        type: "address"
      }
    ],
    name: "approveVoter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x119d4ddb"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_candidateId",
        type: "uint8"
      }
    ],
    name: "vote",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xb3f98adc"
  }
];
