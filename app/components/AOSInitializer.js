'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
      offset: 200,
      once: true,
      mirror: false,
      anchorPlacement: 'top-center',
    });
  }, []);

  return null;
}s