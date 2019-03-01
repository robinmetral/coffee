const formatDate = timestamp => {
  const datetime = new Date(timestamp);
  const date = datetime.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const time = datetime.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "numeric"
  });
  return `${date} at ${time}`;
};
export default formatDate;
