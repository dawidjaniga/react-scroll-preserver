import React, { useLayoutEffect, useRef } from 'react';

let lastWrapperHeight = 0;

const ScrollPreserver = ({ children }: { children: React.ReactNode }) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const wrapperHeight = wrapper?.current?.offsetHeight;

  useLayoutEffect(() => {
    if (wrapperHeight) {
      const wrapperHeightDiff = wrapperHeight - lastWrapperHeight;
      const shouldPreserveScroll = document.documentElement.scrollTop > 0 && wrapperHeightDiff > 0;

      if (shouldPreserveScroll) {
        document.documentElement.scrollTop += wrapperHeightDiff;
      }

      lastWrapperHeight = wrapperHeight;
    }
  }, [wrapperHeight]);

  return <div ref={wrapper}>{children}</div>;
};

export default ScrollPreserver;
