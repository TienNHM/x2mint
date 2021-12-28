import { useEffect, useRef } from 'react'

export const useEventListener = (eventName, handler, element = window) => {
    const savedHandler = useRef()

    useEffect(() => {
        savedHandler.current = handler
    }, [handler])

    useEffect(() => {
        const eventListener = (event) => savedHandler.current(event)
        element.addEventListener(eventName, eventListener)
        return () => {
            element.removeEventListener(eventName, eventListener)
        }
    }, [eventName, element])
}

//https://thewebdev.info/2021/05/24/how-to-listen-for-key-press-for-document-in-react-js/