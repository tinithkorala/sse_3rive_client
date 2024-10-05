export const truncateString = (string, maxLength = 85) => {
  return string.length > maxLength ? string.slice(0, maxLength - 3) + "..." : string;
};
