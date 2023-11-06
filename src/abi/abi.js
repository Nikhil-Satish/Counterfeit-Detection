export const DetectFake = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "map",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "sum",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "num1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "num2",
        "type": "uint256"
      }
    ],
    "name": "getResult",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "modString",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "giveString",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "dummy1",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "dummy2",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  }
]

// export const DetectFake = [
//   {
//     "inputs": [],
//     "name": "getResult",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   }
// ]

// export const DetectFake = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_code",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_hashedEmailRetailer",
// 				"type": "string"
// 			}
// 		],
// 		"name": "addRetailerToCode",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_hashedEmail",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_phone",
// 				"type": "string"
// 			}
// 		],
// 		"name": "createCustomer",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_hashedEmail",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_retailerName",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_retailerLocation",
// 				"type": "string"
// 			}
// 		],
// 		"name": "createRetailer",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_code",
// 				"type": "string"
// 			}
// 		],
// 		"name": "getCustomerDetails",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_code",
// 				"type": "string"
// 			}
// 		],
// 		"name": "getNotOwnedCodeDetails",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_code",
// 				"type": "string"
// 			}
// 		],
// 		"name": "getOwnedCodeDetails",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_code",
// 				"type": "string"
// 			}
// 		],
// 		"name": "getRetailerDetails",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_code",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_brand",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_model",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_status",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_description",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_manufacturerName",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_manufacturerLocation",
// 				"type": "string"
// 			}
// 		],
// 		"name": "makeProduct",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	}
// ]