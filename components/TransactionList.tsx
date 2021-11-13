import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

type transactionTypes = {
  id: number
  description: string
  amount: number
}

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext)

  return (
    <div
      className={`flex flex-col h-auto pb-2.5 ${
        transactions.length === 0 ? 'hidden' : ''
      }`}
    >
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-16 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider justify-center'
                  >
                    Name
                  </th>

                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider justify-center'
                  >
                    Amount
                  </th>

                  <th scope='col' className='relative px-6 py-3'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {transactions.map((transactions: transactionTypes) => (
                  <tr key={transactions.id}>
                    <td className='px-12 py-4 whitespace-nowrap flex  mr-4'>
                      <div className='flex items-center'>
                        <div className='ml-4'>
                          <div className='text-sm font-medium text-gray-900'>
                            {transactions.description}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className='px-8 py-4 whitespace-nowrap'>
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          transactions.amount > 0
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        ${transactions.amount}
                      </span>
                    </td>

                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      <button
                        className='text-indigo-600 hover:text-indigo-900'
                        onClick={() => deleteTransaction(transactions.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionList
