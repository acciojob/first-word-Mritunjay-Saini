function firstWord(str) {
  // Trim leading whitespace and split by space
  const trimmed = str.trim();
  const index = trimmed.indexOf(' ');

  if (index === -1) {
    return trimmed; // No space found
  } else {
    return trimmed.slice(0, index); // Return substring up to first space
  }
}
