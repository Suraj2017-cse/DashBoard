import React from 'react';
import { FaHome, FaSearch, FaStar, FaUser } from 'react-icons/fa';

function Icon(props) {
  switch (props.type) {
    case 'home':
      return <FaHome />;
    case 'search':
      return <FaSearch />;
    case 'star':
      return <FaStar />;
    case 'user':
      return <FaUser />;
    default:
      return null;
  }
}

export {Icon};