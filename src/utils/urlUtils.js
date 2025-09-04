export const generateShortCode = () => {
  return Math.random().toString(36).substring(2, 8);
};

export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};