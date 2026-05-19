import { useEffect } from 'react'

interface SeoProps {
  title: string
  description: string
  path?: string
}

const SITE_NAME = 'Ad On AI'
const BASE_URL = 'https://adon-ai.com.au'
const DEFAULT_IMAGE = `${BASE_URL}/ad-on-ai-logo.png`

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value)
  })
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }

  element.href = href
}

export default function Seo({ title, description, path = '/' }: SeoProps) {
  useEffect(() => {
    const cleanPath = path === '/' ? '/' : path.replace(/\/+$/, '')
    const pageUrl = `${BASE_URL}${cleanPath}`

    document.title = title

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    })

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    })

    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })

    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SITE_NAME,
    })

    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: pageUrl,
    })

    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: DEFAULT_IMAGE,
    })

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary',
    })

    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: title,
    })

    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })

    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: DEFAULT_IMAGE,
    })

    upsertLink('canonical', pageUrl)
  }, [description, path, title])

  return null
}
