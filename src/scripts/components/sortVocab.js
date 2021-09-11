const newVocab = (array) => {
  array.sort((a, b) => {
    const itemOne = new Date(a.timeEntered);
    const itemTwo = new Date(b.timeEntered);
    return itemTwo - itemOne;
  });
};

const oldVocab = (array) => {
  array.sort((a, b) => {
    const itemOne = new Date(a.timeEntered);
    const itemTwo = new Date(b.timeEntered);
    console.warn(itemOne);
    console.warn(itemTwo);
    return itemOne - itemTwo;
  });
};

export { newVocab, oldVocab };
