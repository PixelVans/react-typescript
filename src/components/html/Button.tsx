type ButtonProps = {
  variant: 'primary' | 'secondary'
  content: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButton = ({ variant,  content, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      { content}
    </button>
  )
}