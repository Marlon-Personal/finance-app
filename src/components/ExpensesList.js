import ExpenseList from './ExpenseList';
import IncomeList from './IncomeList';

export default function ExpensesList({ type }) {

    return (
        <>
            {type === 'income' &&
                <IncomeList />
            }
            {type === 'expense' &&
                <ExpenseList />
            }
        </>
    )
}