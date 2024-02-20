"use client"
import React, { useEffect, useRef, useState } from 'react';
import ApiLoading from './loading';
import styles from '@/css/twittertimeline.module.css';

export default function TwitterTimeline() {
  const [showComponent, setShowComponent] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 850) {
        setShowComponent(false);
      } else {
        setShowComponent(true);
      }
    };

    handleResize(); // 初回レンダー時にもサイズをチェック

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!showComponent) {
      // コンポーネントが非表示の場合は何もしない
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current && containerRef.current.contains(script)) {
        containerRef.current.removeChild(script);
      }
    };
  }, [showComponent]);

  return (
    showComponent && (
      <div ref={containerRef} className={styles.twitterTimelineContainer}>
        <a
          className="twitter-timeline"
          data-height="400"
          href="https://twitter.com/athenai2020?ref_src=twsrc%5Etfw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ApiLoading />
        </a>
      </div>
    )
  );
}
