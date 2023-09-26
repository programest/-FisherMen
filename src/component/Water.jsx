// import React, { useEffect, useRef } from 'react';
// import { Stage, Sprite } from 'react-pixi-fiber';
// import * as PIXI from 'pixi.js';

// const Water = () => {
//   const waterRef = useRef(null);

//   useEffect(() => {
//     const app = waterRef.current;
//     const renderer = app.renderer;

//     // Создаем текстуру волн
//     const displacementTexture = PIXI.Texture.from('/path/to/displacementMap.png');
//     const displacementFilter = new PIXI.filters.DisplacementFilter(displacementTexture);

//     // Создаем спрайт для воды
//     const waterSprite = new PIXI.Sprite.from('/path/to/waterTexture.png');
//     waterSprite.filters = [displacementFilter];

//     // Добавляем спрайт в сцену
//     app.stage.addChild(waterSprite);

//     // Настроим анимацию изменения карты смещения
//     let time = 0;
//     app.ticker.add(() => {
//       time += 0.1;
//       displacementFilter.scale.x = Math.sin(time) * 30;
//       displacementFilter.scale.y = Math.cos(time) * 30;
//     });
//   }, []);

//   return (
//     <Stage ref={waterRef} width={800} height={600}>
//       {/* Здесь будет ваша имитация воды и волн */}
//     </Stage>
//   );
// };

// export default Water;