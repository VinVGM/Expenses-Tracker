

import { useAuthContext } from './useAuthContext'
import { useExpensesContext } from './useExpensesContext'
export const useLogout = () => {

    const { dispatch } = useAuthContext();
    const { dispatch: expenseDispatch } = useExpensesContext();

    const logout = () => {

        localStorage.removeItem("user")

        dispatch({type : "LOGOUT"})
        expenseDispatch({type: 'SET_EXPENSES', payload: null})
    }


    return {logout}
}
