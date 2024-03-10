import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';


function AddInventory() {

  const [item, setItem] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleInventory = ()=>{
    const data = {
      item,
      type,
      description,
      price,
      quantity
    };
    console.log(data);
    setLoading(true);
    axios.post('http://localhost:5000/inventory', data)
    .then((response) => {
      console.log(response);
      setLoading(false);
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
      alert('An error occurred. Please try again.');
    });
  }


  return (
    <div>
      < BackButton/>
      <h1 className='text-3x1 my-4'>Add Inventory</h1>
      {loading ? <Spinner /> : ''}


    <div className="flex flex-col border-2 border-sky-200 rounded-x1 w-[600px] p-4 m-auto space-y-4">
          <div className='my-4'>
            <label htmlFor='item' className='text-1 mr-4 text-gray-500'>Inventory Name:</label>
            <input
            type='text'
            id='item'
            value={item} onChange={(e) => setItem(e.target.value)}
            className='border border-slate-700 rounded-md p-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label htmlFor='type' className='text-1 mr-4 text-gray-500'>Type:</label>
            <input
            type='text'
            id='type'
            value={type}
            onChange={(e) => setType(e.target.value)}
            className='border border-slate-700 rounded-md p-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label htmlFor='description' className='text-1 mr-4 text-gray-500'>Description:</label>
            <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='border border-slate-700 rounded-md p-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label htmlFor='price' className='text-1 mr-4 text-gray-500'>Price:</label>
            <input
            type='number'
            id='price'
            value={price} onChange={(e) => setPrice(e.target.value)}
            className='border border-slate-700 rounded-md p-2 w-full'
            />
          </div>
          <div className='my-4'>
            <label htmlFor='quantity' className='text-1 mr-4 text-gray-500'>Quantity:</label>
            <input
            type='number'
            id='quantity'
            value={quantity} onChange={(e) => setQuantity(e.target.value)}
            className='border border-slate-700 rounded-md p-2 w-full'
            />
          </div>
          <div className='my-4'>
            <button
            onClick={handleInventory}
            className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'>
              Add Inventory
            </button>
          </div>
        </div>
    </div>
  )
}

export default AddInventory
