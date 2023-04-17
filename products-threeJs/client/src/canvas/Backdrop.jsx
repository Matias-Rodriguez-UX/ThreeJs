import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { useSnapshot } from 'valtio'

import state from '../store'

const Backdrop = () => {
    const snap = useSnapshot(state)
    const shadows = useRef()

    return (
        <AccumulativeShadows ref={shadows}
            color={snap.color}
            temporal
            frames={60}
            alphaTest={0.85}
            scale={10}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -0.14]}>
            <RandomizedLight
                radius={9}
                amount={4}
                intensity={0.6}
                ambient={0.25}
                position={[5, 5, -10]} />
            <RandomizedLight
                radius={4}
                amount={3}
                intensity={0.6}
                ambient={0.4}
                position={[-2, -2, 8]} />
        </AccumulativeShadows>
    )
}

export default Backdrop