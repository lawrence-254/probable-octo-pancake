import { Link } from "react-router-dom";
import {BsArrowLft }from "react-icons/bs";

import React from 'react'

const BackButton = ({destination = '/'}) => {
  return (
    <div className="flex">
        <Link to={destination} className="rounded-ms bg-black text-white">
            <BsArrowLft/>
            Home
        </Link>
    </div>
  )
}

export default BackButton
