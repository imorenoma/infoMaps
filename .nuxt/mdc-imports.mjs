import Highlight from 'C:/Users/alves/infoMaps/node_modules/.pnpm/@nuxtjs+mdc@0.5.0/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype.mjs'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'highlight': { instance: Highlight, options: {} },
}

export const highlight = {"theme":"github-dark"}