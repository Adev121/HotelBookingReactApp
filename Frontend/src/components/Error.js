import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Oops! Something went wrong.</h1>
            <p>Check-in and check-out dates are required.</p>
            <Link to="/">
                <button className="btn btn-primary">Go Back to Home</button>
            </Link>
        </div>
    </div>
  )
}

export default Error
