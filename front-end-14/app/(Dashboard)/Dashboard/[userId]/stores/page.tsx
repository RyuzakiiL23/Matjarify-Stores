import React from 'react'
import DashHeading from '@/components/User/MiniLayout/DashHeading';

function Page({ params }: { params: { userId: string } }) {
  const page = "Stores";
  return (
    <div className="bg-red-300 flex-grow ml-80 px-20">
      <DashHeading page={page}/>
    </div>
  );
} 
  export default Page