const getRandomNumber = async (req, res, next) => {
  const { max, min } = req.query;

  if (!max || !min) {
    return res.json({
      status: "Error",
      message: "We need max and min number",
    });
  }
  const randomNumber = await Math.floor(
    Math.random() * (Number(max) - Number(min)) + Number(min)
  );
  res.json({
    status: 200,
    message: "Ranbdom Number Generatation Successfull",
    result: {
      start: min,
      end: max,
      randomNumber: randomNumber,
    },
  });
};

module.exports = { getRandomNumber };
