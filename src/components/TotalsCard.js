
import { useEffect, useState } from 'react';
import { Card, Container, Col, Row, Stack, Button } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from 'react-router-dom';
import { useExpense } from '../contexts/FinanceContext';
import { currencyFormatter } from "../utils"

export default function TotalsCard() {

    const { expenses, incomes } = useExpense();
    const [totalBalance, setTotalBalance] = useState();

    const totalExpenses = expenses.reduce(function (sum, number) {
        const updatedSum = sum + number.amount;
        return updatedSum;
    }, 0);


    const totalIncomes = incomes.reduce(function (sum, number) {
        const updatedSum = sum + number.amount;
        return updatedSum;
    }, 0);

    const higherExpense = expenses

    useEffect(() => {
        setTotalBalance(totalIncomes - totalExpenses);
    })


    return (
        <>
            <Container>
                <Row>
                    <h2 className='my-5 text-center text-uppercase'>Monthly Summary</h2>
                </Row>
                <Row>
                    <Col>
                        <Card className='border-0 shadow'>
                            <CardHeader className='bg-dark text-white'>
                                <Card.Title className="">
                                    <h3 className='text-center'>Expenses Summary</h3>
                                </Card.Title>
                            </CardHeader>
                            <Card.Body>
                                <Stack direction='horizontal' gap="2">
                                    <p>Number of transactions: <span>{expenses.length}</span></p>
                                </Stack>
                                <Stack direction='horizontal'>
                                    <p>Total amount: <span> {currencyFormatter.format(totalExpenses)}</span></p>
                                </Stack>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-center bg-white border-0'>
                                <Link to="/expenses" className='text-danger text-decoration-none'>
                                    <Button className="rounded-0" variant="outline-danger" size='lg'>
                                        Go to expenses list
                                    </Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-0 shadow'>
                            <CardHeader className='bg-dark text-white'>
                                <Card.Title className="">
                                    <h3 className='text-center'>General Summary</h3>
                                </Card.Title>
                            </CardHeader>
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
                            <Card.Footer className='d-flex justify-content-center bg-white border-0'>
                                <Link to="/transactions" className='text-dark text-decoration-none'>
                                    <Button className="rounded-0" variant="outline-dark" size='lg'>
                                        Go to all transactions
                                    </Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-0 shadow'>
                            <CardHeader className='bg-dark text-white'>
                                <Card.Title className="">
                                    <h3 className='text-center'>Incomes Summary</h3>
                                </Card.Title>
                            </CardHeader>
                            <Card.Body>
                                <Stack direction='horizontal' gap="2">
                                    <p>Number of transactions: <span>{incomes.length}</span></p>
                                </Stack>
                                <Stack direction='horizontal' gap="2">
                                    <p>Total amount: <span>
                                        {currencyFormatter.format(totalIncomes)}</span></p>
                                </Stack>
                            </Card.Body>
                            <Card.Footer className='d-flex justify-content-center bg-white border-0'>
                                <Link to="/incomes" className='text-success text-decoration-none'>
                                    <Button className="rounded-0" variant="outline-success" size='lg'>
                                        Go to incomes list
                                    </Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}