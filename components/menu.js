import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import Link from 'next/link';
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <header className="header">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src="static/img/facebook.png" className="icon1" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src="static/img/instagram.png" className="icon1" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img src="static/img/twitter.png" className="icon1" /></a>
                    </li>
                </ul>
                <Navbar light expand="md">
                    <Link href='/index'>
                        <a className="navbar-brand">
                            <img src="static/img/icon-mountain.png" alt="anh logo" />
                            <p className="text-menu">Tam Đảo-Travel</p>
                        </a>
                    </Link>
                    <NavbarToggler onClick={this.toggle.bind(this)} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link href='/index'>
                                    <a className="nav-link text-menu li-menu" href="#">Trang Chủ<p /></a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href='/gioithieu'>
                                    <a className="nav-link text-menu li-menu">Giới Thiệu</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href='/dichvu'>
                                    <a className="nav-link text-menu li-menu">Dịch Vụ</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href='/tintuc'>
                                    <a className="nav-link text-menu li-menu">Tin Tức</a>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href='/lienhe'>
                                    <a className="nav-link text-menu li-menu">Liên Hệ</a>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        )
    }
}
export default Menu;