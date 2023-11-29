import { CardHeader, Heading } from "@chakra-ui/react";
import Speech from "react-text-to-speech";

const WordCardHeader = ({ word, wordId, meaning, wordColor }) => (
  <CardHeader>
    <Speech text={word} stopBtn={false} rate={0.8} volume={1} />
    <Heading size="lg" style={{ color: wordColor }}>
      {wordId ? meaning : "No more word"}
    </Heading>
  </CardHeader>
);

export default WordCardHeader;
