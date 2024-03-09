import React from 'react'

function AddInventory() {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(false);
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
    <div>
      <h1>add</h1>
    </div>
  )
}

export default AddInventory
