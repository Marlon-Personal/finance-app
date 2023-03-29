import { useExpense } from '../contexts/FinanceContext';
import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddIncome() {
    const amountRef = useRef();
    const nameRef = useRef();
    const dateRef = useRef();

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
            <h2>Add an income fund</h2>
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
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Date of the transaction</Form.Label>
                    <Form.Control ref={dateRef} type="date" required />
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </div>
            </Form>
        </>

    )
}