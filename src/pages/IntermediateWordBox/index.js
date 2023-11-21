import WordBoxCard from "../../components/WordBoxCard/WordBoxCard.js";

function IntermediateWordBox() {
  return (
    <WordBoxCard
      title={"Intermediate Word Box"}
      limit={{ minLimit: 20, maxLimit: 40 }}
    />
  );
}

export default IntermediateWordBox;
