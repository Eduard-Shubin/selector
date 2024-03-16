import { ChangeEvent, MouseEvent, useRef } from 'react'
import { Option } from '../../types/Option'

type Props = {
    selectedOptions: Option[]
    setIsOpen: (isOpen: boolean) => void
    isOpen: boolean
    searchTerm: string
    setSearchTerm: (searchTerm: string) => void
    setSelectedOptions: (selectedOptions: Option[]) => void
}

const SelectorButton = ({
    selectedOptions,
    setSelectedOptions,
    setIsOpen,
    isOpen,
    setSearchTerm,
}: Props) => {
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!isOpen) {
            setIsOpen(true)
        }
        setSearchTerm(event.target.value)
    }

    const searchInputRef = useRef<HTMLInputElement>(null)

    const handleSelectedOptionClick = () => {
        if (searchInputRef.current) {
            searchInputRef.current.focus()
            setIsOpen(true)
        }
    }

    const handleDeleteClick = (
        option: Option,
        event: MouseEvent<SVGSVGElement>
    ) => {
        event.stopPropagation()
        const updatedOptions = selectedOptions.filter(
            (selectedOption) => selectedOption !== option
        )
        console.log(updatedOptions)
        setSelectedOptions(updatedOptions)
        handleSelectedOptionClick()
    }
    const handleClearClick = (event: MouseEvent<SVGSVGElement>) => {
        event.stopPropagation()
        setSelectedOptions([])
        handleSelectedOptionClick()
    }

    return (
        <div
            className={`selector__button ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="selector__button--search-wrapper">
                {selectedOptions.length > 0
                    ? selectedOptions.map((option, index) => {
                          return (
                              <div
                                  key={index}
                                  className="selector__button--selected-option"
                                  onClick={handleSelectedOptionClick}
                              >
                                  {option.label}
                                  <svg
                                      className="selector__button--delete-icon"
                                      xmlns="http://www.w3.org/2000/svg"
                                      height="24"
                                      viewBox="0 -960 960 960"
                                      width="24"
                                      onClick={(event) =>
                                          handleDeleteClick(option, event)
                                      }
                                  >
                                      <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                  </svg>
                              </div>
                          )
                      })
                    : null}
                <input
                    ref={searchInputRef}
                    type="text"
                    className="selector__button--search"
                    onChange={(event) => handleSearchChange(event)}
                />
            </div>
            {selectedOptions.length > 0 ? (
                <svg
                    className="selector__button--clear-icon"
                    onClick={(event) => handleClearClick(event)}
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
            ) : null}
        </div>
    )
}

export default SelectorButton
