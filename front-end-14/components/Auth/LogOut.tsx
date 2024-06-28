'use client';
import React from 'react'

export default function LogOut() {
    const logOut = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/logout`, {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <div>
        <button>Log Out</button>
    </div>
  )
}
