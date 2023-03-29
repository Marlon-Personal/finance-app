import { Card, Container, Col, Row, Stack } from 'react-bootstrap';
import { useExpense } from '../contexts/FinanceContext';
import { currencyFormatter } from "../utils"

export default function TotalsCard() {

    const { expenses, incomes } = useExpense();


    const totalExpenses = expenses.reduce(function (sum, number) {
        const updatedSum = sum + number.amount;
        return updatedSum;
    }, 0);


    const totalIncomes = incomes.reduce(function (sum, number) {
        const updatedSum = sum + number.amount;
        return updatedSum;
    }, 0);

    const totalBalance = totalIncomes - totalExpenses;

    return (
        <>
            <Container>
                <Row>
                    <h2 className='mb-5'>Monthly Summary</h2>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Title className="d-flex justify-content-center align-items-baseline fw-normal mb-3">
                                <h3>Expenses Summary</h3>
                            </Card.Title>
                            <Card.Body>
                                <Stack direction='horizontal' gap="2">
                                    <p>Number of transactions: <span>{expenses.length}</span></p>
                                </Stack>
                                <Stack direction='horizontal' gap="2">
                                    <p>Total amount: <span> {currencyFormatter.format(totalExpenses)}</span></p>
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
                                    <p>Number of transactions: <span>{incomes.length}</span></p>
                                </Stack>
                                <Stack direction='horizontal' gap="2">
                                    <p>Total amount: <span>
                                    {currencyFormatter.format(totalIncomes)}</span></p>
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
                                    <p>Number of transactions: <span>{expenses.length + incomes.length}</span></p>
                                </Stack>
                                <Stack direction='horizontal' className="d-flex align-items-baseline justify-content-between">
                                    <p>Total Income: </p><span>{currencyFormatter.format(totalIncomes)}</span>
                                </Stack>
                                <Stack direction='horizontal' className="d-flex align-items-baseline justify-content-between border-bottom">
                                    <p>Total Expenses: </p><span>{currencyFormatter.format(totalExpenses)}</span>
                                </Stack>
                                <Stack direction='horizontal' className="d-flex align-items-baseline justify-content-between">
                                    <p>Total amount: </p><span>{currencyFormatter.format(totalBalance)}</span>
                                </Stack>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}