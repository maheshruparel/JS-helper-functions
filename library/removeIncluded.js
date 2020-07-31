removeIncluded = async (mainArray, arrayToRemove) => {
  if (mainArray.length && arrayToRemove.length) {
    mainArray.forEach((element) => {
      if (arrayToRemove.includes(element)) {
        mainArray = mainArray.filter((res) => res != element);
      }
    });
  }
  return mainArray;
};
