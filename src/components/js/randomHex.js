export default function getRandomHexColor() {
  let randomHex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  if (randomHex === '#ffffff') {
    randomHex = `#000faa`;
  }
  console.log(randomHex);
  return randomHex;
}
