export const clsx = (string: any) => {
  // code replaces a consecutive set of whitespace characters by a single white space
  // removes all white-space characters at the beginning and end
  // the g at the end of the RegExp means: global, ie match and replace all occurences.
  return string.replace(/[\s\t]+/g, " ").trim();
};
