import { useWords } from "../../context/WordsContext";
import WordCardInput from "../../components/WordCardInput/WordCardInput";

function AddWord() {
  const { state } = useWords();

  return (
    <>
      <WordCardInput
        header="Add a new word"
        meaningText="Meaning"
        wordText="Word"
      />
      {state.words.map((item) => (
        <WordCardInput item={item} key={item._id} type="edit" />
      ))}
    </>
  );
}

export default AddWord;
