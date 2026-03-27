export async function generate(input) {
  const words = input.toLowerCase().split(" ");
  const { navigate } = await import("./navigator.js");
  const results = await navigate(words);
  const { synthesize } = await import("./synthesizer.js");
  return synthesize(results);
}
