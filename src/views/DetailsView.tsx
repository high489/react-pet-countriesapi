import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsView = () => {
  const { name } = useParams();

  return (
    <div>
      Country details {name}
    </div>
  );
};

export default DetailsView;