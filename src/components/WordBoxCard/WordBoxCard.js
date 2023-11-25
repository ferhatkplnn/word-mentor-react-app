import React, { useRef, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  FormControl,
  Input,
  Button,
  ScaleFade,
  FormHelperText,
} from "@chakra-ui/react";
import { useWords } from "../../context/WordsContext";
import { useSentence } from "../../context/SentenceContext";

function WordBoxCard({ title, limit }) {
  const { getRandomSentence } = useSentence();
  const { getRandomWordId, getWord, increaseScore, decreaseScore } = useWords();

  const [input, setInput] = useState("");
  const [wordId, setWordId] = useState(
    getRandomWordId(limit.minLimit, limit.maxLimit)
  );
  const [isDisabled, setIsDisabled] = useState(Boolean(!wordId));
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const [isShowSentence, setIsShowSentence] = useState(false);
  const [sentenceText, setSentenceText] = useState("");

  const currentWord = getWord(wordId);

  const nextWord = () => {
    setIsDisabled(false);
    setIsOpen(false);
    setIsShowSentence(false);

    setTimeout(() => {
      setWordId(getRandomWordId(limit.minLimit, limit.maxLimit));
      inputRef.current.focus();
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentWord) {
      console.error("Word is not found!");
      return;
    }

    if (input === currentWord.meaning) {
      setIsOpen(true);
      increaseScore(wordId);
      setInput("");
      setIsDisabled(true);

      setTimeout(nextWord, 1000);
    } else {
      decreaseScore(wordId);
      setIsOpen(true);
      setIsShowSentence(true);
      setSentenceText(getRandomSentence(wordId).sentence);
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <Heading textAlign="center" p="10" size="md">
        {title}
      </Heading>

      <Card textAlign="center" maxW="40%" mx="auto">
        <CardHeader>
          <Heading size="lg">
            {wordId ? currentWord.word : "No more word"}
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack spacing="6">
            <ScaleFade in={isOpen}>
              <Heading
                textAlign="center"
                p="30px"
                fontSize="52px"
                mt="4"
                rounded="md"
              >
                {wordId ? currentWord.meaning : ""}
              </Heading>
            </ScaleFade>

            <form onSubmit={handleSubmit}>
              <FormControl mb="2">
                <FormHelperText
                  pb="2"
                  style={{ visibility: isShowSentence ? "" : "hidden" }}
                >
                  {sentenceText}
                </FormHelperText>

                <Input
                  type="text"
                  name="word"
                  placeholder="Meaning"
                  required
                  onChange={handleChange}
                  value={input}
                  disabled={isDisabled}
                  ref={inputRef}
                />
              </FormControl>
              <Button
                width="full"
                colorScheme="linkedin"
                type="submit"
                isDisabled={isDisabled}
              >
                Send
              </Button>
            </form>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default WordBoxCard;
