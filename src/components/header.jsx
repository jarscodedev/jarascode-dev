import './header.css';
import { FaComputer } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export const Header = () => {

    const scrollToChange = () => {
        window.addEventListener('scroll', ()=>{
            let header = document.getElementsByClassName("navbar");
            header.classList.toggle("sticky", window.screenY > 0)
        })
    }

    return (
        <>
            <nav className='navbar'>
                <span>
                    <a href='/'><h2>Juan Alberto</h2></a>
                </span>

                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><Link to="/proyectos">Proyectos</Link></li>
                    <li><a href="/#sobremi">Sobre mí</a></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li className='light-dark'><FaComputer /></li>
                </ul>
            </nav>
        </>
    )
}


