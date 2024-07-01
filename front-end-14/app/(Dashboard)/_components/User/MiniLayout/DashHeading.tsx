'use client'
import useCurrentPath from '@/app/(Dashboard)/_hooks/useCurrentPath';
import React from 'react'

export default function DashHeading() {
const path = useCurrentPath();
  return (
      <div className="h-24 w-full flex justify-between items-end p-2 my-6">
        <h1 className="text-2xl font-bold">{path}</h1>
        <div className="flex">
          <h2 className='text-gray-700 font-bold'>{path === 'Dashboard' ? '' : 'Dashboard/'}</h2>
          <h2 className='text-blue-700 font-bold'>{path}</h2>
        </div>
      </div>
  )
}
