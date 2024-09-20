import React from 'react'

type ButtonProps = {
    handleclick: (event: React.MouseEvent<HTMLButtonElement>)=> void
}
export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.handleclick}>Click</button>
  )
}

