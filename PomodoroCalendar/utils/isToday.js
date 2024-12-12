function isToday(item) {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const tomorrowStart = new Date(todayStart);
  tomorrowStart.setDate(todayStart.getDate() + 1);

  const startDateTime = new Date(item.start.dateTime);

  return startDateTime >= todayStart && startDateTime < tomorrowStart;
}

export default isToday;
