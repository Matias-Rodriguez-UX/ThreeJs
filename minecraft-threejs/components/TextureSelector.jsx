import { useEffect, useState } from 'react'
import { useStore } from '../hooks/useStore'
import * as images from '../images/images'
import { useKeyboards } from '../hooks/useKeyboards'


export const TextureSelector = () => {
    const [visible, setVisible] = useState(true)
    const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

    const {
        dirt,
        glass,
        stone,
        grass,
        bricks,
        now,
        wood
    } = useKeyboards()


    useEffect(() => {
        const options = {
            dirt,
            glass,
            stone,
            grass,
            bricks,
            now,
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
    }, [dirt, glass, stone, grass, bricks, now, wood])

    // useEffect(() => {
    //     const visibilityTexture = setTimeout(() => {
    //         setVisible(false)
    //     }, 1500)
    //     setVisible(true)
    //     return () => {
    //         clearTimeout(visibilityTexture)
    //     }
    // }, [texture])



    if (!visible) {
        return null
    }
    console.log(images)
    return (
        <div className='selectTexture'>
            {
                Object.entries(images).map(([imgKey, img]) => {
                    // let tex = imgKey.slice(0, tex.length - 3)
                    return (
                        <img
                            className={texture === imgKey.replace('Img', '') ? 'selected' : ''}
                            key={imgKey}
                            src={img}
                            alt={imgKey}
                        />
                    )
                })
            }
        </div>
    )
}