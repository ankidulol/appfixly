const scrollToBottom = () => {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0,
    behavior: 'smooth'
  });
};

const scrollToMiddle = () => {
  window.scroll({
    top: document.body.offsetHeight / 3,
    left: 0,
    behavior: 'smooth'
  });
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export { scrollToBottom, scrollToMiddle, sleep };
