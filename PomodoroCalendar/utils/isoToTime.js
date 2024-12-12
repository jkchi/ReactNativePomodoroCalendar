function isoToTime(isoString) {

  const date = new Date(isoString);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedTime = [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
  ].join(":");

  return formattedTime;
}

export default isoToTime;