import UserInfo from '@/components/UserProfile/UserInfo'
import UserProfile from '@/components/UserProfile/UserProfile'
import React from 'react'

export default function page() {
  return (
    <div className='pt-10 sm:p-20 p-20 px-2 min-h-screen xs:px-4'>
      <UserProfile />
      <UserInfo />
    </div>
  )
}
