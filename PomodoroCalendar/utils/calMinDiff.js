export default calMinDiff = (start, end) => {

  const differenceInMilliseconds = end.getTime() - start.getTime();
  const differenceInMinutes = Math.ceil(differenceInMilliseconds / 60000); 
  return differenceInMinutes;

};