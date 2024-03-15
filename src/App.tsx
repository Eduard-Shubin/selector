import './App.css'
import Selector from './components/Selector/Selector'
import icon from './assets/angle-arrow-pointing-to-right.png'
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

    const onOptionChange = (selectedOptions: Options[]) => {
        const selectedLabels = selectedOptions.map((option) => option.label)
        console.log(selectedLabels.join(', '))
    }

    return (
        <>
            <Selector options={options} onOptionChange={onOptionChange} />
        </>
    )
}

export default App
