"use client";
import dynamic from 'next/dynamic';
import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ApiLoading from '@/components/loading';
//import ImageGallery from 'react-image-gallery';
// react-image-gallery をクライアントサイドでのみ読み込むように設定
const DynamicImageGallery = dynamic(() => import('react-image-gallery'), {
    ssr: false, // サーバーサイドレンダリングを無効にする
  });

const images = [
    {
      original: 'gallery/fuyu.jpg',
      thumbnail: 'gallery/fuyu.jpg',
    },
    {
      original: 'gallery/try004.jpg',
      thumbnail: 'gallery/try004.jpg'
    },
    {
      original: 'gallery/ya.jpg',
      thumbnail: 'gallery/ya.jpg'
    }
  ];

const MyComponent = () => {
  return (
    <>
        <DynamicImageGallery items={images} />
        <ApiLoading />
    </>
  );
};

export default MyComponent;