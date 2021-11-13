import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import ExpenseForm from '../components/ExpenseForm'
import TransactionList from '../components/TransactionList'
import { GlobalContext } from '../context/GlobalState'

import firebase from '../Services/firebase'

type transactionTypes = {
  id: number
  description: string
  amount: number
}

const Home = () => {
  useEffect(() => {
    const messaging = firebase.messaging()
    Notification.requestPermission()
      .then((permission) => {
        console.log('permission', permission)
        if (permission === 'granted') {
          messaging
            .getToken()
            .then((token: any) => {
              console.log('Token: ')
              console.log(token)
            })
            .catch((err: any) => {
              console.log('Error', err)
            })
        }
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  }, [])

  const [transaction, settransaction] = useState('hidden')
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(
    (transaction: transactionTypes) => transaction.amount
  )
  const totalamount = amounts
    .reduce((acc, amount) => acc + amount, 0)
    .toFixed(2)

  const totalincome = amounts
    .filter((item) => item > 0)
    .reduce((acc, amount) => acc + amount, 0)
    .toFixed(2)
  const totalexpence = amounts
    .filter((item) => item < 0)
    .reduce((acc, amount) => acc + amount, 0)
    .toFixed(2)

  return (
    <>
      <div className='bg-gray-700 min-h-screen '>
        <Head>
          <title>Exprnse Tracker App</title>
          <meta
            name='description'
            content='Expense Tracker App Built for calculating Expenses'
          />
          <link rel='icon' href='/favicon.ico' />
          <link rel='manifest' href='/manifest.json' />
        </Head>

        <div className='font-mono pt-8  font-black text-4xl min-w-full'>
          <h1 className='flex justify-center text-white underline '>
            Expense Tracker
          </h1>
          <div className='flex justify-evenly  mt-10 items-center'>
            <div className='flex'>
              <h2 className='text-white underline '>Expense</h2>
              <span className='text-white'>:${totalexpence}</span>
            </div>
            <div className='flex'>
              <h2 className='text-white underline '>Income</h2>
              <span className='text-white'>:${totalincome}</span>
            </div>
          </div>
          <div className='flex justify-evenly  mt-10 items-center flex-col'>
            <div className='flex'>
              <h2 className='text-white underline '>Balance</h2>
              <span className='text-white'>:${totalamount}</span>
            </div>
            <div>
              <button
                type='button'
                onClick={() =>
                  transaction === 'hidden'
                    ? settransaction('')
                    : settransaction('hidden')
                }
                className=' mt-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2  focus:ring-indigo-500'
              >
                {`${transaction === 'hidden' ? 'Add' : 'Cancel'}`}
              </button>
            </div>
          </div>
          <div className='mt-5 mx-auto max-w-6xl border-t border-gray-300' />
          <div className={`${transaction}`}>
            <ExpenseForm />
            <div className='mt-5 mx-auto max-w-6xl border-t border-gray-300' />
          </div>
        </div>
        <div className='mt-5 mx-auto max-w-md'>
          <TransactionList />
        </div>
      </div>
    </>
  )
}

export default Home
