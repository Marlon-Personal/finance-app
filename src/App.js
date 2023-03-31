
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import './App.css';
import AddIncome from './components/AddIncome';
import AddExpense from './components/AddExpense';
import ExpensesList from './components/ExpensesList';
import TotalsCard from './components/TotalsCard';
import NavBar from './components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SummaryPage from './pages/SummaryPage';
import TransactionsPage from './pages/TransactionsPage';
import SavingsPage from './pages/SavingsPage';
import NotFoundPage from './pages/NotFoundPage';
import IncomesPage from './pages/IncomesPage';
import ExpensesPage from './pages/ExpensesPage';

function App() {

  return (
    <>
    <BrowserRouter>
        <div className='overflow-hidden'>
          <Routes>
            <Route path="/" element={<SummaryPage />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/transactions" element={<TransactionsPage />} />

            <Route path="/incomes" element={<IncomesPage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/savings" element={<SavingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
    </BrowserRouter>
    </>
  );
}

export default App;
