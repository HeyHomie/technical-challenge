import React, { useState, useEffect } from 'react'
import { useGQLMutation } from 'hooks/useGQL'
import { singleUser } from 'helpers/mutations'

const Form: React.FC<IForm> = ({ action }) => {
  const [queryData, setQueryData] = useState('')
  const { mutate, status } = useGQLMutation(singleUser, {
    login: queryData
  })

  useEffect(() => {
    if (status === 'success') {
      console.log('running')
      action()
    }
  }, [status])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryData(e.target.value)
  }

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    mutate()
  }
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e)
      }}
      className="w-full mb-6">
      <div className="flex items-center border-b border-gray-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="MarioDena"
          aria-label="Github Username"
          onChange={(e) => {
            handleChange(e)
          }}
        />
        <button
          onClick={(e) => {
            handleSubmit(e)
          }}
          className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button">
          Load
        </button>
      </div>
    </form>
  )
}

export default Form
