import { ChangeEvent, useRef, useEffect } from 'react'
import { useSelectorContext } from './SelectorContext'

const SearchInput = () => {
    const { isOpen, setIsOpen, searchTerm, setSearchTerm, setSearchInputRef } =
        useSelectorContext()

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (inputRef) {
            setSearchInputRef(inputRef)
        }
    }, [inputRef, setSearchInputRef])

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!isOpen) {
            setIsOpen(true)
        }
        setSearchTerm(event.target.value)
    }

    return (
        <input
            ref={inputRef}
            value={searchTerm}
            type="text"
            className="selector__button--search"
            onChange={(event) => handleSearchChange(event)}
        />
    )
}

export default SearchInput
