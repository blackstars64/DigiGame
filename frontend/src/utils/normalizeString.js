function normalizeString(str) {
  let normalizedStr = str.toLowerCase();

  normalizedStr = normalizedStr
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  normalizedStr = normalizedStr.replace(/\s/g, "");

  return normalizedStr;
}

export default normalizeString;
