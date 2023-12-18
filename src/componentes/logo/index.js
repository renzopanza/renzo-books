import './style.css'
import logo from '../../imagens/logo.svg'

function Logo(){
    return (
        <div className='logo'>
            <img className='logo-img' src={logo} alt='logo'></img>
            <p>Renzo <strong>Books</strong></p>
        </div>
    )
}

export default Logo;