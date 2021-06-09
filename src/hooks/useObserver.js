import { useState, useEffect, useCallback } from 'react';

export function useObserver(options) {
  const [ref, setRef] = useState(null);
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

    if (ref) {
      observer.observe(ref);
      observerRefValue = ref; // save the ref value
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue); // use saved value
    };
  }, [callback, ref, options]);

  return [setRef, visible];
}
