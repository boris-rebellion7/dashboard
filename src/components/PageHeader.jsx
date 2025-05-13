import React, { useRef, useLayoutEffect } from 'react';
import { gsap, Power3 } from 'gsap';

export default function PageHeader({ headline, image }) {
  const topLine = useRef();
  const middleLine = useRef();
  const bottomLine = useRef();
  const smallLeftLine = useRef();
  const smallRightLine = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(topLine.current, 
      { opacity: 0, scaleX: 0.3, transformOrigin: 'center' },
      { opacity: 1, scaleX: 1, duration: 2, ease: Power3.easeOut }
    )
    .fromTo(middleLine.current,
      { opacity: 0, scaleY: 0.5, xPercent: -50, transformOrigin: 'top' },
      { opacity: 1, scaleY: 1, xPercent: -50, duration: 1, ease: Power3.easeIn },
      '<'
    )
    .fromTo(bottomLine.current,
      { opacity: 0, scaleX: 0, transformOrigin: 'center' },
      { opacity: 1, scaleX: 1, duration: 0.5, delay: 1 },
      '<'
    )
    .fromTo(smallLeftLine.current,
      { scaleY: 0, transformOrigin: 'top' },
      { scaleY: 1, duration: 1, delay: 1.5 },
      '<'
    )
    .fromTo(smallRightLine.current,
      { scaleY: 0, transformOrigin: 'top' },
      { scaleY: 1, duration: 1, delay: 2, ease: Power3.easeOut },
      '<'
    );

    return () => tl.kill();
  }, []);

  return (
    <header className="page-header min-h-[100svh] relative flex flex-col items-center pt-4 md:pt-8 lg:pt-4 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={image?.url}
          alt={image?.alt || 'Bag Ventures'}
        />
      </div>

      {/* LOGO */}
      <div className="logo-wrapper flex flex-col items-center px-4 relative pb-6 md:pb-8 lg:pb-6 lg:w-full overflow-hidden">
        <div className="relative">
          <img src="/logo-boris.svg" alt="boris" />
          <img src="/logo-karatosic.svg" alt="karatosic" />
        </div>

        {/* MOBILE BUTTON */}
        <div className="lg:absolute lg:top-0 lg:right-8 mt-4 md:mt-8 lg:mt-0 lg:hidden">
          <button className="mx-auto text-20">Get in touch</button>
        </div>

        {/* DESKTOP BUTTON */}
        <div className="absolute top-0 mt-0 hidden lg:block right-10">
          <button className="mx-auto text-20">Get in touch</button>
        </div>

        <span ref={topLine} className="line horizontal" />
      </div>

      {/* MIDDLE + BOTTOM LINE */}
      <div className="line-wrapper flex-grow relative w-full">
        <span ref={middleLine} className="line vertical left-[50%]" />
        <span ref={bottomLine} className="line horizontal bottom-[-1px]" />
      </div>

      {/* BOTTOM CONTENT */}
      <div className="relative z-10 grid grid-cols-12">
        <div className="col-span-1 relative">
          <span ref={smallLeftLine} className="line vertical right-0 lg:right-[45%]" />
        </div>

        <div className="text-wrapper col-span-10 py-4 md:py-8 lg:pt-16 lg:pb-14 px-2 text-white text-center">
          {/* Replace this with your rich text renderer or component */}
          <div className="text-24 md:text-40 lg:text-54">{headline}</div>
        </div>

        <div className="col-span-1 relative">
          <span ref={smallRightLine} className="line vertical lg:left-[45%]" />
        </div>
      </div>
    </header>
  );
}
