import { Link } from "react-router-dom";
import {BsArrowLeft }from "react-icons/bs";

import React from 'react'

const BackButton = ({destination = '/'}) => {
  return (
    <div className="flex">
        <Link to={destination} className="rounded-md bg-yellow-400 text-green-800 px-4 py-1 w-fit">
            <BsArrowLeft className="text=2x1"/>
            Home
        </Link>
    </div>
  )
}

export default BackButton
