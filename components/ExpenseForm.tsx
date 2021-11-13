import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { GlobalContext } from '../context/GlobalState'

const ExpenseForm = () => {
  const { addTransaction } = useContext(GlobalContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => {
    const id = Math.floor(Math.random() * 100000000)
    const description = data.Description

    const amount = data.Operation === 'Expence' ? data.Amount * -1 : data.Amount

    const transaction = {
      id,
      description,
      amount: parseInt(amount),
    }
    addTransaction(transaction)
    reset()
  }
  console.log('Errors', errors)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col items-center max-w-xs mx-auto'
    >
      <input
        className='px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-200   rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full mt-5'
        type='number'
        placeholder='Amount'
        {...register('Amount', { required: true })}
      />
      <input
        className='px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-gray-200  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full mt-3'
        type='text'
        placeholder='Description'
        {...register('Description', { required: true })}
      />
      <div className='flex items-center w-full justify-around'>
        <label className='text-xl font-semibold text-white '>Expense</label>
        <input
          {...register('Operation', { required: true })}
          type='radio'
          value='Expence'
        />
        <label className='text-xl font-semibold text-white '>Income</label>
        <input
          {...register('Operation', { required: true })}
          type='radio'
          value='Income'
        />
      </div>

      <button
        type='submit'
        className='transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2  focus:ring-indigo-500 mt-5'
      >
        Submit
      </button>
    </form>
  )
}

export default ExpenseForm
