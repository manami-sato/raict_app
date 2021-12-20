const height = window.innerHeight;
const footHeight = 0;

const mainHeight = () => {
  let headHeight = document.querySelector("header").offsetHeight;
  let navHeight = document.querySelector("nav").offsetHeight;
  let inner = height - headHeight - navHeight;
  document.querySelector("main").style.minHeight = inner + `px`;
};

export default {
  height,
  footHeight,
  mainHeight,
};
