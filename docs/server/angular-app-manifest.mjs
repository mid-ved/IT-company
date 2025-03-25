
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 604, hash: '5a7a06927cc9d3a5dcf52987b8b6d071890dad2d6724317c1df25c2c8768ca8c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1117, hash: '1c2427ebb4c396c4ef163bee2c9a964d1f6a2888efe196f30e50c9f61f0dca4f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14372, hash: 'dc0e8387b511656f92ddf1156b39ec3fd9bd28cfbfa5254bd5f3264e7f6366d1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
