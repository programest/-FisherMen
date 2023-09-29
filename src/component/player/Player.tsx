import { BlurFilter, Point } from 'pixi.js';
import React, { FC, useState, useEffect, useCallback, useMemo } from 'react';
import { Stage, Container, Sprite, Text, useTick, Graphics } from '@pixi/react';
import PlayerIMG from '../../img/Player.png';
import FloatIMG from '../../img/float.png';
import RodIMG from '../../img/rod.png';
import { Spring } from '@react-spring/web';

interface PlayerItem{
  refWater: any,
  modal: boolean
}
interface NewPoint {
  x: number,
  y: number,
  z?: number
};

interface Point2 {
  x: number;
  width: number;
  height: number;
  y: number;
}
const Player: FC<PlayerItem> = ({ refWater, modal }) => {
  const [positionFloat, setPositionFloat] = useState<NewPoint>(new Point(-40, 15));
  const [animationRod, setAnimationRod] = useState<boolean>(false)
  const [positionRod, setPositionRod] = useState<NewPoint>(new Point(-40, 0));
  const [rotationRod, setRotationRod] = useState<number>(0);
  const [position, setPosition] = useState<NewPoint>(new Point(1000, 240)); // Используем Point для задания начальной позиции
  const [isJumping, setIsJumping] = useState<boolean>(false);

  

  const handleKeyPress = useCallback((e: KeyboardEvent | MouseEvent) => {
    const screenWidth = window.innerWidth; // Ширина монитора
    const screenHeight = window.innerHeight; // Высота монитора
    if(!modal){
  
      if (e instanceof KeyboardEvent) {
      // Check if the event is a KeyboardEvent
      if (e.key === 'ArrowRight' && position.x + 40 < screenWidth) {
        setPosition((prevPosition) => new Point(prevPosition.x + 10, prevPosition.y));
      } else if (e.key === 'ArrowLeft' && position.x - 10 >= 0) {
        const nextPlayerPosition = (prevPosition: any) => new Point(prevPosition.x - 10, prevPosition.y)
        if (!isColliding(position, refWater.current)) {
          setPosition(nextPlayerPosition);
        }
      } else if (e.key === 'ArrowUp' && position.y - 10 >= 0) {
        setPosition((prevPosition) => new Point(prevPosition.x, prevPosition.y - 10));
      } else if (e.key === 'ArrowDown' && position.y + 720 < screenHeight) {
        setPosition((prevPosition) => new Point(prevPosition.x, prevPosition.y + 10));
      } else if (e.key === ' ' && !isJumping) {
        // Проверка для прыжка
        const jumpHeight = 200;
        const newPositionY = position.y - jumpHeight;
        if (newPositionY >= 0) {
          setIsJumping(true);
          setPosition((prevPosition) => new Point(prevPosition.x, newPositionY));
        }
      } else if (e.key === 'Shift') {
        // Проверка для сдвига
        const shiftAmount = 5;
        const newPositionY = position.y + shiftAmount;
        if (newPositionY < screenHeight) {
          setPosition((prevPosition) => new Point(prevPosition.x, newPositionY));
        }
      }
      } else if (e.type === 'click' && e.button === 0) {
      // Check if the event is a MouseEvent with a left mouse button click
      // Handle your mouse click logic here
      setAnimationRod((prev) => !prev);
      }   
    }
  }, [isJumping, modal]);


  const isColliding = (point1:NewPoint , point2: Point2) => {
    // point1 это Игрок
    // point2 это Вода
    const playerSize = { width: 100, height:100 };
    console.log(point1.x)
    console.log(point2.x)
    return (
      point1.x < point2.x + point2.width &&
      point1.x + playerSize.width > point2.x &&
      point1.y < point2.y +  point2.height &&
      point1.y + playerSize.height > point2.y
    );
  };
  useEffect(() => {
    if (!modal){
      window.addEventListener('keydown', handleKeyPress);
      window.addEventListener('click', handleKeyPress)
      {animationRod &&  setAnimationRod(false)}  
      return () => {
        window.addEventListener('click', handleKeyPress)
        window.removeEventListener('keydown', handleKeyPress);
      };
    }
   
  }, [handleKeyPress, position, modal]);

  useEffect(() => {
    if(!modal){
    let jumpInterval: NodeJS.Timeout;
  
    if (isJumping) {
      jumpInterval = setInterval(() => {
        setPosition((prevPosition) => new Point(prevPosition.x, prevPosition.y + 2));
      }, 10);
  
      setTimeout(() => {
        setIsJumping(false);
      }, 1000);
    }
  
    return () => {
      clearInterval(jumpInterval);
    };
  }
  }, [isJumping, modal]);

  const [drawFishingLine, setDrawFishingLine] = useState(false);
  const [a, setA] = useState(false)
 

  
  useTick((delta) => {
    if (animationRod && !a && !modal) {
      // Если анимация удочки включена, выполните анимацию
      // Здесь можно реализовать логику анимации запрокидывания и возвращения удочки
      
      // Пример анимации удочки (просто для иллюстрации)
      if (positionRod.y < -30 ) {
        // Удочка вышла за пределы экрана, возвращаем ее
      
        const distance = Math.random() * ((-800) - (-300)) + (-300);
        setPositionFloat((prevPosition) => new Point(distance, 60));
        setPositionRod((prevPosition) => new Point(-40, 0));
        setRotationRod(0);
        setDrawFishingLine(true);
        setA(true)
      } else {
        // Анимация броска удочки
        
        const newY = positionRod.y - 3 * delta;
        setRotationRod(190);
        setPositionRod((prevPosition) => new Point(5, newY));
        setPositionFloat((prevPosition) => new Point(prevPosition.x - 300, prevPosition.y + 300));
      }
    }else if (!animationRod && !modal){
      setA(false)
      setPositionFloat((prevPosition) => new Point(-40  * delta, 15));
      setPositionRod((prevPosition) => new Point(-40  * delta, 0));
      setRotationRod(0);
      setDrawFishingLine(false);
      
    }
  });
   
  
  
  return (
    <>
    
      <Sprite
        width={110}
        height={110}
        image={PlayerIMG}
        x={position.x}
        y={position.y}
        anchor={{ x: 0.5, y: 0.5 }}
      /> 
       
      <Sprite
        width={100}
        height={100}
        image={RodIMG}
        rotation={rotationRod}
        x={position.x + positionRod.x}
        y={position.y + positionRod.y}
        
        anchor={{ x: 0.1, y: 0.5 }}
       />
       {drawFishingLine && (
        <Graphics
          draw={(g) => {
            
            g.lineStyle(2, 0xFFFFFF); // Линия белого цвета

            // Устанавливаем начальную точку как текущую позицию поплавка
            g.moveTo(position.x + positionFloat.x, position.y + positionFloat.y - 20);
            
            // Определяем контрольные точки и конечную точку кривой Безье
            g.bezierCurveTo(
              position.x + positionFloat.x + 300, position.y + positionFloat.y - 120, // Контрольная точка 1
              position.x + positionFloat.x + 200, position.y + positionFloat.y - 60, // Контрольная точка 2
              position.x + positionRod.x, position.y + positionRod.y - 10 // Конечная точка
            );
            
            
            
          }}
        />
      )}
  {/* <Spring<{ x: number; y: number }> from={{ x: 100, y: -220 }} to={{ x: 300, y: 40 }}>
  {(props) => ( */}
    <Sprite
      width={50}
      height={50}
      interactive
      // {...props}
      image={FloatIMG}
      x={position.x + positionFloat.x}
      y={position.y + positionFloat.y}
      anchor={{ x: 0.5, y: 0.5 }}
    />
    
  {/* )}
</Spring> */}


</>
  );
};
export default Player
