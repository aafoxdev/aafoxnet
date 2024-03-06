import React from 'react'
import Hero from '@/components/hero'
import Posts from '@/components/work-posts'
import Container from '@/components/container'
import { getPlaiceholder } from 'plaiceholder'
import { getAllWebPosts, getAllGamePosts } from '@/lib/api'
// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from "@/lib/constants";
import Particle from '@/components/particle';

export default async function Work() {
  const websiteposts = await getAllWebPosts(10)
  const gameposts = await getAllGamePosts(10)
  for (const websitepost of websiteposts) {
    if (!websitepost.hasOwnProperty('eyecatch')) {
      websitepost.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(websitepost.eyecatch.url)
    websitepost.eyecatch.blurDataURL = base64
  }
  for (const gamepost of gameposts) {
    if (!gamepost.hasOwnProperty('eyecatch')) {
      gamepost.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(gamepost.eyecatch.url)
    gamepost.eyecatch.blurDataURL = base64
  }
  return (
    <>
    
    <Container>
      <Hero 
      title="Work"
      subtitle="Athenai's Work List"
      imageOn
      buttonOn
      />
      <Posts posts={websiteposts} postname={"WEBサイト"}/>
      <Posts posts={gameposts} postname={"ゲーム"}/>
     
    </Container>
    </>
  );
}