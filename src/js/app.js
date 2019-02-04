const getNumber = (str) => {
  try {
    const result = parseInt(str, 10);
    if (Number.isNaN(result) || result <= 0) {
      throw new Error('Ввод не является положительным десятичным числом');
    } else {
      return result;
    }
  } catch (e) {
    return e;
  }
};

export default getNumber;
