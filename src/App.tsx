import './App.css'
import Selector from './components/Selector/Selector'
import icon from './assets/arrow_forward_FILL0_wght400_GRAD0_opsz24.svg'
import { Option } from './types/Option'

function App() {
    const options = [
        {
            label: 'Россия',
            icon: icon,
        },
        { label: 'Армения', icon: icon },
        { label: 'Казахстан', icon: icon },
        { label: 'Узбекистан' },
        { label: 'Китай' },
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
                flexDirection: 'column',
            }}
        >
            <Selector options={options} onChange={onChange} />
        </div>
    )
}

export default App
