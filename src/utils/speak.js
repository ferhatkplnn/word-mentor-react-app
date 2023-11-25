export const speak = (text, rate = 0.8) => {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.rate = rate;
  window.speechSynthesis.speak(msg);
};
