import { Container } from 'react-bootstrap';
import AddIncome from '../components/AddIncome';
import ExpensesList from '../components/ExpensesList';
import Navbar from '../components/Navbar';

export default function IncomesPage() {
  return (
      <>
    <Navbar />
    <Container>
        <AddIncome />
        <ExpensesList type={'income'} />
    </Container>
      </>
  );
}
