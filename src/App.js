
import { Container } from 'react-bootstrap';
import './App.css';
import AddIncome from './components/AddIncome';
import ExpenseCard from './components/ExpenseCard';
import TotalsCard from './components/TotalsCard';


function App() {

  return (
    <Container>
    <div className="App">
        <AddIncome />
        <ExpenseCard />
        <TotalsCard />
    </div>
    </Container>
  );
}

export default App;
