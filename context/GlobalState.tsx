import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

type transactionTypes = {
  id: number
  description: string
  amount: number
}

// Initial state
const initialState = {
  transactions: [],
  deleteTransaction(id: number) {},
  addTransaction(transactions: transactionTypes) {},
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  function deleteTransaction(id: number) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    })
    console.log('This is inside function delete')
  }
  function addTransaction(transaction: transactionTypes) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
