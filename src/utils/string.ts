export const slugify = (string: string) => {
  return string.toLowerCase().split(' ').join('-');
};
