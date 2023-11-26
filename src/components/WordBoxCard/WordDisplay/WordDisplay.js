import { Heading, ScaleFade } from "@chakra-ui/react";

const WordDisplay = ({ isOpen, wordId, word }) => (
  <ScaleFade in={isOpen}>
    <Heading textAlign="center" p="30px" fontSize="52px" mt="4" rounded="md">
      {wordId ? word : ""}
    </Heading>
  </ScaleFade>
);

export default WordDisplay;
