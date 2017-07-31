export const elide = string => {
  return string ? `${string.substring(0, 140)}...` : '...';
};

export const toDate = string => {
  const date = new Date(string);
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
};

export const isEmpty = string => {
  return !string || string.length === 0;
};

export const pluralize = (text: string, count: number) => {
  return count > 1 || count === 0 ? `${text}s` : text;
};
