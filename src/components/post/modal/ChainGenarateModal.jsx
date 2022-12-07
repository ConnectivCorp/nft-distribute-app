import {
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import ChainGenarateOptions from "../../../lib/const_file/ChainGenaratorOptions";

export default function ChainGenarateModal({
  isOpen,
  onClose,
  onClickSelectChain,
}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent bgColor="#23262F" w="344px" minW="210px">
          <div
            style={{
              padding: "20px",
            }}
          >
            {ChainGenarateOptions.map((item, index) => (
              <div
                key={item.name + index}
                style={{ width: "100%", color: "#23262F", paddingLeft: "20px" }}
              >
                <Button
                  key={item.name + index}
                  margin="10px"
                  bgColor="#23262F"
                  h="20px"
                  padding="0px"
                  _focus={{
                    boxShadow: "0 0 0 0 !important",
                  }}
                  onClick={() => {
                    onClickSelectChain(index);
                    onClose();
                  }}
                >
                  <HStack spacing="4px" bgColor="#23262F">
                    <div>{item.image}</div>
                    <div style={{ color: "white", fontSize: "20px" }}>
                      {item.name}
                    </div>
                  </HStack>
                </Button>
              </div>
            ))}
          </div>
        </ModalContent>
      </Modal>
      ;
    </>
  );
}
