import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/_nuxt/_slug_-b9ca7239.mjs": {
    "type": "application/javascript",
    "etag": "\"11c-codOYxw0G5dwGTjM/MuJQpMfilc\"",
    "mtime": "2023-10-06T12:11:50.901Z",
    "path": "../public/_nuxt/_slug_-b9ca7239.mjs"
  },
  "/_nuxt/entry-f6093800.mjs": {
    "type": "application/javascript",
    "etag": "\"1a424-dmLnB0+agtVaKMQOmztOpEQx1To\"",
    "mtime": "2023-10-06T12:11:50.843Z",
    "path": "../public/_nuxt/entry-f6093800.mjs"
  },
  "/_nuxt/index-d866848d.mjs": {
    "type": "application/javascript",
    "etag": "\"8de-gFlDgdRYJONxvQhpl+Z9mSUFeoE\"",
    "mtime": "2023-10-06T12:11:50.842Z",
    "path": "../public/_nuxt/index-d866848d.mjs"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"3e2-gFC6uHy2SVOHcMPG8s+/nEh35io\"",
    "mtime": "2023-10-06T12:11:50.841Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/admin/config.yml": {
    "type": "text/yaml; charset=utf-8",
    "etag": "\"264-XyUibRRB+p1g7jJp2DEQ+05smCk\"",
    "mtime": "2023-10-06T12:11:50.834Z",
    "path": "../public/admin/config.yml"
  },
  "/admin/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"206-T6/9/ZkiJNfHKdaaSHZFYtyC6v4\"",
    "mtime": "2023-10-06T12:11:50.833Z",
    "path": "../public/admin/index.html"
  },
  "/_nuxt/assets/bompietro_d1.b37056ba.jpg": {
    "type": "image/jpeg",
    "etag": "\"491bc-tcSMloImu/f1GNRgRh6Nua0QaWU\"",
    "mtime": "2023-10-06T12:11:50.899Z",
    "path": "../public/_nuxt/assets/bompietro_d1.b37056ba.jpg"
  },
  "/_nuxt/assets/entry.167833e3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d2f-DbxHrQ/XMLARCx5Of+l0wP/3n60\"",
    "mtime": "2023-10-06T12:11:50.897Z",
    "path": "../public/_nuxt/assets/entry.167833e3.css"
  },
  "/_nuxt/assets/gruppo.cb2164c7.jpg": {
    "type": "image/jpeg",
    "etag": "\"530d7-6RQBKL/NTUfdwJY3JJ9O9S/mUKM\"",
    "mtime": "2023-10-06T12:11:50.895Z",
    "path": "../public/_nuxt/assets/gruppo.cb2164c7.jpg"
  },
  "/_nuxt/assets/index.20b65f76.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"97-6i+mRLGhrz7Z4Ug470DUL83ZqzE\"",
    "mtime": "2023-10-06T12:11:50.893Z",
    "path": "../public/_nuxt/assets/index.20b65f76.css"
  },
  "/_nuxt/assets/logo-confederazione.38fbbfe1.png": {
    "type": "image/png",
    "etag": "\"1a56a-sC2KncBDNzdpBJkGqFO8oYfY/XI\"",
    "mtime": "2023-10-06T12:11:50.892Z",
    "path": "../public/_nuxt/assets/logo-confederazione.38fbbfe1.png"
  },
  "/_nuxt/assets/logo_tricolore.3110ded5.png": {
    "type": "image/png",
    "etag": "\"8c7a4-cV52pmnGrvjPqmdXgyRo9QaBjEE\"",
    "mtime": "2023-10-06T12:11:50.890Z",
    "path": "../public/_nuxt/assets/logo_tricolore.3110ded5.png"
  },
  "/_nuxt/assets/video1.df3b07ea.mp4": {
    "type": "video/mp4",
    "etag": "\"83a80f-oVFp+wpbmlBMD8QqTwuhR0WUBrc\"",
    "mtime": "2023-10-06T12:11:50.886Z",
    "path": "../public/_nuxt/assets/video1.df3b07ea.mp4"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/Users/gi/Code/miserico/dist" + "/" + "1696594306";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
