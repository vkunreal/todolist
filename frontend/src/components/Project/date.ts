export const getDate = (last_update: number): string => {
  let result = "";

  const updatingDate = new Date(last_update);
  const date = new Date();

  const diff = date.getTime() - updatingDate.getTime();

  if (diff < 60000) {
    result = `${Math.round(diff / 1000)} second(s) ago`;
  } else if (diff < 3600000) {
    result = `${Math.round(diff / 60000)} minute(s) ago`;
  } else if (diff < 86400000) {
    result = `${Math.round(diff / 3600000)} hour(s) ago`;
  } else if (diff < 2592000000) {
    result = `${Math.round(diff / 86400000)} day(s) ago`;
  } else if (diff < 31536000000) {
    result = `${Math.round(diff / 2592000000)} mounth(s) ago`;
  } else {
    result = `${Math.round(diff / 31536000000)} year(s) ago`;
  }

  return result;
};
