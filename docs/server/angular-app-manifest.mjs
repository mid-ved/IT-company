
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
    'index.csr.html': {size: 858, hash: '8e8a94fb0d168f50c082821652a9c718dcaf101f50e1989147436178fe482e6d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1117, hash: 'e584f3aa686535c65a24996b4b77ef624cd2e8a324b1c933ca7e87d8e55298f1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14553, hash: '0a624dbd17bd253f1022e84f28090469e139251cf8b1a02cf9effff86ac652aa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-K2FWRRNJ.css': {size: 129, hash: 'qnad6x8xS0k', text: () => import('./assets-chunks/styles-K2FWRRNJ_css.mjs').then(m => m.default)}
  },
};
