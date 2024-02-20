"use client";
import React, { useEffect } from 'react';
import styles from '@/css/loading.module.css';

export default function ApiLoading() {
  return (
    <div className={styles.loading_container}>
        <div className={styles.spinner}>
        </div>
    </div>
  );
}
