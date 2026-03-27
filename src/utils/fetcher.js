export async function load() {
  const files = [
    "../data/htmlStructures/snippet00000001.json",
    "../data/cssColors/snippet00000002.json"
  ];

  const data = [];

  for (const file of files) {
    try {
      const res = await fetch(file);
      if (res.ok) {
        const json = await res.json();
        data.push(json);
      }
    } catch {}
  }

  return data;
}
