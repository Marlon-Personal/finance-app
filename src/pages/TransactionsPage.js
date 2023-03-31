import { Col, Container, Row } from 'react-bootstrap';
import AddExpense from '../components/AddExpense';
import AddIncome from '../components/AddIncome';
import ExpensesList from '../components/ExpensesList';
import Navbar from '../components/Navbar';

export default function TransactionsPage() {
  return (
      <>
    <Navbar />
    <Container>
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
    </Container>
      </>
  );
}
