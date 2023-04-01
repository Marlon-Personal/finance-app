import { useExpense } from '../contexts/FinanceContext';
import { useRef, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function AddIncome() {
    const amountRef = useRef();
    const nameRef = useRef();
    const dateRef = useRef();

    const [openForm, setOpenForm] = useState(false);

    const openFormToggle = () => {
        setOpenForm(!openForm);
    };

    const { addIncome } = useExpense();

    function newIncomeSubmit(e) {
        e.preventDefault();
        addIncome({
            name: nameRef.current.value,
            amount: parseFloat(amountRef.current.value),
            date: dateRef.current.value
        })
    }

    return (
        <>
            <Container className='d-flex flex-column justify-content-center align-items-center'>
                {openForm ? null : <Row className='w-25'><Button size='lg' className="rounded-0 my-5" variant="dark" onClick={openFormToggle}><span>Open Incomes Form</span></Button></Row>}
                {openForm ? <Row className="shadow p-3 my-5 rounded-0  bg-dark text-white">
                    <Col className="d-flex justify-content-end">
                        <AiFillCloseCircle className='h3 text-muted' onClick={openFormToggle} />
                    </Col>
                    <h2 className='text-center h2 mb-4'>Add an income fund</h2>
                    <Form onSubmit={newIncomeSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name of the transaction</Form.Label>
                            <Form.Control ref={nameRef} type="text" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="max">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                ref={amountRef}
                                type="number"
                                required
                                min={0}
                                step={0.01}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Date of the transaction</Form.Label>
                            <Form.Control ref={dateRef} type="date" required />
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center" controlId="submit">
                            <Button className='rounded-0 my-3' variant="outline-light" type="submit">
                                Add a fund
                            </Button>
                        </Form.Group>

                    </Form>
                </Row> : null}
            </Container>

        </>

    )
}