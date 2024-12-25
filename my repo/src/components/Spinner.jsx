import React from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = ({loading}) => {
    const ovweride = {
        display : 'block',
        margin: '100px auto',
    }
  return (
    <ClipLoader
        color='#4338cs'
        loading={loading}
        cssOverride={ovweride}
        size={150}
    />
)
}

export default Spinner