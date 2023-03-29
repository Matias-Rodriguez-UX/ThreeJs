import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from '../components/Ground'
import { Fpv } from '../components/FPV'
import { Player } from '../components/Player'
import { Cubes } from '../components/Cubes'
import { TextureSelector } from '../components/TextureSelector'

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[40, 15, 20]} />
        <ambientLight intensity={0.4} />
        <Fpv />
        <TextureSelector />
        <Physics>
          <Player />
          <Ground />
          <Cubes />
        </Physics>
      </Canvas>
      <div className='pointer'>+</div>
    </>

  )
}

export default App
