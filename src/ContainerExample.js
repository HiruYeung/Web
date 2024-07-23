import React, { useEffect, useState } from 'react';
import { Stage, Container, Sprite, Text, SCALE_MODES  } from '@pixi/react';
import * as PIXI from 'pixi.js';

const ContainerExample = () => {
  const image = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png';
  const width = 500;
  const height = 500;
  const [spritePosition, setSpritePosition] = useState({ x: width, y: height / 3.5 });
  const [showSprite, setShowSprite] = useState(true);

  

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the sprite position to move it from right to left
      setSpritePosition((prevPosition) => ({
        x: prevPosition.x - 2,
        y: prevPosition.y,
      }));

      // Reset the sprite position when it goes off-screen
      if (spritePosition.x < -50) {
        setSpritePosition({ x: width, y: height / 2 });
      }
    }, 16); // Update the position every 16ms (roughly 60fps)

    return () => clearInterval(interval);
  }, [spritePosition.x, spritePosition.y]);

  


  return (
    <Stage width={300} height={300} options={{ backgroundColor: 0xeef1f5 }}>
      <Container>
        {showSprite && (
          <Sprite
            anchor={0.5}
            image={image}
            x={spritePosition.x}
            y={spritePosition.y}
          />
        )}
      </Container>
    </Stage>
  );
};

export default ContainerExample;



