import { Options } from '../../types/Options'
type Props = {
    option: Options
    handleOptionClick: (option: Options) => void
    selectedOptions: Options[]
    index: number
}

const OptionItem = ({
    option,
    handleOptionClick,
    selectedOptions,
    index,
}: Props) => {
    const isOptionSelected = (
        option: Options,
        selectedOptions: Options[]
    ): boolean => {
        return selectedOptions.some(
            (selectedOption) => selectedOption.label === option.label
        )
    }
    return (
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
    )
}

export default OptionItem
