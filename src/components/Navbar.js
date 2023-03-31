import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <Navbar className='border-bottom border-dark'>
            <Container>
            <Link to="/"> <Navbar.Brand>Logo here</Navbar.Brand></Link>
                <Nav className="">
                   <Nav.Link> <Link to="/summary">Summary</Link></Nav.Link>
                  <NavDropdown title="Transactions" id="basic-nav-dropdown">
                     <NavDropdown.Item>   <Link to="/incomes">Incomes and earnings</Link> </NavDropdown.Item>
                       <NavDropdown.Item>
                       <Link to="/expenses">   Expenses </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                        <Link to="/transactions">  All transactions</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
    
                    <Nav.Link href="#savings"><Link to="/savings">Savings</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
