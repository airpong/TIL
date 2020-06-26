export const trimText = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;
export const dateLocal = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("ko", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
