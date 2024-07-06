import React from 'react'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

const override = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '100px auto',

}
const Spinner = ({loading}) => {
  return (
    <ClimbingBoxLoader 
    loading = {loading }
    cssOverride={override}
    size={20}>

    </ClimbingBoxLoader>
  )
}

export default Spinner