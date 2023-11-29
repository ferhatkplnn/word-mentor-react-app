import React, { useMemo } from "react";
import { Box, Heading } from "@chakra-ui/react";
import hideRandomLetters from "../../../utils/hideRandomLetters";

const WordDisplay = ({ isOpen, wordId, word }) => {
  const displayWord = useMemo(
    () => (isOpen ? word : hideRandomLetters(word)),
    [isOpen, word]
  );

  return (
    <Box minH="30vh">
      {isOpen && (
        <Heading
          fontFamily="monospace"
          textAlign="center"
          p="30px"
          fontSize="52px"
          mt="4"
          rounded="md"
        >
          {wordId && displayWord}
        </Heading>
      )}
      {!isOpen && (
        <Heading
          fontFamily="monospace"
          textAlign="center"
          p="30px"
          fontSize="52px"
          mt="4"
          rounded="md"
        >
          {displayWord}
        </Heading>
      )}
    </Box>
  );
};

export default WordDisplay;
