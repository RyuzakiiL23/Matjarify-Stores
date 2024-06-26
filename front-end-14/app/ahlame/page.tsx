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
    <div className='pt-20 '>


        {/* div d jrane  */}
        <div className='flex text-green-600 text-4xl gap-4'>
            <div className='flex flex-col gap-2 '>
            <div><GiFrog/></div>
            <div><GiFrog/></div>
            <div><GiFrog/></div>
            </div>
            <div className='flex flex-col gap-2'>
            <div><GiFrog/></div>
            <div><GiFrog/></div>
            <div><GiFrog/></div>
            </div>
            <div className='flex flex-col gap-2'>
            <div><GiFrog/></div>
            <div><GiFrog/></div>

            <div className='hover:opacity-80 cursor-pointer duration-200 ease-in-out  mt-4 relative group '><GiFrog className='group-hover:ml-20 border border-red-500 rounded-lg p-2'/> <div className='absolute opacity-0 group-hover:opacity-100 duration-150 h-full w-full top-0 text-trdbackground p-2 mr-4'>hello</div> </div>
            </div>
        </div>


        {/* div d nta3ek  */}
        <div>

        </div>

    </div>
  )
}
