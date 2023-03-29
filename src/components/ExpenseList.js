import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Select from 'react-select';
import { useExpense } from '../contexts/FinanceContext';
import { currencyFormatter } from "../utils"

export default function ExpenseList() {

    const [typeRef, setTypeRef] = useState('all');
    const { expenses, options } = useExpense();

    useEffect(() => {
        if(options.filter(option => option.value === 'all').length > 0){

        } else {
            options.push({ value: 'all', label: 'All' });
        }
      }, []);
      

    return (
        <>
           <h2>List of expenses</h2>
           <Select onChange={e => setTypeRef(e.value)} options={options.sort()} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Transaction name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        {typeRef === 'all'  &&  <th>Category</th> }
                    </tr>
                </thead>
                <tbody>
                    {typeRef === 'all' ?
                        expenses.map((expense, index) => {
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
                        }) : expenses.map((expense, index) =>{
                            if(expense.type === typeRef){
                             return (
                                <>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{expense.name}</td>
                                    <td>{expense.amount}</td>
                                    <td>{expense.date}</td>
                                </tr>
                            </>
                            )
                        }
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}