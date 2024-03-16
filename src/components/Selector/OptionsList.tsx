import OptionItem from './OptionItem'
import { Option } from '../../types/Option'

type Props = {
    options: Option[]
    selectedOptions: Option[]
    searchTerm: string
    setSelectedOptions: (options: Option[]) => void
    onChange: (options: Option[]) => void
}

const OptionList = ({
    options,
    selectedOptions,
    searchTerm,
    setSelectedOptions,
    onChange,
}: Props) => {
    const handleOptionClick = (option: Option) => {
        if (selectedOptions.includes(option)) {
            const updatedOptions = selectedOptions.filter(
                (selectedOption) => selectedOption !== option
            )
            setSelectedOptions(updatedOptions)
            onChange(updatedOptions)
        } else {
            const updatedOptions = [...selectedOptions, option]
            setSelectedOptions(updatedOptions)
            onChange(updatedOptions)
        }
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
