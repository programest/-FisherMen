
import { BlurFilter, Point } from 'pixi.js';
import React, { FC, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import WaterIMG from '../../img/water.png';

interface WaterItem{
    refWater: any
}


const Water: FC<WaterItem> = ({ refWater }) => {
   
    return (
        
        <Sprite
            ref={refWater}
            image={WaterIMG}
            x={0}
            width={1000}
            y={350}
            height={200}
            anchor={{ x: 0.5, y: 0.5 }}
        />
        
    );
  };
export default Water