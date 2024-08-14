export const API_Key = "0e14886652b20377fd07";
export const API_Secret =
  "02db04597ca73c59e43da9c345976a2e3f2254431b50668602d43c05a4f50cb2";
export const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI1ZGE0ODQxZi0yZDRhLTQ3YjktOTk3NC0xYTlmMmY2Mjg4YTAiLCJlbWFpbCI6InNob2JoaXRzaW5naDI1MDMyMDAzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIwZTE0ODg2NjUyYjIwMzc3ZmQwNyIsInNjb3BlZEtleVNlY3JldCI6IjAyZGIwNDU5N2NhNzNjNTllNDNkYTljMzQ1OTc2YTJlM2YyMjU0NDMxYjUwNjY4NjAyZDQzYzA1YTRmNTBjYjIiLCJleHAiOjE3NTQyMDU1NDJ9.Pd9cAUuM9aavGvHy7PIOERbf9j0j7J5IGVG06U6apkY";
export const contractAddress = "0xC71b49Ca9F6e12B643e21C602A29FbFE0769c25d";
export const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_cid",
        type: "string",
      },
    ],
    name: "addDoc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "delDoc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "adrs",
        type: "address",
      },
    ],
    name: "getMyDocs",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "cid",
            type: "string",
          },
        ],
        internalType: "struct DecentraDocs.Doc[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
