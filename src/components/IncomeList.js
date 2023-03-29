
import { Table } from 'react-bootstrap';
import { useExpense } from '../contexts/FinanceContext';
import { currencyFormatter } from "../utils"


export default function IncomeList() {

    const { incomes } = useExpense();

    return (
        <>
            <h2>List of incomes</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Transaction name</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {incomes.map((income, index) => {
                        return (
                            <>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{income.name}</td>
                                    <td>{currencyFormatter.format(income.amount)}</td>
                                    <td>{income.date}</td>
                                </tr>

                            </>
                        )
                    })
                    }
                </tbody>
            </Table>
        </>
    )
}