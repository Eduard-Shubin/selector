import { MouseEvent } from 'react'
import { Option } from '../../types/Option'
import { useSelectorContext } from './SelectorContext'
import SelectedOption from './SelectedOption'
import SearchInput from './SearchInput'

const SelectorBase = () => {
    const {
        setIsOpen,
        isOpen,
        setSelectedOptions,
        selectedOptions,
        handleInputFocus,
    } = useSelectorContext()

    const handleDeleteClick = (
        option: Option,
        event: MouseEvent<SVGSVGElement>
    ) => {
        event.stopPropagation()
        const updatedOptions = selectedOptions.filter(
            (selectedOption) => selectedOption !== option
        )
        setSelectedOptions(updatedOptions)
        handleInputFocus()
        setIsOpen(true)
    }

    const handleClearClick = (event: MouseEvent<SVGSVGElement>) => {
        event.stopPropagation()
        setSelectedOptions([])
        handleInputFocus()
        setIsOpen(true)
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
                              <SelectedOption
                                  key={index}
                                  option={option}
                                  handleDeleteClick={handleDeleteClick}
                                  handleInputFocus={handleInputFocus}
                              />
                          )
                      })
                    : null}
                <SearchInput />
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

export default SelectorBase
