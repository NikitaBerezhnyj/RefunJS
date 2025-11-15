export function isPascalCase(str) {
  return /^[A-Z][A-Za-z0-9]+$/.test(str);
}

export function toPascalCase(str) {
  return str
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

export function isKebabCase(str) {
  return /^[a-z][a-z0-9\-]*$/.test(str);
}

export function toKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
