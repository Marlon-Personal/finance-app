import { useExpense } from '../contexts/FinanceContext';
import { useRef } from 'react';
import Select from 'react-select'
import { Form, Button } from 'react-bootstrap';

export default function AddIncome() {
    const amountRef = useRef();
    const nameRef = useRef();
    const dateRef = useRef();
    const typeRef = useRef();

    const { addExpense } = useExpense();

    function newIncomeSubmit(e) {
        e.preventDefault();
        addExpense({
            name: nameRef.current.value,
            amount: parseFloat(amountRef.current.value),
            date: dateRef.current.value, 
            type: typeRef.value
        })
    }

    const options = [
        { value: 'income', label: 'Income' },
        { value: 'expense', label: 'Expense' }
      ]
      

    return (
        <>
        <h2>Add a transaction</h2>
        <Form onSubmit={newIncomeSubmit}>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name of the transaction</Form.Label>
            <Form.Control ref={nameRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label>Transaction amount</Form.Label>
            <Form.Control
              ref={amountRef}
              type="number"
              required
              min={0}
              step={0.01}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
          <Form.Label>Transaction type</Form.Label>
          <Select id="incomeType" onChange={e => typeRef.value = e.value} options={options} ref={typeRef}/>
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