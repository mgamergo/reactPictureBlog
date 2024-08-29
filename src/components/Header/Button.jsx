import React from 'react'

function Button({
    children,
    type='button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className='',
    ...props
}) {
  return (
    <div>
      <button
        className={`${className} ${bgColor} ${textColor} px-4 py-2 rounded-lg`}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
