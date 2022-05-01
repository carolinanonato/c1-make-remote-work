import { Container } from './styles'
import { IoCloseOutline } from "react-icons/io5";


export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {

    return (
        <Container isVisible={menuIsVisible}>
            <IoCloseOutline size={45} onClick={() => setMenuIsVisible(false)} />
            <nav>
                <li>Item 1  </li>
                <li>Item 1  </li>
                <li>Item 1  </li>
                <li>Item 1  </li>
            </nav>
        </Container>
    )
}