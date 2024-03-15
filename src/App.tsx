import './App.css'
import Selector from './components/Selector/Selector'
import icon from './assets/chevron_right_FILL0_wght400_GRAD0_opsz24.svg'
import { Options } from './types/Options'

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

    const onChange = (selectedOptions: Options[]) => {
        const selectedLabels = selectedOptions.map((option) => option.label)
        console.log(selectedLabels.join(', '))
    }

    return (
        <>
            <Selector
                options={options}
                onChange={onChange}
                theme="primary"
                size="sm"
            />
        </>
    )
}

export default App
