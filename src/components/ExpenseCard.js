
import { Table } from 'react-bootstrap';
import { useExpense } from '../contexts/FinanceContext';

export default function ExpenseCard() {


    const { expenses } = useExpense();


    return (
        <>
            <h2>List of transactions</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Transaction name</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {typeRef == 'all' &&
                        expenses.map((expense, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{expense.name}</td>
                                        <td>{expense.amount}</td>
                                        <td>{expense.date}</td>
                                        <td>{expense.type}</td>
                                    </tr>

                                </>
                            )
                        }
                        )}
                    {typeRef == 'income' &&
                        expenses.map((expense, index) => {
                            if (expense.type == 'income') {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{expense.name}</td>
                                            <td>{expense.amount}</td>
                                            <td>{expense.date}</td>
                                            <td>{expense.type}</td>
                                        </tr>

                                    </>
                                )
                            }
                        }
                        )}
                                  {typeRef == 'expense' &&
                        expenses.map((expense, index) => {
                            if (expense.type == 'expense') {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{expense.name}</td>
                                            <td>{expense.amount}</td>
                                            <td>{expense.date}</td>
                                            <td>{expense.type}</td>
                                        </tr>

                                    </>
                                )
                            }
                        }
                        )}
                </tbody></Table>
        </>
    )
}