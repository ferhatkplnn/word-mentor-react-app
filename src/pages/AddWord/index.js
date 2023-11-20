import { useWords } from "../../context/WordsContext";
import WordCardInput from "../../components/WordCardInput/WordCardInput";

function AddWord() {
  const { words, addWord } = useWords();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    addWord(formDataObject);
    e.target.reset();
  };
  console.log(words);

  return (
    <WordCardInput
      handleSubmit={handleSubmit}
      header="Add a new wrod"
      meaningText="Meaning"
      wordText="Word"
    />
  );
}

export default AddWord;
