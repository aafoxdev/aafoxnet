"use client";
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ApiLoading from '@/components/loading';
import Hero from '@/components/hero';
import Container from '@/components/container';
// サイトに関する情報
import { siteMeta } from '@/lib/constants'
import Particle from '@/components/particle';
const { siteTitle, siteUrl } = siteMeta
//metadataに関する設定
//import Head from 'next/head';
//import { pageTitle, pageDesc } from '@/components/art-metadata';

// react-image-gallery をクライアントサイドでのみ読み込むように設定
const DynamicImageGallery = dynamic(() => import('react-image-gallery').then(mod => mod.default), {
    ssr: false, // サーバーサイドレンダリングを無効にする
    loading: () => <ApiLoading />, // ロード中に表示するコンポーネント
});

const images = [
    {
      original: 'gallery/try004.jpg',
      thumbnail: 'gallery/try004.jpg'
    },
    {
      original: 'gallery/fuyu.jpg',
      thumbnail: 'gallery/fuyu.jpg',
    },
    {
      original: 'gallery/ya.jpg',
      thumbnail: 'gallery/ya.jpg'
    },
    {
      original: 'https://pbs.twimg.com/media/F7LzSrfaQAAOYZq?format=jpg&name=4096x4096',
      thumbnail: 'https://pbs.twimg.com/media/F7LzSrfaQAAOYZq?format=jpg&name=4096x4096'
    },
    {
      original: 'https://pbs.twimg.com/media/Fm_YuyyaUAEZde3?format=jpg&name=medium',
      thumbnail: 'https://pbs.twimg.com/media/Fm_YuyyaUAEZde3?format=jpg&name=medium'
    },
    {
      original: 'https://pbs.twimg.com/media/Fl_lIwsaAAcwnYr?format=jpg&name=large',
      thumbnail: 'https://pbs.twimg.com/media/Fl_lIwsaAAcwnYr?format=jpg&name=large'
    },
    {
      original: 'https://pbs.twimg.com/media/FcQrlOOaIAINtxP?format=jpg&name=4096x4096',
      thumbnail: 'https://pbs.twimg.com/media/FcQrlOOaIAINtxP?format=jpg&name=4096x4096'
    },
    {
      original: 'https://pbs.twimg.com/media/FeqeycKaEAA0672?format=jpg&name=4096x4096',
      thumbnail: 'https://pbs.twimg.com/media/FeqeycKaEAA0672?format=jpg&name=4096x4096'
    }
];

const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 画像ギャラリーが読み込まれた後、ローディング状態を更新
    // ここでは、読み込み完了をシミュレートするために setTimeout を使用していますが、
    // 実際のプロジェクトでは画像ギャラリーの読み込み状態やイベントに基づいて状態を更新する必要があります。
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 仮に1秒後にローディングを終了すると仮定

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Particle />
    <Container>
        {/*isLoading ? <ApiLoading /> : <DynamicImageGallery items={images} />*/}
        <Hero title="ART" subtitle="Recent Art" />
        <DynamicImageGallery items={images} />
    </Container>
    </>
  );
};

export default MyComponent;


