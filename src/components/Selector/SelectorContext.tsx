import {
    createContext,
    useState,
    ReactNode,
    MutableRefObject,
    useContext,
    useRef,
    useEffect,
    RefObject,
} from 'react'
import { Option } from '../../types/Option'
import useOnFocusLost from '../../hooks/onFocusLost'

interface SelectorContextValue {
    searchTerm: string
    setSearchTerm: (term: string) => void
    selectedOptions: Option[]
    setSelectedOptions: (options: Option[]) => void
    isOpen: boolean
    setIsOpen: (open: boolean) => void
    handleFocus: (focusRef: MutableRefObject<HTMLInputElement | null>) => void
    options: Option[]
    searchInputRef: RefObject<HTMLInputElement> | null
    setSearchInputRef: (ref: RefObject<HTMLInputElement> | null) => void
    handleInputFocus: () => void
}
type Props = {
    children: ReactNode
    options: Option[]
    onChange(selectedOptions: Option[]): void
}

const SelectorContext = createContext<SelectorContextValue | null>(null)

export const SelectorProvider = ({ children, options, onChange }: Props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const [searchInputRef, setSearchInputRef] =
        useState<RefObject<HTMLInputElement> | null>(null)

    const dropDownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (onChange) {
            onChange(selectedOptions)
        }
    }, [selectedOptions, onChange])

    const handleFocus = (
        focusRef: MutableRefObject<HTMLInputElement | null>
    ) => {
        if (focusRef.current) {
            focusRef.current.focus()
            setIsOpen(true)
        }
    }

    useOnFocusLost(dropDownRef, () => {
        setIsOpen(false)
    })

    const handleInputFocus = () => {
        if (searchInputRef && searchInputRef.current) {
            searchInputRef.current.focus()
        }
    }

    return (
        <SelectorContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                selectedOptions,
                setSelectedOptions,
                isOpen,
                setIsOpen,
                handleFocus,
                options,
                searchInputRef,
                setSearchInputRef,
                handleInputFocus,
            }}
        >
            <div ref={dropDownRef}>{children}</div>
        </SelectorContext.Provider>
    )
}

export const useSelectorContext = () => {
    const context = useContext(SelectorContext)

    if (!context) {
        throw new Error(
            'useSelectorContext must be used within a SelectorProvider'
        )
    }

    return context
}
