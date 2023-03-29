import { useBox } from "@react-three/cannon"
import { useState } from "react"
import { useStore } from "../hooks/useStore"
import * as textures from '../images/textures'

export const Cube = ({ id, position, texture }) => {
    const [isHover, setIsHover] = useState(false)
    const [removeCube] = useStore(state => [state.removeCube])
    const [ref] = useBox(() => ({
        type: 'Static',
        position,
        id
    }))
    const activeTexture = textures[texture + 'Texture']

    return (
        <mesh ref={ref}
            onPointerMove={(e) => {
                e.stopPropagation()
                setIsHover(true)
            }}
            onPointerOut={(e) => {
                e.stopPropagation()
                setIsHover(false)
            }}
            onClick={(e) => {
                e.stopPropagation()
                if (e.altKey) {
                    removeCube(id)
                }
            }}>
            <boxBufferGeometry attach='geometry' />
            <meshStandardMaterial map={activeTexture} attach='material' color={isHover ? 'grey' : 'white'}
                transparent />
        </mesh>
    )
}