import { useEffect } from 'react';

/**
 * Menyuntikkan Google Font (Cormorant Garamond & Plus Jakarta Sans)
 * ke <head> dokumen saat komponen pertama kali dimuat.
 */
export function useGoogleFonts() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
}
