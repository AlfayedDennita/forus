function setDocumentTitle(title = '') {
  document.title = title.length > 0 ? `${title} | Forus` : 'Forus';
}

function toKebabCase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function truncateString(string, maxLength) {
  const ellipsis = '...';

  if (string.length > maxLength) {
    return string.substring(0, maxLength - ellipsis.length) + ellipsis;
  }

  return string;
}

export { setDocumentTitle, toKebabCase, capitalizeFirstLetter, truncateString };
