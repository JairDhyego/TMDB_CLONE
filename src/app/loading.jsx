import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="flex justify-center">
      <Image src="spinner.svg" alt="Loading" className="h-96" />
    </div>
  );
};

export default Loading;
