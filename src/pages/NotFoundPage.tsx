import React from 'react'
import { Link } from 'react-router'
function NotFoundPage() {
  return (
    <><div className='flex flex-col gap-2'>
       <p>404 Not Found </p>
        <Link to="/">Home from Link</Link>
      
    </div>
       
    </>
  )
}

export default NotFoundPage