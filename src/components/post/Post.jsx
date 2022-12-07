import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Center,
  Text,
  HStack,
  Input,
  Image,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaExchangeAlt } from "react-icons/fa";
import ChainGenarateModal from "./modal/ChainGenarateModal";
import LoadingModal from "./modal/LoadingModal";
import { NftBanner } from "../../static";
import ChainGenarateOptions from "../../lib/const_file/ChainGenaratorOptions";
import { inputFieldRegex } from "../../lib/const_file/Regex";

export default function Post() {
  const [receiver_wallet_address, setReceiver_Wallet_Address] = useState("");
  const [blockchain, setBlockchain] = useState("");
  const [contract_address, setContract_Address] = useState("");
  const [currentChain, setCurrentChain] = useState(0);
  const [validateInput, setValidateInput] = useState(false);

  // Modal state
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: loadingStart,
    onOpen: onLoaingStart,
    onClose: onCloseLoading,
  } = useDisclosure();

  // debug
  console.log(receiver_wallet_address);
  console.log(contract_address);

  // --------------------------------------------------------------------------------
  // Request headers (API-KEY-ID)
  //  
  // Enter the API key obtained from NFT Garden in the parameter part of X-API-KEY
  // 
  const headers = {
    "Content-Type": "application/json",
    "X-API-KEY":
      "GARDENZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
  };
  // --------------------------------------------------------------------------------

  const history = useHistory();
  const onClickComplete = () =>
    history.push("/complete", { receiver_wallet_address });

  const sendDataToAPI = () => {
    // mock API for debug
    // axios.post("https://6325c56570c3fa390f8e5d2f.mockapi.io/Curd", {

    // --------------------------------------------------------------------------------
    // Change the setting of `src/components/post/Post.jsx` for customize NFT information.
    //
    // `sender_wallet_address` is FROM address to send NFTs.
    // `title` and `description` are for NFT name.
    // `key` and `url` are property for NFTs.
    //
    axios
      .post(
        `https://api.nftgarden.app/api/v1/createnfttrans`,
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
                  url: "https://xxx.xxxxx.xxx/nft-image.png", // customize property for NFT
                },
              ],
            },
          ],
        },
        { headers: headers }
      )
    // --------------------------------------------------------------------------------
      .then((data) => {
        // TODO: Comment out after final emplement
        // onCloseLoading();
        // onClickComplete();
      })
      .catch((error) => {
        console.log(error);
        // TODO: Comment out after final emplement
        // onCloseLoading();
      });
  };

  const showChainMemo = useMemo(() => {
    const selectedChain = ChainGenarateOptions[currentChain];

    setBlockchain(selectedChain.value);
    setContract_Address(selectedChain.contract_address);

    return (
      <HStack spacing="4px">
        <div>{selectedChain.image}</div>
        <div style={{ color: "white", fontSize: "20px" }}>
          {selectedChain.name}
        </div>
      </HStack>
    );
  }, [currentChain]);

  const handleClick = (event) => {
    console.log(event.target);
    onLoaingStart();

    sendDataToAPI();
    // Set time to go next page
    setTimeout(() => {
      onCloseLoading();
      onClickComplete();
    }, "30000");
  };

  return (
    <>
      <div className="input-area">
        {/* Title component start */}
        <div style={{ paddingTop: "5px", paddingBottom: "15px" }}>
          <Text color="white" style={{ fontSize: "22px", fontWeight: "bold" }}>
            NFT AirDrop for event participants
          </Text>
        </div>
        {/* Title component end */}

        {/* Image component start */}
        <Image src={ NftBanner } alt="demo_image" />
        {/* Image component end */}

        {/* Step 1 components */}
        <div>
          <div style={{ paddingBottom: "5px", paddingTop: "10px" }}>
            <Text fontSize="md" color="#999999">
              Step1: Choose a Blockchain
            </Text>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{showChainMemo}</div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                h="32px"
                w="32px"
                colorScheme="blue"
                icon={<FaExchangeAlt />}
                onClick={onOpen}
              />
            </div>
          </div>
        </div>

        {/* Setp 2 start */}
        <div>
          <div style={{ paddingBottom: "10px", paddingTop: "10px" }}>
            <Text fontSize="md" color="#999999">
              Step2: Enter your wallet address
            </Text>
          </div>
          <div>
            <Input
              isInvalid={validateInput}
              placeholder="0x000…"
              size="md"
              variant="filled"
              _focus={{
                color: "black !important",
              }}
              errorBorderColor="red.300"
              onChange={(e) => {
                if (e.target.value.length === 0) {
                  setValidateInput(false);
                  setReceiver_Wallet_Address(null);
                } else if (
                  inputFieldRegex.test(e.target.value) &&
                  e.target.value?.length === 42
                ) {
                  setValidateInput(false);
                  setReceiver_Wallet_Address(e.target.value);
                } else {
                  setValidateInput(true);
                  setReceiver_Wallet_Address(null);
                }
              }}
            />
          </div>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <Button
              colorScheme="blue"
              w="100%"
              disabled={
                receiver_wallet_address === "" ||
                receiver_wallet_address === null
              }
              onClick={handleClick}
            >
              Generate！
            </Button>
          </div>
        </div>
        {/* Setp 2 end */}

        <div className="aaa">
          <a
            href="https://nftgarden.app/docs/register-wallet/"
            alt="no_wallet"
            target="_blank"
            rel="noopener"
            style={{ textDecoration: "underline" }}
          >
            Don't have wallet address ?
          </a>
        </div>

        {/* Description component start */}
        <div style={{ paddingTop: "10px" }}>
          <Text color="#999999">Description</Text>
        </div>
        <div style={{ paddingTop: "5px", paddingBottom: "10px" }}>
          <Text color="white">
            Sample Description
          </Text>
        </div>
        {/* Description component end */}

        <HStack spacing="4px">
          <Text color="#999999">Link:</Text>
          <a
            href="https://nftgarden.app"
            alt="pishow"
            rel="noopener"
            target="_blank"
          >
            <p style={{ color: "#4153FF" }}>https://nftgarden.app</p>
          </a>
        </HStack>

        {/* Footer start */}
        <div style={{ paddingTop: "40px" }}>
          <Center color="white">©︎2022 Connectiv</Center>
        </div>
        {/* Footer end */}
      </div>

      <ChainGenarateModal
        isOpen={isOpen}
        onClose={onClose}
        onClickSelectChain={setCurrentChain}
      />
      <LoadingModal isOpen={loadingStart} onClose={onCloseLoading} />
    </>
  );
}
