import { FormControl, FormHelperText, Input, Button } from "@chakra-ui/react";
import Speech from "react-text-to-speech";

const WordForm = ({
  isShowSentence,
  sentenceText,
  handleInputChange,
  handleSubmit,
  input,
  isDisabled,
  inputRef,
}) => (
  <form onSubmit={handleSubmit}>
    <FormControl mb="2">
      <FormHelperText
        pb="2"
        style={{ visibility: isShowSentence ? "" : "hidden" }}
      >
        <Speech text={sentenceText} stopBtn={false} rate={0.8} volume={1} />
        {sentenceText ? sentenceText : "-"}
      </FormHelperText>
      <Input
        type="text"
        name="word"
        placeholder="Meaning"
        required
        onChange={handleInputChange}
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
);

export default WordForm;
