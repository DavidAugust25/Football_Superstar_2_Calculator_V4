
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Version_4.1"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Version_4.1",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 20022, hash: '145f0bb6684c034902861eb4d5d84c1b49052da8e3d71df7fe7b72474fa16fe4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15718, hash: '4fc370f87dbd3f3b8328bf89547952bf48519d189ed983c2d6eed336a9c45da1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Version_4.1/index.html': {size: 44808, hash: '0f700bfb4317673561e5a77ee30a464d63e55e40d4b056c0bb25dc81d11f48b4', text: () => import('./assets-chunks/Version_4_1_index_html.mjs').then(m => m.default)},
    'styles-AIGT3T7Y.css': {size: 234969, hash: '16XbEJtHppw', text: () => import('./assets-chunks/styles-AIGT3T7Y_css.mjs').then(m => m.default)}
  },
};
