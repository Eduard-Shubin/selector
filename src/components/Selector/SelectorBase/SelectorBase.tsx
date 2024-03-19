import { MouseEvent } from 'react'
import { Option } from '../../../types/Option'
import { useSelectorContext } from '../SelectorContext/SelectorContext'
import SelectedOption from '../SelectedOptions/SelectedOption'
import SearchInput from '../SearchInput/SearchInput'
import clearIcon from '../../../assets/close_FILL0_wght400_GRAD0_opsz24.svg'

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
        event: MouseEvent<HTMLDivElement>
    ) => {
        event.stopPropagation()
        const updatedOptions = selectedOptions.filter(
            (selectedOption) => selectedOption !== option
        )
        setSelectedOptions(updatedOptions)
        handleInputFocus()
        setIsOpen(true)
    }

    const handleClearClick = (event: MouseEvent<HTMLDivElement>) => {
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
                <div
                    className="selector__button--clear-icon"
                    onClick={(event) => handleClearClick(event)}
                >
                    <img
                        src={clearIcon}
                        className="selector__button--clear-icon-image"
                        alt="clear"
                    />
                </div>
            ) : null}
        </div>
    )
}

export default SelectorBase
