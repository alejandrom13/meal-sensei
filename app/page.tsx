'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Button, Container, TextField } from '@mui/material'
import { LandingLayout } from './landing/layout'
import { Metadata } from 'next'
// import Hotjar from '@hotjar/browser'


function initializeClarity() {
  if (typeof window !== "undefined") {
    const c: any = window;
    const l: Document = document;
    const a: string = "clarity";
    const r: string = "script";
    const i: string = "iisigj26dq";

    c[a] = c[a] || function () {
      (c[a].q = c[a].q || []).push(arguments);
    };

    const t: HTMLScriptElement = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = `https://www.clarity.ms/tag/${i}`;

    const y: HTMLScriptElement | null = l.querySelector("script");
    if (y) {
      y.parentNode?.insertBefore(t, y);
    }
  }
}


export default function Home() {
  initializeClarity();

  return (
    <main>

      <LandingLayout></LandingLayout>

    </main>
  )
}
