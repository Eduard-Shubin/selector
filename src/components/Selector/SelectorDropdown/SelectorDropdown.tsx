import OptionList from '../OptionList/OptionsList'
import { useSelectorContext } from '../SelectorContext/SelectorContext'

const SelectorDropdown = () => {
    const { isOpen, options } = useSelectorContext()

    return (
        isOpen && (
            <div className="selector__dropdown">
                <OptionList options={options} />
            </div>
        )
    )
}

export default SelectorDropdown
