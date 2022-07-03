import logo_img from '../images/logo.png'

function Header() {
    return (
        <div className="header">
            <img src={logo_img}/>
            <h1>my travel journal</h1>
        </div>
    )
}
export default Header;