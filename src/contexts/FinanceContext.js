import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

//Creates context hook by calling the 'createContext()'
const IncomeContext = React.createContext()

//Custom hook that will return the actual incomeContext, we can create more custom hooks like this if needed
export function useIncome() {
    return useContext(IncomeContext)
}

//Creates context hook by calling the 'createContext()'
const ExpenseContext = React.createContext()

//Custom hook that will return the actual incomeContext, we can create more custom hooks like this if needed
export function useExpense() {
    return useContext(ExpenseContext)
}

export const FinanceProvider = ({ children }) => {

    const [expenses, setExpenses] = useLocalStorage("expense",[]);

    function addExpense({ name, amount, date, type }) {
        setExpenses(prevExpense => {
            return [...prevExpense, { name, amount, date, type }
            ]
        })
    }

    const [incomes, setIncomes] = useLocalStorage("income",[]);

    function addIncome({ name, amount, date }) {
        setIncomes(prevIncome => {
            return [...prevIncome, { name, amount, date }
            ]
        })
    }

    return (
        <ExpenseContext.Provider value={{incomes, addIncome, expenses, addExpense}}>
            {children}
        </ExpenseContext.Provider>
    );
}

export default FinanceProvider