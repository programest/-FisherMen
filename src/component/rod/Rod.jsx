// import React, { useState, useEffect, useCallback } from 'react';
// import { useSpring, animated } from '@react-spring/web';
// import FloatIMG from '../../img/float.png'
// import { BlurFilter, Point } from 'pixi.js';

// import { Stage, Container, Sprite, Text } from '@pixi/react';
// function Rod() {
//   const [position, setPosition] = useState({ x: 950, y: 270 });
//   const [isUp, setIsUp] = useState(true);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const handleKeyPress = useCallback((e) => {
//     if (e.key === 'ArrowRight') {
//       setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x + 10 }));
//     } else if (e.key === 'ArrowLeft') {
//       setPosition((prevPosition) => ({ ...prevPosition, x: prevPosition.x - 10 }));
//     } 
//     console.log(position);
//   }, [position]);

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyPress);

//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, [handleKeyPress]);

  
 
 

//   useEffect(() => {
//     setTimeout(() => {
//       setIsAnimating((prevIsUp) => !prevIsUp)
//     }, 2000 + Math.random() * 2000);
    
//     if (isAnimating) {
//       const interval = setInterval(() => {
//         setIsUp((prevIsUp) => !prevIsUp);
//       }, 200);

//       return () => clearInterval(interval);
//     }
    
//   }, [isAnimating]);
//   // Создаем анимацию с помощью react-spring
//   const springProps = useSpring({
//     from: { y: isUp ? 0 : -5 }, // начальное положение
//     to: { y: isUp ? 0 : -30 }, // конечное положение
//     config: { duration: 800 }, // длительность анимации
//     onUpdate: ({ y }) => {
//       console.log('2')
//       // Обновляем position.y при каждом обновлении анимации
//       setPosition((prevPosition) => ({ ...prevPosition, y: y}));
//     },
//   });
  

  

//   return (
//     <Sprite
//     width={70}
//     height={70}
//     image={FloatIMG}
//     x={position.x}
//     y={position.y}
//     anchor={{ x: 0.5, y: 0.5 }}
//   />
//     // <animated.div
//     //   style={{
//     //     position: 'absolute',
//     //     left: position.x + 'px',
//     //     top:   springProps.y.interpolate((y) => `${y}px`), // используем интерполяцию для плавности
//     //     width: '50px',
//     //     height: '50px',
//     //     background: 'red',
//     //   }}
//     // ></animated.div>
//   );
// }

// export default Rod;
