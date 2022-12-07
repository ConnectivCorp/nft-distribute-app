import { Image } from "@chakra-ui/react";
import {
  Astar,
  Avalanche,
  Fantom,
  Polygon,
  Optimism,
  Shiden,
} from "../../static";

// --------------------------------------------------------------------------------
// Setting for Contract_address list of distributer
//
// You only need to enter values for the chains you want to activate. `blockchain` for chain.
//

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
    value: "astar-shiden",
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
// --------------------------------------------------------------------------------

export default defaultChainGenarateOptions;
