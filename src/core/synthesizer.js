export function synthesize(results) {
  let html = "<!DOCTYPE html><html><head><style>";
  let css = "";
  let body = "</style></head><body>";

  for (const item of results) {
    if (item.type === "css") css += item.content;
    if (item.type === "html") body += item.content;
  }

  body += "</body></html>";

  return html + css + body;
}
