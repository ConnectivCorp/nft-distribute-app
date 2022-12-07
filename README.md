# Welcome to NFT distribute webapp :zap:

Welcome to the world of NFT!

This NFT distribution webapp is compatible with the API function of "[NFT Garden](https://nftgarden.app)", a multi-chain minting platform. For more information, please check the Docs and website.

:link: [API Docs](https://devdocs.nftgarden.app/api/v1.1)

:link: [NFT Garden | Multi-chain minting platform](https://nftgarden.app)

## NFT distribute webapp

Distribute app by using the [NFT Garden](https://nftgarden.app) API(v1.1) and node.js. Before you start to building, make sure you have node.js(vXX.XX.X) installed.

## Build steps

Start node.js

```
node -v
```

If you are cloning the project then run this first, otherwise you can download the source code on the release page and skip this step.

```
git clone https://github.com/ConnectivCorp/distributeapp.git
```

### Set API-KEY
---
Change the setting of `src/components/post/Post.jsx` according to your environment.

Enter the API key obtained from NFT Garden in the parameter part of `X-API-KEY` .

WARNING: Please be careful not to disclose the API key to the public.

```node
const headers = {
  "Content-Type": "application/json",
  "X-API-KEY":
    "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
};
```

### Set NFT information
---
Change the setting of `src/components/post/Post.jsx` for customize NFT information.

`sender_wallet_address` is FROM address to send NFTs.

`title` and `description` are for NFT name.

`key` and `url` are property for NFTs.

```node
axios
  .post(
    `https://nftgarden.app/api/v1/createnfttrans`,
    {
      contract_address: contract_address,
      blockchain: blockchain,
      sender_wallet_address: "0x9999999999999999999999999999999999999999", // change to distributer's wallet address
      receiver_wallet_address: receiver_wallet_address,
      metadata: [
        {
          title:
            "Please input a title here", // customize NFT title
          description:
            "Please input a description here", // customize NFT description
          file_fields: [
            {
              key: "image", // customize property for NFT
              url: "Please input a image url here", // customize property for NFT
            },
          ],
        },
      ],
    },
    { headers: headers }
  )
```

### Set Contract address
---
Change the setting of `src/lib/const_file/ChainGenaratorOptions.js` . You only need to enter values for the chains you want to activate. `blockchain` for chain.

| Chain/Network | value for blockchain |
----|---- 
| Polygon | polygon |
| Polygon mumbai | polygon-mumbai |
| Avalanche | avalanche |
| Avalanche Fuji | avalanche-fuji |
| Optimism | optimism |
| Optimism Goreli | optimism-goerli |
| Astar Network| astar |
| Shiden Network | astar-shiden |
| Shibuya Network | astar-shibuya |
| Fantom | fantom |
| Fantom testnet | fantom-testnet |

```node

const defaultChainGenarateOptions = [
  {
    id: 1,
    image: <Image w="20px" h="20px" src={Polygon} alt="Polygon_logo" />,
    name: "Polygon",
    value: "polygon",
    contract_address: "Please input a contract address",
  },
  {
    id: 2,
    image: <Image w="20px" h="20px" src={Avalanche} alt="Avalanche_logo" />,
    name: "Avalanche",
    value: "avalanche",
    contract_address: "Please input a contract address",
  },
  {
    id: 3,
    image: <Image w="20px" h="20px" src={Optimism} alt="Optimism_logo" />,
    name: "Optimism",
    value: "optimism",
    contract_address: "Please input a contract address",
  },
  {
    id: 4,
    image: <Image w="20px" h="20px" src={Astar} alt="Astar_logo" />,
    name: "Astar",
    value: "astar",
    contract_address: "Please input a contract address",
  },
  {
    id: 5,
    image: <Image w="20px" h="20px" src={Shiden} alt="Shiden_logo" />,
    name: "Shiden",
    value: "shiden",
    contract_address: "Please input a contract address",
  },
  {
    id: 6,
    image: <Image w="20px" h="20px" src={Fantom} alt="Fantom_logo" />,
    name: "Fantom",
    value: "fantom",
    contract_address: "Please input a contract address",
  },
];

export default defaultChainGenarateOptions;
```

### Start scripts

```
npm install
npm start
```

### Access to your local page.

```
http://localhost:3000
```
