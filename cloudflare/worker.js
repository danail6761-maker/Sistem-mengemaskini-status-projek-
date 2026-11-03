// Cloudflare Worker: menghidangkan sistem daripada repo GitHub awam (cawangan main).
// Setiap commit ke main akan kelihatan di laman Cloudflare dalam masa ~1 minit.
const REPO = "https://raw.githubusercontent.com/danail6761-maker/sistem-mengemaskini-status-projek-/main";
const TYPES = {
  html: "text/html; charset=utf-8",
  json: "application/json; charset=utf-8",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
};
const ALLOWED = /^\/(index\.html|data\/[\w.-]+\.json|img\/[\w.-]+\.(jpg|jpeg|png))$/;

export default {
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Kaedah tidak dibenarkan", { status: 405 });
    }
    const url = new URL(request.url);
    let path = url.pathname;
    if (path.endsWith("/")) path += "index.html";
    if (!ALLOWED.test(path)) return new Response("Tidak dijumpai", { status: 404 });

    const upstream = await fetch(REPO + path, { cf: { cacheTtl: 60, cacheEverything: true } });
    if (!upstream.ok) return new Response("Tidak dijumpai", { status: 404 });

    const ext = path.split(".").pop();
    return new Response(request.method === "HEAD" ? null : upstream.body, {
      headers: {
        "content-type": TYPES[ext],
        "cache-control": "public, max-age=60",
        "x-content-type-options": "nosniff",
        "referrer-policy": "strict-origin-when-cross-origin",
      },
    });
  },
};
