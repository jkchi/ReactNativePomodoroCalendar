export default IsoToEng = (isoString) => {
  const year = isoString.substring(0, 4); 
  const month = isoString.substring(5, 7); 

  // Convert the month number to month name
  const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];
  const monthName = monthNames[parseInt(month, 10) - 1];

  // Combine year and month name into a readable string
  return `${monthName}    ${year}`;
}