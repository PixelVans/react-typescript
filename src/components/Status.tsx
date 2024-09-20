type StatusProps = {
    status: string
}

export const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'loading..'
    } else if (props.status === 'success') {
        message = 'Data fetched'
    }
    else if (props.status === 'error') {
        message = 'Data fetched'
    }
    return (
      <div>
    <h2>Status {message}</h2>
    
    </div>
  )
}

