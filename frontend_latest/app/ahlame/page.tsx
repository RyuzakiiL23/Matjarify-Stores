import React from 'react'
import { GiFrog } from 'react-icons/gi'

// 7awli trini ghi 3la tailwind css
// dakshi nta3 react rah sahl zerba t3elmi lih

//7awli pr l'instant tkhdmi gha b flex 
// bghiti div 7da div adiri flex 
// bghiti 7aja fo9 7aja adiri flex flex-col (bjouj)

// matalan bghiti diri tableau dyal jrane 3x3 code f div lwla
// divlwla fiha flex at7thom 7da 7ta 
// o div li wstha flex flex-col at7thom f columns

// at3elmi l items-center o justify-center 
// gap-2 olla -4 NB! katstkhdm gha fl flex
// l hover mli kadwzi souri fo9 shi 7aja 
// duration matalan duration-300 olla 500 olla 100
// ossafi laderti gha hadshi rah maygolha 7d l7d 

// ay7aja bghitiha atl9ayha f tailwind site 
// text size matalan adokhli aygolik kifash 
// ila akhirih 
// mohim ana drtlik div nta3ek lte7 diri shi jrynat tma o trinifihoum 
// dihom mn 9nt l9nt swli gpt sowli copilot essaye des trucs 

// see ya later

// div talya ankhlilik example d hover ol3ibat
// t3elmi l padding o margin as well as border

export default function Ahlame() {

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">Log in</button>
      <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200">Sign up</button>
    
    <div className="hidden bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Log in</h2>
        <form action="#" method="POST">
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="text" id="email" name="email" className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"/>
            </div>
            <div className="mb-4">
                <label  className="block text-gray-700">Password</label>
                <input type="password" id="password" name="password" className="mt-1 p-2 w-full border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"/>
            </div>
            <div className="mb-6 flex items-center">
                <input type="checkbox" id="keep-logged-in" name="keep-logged-in" className="mr-2"/>
                <label className="text-gray-700">Keep me logged in</label>
            </div>
            <button type="submit" className="w-full bg-black text-white p-2 rounded hover:bg-blue-400 transition duration-200">Log in now</button>
        </form>
        <div className="mt-4 text-xs">
            <a href="#" className="text-black hover:underline">Forgot your password?</a>
        </div>
        <div className="mt-6 text-center">
            <p className="text-gray-700">Or sign in with</p>
            <div className="flex justify-center mt-4">
                <button className="bg-red-500 text-white p-2 rounded mx-2 hover:bg-red-600 transition duration-200">Google</button>
                <button className="bg-blue-500 text-white p-2 rounded mx-2 hover:bg-blue-600 transition duration-200">Facebook</button>
                <button className="bg-blue-400 text-white p-2 rounded mx-2 hover:bg-blue-500 transition duration-200">Twitter</button>
            </div>
        </div>
    </div>
    </div>
  )
}
