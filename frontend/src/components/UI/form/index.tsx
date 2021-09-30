import React, { useState, useEffect } from 'react'
import useDebounce from 'hooks/useDebounce'
import { useGQLMutation } from 'hooks/useGQL'
import { importUser } from 'helpers/mutations'

import { Loader } from 'components/UI'

// Styles
import * as styles from './styles'

const Form: React.FC<IForm> = ({ action }) => {
  const [loading, setLoading] = useState(false)
  const [queryData, setQueryData] = useState('')
  const { mutate, status } = useGQLMutation(importUser, {
    login: queryData
  })

  useDebounce(
    () => {
      action()
      setLoading(false)
    },
    500,
    [status]
  )

  useEffect(() => {
    if (status === 'success') {
      console.log('running')
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
    setLoading(true)
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <p className={styles.TITLE}>Add a new Developer to the database</p>
          <form
            onSubmit={(e) => {
              handleSubmit(e)
            }}
            className={styles.FORM}>
            <div className={styles.CONTAINER}>
              <input
                className={styles.INPUT}
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
                className={styles.BUTTON}
                type="button">
                Import Data
              </button>
            </div>
          </form>
        </>
      )}
    </>
  )
}

export default Form
