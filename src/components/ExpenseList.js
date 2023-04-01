import { useState, useEffect, useRef } from 'react';
import { Col, Container, Stack, Table } from 'react-bootstrap';
import Select from 'react-select';
import { useExpense } from '../contexts/FinanceContext';
import { currencyFormatter } from "../utils"

export default function ExpenseList() {

    const [dateRef, setDateRef] = useState(new Date());
    const [typeRef, setTypeRef] = useState('all');
    const { expenses, options } = useExpense();
    const [arrayFiltered, setArrayFiltered] = useState([]);

    useEffect(() => {
        if (options.filter(option => option.value === 'all').length > 0) {
        } else {
            options.push({ value: 'all', label: 'All' });
        }
    }, []);

    useEffect(() => {
        if (dateRef !== undefined) {
            let monthRef = dateRef.getMonth();
            let yearRef = dateRef.getFullYear();
            let dateTransactionFormatted;
            const arrayFilteredTemp = expenses.filter((transaction) => {
                dateTransactionFormatted = new Date(transaction.date);
                let monthTrans = dateTransactionFormatted.getMonth();
                let yearTrans = dateTransactionFormatted.getFullYear();
                if (monthTrans === monthRef && yearTrans === yearRef) {
                    return transaction;
                } else { return null }
            })
            setArrayFiltered(arrayFilteredTemp);
        } else {
            setArrayFiltered(expenses);
        }
    }, [dateRef])

    return (
        <>
            <Container className='d-flex justify-content-center flex-column align-items-center'>
                <h2 className='text-center border-bottom w-25 border-dark text-uppercase mb-4'>List of expenses</h2>
                <Stack direction='horizontal' className='d-flex justify-content-center' gap={5}>
                <Col className='d-flex align-items-end flex-column'>
                    <label className=''>Filter by date</label>
                    <input className='' onChange={e => {
                        if (e.currentTarget.value !== '') {
                            setDateRef(new Date(e.currentTarget.value).addHours(10))
                        } else {
                            setDateRef();
                        }
                    }} type="month" />
                </Col>
                <Col className=''>
                    <label className=''>Filter by category</label>
                    <Select className='w-50' onChange={e => setTypeRef(e.value)} options={options.sort()} />
                </Col>
                </Stack>
                <Table striped borderless hover size='sm'>
                    <thead className='bg-black text-white'>
                        <tr>
                            <th>#</th>
                            <th>Transaction name</th>
                            <th>Amount</th>
                            <th>Date</th>
                            {typeRef === 'all' && <th>Category</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {typeRef === 'all' ?
                            arrayFiltered.map((expense, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{expense.name}</td>
                                            <td>{currencyFormatter.format(expense.amount)}</td>
                                            <td>{expense.date}</td>
                                            <td>{expense.type}</td>
                                        </tr>

                                    </>
                                )
                            }) : arrayFiltered.map((expense, index) => {
                                if (expense.type === typeRef) {
                                    return (
                                        <>
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{expense.name}</td>
                                                <td>{currencyFormatter.format(expense.amount)}</td>
                                                <td>{expense.date}</td>
                                            </tr>
                                        </>
                                    )
                                } else {
                                    return null;
                                }
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}