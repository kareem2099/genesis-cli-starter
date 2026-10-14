export default function run(input) {
  const text = input.text || "";
  return { characters: Array.from(text).length, words: text.trim() ? text.trim().split(/\s+/u).length : 0 };
}
