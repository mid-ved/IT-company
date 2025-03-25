
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/IT-company"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 869, hash: '44e83a124afd1abf011b916f7d9cc3255b2aad46e1976eb5c7e7c5f2864508dd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1128, hash: 'cade41cd377c5bb0c67a193b9b30ae456a38a2b3a9ddaac99488e7dfcb1b30fa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'IT-company/index.html': {size: 14564, hash: 'af98644a7b39517c6699c8e109c6a3398bba6e8f1c4f96bd08872171c98968b2', text: () => import('./assets-chunks/IT-company_index_html.mjs').then(m => m.default)},
    'styles-K2FWRRNJ.css': {size: 129, hash: 'qnad6x8xS0k', text: () => import('./assets-chunks/styles-K2FWRRNJ_css.mjs').then(m => m.default)}
  },
};
