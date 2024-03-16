import { Option } from '../../types/Option'

type Props = {
    selectedOptions: Option[]
    setIsOpen: (isOpen: boolean) => void
    isOpen: boolean
}

const SelectorButton = ({ selectedOptions, setIsOpen, isOpen }: Props) => {
    const truncateOptions = (
        optionsString: string,
        maxLength: number
    ): string => {
        if (optionsString.length <= maxLength) {
            return optionsString
        }
        return optionsString.slice(0, maxLength) + '...'
    }

    return (
        <div
            className={`selector__button ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            {selectedOptions.length > 0
                ? truncateOptions(
                      selectedOptions.map((option) => option.label).join(', '),
                      15
                  )
                : 'Выберите опции'}
        </div>
    )
}

export default SelectorButton
