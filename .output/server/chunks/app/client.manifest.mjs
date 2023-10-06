const client_manifest = {
  "node_modules/nuxt3/dist/app/entry.mjs": {
    "file": "entry-f6093800.mjs",
    "src": "node_modules/nuxt3/dist/app/entry.mjs",
    "isEntry": true,
    "dynamicImports": [
      "pages/blog/[slug].vue",
      "pages/index.vue"
    ],
    "css": [
      "assets/entry.167833e3.css"
    ],
    "assets": [
      "assets/logo_tricolore.3110ded5.png"
    ]
  },
  "pages/blog/[slug].vue": {
    "file": "_slug_-b9ca7239.mjs",
    "src": "pages/blog/[slug].vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ]
  },
  "pages/index.vue": {
    "file": "index-d866848d.mjs",
    "src": "pages/index.vue",
    "isDynamicEntry": true,
    "imports": [
      "node_modules/nuxt3/dist/app/entry.mjs"
    ],
    "css": [
      "assets/index.20b65f76.css"
    ],
    "assets": [
      "assets/logo-confederazione.38fbbfe1.png",
      "assets/video1.df3b07ea.mp4",
      "assets/bompietro_d1.b37056ba.jpg",
      "assets/gruppo.cb2164c7.jpg"
    ]
  }
};

export { client_manifest as default };
