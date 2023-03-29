
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import AddIncome from './components/AddIncome';
import AddExpense from './components/AddExpense';
import ExpensesList from './components/ExpensesList';
import TotalsCard from './components/TotalsCard';


function App() {

  return (
    <Container>
      <div className="App">
        <Row className='my-5'>
          <TotalsCard />
        </Row>

        <Row className='my-5'>
          <Col>
            <AddIncome />
          </Col>
          <Col>
            <AddExpense />
          </Col>
        </Row>

        <Row className='my-5'>
          <Col>
            <ExpensesList type={'income'} />
          </Col>
          <Col>
            <ExpensesList type={'expense'} />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
