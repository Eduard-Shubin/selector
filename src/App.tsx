import './App.css'
import Selector from './components/Selector/Selector'
import { useState } from 'react'
import icon from './assets/chevron_right_FILL0_wght400_GRAD0_opsz24.svg'
import { Option } from './types/Option'

function App() {
    const options = [
        {
            label: 'Россия',
            icon: icon,
        },
        { label: 'Армения' },
        { label: 'Казахстан', icon: icon },
        { label: 'Узбекистан', icon: icon },
        { label: 'Китай' },
        { label: 'Северная Корея' },
    ]
    const [selectedTheme, setSelectedTheme] = useState('primary')
    const [selectedSize, setSelectedSize] = useState('md')

    const themes = ['primary', 'secondary', 'light', 'dark']
    const sizes = ['sm', 'md', 'lg']

    const onChange = (selectedOptions: Option[]) => {
        const selectedLabels = selectedOptions.map((option) => option.label)
        console.log(selectedLabels.join(', '))
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div>
                {themes.map((theme) => {
                    return (
                        <label>
                            <input
                                type="radio"
                                name="radio-group-theme"
                                value={theme}
                                checked={selectedTheme === theme}
                                onChange={() => setSelectedTheme(theme)}
                            />
                            {theme}
                        </label>
                    )
                })}
            </div>
            <div>
                {sizes.map((size) => {
                    return (
                        <label>
                            <input
                                type="radio"
                                name="radio-group-size"
                                value={size}
                                checked={selectedSize === size}
                                onChange={() => setSelectedSize(size)}
                            />
                            {size}
                        </label>
                    )
                })}
            </div>
            <Selector
                options={options}
                theme={selectedTheme}
                size={selectedSize}
                onChange={onChange}
            />
        </div>
    )
}

export default App
