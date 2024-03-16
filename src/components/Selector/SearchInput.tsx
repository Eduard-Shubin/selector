import { ChangeEvent } from 'react'

type Props = {
    searchTerm: string
    setSearchTerm: (searchTerm: string) => void
}

const SearchInput = ({ searchTerm, setSearchTerm }: Props) => {
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    return (
        <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Поиск..."
            className="selector__search"
        />
    )
}

export default SearchInput
