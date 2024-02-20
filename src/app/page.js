import React from 'react'
import Hero from '@/components/hero'
import Container from '@/components/container'
import HomePanel from '@/components/homepanel';
import Particle from '@/components/particle';

import { siteMeta } from '@/lib/constants'
import { openGraphMetadata, twitterMetadata } from '@/lib/baseMetadata'
const { siteTitle, siteUrl } = siteMeta

export default function Home() {
  return (
    <>
    <Particle />
    <Container>
      <Hero 
      title="Hello!"
      subtitle="ようこそAthenaiへ"
      imageOn
      />
      <HomePanel />
    </Container>
    </>
  );
}

// メタデータ
const pageTitle = 'ホーム'
const pageDesc = 'ようこそ'
const ogpTitle = `${pageTitle} | ${siteTitle}`
const ogpUrl = new URL('/', siteUrl).toString()

export const metadata = {
  title: pageTitle,
  description: pageDesc,

  openGraph: {
    ...openGraphMetadata,
    title: ogpTitle,
    description: pageDesc,
    url: ogpUrl,
  },

  twitter: {
    ...twitterMetadata,
    title: ogpTitle,
    description: pageDesc,
  },
}