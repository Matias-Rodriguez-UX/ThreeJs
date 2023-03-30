import { useEffect, useState } from "react"

const ACTION_KEYBOARD_MAP = {
    KeyW: 'moveFoward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
    Digit1: 'bricks',
    Digit2: 'dirt',
    Digit3: 'glass',
    Digit4: 'grass',
    Digit5: 'now',
    Digit6: 'stone',
    Digit7: 'wood',
}
export const useKeyboards = () => {
    const [actions, setAction] = useState({
        moveFoward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        dirt: false,
        glass: false,
        grass: false,
        stone: false,
        bricks: false,
        now: false,
        wood: false
    })
    useEffect(() => {
        const handleKeyDown = event => {
            const { code } = event
            const action = ACTION_KEYBOARD_MAP[code]
            if (action) {
                setAction(prevAction => ({
                    ...prevAction,
                    [action]: true
                }))
            }
        }
        const handleKeyUp = event => {
            const { code } = event
            const action = ACTION_KEYBOARD_MAP[code]
            if (action) {
                setAction(prevAction => ({
                    ...prevAction,
                    [action]: false
                }))
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [])
    return actions
}