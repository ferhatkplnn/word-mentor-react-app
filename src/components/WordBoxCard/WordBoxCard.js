import React, { useRef, useState } from "react";
import { Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import { useWords } from "../../context/WordsContext";
import { useSentence } from "../../context/SentenceContext";
import { speak } from "../../utils/speak";
import generateColor from "../../utils/generateColor";
import WordCardHeader from "./WordCardHeader/WordCardHeader";
import WordDisplay from "./WordDisplay/WordDisplay";
import WordForm from "./WordForm/WordForm";

function WordBoxCard({ title, limit }) {
  const { getRandomSentence } = useSentence();
  const { getRandomWordId, getWord, increaseScore, decreaseScore } = useWords();

  const [input, setInput] = useState("");
  const [wordId, setWordId] = useState(() =>
    getRandomWordId(limit.minLimit, limit.maxLimit)
  );
  const [isDisabled, setIsDisabled] = useState(!wordId);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const [isShowSentence, setIsShowSentence] = useState(false);
  const [sentenceText, setSentenceText] = useState("");

  const { word, meaning, score } = getWord(wordId);
  const wordColor = generateColor(score, limit.minLimit);

  const resetWord = () => {
    setIsDisabled(false);
    setIsOpen(false);
    setIsShowSentence(false);

    setTimeout(() => {
      setWordId(getRandomWordId(limit.minLimit, limit.maxLimit));
      inputRef.current.focus();
    }, 300);
  };

  const handleCorrectAnswer = () => {
    setIsOpen(true);
    increaseScore(wordId);
    setInput("");
    setIsDisabled(true);

    setTimeout(resetWord, 1000);
  };

  const handleIncorrectAnswer = () => {
    decreaseScore(wordId);
    setIsOpen(true);
    setIsShowSentence(true);
    setSentenceText(getRandomSentence(wordId)?.sentence);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!word) {
      console.error("Word is not found!");
      return;
    }

    input === word ? handleCorrectAnswer() : handleIncorrectAnswer();
    speak(word);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <Heading textAlign="center" p="10" size="md">
        {title}
      </Heading>

      <Card textAlign="center" maxW="40%" mx="auto">
        <WordCardHeader
          wordId={wordId}
          meaning={meaning}
          wordColor={wordColor}
        />

        <CardBody>
          <Stack spacing="6">
            <WordDisplay isOpen={isOpen} wordId={wordId} word={word} />

            <WordForm
              isShowSentence={isShowSentence}
              sentenceText={sentenceText}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              input={input}
              isDisabled={isDisabled}
              inputRef={inputRef}
            />
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default WordBoxCard;
