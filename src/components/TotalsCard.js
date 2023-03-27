import { Card, Container, Col, Row, Stack } from 'react-bootstrap';
import { useExpense } from '../contexts/FinanceContext';

export default function TotalsCard() {

    const { expenses } = useExpense();


    const expensesArray = expenses.filter(expense => expense.type == 'expense');
    const totalExpenses = expensesArray.reduce(function (sum, number) {
        const updatedSum = sum + number.amount;
        return updatedSum;
    }, 0);


    const incomesArray = expenses.filter(expense => expense.type == 'income');
    const totalIncomes = incomesArray.reduce(function (sum, number) {
        const updatedSum = sum + number.amount;
        return updatedSum;
    }, 0);

    const totalBalance = totalIncomes - totalExpenses;

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title className="d-flex justify-content-center align-items-baseline fw-normal mb-3">
                                <h3>Expenses Summary</h3>
                            </Card.Title>
                            <Card.Body>
                                <Stack direction='horizontal' gap="2">
                                    <p>Number of transactions: <span>{expensesArray.length}</span></p>
                                </Stack>
                                <Stack direction='horizontal' gap="2">
                                    <p>Total amount: <span>
                                        {totalExpenses}</span></p>
                                </Stack>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col>
                        <Card>
                            <Card.Title className="d-flex justify-content-center align-items-baseline fw-normal mb-3">
                                <h3>Income Summary</h3>
                            </Card.Title>
                            <Card.Body>
                                <Stack direction='horizontal' gap="2">
                                    <p>Number of transactions: <span>{incomesArray.length}</span></p>
                                </Stack>
                                <Stack direction='horizontal' gap="2">
                                    <p>Total amount: <span>
                                        {totalIncomes}</span></p>
                                </Stack>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Title className="d-flex justify-content-center align-items-baseline fw-normal mb-3">
                                <h3>General Summary</h3>
                            </Card.Title>
                            <Card.Body>
                                <Stack direction='horizontal' gap="2">
                                    <p>Number of transactions: <span>{expenses.length}</span></p>
                                </Stack>
                                <Stack direction='horizontal' gap="2">
                                    <p>Total amount: <span>
                                        {totalBalance}</span></p>
                                </Stack>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}