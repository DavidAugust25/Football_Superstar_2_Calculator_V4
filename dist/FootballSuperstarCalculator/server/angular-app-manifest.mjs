
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
    'index.csr.html': {size: 20022, hash: '6d6fb1b6fca8fbf9ca6c691629029c3bf780f647ade1e557ac509ee2bd07e1df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15718, hash: '1bf2aa78872ac18a17edf400cad3267ab81916324799d762bffc10ef91dca8df', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Version_4.1/index.html': {size: 59049, hash: '43016b55c782cbe5889740aa7fc001afd350c84545f25d5ba1846bdff56758bc', text: () => import('./assets-chunks/Version_4_1_index_html.mjs').then(m => m.default)},
    'styles-PXEJPFFU.css': {size: 237300, hash: 'eoxA+l47z8U', text: () => import('./assets-chunks/styles-PXEJPFFU_css.mjs').then(m => m.default)}
  },
};
