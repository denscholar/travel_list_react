import React from 'react'

const Form = () => {
  return (
    <div className='add-form'>
      <form action="">
        <h3>What do you need for your trip?</h3>

        <select name="" id="">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>

        <input type="text" placeholder='Item...' />

        <button>Add</button>


      </form>

    </div>
  )
}

export default Form