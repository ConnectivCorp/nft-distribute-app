import {
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  Spinner,
} from "@chakra-ui/react";

export default function LoadingModal({ isOpen, onClose }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent background w="210px" minW="100px">
          <Center style={{ color: "white", paddingBottom: "15px" }}>
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              Generating…
            </div>
          </Center>
          <Center>
            <Spinner
              thickness="8px"
              speed="0.65s"
              emptyColor="gray.200"
              color="dark.500"
              opacity={1}
              size="xl"
              w="100px"
              h="100px"
            />
          </Center>
        </ModalContent>
      </Modal>
      ;
    </>
  );
}
