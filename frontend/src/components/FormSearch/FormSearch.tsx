import React from 'react'
import './FormSearch.css'

interface Props {
  value: string
  handleChange(e: any): any
}
export const FormSearch = ({ handleChange, value }: Props) => {
  return (
    <form className="form-search">
      <div className="search">
        <input
          className="form-control"
          type=""
          name=""
          value={value}
          placeholder="Find a respository..."
          onChange={(e: any) => handleChange(e)}
        />
      </div>
      <div>
        <a href="" className="btn">
          Type
        </a>
        <a href="" className="btn">
          Language
        </a>
        <a href="" className="btn">
          Sort
        </a>
      </div>
    </form>
  )
}
