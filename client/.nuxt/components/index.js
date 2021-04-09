export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as HeaderMetaList } from '../../components/HeaderMetaList.vue'
export { default as HeaderNavList } from '../../components/HeaderNavList.vue'
export { default as HeaderNavListItem } from '../../components/HeaderNavListItem.vue'
export { default as ScrollamaExample } from '../../components/ScrollamaExample.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyHeaderMetaList = import('../../components/HeaderMetaList.vue' /* webpackChunkName: "components/header-meta-list" */).then(c => c.default || c)
export const LazyHeaderNavList = import('../../components/HeaderNavList.vue' /* webpackChunkName: "components/header-nav-list" */).then(c => c.default || c)
export const LazyHeaderNavListItem = import('../../components/HeaderNavListItem.vue' /* webpackChunkName: "components/header-nav-list-item" */).then(c => c.default || c)
export const LazyScrollamaExample = import('../../components/ScrollamaExample.vue' /* webpackChunkName: "components/scrollama-example" */).then(c => c.default || c)
