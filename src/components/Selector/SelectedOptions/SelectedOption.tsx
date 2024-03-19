import { MouseEvent } from 'react'
import { Option } from '../../../types/Option'
import { useSelectorContext } from '../SelectorContext/SelectorContext'
import deleteIcon from '../../../assets/cancel_FILL0_wght400_GRAD0_opsz24.svg'
type Props = {
    handleInputFocus(): void
    option: Option
    handleDeleteClick(option: Option, event: MouseEvent<HTMLDivElement>): void
}

const SelectedOption = ({
    handleInputFocus,
    option,
    handleDeleteClick,
}: Props) => {
    const { size } = useSelectorContext()

    const getTruncateValue = (size: string | undefined) => {
        switch (size) {
            case 'sm':
                return 8
            case 'md':
                return 15
            case 'lg':
                return 19
            default:
                return 15
        }
    }

    const truncate = (str: string) => {
        const truncateValue = getTruncateValue(size)
        if (str.length <= truncateValue) {
            return str
        }
        return str.slice(0, truncateValue) + '...'
    }

    return (
        <div
            className="selector__button--selected-option"
            onClick={handleInputFocus}
            title={option.label}
        >
            <div className="selector__button--selected-option-text">
                {truncate(option.label)}
            </div>
            <div
                className="selector__button--delete-icon"
                onClick={(event) => handleDeleteClick(option, event)}
            >
                <img
                    src={deleteIcon}
                    alt="delete"
                    className="selector__button--delete-icon"
                />
            </div>
        </div>
    )
}

export default SelectedOption
