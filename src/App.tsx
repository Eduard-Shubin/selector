import './App.css'
import Selector from './components/Selector/Selector'
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

    const onChange = (selectedOptions: Option[]) => {
        const selectedLabels = selectedOptions.map((option) => option.label)
        console.log(selectedLabels.join(', '))
    }

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Selector options={options} theme="primary" onChange={onChange} />
        </div>
    )
}

export default App
