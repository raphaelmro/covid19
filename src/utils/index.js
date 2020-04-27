export default function toCapitalizedWords(name) {
  const words = name.match(/[A-Za-z][a-z]*/g) || []
  return words.map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
}
