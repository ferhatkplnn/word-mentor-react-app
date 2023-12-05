import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useSentence } from "../../context/SentenceContext";

export default function SentenceAddInputModel({ isOpen, onClose, wordId }) {
  const initialRef = useRef(null);
  const { addSentence } = useSentence();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSentence(text, wordId);
    setText("");
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add sentence</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl>
                <Input
                  onChange={handleChange}
                  value={text}
                  ref={initialRef}
                  placeholder="Add sentence"
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
