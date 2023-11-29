export default function hideRandomLetters(word) {
  if (typeof word !== "string") {
    throw new Error("Input should be a string.");
  }

  const length = word.length;

  if (length <= 1) {
    return word;
  }

  let indices = Array.from({ length: 2 }, () =>
    Math.floor(Math.random() * length)
  );

  while (indices[0] === indices[1]) {
    indices[1] = Math.floor(Math.random() * length);
  }

  return Array.from({ length }, (_, i) =>
    indices.includes(i) ? word[i] : "-"
  ).join("");
}
