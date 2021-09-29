import React from 'react'

const Form = () => {
  return (
    <form className="w-full max-w-sm">
      <div className="flex items-center border-b border-gray-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="MarioDena"
          aria-label="Github Username"
        />
        <button
          className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button">
          Load
        </button>
      </div>
    </form>
  )
}

export default Form
