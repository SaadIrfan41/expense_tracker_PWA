type transactionTypes = {
  id: number
  description: string
  amount: number
}

const AppReducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case 'DELETE_TRANSACTION':
      console.log('this is inside App reducer')
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: transactionTypes) => transaction.id !== payload
        ),
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      }
    default:
      return state
  }
}

export default AppReducer
