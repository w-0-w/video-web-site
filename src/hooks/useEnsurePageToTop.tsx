import { useEffect } from 'react';

export function useEnsurePageToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
