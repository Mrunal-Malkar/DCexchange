import React from 'react';

const Loader = () => {
  return (
    <div className='h-[90dvh] flex justify-center align-middle w-full'>
    <div className="flex flex-row gap-2 self-center">
      <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce" />
      <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce [animation-delay:-.3s]" />
      <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce [animation-delay:-.5s]" />
    </div>
    </div>
  );
}

export default Loader;
