import { useState, useEffect, useCallback, useRef } from 'react';

export function useIntersecting(options) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const callback = useCallback(
    entries => {
      const [entry] = entries;
      setVisible(entry.isIntersecting);
    },
    [setVisible]
  );

  useEffect(() => {
    // save the current ref value to a locally scoped variable to be closed over in the effect's cleanup function
    let observerRefValue = null;

    const observer = new IntersectionObserver(callback, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = containerRef.current; // save the ref value
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue); // use saved value
    };
  }, [callback, containerRef, options]);

  return [containerRef, visible];
}
