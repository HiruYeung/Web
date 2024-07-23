import React, { useEffect, useState, useRef } from 'react';
import { Stage, Container, Sprite, Text, SCALE_MODES } from '@pixi/react';
// import React, { useState } from 'react';
import { render } from 'react-dom';
import { Spring } from 'react-spring';
import { Texture } from 'pixi.js';
import * as ReactPixiAnimated from '@pixi/react-animated';



const config = {
  size: {
    width: 300,
    height: 300,
  },
  stage: {
    backgroundColor: 0xeef1f5,
  },
};



const set = () => ({
  x: Math.random() * config.size.width,
  y: Math.random() * config.size.height,
  rotation: Math.random() * 10,
  scale: Math.max(1, Math.random() * 10),
  tint:Math.floor(Math.random() * 16777215).toString(16),
});


const App = () => {
  const [props, setProps] = useState(set());

  useEffect(() => {
    const interval = setInterval(() => {
      setProps(set());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stage width={config.size.width} height={config.size.height} options={config.stage} onPointerUp={() => setProps(set())}>
      <Container>
        <Sprite
          native
          anchor={0.5}
          width={100}
          height={100}
          texture={Texture.WHITE}
          tint={props.tint}
          x={props.x}
          y={props.y}
          rotation={props.rotation}
          scale={props.scale}
        />
      </Container>
    </Stage>
  );
};

export default App;


