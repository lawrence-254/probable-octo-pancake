import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';

function ViewInventory() {
  const [inventory, setInventory] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/inventory/${id}`)
      .then((response) => {
        console.log('Response Data:', response.data.fetchedInventory);
        setInventory(response.data.fetchedInventory);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>View Inventory</h1>
      {loading ? (<Spinner />) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4">
          <div className="my-4">
            <span className='text-1 mr-4 text-gray-500'>Id:</span>
            <span>{inventory && inventory._id}</span>
          </div>
          <div className="my-4">
            <span className='text-1 mr-4 text-gray-500'>Item:</span>
            <span>{inventory && inventory.item}</span>
          </div>
          <div className="my-4">
            <span className='text-1 mr-4 text-gray-500'>Type:</span>
            <span>{inventory && inventory.type}</span>
          </div>
          <div className="my-4">
            <span className='text-1 mr-4 text-gray-500'>Description:</span>
            <span>
              {inventory && inventory.description ? (
                <ul>
                  {inventory.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              ) : 'N/A'}
            </span>
          </div>
          <div className="my-4">
            <span className='text-1 mr-4 text-gray-500'>Price:</span>
            <span>{inventory && inventory.price}</span>
          </div>
          <div className="my-4">
            <span className='text-1 mr-4 text-gray-500'>Quantity:</span>
            <span>{inventory && inventory.quantity}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewInventory;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Spinner from '../components/Spinner';
// import { useParams } from 'react-router-dom';
// import BackButton from '../components/BackButton';

// function ViewInventory() {
//   const [inventory, setInventory] = useState({});
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5000/inventory/${id}`);
//         console.log('Response Data:', response.data);
//         setInventory(response.data);
//       } catch (error) {
//         console.log('Error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   return (
//     <div className='p-4'>
//       <BackButton />
//       <h1 className='text-3xl my-4'>View Inventory</h1>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="flex flex-col border-2 border-sky-400 rounded-x1 w-fit p-4">
//           <DetailRow label="Id" value={inventory?._id} />
//           <DetailRow label="Item" value={inventory?.item} />
//           <DetailRow label="Type" value={inventory?.type} />
//           <DetailRow label="Description" value={renderDescription(inventory?.description)} />
//           <DetailRow label="Price" value={inventory?.price} />
//           <DetailRow label="Quantity" value={inventory?.quantity} />
//         </div>
//       )}
//     </div>
//   );
// }

// // Helper component for rendering details
// const DetailRow = ({ label, value }) => (
//   <div className="my-4">
//     <span className='text-1 mr-4 text-gray-500'>{label}:</span>
//     <span>{value || 'N/A'}</span>
//   </div>
// );

// // Helper function to render description list
// const renderDescription = (description) => (
//   description ? (
//     <ul>
//       {description.map((desc, index) => (
//         <li key={index}>{desc}</li>
//       ))}
//     </ul>
//   ) : 'N/A'
// );

// export default ViewInventory;

