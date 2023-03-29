import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

//Creates context hook by calling the 'createContext()'
const ExpenseContext = React.createContext()

const options = [
    { value: 'food', label: 'Eating outside' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'medicine', label: 'Medicine' },
    { value: 'groceries', label: 'Groceries' },
    { value: 'cats', label: 'Cats' },
    { value: 'bills', label: 'Bills' },
    { value: 'housing', label: 'Housing' },
    { value: 'other', label: 'Other' }
  ]

//Custom hook that will return the actual incomeContext, we can create more custom hooks like this if needed
export function useExpense() {
    return useContext(ExpenseContext)
}

export const FinanceProvider = ({ children }) => {

    const [incomes, setIncomes] = useLocalStorage("incomes", []);

    function addIncome({ name, amount, date, type }) {
        setIncomes(prevIncomes => {
            return [...prevIncomes, { name, amount, date }
            ]
        })
    }

    
    const [expenses, setExpenses] = useLocalStorage("expense", []);

    function addExpense({ name, amount, date, type }) {
        setExpenses(prevExpense => {
            return [...prevExpense, { name, amount, date, type }
            ]
        })
    }


    return (
        <ExpenseContext.Provider value={{ expenses, addExpense, incomes, addIncome, options }}>
            {children}
        </ExpenseContext.Provider>
    );
}

export default FinanceProvider