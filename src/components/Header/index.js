import Logo from '../../assets/logo.svg';

const Header = props => {
    return (
        <header>
            <div className="logo">
                <img
                    alt=""
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' '}<h1>Forenda</h1>
            </div>
            <nav>
                <div className="avatar">CB</div>
                <div>Merhaba,{' '}<strong>Cüneyd</strong></div>
            </nav>
        </header>
    )
}

export default Header;