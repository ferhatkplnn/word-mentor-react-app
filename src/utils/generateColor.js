export default function generateColor(number, min) {
  const adjustedMin = Math.max(min, 0);
  const maxAllowed = adjustedMin + 20;
  const range = 20;

  number = Math.min(number, maxAllowed);

  const green =
    number >= adjustedMin
      ? Math.floor(((number - adjustedMin) / range) * 255)
      : 0;
  const red =
    number <= adjustedMin
      ? Math.floor(((adjustedMin - number) / range) * 255)
      : 0;
  const blue = 0;

  return `rgb(${red},${green},${blue})`;
}
