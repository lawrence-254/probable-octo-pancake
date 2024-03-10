import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import{ BsInfoCircle} from 'react-icons/bs';
import  { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

function Home() {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5000/inventory')
        .then((response) => {
            setInventory(response.data.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setLoading(false);
        });
    }, []);
  return (
    <div className="p4">
        <div className="flex justify-between items-center">
            <h1 className='text-3x1 my-8'>Inventory List</h1>
            <Link to='/inventory/add'>
                <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'>
                    <MdOutlineAddBox size={20} />
                    Add Inventory
                </button>
            </Link>
        </div>
        {loading ? ( <Spinner />):(
            <table className='w-full border-separate border-spacing-3'>
                <thead>
                    <tr className='h-8'>
                        <th className='border border-slate-700 rounded-md text-center'>Inventory Name</th>
                        <th className='border border-slate-700 rounded-md text-center'>Inventory type</th>
                        <th className='border border-slate-700 rounded-md text-center'>Inventory Description</th>
                        <th className='border border-slate-700 rounded-md text-center'>Inventory Price</th>
                        <th className='border border-slate-700 rounded-md text-center'>Inventory Quantity</th>
                        <th className='border border-slate-700 rounded-md text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map((item) => (
                        <tr key={item._id}>
                            <td className='border border-slate-700 rounded-md text-center'>{item.item}</td>
                            <td className='border border-slate-700 rounded-md text-center'>{item.type}</td>
                            <td className='border border-slate-700 rounded-md text-center'>                <ul>
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul></td>
                            <td className='border border-slate-700 rounded-md text-center'>{item.price}</td>
                            <td className='border border-slate-700 rounded-md text-center'>{item.quantity}</td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                <div className="flex justify-center gap-x-4">
                                  <Link  className='text-blue-500 hover:bg-blue-800 hover:text-white hover:rounded-md ' to={`/inventory/view/${item._id}`}>
                                        <BsInfoCircle size={20} />
                                        View
                                    </Link>

                                    <Link  className='text-yellow-400 hover:bg-yellow-600 hover:text-white hover:rounded-md ' to={`/inventory/edit/${item._id}`}>
                                        <AiOutlineEdit size={20} />
                                        Edit
                                    </Link>
                                    <Link className='text-red-500  hover:bg-red-800 hover:text-white hover:rounded-md ' to={`/inventory/delete/${item._id}`}>
                                        <MdOutlineDelete size={20}  />
                                        Delete
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
  )
}

export default Home
