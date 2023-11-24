import React, { useState } from "react";
import {
  Card,
  Heading,
  Flex,
  FormControl,
  Input,
  FormHelperText,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, EditIcon, DeleteIcon, StarIcon } from "@chakra-ui/icons";
import { useWords } from "../../context/WordsContext";
import SentenceAddInputModel from "./SentenceAddInputModel";

function WordCardInput({
  header = "",
  wordText = "Word",
  meaningText = "Meaning",
  type = "add",
  item,
}) {
  const [inputs, setInputs] = useState({
    word: item?.word || "",
    meaning: item?.meaning || "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addWord, updateWord, removeWord } = useWords();

  const handleInputChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "add") {
      setInputs({ word: "", meaning: "" });
      addWord(inputs);
    } else {
      updateWord(inputs, item._id);
    }
  };

  return (
    <Card mx="auto" maxW="90%" p="5" mt="4">
      <Heading textAlign="center" fontSize="xl" mb="2">
        {header}
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex>
          <FormControl mb="2">
            <Input
              type="text"
              name="word"
              required
              value={inputs?.word}
              onChange={handleInputChange}
            />
            <FormHelperText>{wordText}</FormHelperText>
          </FormControl>
          <FormControl>
            <Input
              type="text"
              name="meaning"
              required
              value={inputs?.meaning}
              onChange={handleInputChange}
            />
            <FormHelperText>{meaningText}</FormHelperText>
          </FormControl>

          <Button type="submit">
            {type === "add" ? (
              <AddIcon boxSize="5" />
            ) : (
              <EditIcon boxSize="5" />
            )}
          </Button>

          {type !== "add" && (
            <>
              <Button onClick={() => removeWord(item._id)}>
                <DeleteIcon boxShadow="5" />
              </Button>
              <Button onClick={onOpen}>
                <StarIcon boxShadow="5" />
              </Button>
              <SentenceAddInputModel
                isOpen={isOpen}
                onClose={onClose}
                wordId={item._id}
              />
            </>
          )}
        </Flex>
      </form>
    </Card>
  );
}

export default WordCardInput;
