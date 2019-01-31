const getNumber = (str) => {
  try {
    const result = parseInt(str, 10);

    if (Number.isNaN(result)) {
      throw new Error('Ввод не является числом');
    } else {
      return result;
    }
  } catch (e) {
    console.error(e);
    return 0;
  }
};

export default getNumber;
