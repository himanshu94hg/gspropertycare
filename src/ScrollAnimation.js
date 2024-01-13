// // useScrollAnimation.js

// import { useEffect, useRef, useState } from "react";

// const useScrollAnimation = (animations = [], threshold = 0.5) => {
//   const animatedElementRef = useRef(null);
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !hasAnimated) {
//             entry.target.classList.add(...animations);
//             setHasAnimated(true);
//           }
//         });
//       },
//       { threshold }
//     );

//     if (animatedElementRef.current) {
//       observer.observe(animatedElementRef.current);
//     }

//     return () => {
//       if (animatedElementRef.current) {
//         observer.unobserve(animatedElementRef.current);
//       }
//     };
//   }, [animations, threshold, hasAnimated]);

//   return animatedElementRef;
// };

// export default useScrollAnimation;
