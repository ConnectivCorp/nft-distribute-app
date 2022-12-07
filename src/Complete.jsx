import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Center, Image, Text } from "@chakra-ui/react";
import { NftBanner } from "./static";
import "./App.css";

export const Complete = () => {
  const { state } = useLocation();

  const history = useHistory();

  const onClickBack = () => history.goBack();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="input-area">
      {/* Title component start */}
      <div style={{ paddingTop: "5px", paddingBottom: "15px" }}>
        <Center>
          <Text fontSize="2xl" color="white" style={{ fontWeight: "bold" }}>
            Complete!
          </Text>
        </Center>
      </div>
      {/* Title component end */}

      {/* Image component start */}
      <Image src={NftBanner} alt="demo_image" />
      {/* Image component end */}

      {/*  OpenSea link Button */}
      <Button
        colorScheme="blue"
        w="100%"
        height="48px"
        borderRadius="25px"
        marginTop="15px "
        marginBottom="10px "
        onClick={() => window.open("https://opensea.io/ja/account?tab=private")}
      >
        See on OpenSea
      </Button>

      {/* tofuNFT link Button */}
      <Button
        colorScheme="blue"
        w="100%"
        height="48px"
        borderRadius="25px"
        marginBottom="5px "
        onClick={() =>
          window.open(
            `https://tofunft.com/user/${state.receiver_wallet_address}/items/in-wallet`
          )
        }
      >
        See on tofuNFT
      </Button>
      <div style={{ paddingTop: "80px" }}>
        <Center color="white">
          <a
            href="https://nftgarden.app/"
            alt="nft_garden"
            rel="noreferrer"
            target="_blank"
          >
            What's NFT garden?
          </a>
        </Center>
      </div>

      <div style={{ paddingTop: "80px" }}>
        <Center color="white">©︎2022 Connectiv</Center>
      </div>
    </div>
  );
};
