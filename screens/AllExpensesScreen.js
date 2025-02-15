import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ExpenseList from "../components/ExpenseList";


export default function AllExpensesScreen(){
    const expenses = useSelector(state => state.expenses);
    const dispatch = useDispatch();

    return (
        <>
        <Text>ALL EXPENSES</Text>
        <ExpenseList expenses={expenses}/>
        </>
    )
}