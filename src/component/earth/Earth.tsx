
import { BlurFilter, Point } from 'pixi.js';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Stage, Container, Sprite, Text } from '@pixi/react';
import EarthIMG from '../../img/фы.png';

const Earth = () => {
    const blurFilter = useMemo(() => new BlurFilter(4), []);
  
  
    return (
        <Sprite
            image={EarthIMG}
            x={1700}
            y={0}
            height={800}
            anchor={{ x: 0.5, y: 0.5 }}
        />
    );
  };
export default Earth