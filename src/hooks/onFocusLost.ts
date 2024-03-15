import { RefObject, useEffect } from 'react'

const useOnFocusLost = (
    ref: RefObject<HTMLElement>,
    onFocusLost: () => void
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onFocusLost()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, onFocusLost])
}

export default useOnFocusLost
