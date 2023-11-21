import WordBoxCard from "../../components/WordBoxCard/WordBoxCard.js";

function BeginnerWordBox() {
  return (
    <WordBoxCard
      title={"Beginner Word Box"}
      limit={{ minLimit: -1000, maxLimit: 20 }}
    />
  );
}

export default BeginnerWordBox;
