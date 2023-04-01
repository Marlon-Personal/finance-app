import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <Navbar className='border-bottom border-dark'>
            <Container>
            <Link to="/" className='text-dark text-decoration-none'> <Navbar.Brand>Logo here</Navbar.Brand></Link>
                <Nav className="">
                   <Nav.Link> <Link to="/summary" className='text-dark text-decoration-none'>Summary</Link></Nav.Link>
                  <NavDropdown title="Transactions" id="basic-nav-dropdown">
                     <NavDropdown.Item>   <Link to="/incomes" className='text-dark text-decoration-none'>Incomes and earnings</Link> </NavDropdown.Item>
                       <NavDropdown.Item>
                       <Link to="/expenses" className='text-dark text-decoration-none'>   Expenses </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                        <Link to="/transactions" className='text-dark text-decoration-none'>  All transactions</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
    
                    <Nav.Link><Link to="/savings" className='text-dark text-decoration-none'>Savings</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
