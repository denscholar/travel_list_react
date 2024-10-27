import React, { useState } from 'react'

const Form = ({onAddItem}) => {

  const selection = Array.from({ length: 20 }, (x, i) => i + 1);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  



  function handleSubmit(e) {
    e.preventDefault(e);
    // creat an object to hold those values eg the decription and quantity
    const newItem = { description, quantity, parked: false, id: Date.now() }

    onAddItem(newItem)

    // reset the text input

    setDescription("");
    setQuantity(1);



  }
  return (
    <div className=''>
      <form className='add-form' onSubmit={handleSubmit}>
        <h3>What do you need for your trip?</h3>

        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {selection.map((num) => <option key={num} value={num}>{num}</option>)}
        </select>

        <input type="text" placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)} />

        <button>Add</button>


      </form>

    </div>
  )
}

export default Form