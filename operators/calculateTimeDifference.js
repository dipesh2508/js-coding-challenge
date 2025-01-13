function calculateTimeDifference(time1, time2) {
  //Your code here
  const hour1 = parseInt(time1.split(":")[0]);
  const minute1 = parseInt(time1.split(":")[1]);
  const hour2 = parseInt(time2.split(":")[0]);
  const minute2 = parseInt(time2.split(":")[1]);

  const totalMinutes1 = hour1 * 60 + minute1;
  const totalMinutes2 = hour2 * 60 + minute2;

  const differenceInMinutes = totalMinutes2 - totalMinutes1;
  const hours = Math.floor(differenceInMinutes / 60);

  return hours + (differenceInMinutes % 60) / 60;
}

// Example usage:
console.log(calculateTimeDifference("08:30", "17:45")); // Output: 9.25
console.log(calculateTimeDifference("09:00", "14:30")); // Output: 5.50
