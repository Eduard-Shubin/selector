import { useState, ChangeEvent, useRef } from 'react'
import { Options } from '../../types/Options'
import './selectorStyles.scss'

import useOnFocusLost from '../../hooks/onFocusLost'

type Props = {
    options: Options[]
    onOptionChange: (option: Options[]) => void
}

const Selector = ({ options, onOptionChange }: Props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedOptions, setSelectedOptions] = useState<Options[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    const handleOptionClick = (option: Options) => {
        const index = selectedOptions.findIndex(
            (selectedOption) => selectedOption.label === option.label
        )
        if (index > -1) {
            const updatedOptions = selectedOptions.filter((_, i) => i !== index)
            setSelectedOptions(updatedOptions)
            onOptionChange(updatedOptions)
        } else {
            const updatedOptions = [...selectedOptions, option]
            setSelectedOptions(updatedOptions)
            onOptionChange(updatedOptions)
        }
    }

    const isOptionSelected = (
        option: Options,
        selectedOptions: Options[]
    ): boolean => {
        return selectedOptions.some(
            (selectedOption) => selectedOption.label === option.label
        )
    }

    const truncateOptions = (
        optionsString: string,
        maxLength: number
    ): string => {
        if (optionsString.length <= maxLength) {
            return optionsString
        }
        return optionsString.slice(0, maxLength) + '...'
    }

    useOnFocusLost(dropdownRef, () => {
        setIsOpen(false)
    })

    console.log(selectedOptions)

    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="selector dark-theme" ref={dropdownRef}>
            <div
                className={`selector__button ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOptions.length > 0
                    ? truncateOptions(
                          selectedOptions
                              .map((option) => option.label)
                              .join(', '),
                          15
                      )
                    : 'Выберите опции'}
            </div>
            {isOpen && (
                <div className="selector__dropdown">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Поиск..."
                        className="selector__search"
                    />
                    <div className="selector__options">
                        {filteredOptions.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className={`selector__option ${
                                    isOptionSelected(option, selectedOptions)
                                        ? 'selector__option--selected'
                                        : ''
                                }`}
                            >
                                {option.icon && (
                                    <img
                                        src={option.icon}
                                        alt={option.label}
                                        className="selector__option--icon"
                                    />
                                )}

                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Selector
