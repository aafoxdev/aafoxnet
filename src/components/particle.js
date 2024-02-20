"use client"
import Script from 'next/script'; // 追加


const Particle = () => {
  // useEffectは削除

  return (
    <>
      <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
      {/* Scriptタグを追加してapp.jsを読み込む */}
      <Script 
        src="/app.js" // publicディレクトリ内のパス
        strategy="afterInteractive" // スクリプト読み込み戦略
      />
    </>
  );
};

export default Particle;
