const toCamelCase = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());

const firstCharToUpperCase = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export { toCamelCase, firstCharToUpperCase };
