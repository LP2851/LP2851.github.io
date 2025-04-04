export const shortDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};

export const formattedDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const day = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Add ordinal suffix to the day
  let dayWithSuffix;
  switch (day % 10) {
    case 1:
      dayWithSuffix = day + "st";
      break;
    case 2:
      dayWithSuffix = day + "nd";
      break;
    case 3:
      dayWithSuffix = day + "rd";
      break;
    default:
      dayWithSuffix = day + "th";
  }

  return `${dayWithSuffix} ${month} ${year}`;
};
