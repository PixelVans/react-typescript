import React, { ReactNode } from 'react'

type HeadingProps = {
    children: ReactNode
}
export const Heading = (props: HeadingProps) => {
  return (
    <div>{props.children}</div>
  )
}

