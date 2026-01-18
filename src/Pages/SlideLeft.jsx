import { useEffect, useRef, useState } from "react";

export default function SlideUp({ children }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transform transition-all duration-700 ease-out
        ${show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
      `}
    >
      {children}
    </div>
  );
}
