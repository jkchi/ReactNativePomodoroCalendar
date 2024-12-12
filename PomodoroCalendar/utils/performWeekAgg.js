function performWeekAgg(data, field) {
  const result = [];
  const today = new Date();
  const dayMap = {};

  data.forEach((item) => {
    const date = new Date(item.end.dateTime || item.start.dateTime);
    const dayKey = date.toISOString().split('T')[0];
    if (!dayMap[dayKey]) {
      dayMap[dayKey] = 0;
    }
    dayMap[dayKey] += item[field] || 0; 
  });

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() - i); 
    const dayKey = currentDate.toISOString().split('T')[0];
    result.unshift({ timestamp: dayKey, value: dayMap[dayKey] || 0 }); 
  }

  return result;
}

export default performWeekAgg


