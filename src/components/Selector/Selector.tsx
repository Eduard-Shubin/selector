import { Option } from '../../types/Option'
import './Styles/selectorStyles.scss'

import SelectorBase from './SelectorBase/SelectorBase'
import SelectorDropdown from './SelectorDropdown/SelectorDropdown'
import { SelectorProvider } from './SelectorContext/SelectorContext'

type Theme = 'light' | 'dark' | 'primary' | 'secondary'
type Size = 'sm' | 'md' | 'lg'

type Props = {
    options: Option[]
    onChange: (option: Option[]) => void
    theme?: Theme
    size?: Size
}

const Selector = ({ options, onChange, theme, size }: Props) => {
    return (
        <SelectorProvider options={options} onChange={onChange} size={size}>
            <div
                className={`selector ${theme ? theme : 'light'}-theme ${
                    size ? size : 'md'
                }`}
            >
                <SelectorBase />
                <SelectorDropdown />
            </div>
        </SelectorProvider>
    )
}

export default Selector
