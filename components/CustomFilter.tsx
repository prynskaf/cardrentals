import React from 'react'

interface CustomerFilter  {
  title: string;
}

  const CustomerFilter = ({title}) => {
  return (
    <div>
      <h1>CustomerFilter</h1>
      {title}
    </div>

  )
}

export default CustomerFilter