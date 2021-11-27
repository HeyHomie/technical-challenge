import React, { FunctionComponent, useState } from 'react'

const countdownCalc: (date: string) => string | undefined = (date: string) => {
  const dateUnix = new Date(date).getTime()
  const now: any = new Date()
  const dateTarget: any = new Date(dateUnix)
  const diff = now - dateTarget
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  if (days > 0) {
    return `${days} days ago`
  }
  if (hours > 0) {
    return `${hours} hours ago`
  }
  if (minutes > 0) {
    return `${minutes} minutes ago`
  }
}

export const UpdatedAtFormated: FunctionComponent<any> = ({ timeDate }) => {
  const [time] = useState(countdownCalc(timeDate))

  return <p>{time}</p>
}
