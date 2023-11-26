import { CardHeader, Heading } from "@chakra-ui/react";
import Speech from "react-text-to-speech";

const WordCardHeader = ({ wordId, meaning, wordColor }) => (
  <CardHeader>
    <Speech text={wordId} stopBtn={false} rate={0.8} volume={1} />
    <Heading size="lg" style={{ color: wordColor }}>
      {wordId ? meaning : "No more word"}
    </Heading>
  </CardHeader>
);

export default WordCardHeader;
