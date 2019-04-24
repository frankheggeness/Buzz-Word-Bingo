(function banana() {
  let buzzwordArray = [
    {
      test: '1',
    },
  ];

  let totalScore = 0;

  let getBuzzwordArray = () => {
    return buzzwordArray;
  };

  let getTotalScore = () => {
    return totalScore;
  };

  let resetTotalScore = () => {
    totalScore = 0;
  };

  let resetBuzzword = () => {
    buzzwordArray = [];
  };

  module.exports = {
    getBuzzwordArray,
    resetBuzzword,
    getTotalScore,
    resetTotalScore,
  };
})();
