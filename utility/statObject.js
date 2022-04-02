export default StatsObject = (statsData) => {
  const keys = Object.keys(statsData);
  let objectss = {};
  keys.forEach((key) => {
    // if (statsData[key] == 0) {
    //   console.log(statsData[key]);
    // } else
    objectss[key] = statsData[key];
  });
  return objectss;
};
