import React from 'react'

type personName = {
    name: string
}

export const Person = (props:personName) => {
  return (
      <div>{props.name }</div>
  )
}

