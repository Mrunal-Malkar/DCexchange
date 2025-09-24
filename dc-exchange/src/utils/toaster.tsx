import Image from 'next/image';
import React, { JSX } from 'react'
import toastInfoInterface from './type';

const Toast = (props:toastInfoInterface) => {
    const {Message,BG,Icon}=props;
return (
        <div
            className="fixed top-2 right-2 p-4 rounded-md shadow-md flex items-center gap-x-2"
            style={{ backgroundColor: BG }}
        >
            <div className='flex items-center justify-center '>
                <Image
                height={20}
                alt='icon'
                width={20}
                src={`/icons/${Icon}.svg`}
                ></Image>
            </div>
            <p className={`text-sm font-medium ${Icon==="failed"?"text-red-600":Icon==="alert"?"text-yellow-600":Icon==="decent"?"text-blue-600":"text-green-600"}`}>
            {Message}
            </p>
        </div>
)
}

export default Toast