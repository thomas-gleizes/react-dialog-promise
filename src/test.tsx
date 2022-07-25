export default function() {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => close(false)}
      motionPreset="slideInBottom"
      isCentered
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button onClick={() => close(true)}>Cancel</Button>
          <Button onClick={() => close(false)}>Valid</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
