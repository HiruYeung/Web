import React, { useEffect, useState, useRef } from 'react';
import { Stage, Container, Sprite } from '@pixi/react';
import { Texture } from 'pixi.js';

const config = {
  size: {
    width: 300,
    height: 300,
  },
  stage: {
    backgroundColor: 0xeef1f5,
  },
};

const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const App = () => {
  const [spriteProps, setSpriteProps] = useState({
    x: 0,
    y: config.size.height / 2,
    tint: getRandomColor(),
  });

  const requestRef = useRef();

  const animate = () => {
    setSpriteProps(prev => {
      let newX = prev.x + 2;
      if (newX > config.size.width) newX = 0; // Reset to start when the sprite moves out of bounds
      return { ...prev, x: newX };
    });
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handlePointerUp = () => {
    setSpriteProps(prev => ({ ...prev, tint: getRandomColor() }));
  };

  return (
    <Stage width={config.size.width} height={config.size.height} options={config.stage}>
      <Container>
        <Sprite
          anchor={0.5}
          width={100}
          height={100}
          texture={Texture.WHITE}
          tint={`0x${spriteProps.tint}`}
          x={spriteProps.x}
          y={spriteProps.y}
          interactive
          pointerup={handlePointerUp}
        />
      </Container>
    </Stage>
  );
};

export default App;