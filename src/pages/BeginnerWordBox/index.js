import WordBoxCard from "../../components/WordBoxCard/WordBoxCard.js";

function BeginnerWordBox() {
  return (
    <WordBoxCard
      title={"Beginner Word Box"}
      limit={{ minLimit: -40, maxLimit: 20 }}
    />
  );
}

export default BeginnerWordBox;
