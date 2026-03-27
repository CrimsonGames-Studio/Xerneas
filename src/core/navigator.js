export async function navigate(words) {
  const { load } = await import("../utils/fetcher.js");
  const data = await load();

  const results = [];

  for (const item of data) {
    for (const tag of item.tags) {
      if (words.includes(tag.toLowerCase())) {
        results.push(item);
        break;
      }
    }
  }

  return results;
}
