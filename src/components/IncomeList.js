
import { Container, Table } from 'react-bootstrap';
import { useExpense } from '../contexts/FinanceContext';
import { currencyFormatter } from "../utils"


export default function IncomeList() {

    const { incomes } = useExpense();

    return (
        <>
        <Container className='d-flex justify-content-center flex-column align-items-center'>
            <h2 className='text-center border-bottom w-25 border-dark text-uppercase mb-4'>List of incomes</h2>
            <Table striped borderless hover size='sm'>
                <thead className='bg-black text-white'>
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
            </Container>
        </>
    )
}