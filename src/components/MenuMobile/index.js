import { Container } from './styles'
import { IoCloseOutline } from "react-icons/io5";
import arrowUp from '../../assets/images/icon-arrow-up.svg'
import todo from '../../assets/images/icon-todo.svg'
import calendar from '../../assets/images/icon-calendar.svg'
import reminders from '../../assets/images/icon-reminders.svg'
import planning from '../../assets/images/icon-planning.svg'
import '../../index.css'


export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {

    return (
        <Container isVisible={menuIsVisible}>
            <IoCloseOutline size={45} onClick={() => setMenuIsVisible(false)} />
            <nav class="mobile-nav">
                <div className="features-section">
                    <li >Features <img className="arrow" src={arrowUp} alt="" /> </li>

                    <div className="feature-items">

                        <li><img src={todo} alt="" /> Todo List</li>
                        <li>  <img src={calendar} alt="" />   Calendar</li>
                        <li > <img src={reminders} alt="" /> Reminder</li>
                        <li> <img src={planning} alt="" /> Planning</li>
                    </div>

                </div>

                <div className="company-section">
                    <li>Company  <img className="arrow" src={arrowUp} alt="" /></li>
                    <div className='company-items'>
                        <li>History  </li>
                        <li>Our Team  </li>
                        <li>Blog  </li>
                    </div>
                </div>

                <li className='other-items'>Careers  </li>
                <li className='other-items'>About  </li>

                <li className='login-mobile'>Login</li>
                <button className='nav-register'>Register</button>


            </nav>
        </Container>
    )
}