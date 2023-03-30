import { Card, Row, Container } from 'react-bootstrap';
import { useExpense } from '../contexts/FinanceContext';

export default function IncomeCard() {

    const { expenses } = useExpense();

    return (
        <>
            {expenses.map(expense => {
                return (
                    <>
                        <Card key={expense.name}>
                            <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                                <div className="me-2">{expense.name}</div>
                                <div className="d-flex align-items-baseline">
                                    <p>{expense.date}</p>
                                    <p>{expense.type}</p>
                                </div>
                                <div>
                                    <strong>{expense.amount}</strong>
                                </div>
                            </Card.Title>
                        </Card>
                    </>
                )
            }
            )}

        </>
    )
}