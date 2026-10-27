// Cloudflare Worker: opens Google Maps short links (maps.app.goo.gl) for the POI tool.
// Usage: https://<name>.workers.dev/?url=https://maps.app.goo.gl/XXXX  ->  {"url":"https://www.google.com/maps/place/..."}
const ALLOWED = /^(maps\.app\.goo\.gl|goo\.gl|g\.co)$/i;
export default {
  async fetch(request) {
    const cors = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' };
    try {
      const target = new URL(new URL(request.url).searchParams.get('url') || '');
      if (!ALLOWED.test(target.hostname)) return new Response(JSON.stringify({ error: 'host not allowed' }), { status: 400, headers: cors });
      let url = target.toString();
      for (let i = 0; i < 5; i++) {               // follow up to 5 redirects by hand
        const r = await fetch(url, { redirect: 'manual' });
        const loc = r.headers.get('location');
        if (!loc || r.status < 300 || r.status >= 400) break;
        url = new URL(loc, url).toString();
        if (/google\.[a-z.]+\/maps/.test(url)) break;
      }
      return new Response(JSON.stringify({ url }), { headers: cors });
    } catch (e) {
      return new Response(JSON.stringify({ error: 'bad url' }), { status: 400, headers: cors });
    }
  }
};
