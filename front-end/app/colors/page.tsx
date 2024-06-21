import React from 'react'

export default function page() {
  return (
    <div className='pt-32'>
        <ul>
            <li className='w-full text-blue-500 bg-background'>background</li>
            <br />
            <li className='w-full text-blue-500 bg-secbackground'>secbackground</li>
            <br />
            <li className='w-full text-blue-500 bg-trdbackground'>trdbackground</li>
            <br />
            {/* <li className='w-full text-blue-500 bg-foreground'>foreground</li> */}
            {/* <br /> */}
            <li className='w-full text-blue-500 bg-primary'>primary</li>
            <br />
            <li className='w-full text-blue-500 bg-yelyow'>yelyow</li>
            <br />
            <li className='w-full text-blue-500 bg-secondary'>secondary</li>
            <br />
            <li className='w-full text-blue-500 bg-input'>input</li>
        </ul>
    </div>
  )
}