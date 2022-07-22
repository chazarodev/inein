import React from 'react'

const Title = ({children}) => {
  return (
    <h1 className='text-4xl font-light text-darkAccent underline decoration-lightShades my-4 text-center hover:decoration-lightAccent ease-in-out transition-all delay-75'>
        {children}
    </h1>
  )
}

export default Title