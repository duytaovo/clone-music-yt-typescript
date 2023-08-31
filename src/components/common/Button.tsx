import classNames from 'classnames'

interface ButtonProps {
  onClick?: () => void
  className: string
  testId?: string
  type?: 'submit' | 'button' | 'reset'
  children: any
}
export const Button = ({ children, onClick, testId, className, type = 'submit' }: ButtonProps) => {
  return (
    <button
      type={type}
      data-testid={testId}
      onClick={onClick}
      className={classNames('rounded-lg bg-rose-400 p-2 text-white hover:bg-rose-600', className)}
    >
      {children}
    </button>
  )
}
