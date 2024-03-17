import OptionItem from './OptionItem'
import { Option } from '../../types/Option'
import { useSelectorContext } from './SelectorContext'

type Props = {
    options: Option[]
}

const OptionList = ({ options }: Props) => {
    const {
        selectedOptions,
        setSelectedOptions,
        setIsOpen,
        isOpen,
        searchTerm,
        setSearchTerm,
        handleInputFocus,
    } = useSelectorContext()

    const handleOptionClick = (option: Option) => {
        if (selectedOptions.includes(option)) {
            const updatedOptions = selectedOptions.filter(
                (selectedOption) => selectedOption !== option
            )
            setSelectedOptions(updatedOptions)
        } else {
            const updatedOptions = [...selectedOptions, option]
            setSelectedOptions(updatedOptions)
            // setSelectedOptions((prev) => [...prev, option])
        }
        setIsOpen(!isOpen)
        setSearchTerm('')
        handleInputFocus()
    }

    const filteredOptions = options.filter((option) =>
        option.label
            .toLowerCase()
            .trim()
            .includes(searchTerm.toLowerCase().trim())
    )

    return (
        <div className="selector__options">
            {filteredOptions.map((option, index) => (
                <OptionItem
                    key={index}
                    option={option}
                    handleOptionClick={handleOptionClick}
                    selectedOptions={selectedOptions}
                />
            ))}
        </div>
    )
}

export default OptionList
