import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '100px auto',

}
const Spinner = ({loading}) => {
  return (
    <ClipLoader 
    loading = {loading }
    cssOverride={override}
    size={20}>

    </ClipLoader>
  )
}

export default Spinner