import OptionItem from './OptionItem'
import { Options } from '../../types/Options'

type Props = {
    options: Options[]
    selectedOptions: Options[]
    searchTerm: string
    setSelectedOptions: (options: Options[]) => void
    onChange: (options: Options[]) => void
}

const OptionList = ({
    options,
    selectedOptions,
    searchTerm,
    setSelectedOptions,
    onChange,
}: Props) => {
    const handleOptionClick = (option: Options) => {
        const index = selectedOptions.findIndex(
            (selectedOption) => selectedOption.label === option.label
        )
        if (index > -1) {
            const updatedOptions = selectedOptions.filter((_, i) => i !== index)
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
                    index={index}
                    handleOptionClick={handleOptionClick}
                    selectedOptions={selectedOptions}
                />
            ))}
        </div>
    )
}

export default OptionList
