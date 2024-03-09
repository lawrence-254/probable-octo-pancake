import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import { Link, useParams } from 'react-router-dom';
import {AiOutlineEdit} from 'react-icons/ai';
import{ BsInfoCircle} from 'react-icons/bs';
import  { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BackButton from '../components/BackButton';

function ViewInventory() {
  const [viewInventory, setViewInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  return (
    <div>
<h1>view</h1>
    </div>
  )
}

export default ViewInventory
