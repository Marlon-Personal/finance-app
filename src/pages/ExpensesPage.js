import { Container } from 'react-bootstrap';
import AddExpense from '../components/AddExpense';
import ExpensesList from '../components/ExpensesList';
import Navbar from '../components/Navbar';

export default function ExpensesPage() {
  return (
      <>
    <Navbar />
    <Container>
        <AddExpense />
        <ExpensesList type={'expense'} />
    </Container>
      </>
  );
}
