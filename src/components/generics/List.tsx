type ListProps<T> = {
    items: T[]
    onClick: (value: string ) => void
  }
  
  export const List = <T extends { id: number, name: string }>({
    items,
    onClick
  }: ListProps<T>) => {
    return (
      <div>
        <h2>List of items</h2>
        {items.map(item => {
          return (
            <div key={item.id} onClick={() => onClick(item.name)}>
              {item.id}
            </div>
          )
        })}
      </div>
    )
  } 