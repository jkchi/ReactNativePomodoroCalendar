const isoToMonthYear = (isoString) => {
  const year = isoString.substring(0, 4);
  const month = isoString.substring(5, 7);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = monthNames[parseInt(month, 10) - 1];

  return `${monthName}    ${year}`;
};

export default isoToMonthYear;
