import { useEffect, useState } from 'react'
import { useStore } from '../hooks/useStore'
import * as images from '../images/images'
import { useKeyboards } from '../hooks/useKeyboards'


export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

    const {
        dirt,
        glass,
        stone,
        bricks,
        snow,
        wood
    } = useKeyboards()


    useEffect(() => {
        const options = {
            dirt,
            glass,
            stone,
            bricks,
            snow,
            wood
        }

        const selectedTexture = Object
            .entries(options)
            .find(([texture, isEnable]) => isEnable)
        if (selectedTexture) {
            const [textureName] = selectedTexture
            setTexture(textureName)
        }
        console.log(texture)
        return () => {
        }
    }, [dirt, glass, stone, bricks, snow, wood])
    if (!visible) {
        return null
    }
    return (
        <div className='selectTexture'>
            {
                Object.entries(images).map(([textureName, texture]) => {
                    return (
                        <img
                            key={textureName}
                            src={texture}
                            alt={textureName}
                            onClick={() => setTexture(textureName)}
                        />
                    )
                })
            }
        </div>
    )
}