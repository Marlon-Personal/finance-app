import { useExpense } from '../contexts/FinanceContext';
import { useRef, useState } from 'react';
import Select from 'react-select';
import { Form, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default function AddExpense() {
    const amountRef = useRef();
    const nameRef = useRef();
    const dateRef = useRef();
    const typeRef = useRef();

    const [openForm, setOpenForm] = useState(false);

    const openFormToggle = () => {
        setOpenForm(!openForm);
    };

    const { addExpense, options } = useExpense();

    function newExpenseSubmit(e) {


        e.preventDefault();
        addExpense({
            name: nameRef.current.value,
            amount: parseFloat(amountRef.current.value),
            date: dateRef.current.value, 
            type: typeRef.value
        })
    } 

    return (
        <>
              <Button onClick={openFormToggle}>Dropdown</Button>
      {openForm ? <Container>
        <h2>Add an expense</h2>
        <Form onSubmit={newExpenseSubmit}>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name of the expense</Form.Label>
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
          <Form.Label>Expense category</Form.Label>
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
        </Container>: null }
        </>
       
    )
}