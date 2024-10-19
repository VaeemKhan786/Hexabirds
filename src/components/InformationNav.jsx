import React from 'react'
import { DownloadInocn, ShareInocn } from './Icon'

export default function InformationNav() {
  return (
    <>

    <nav className='flex items-center justify-between'>
     <p className='text-sm lg:text-base font-outfit'>Information Technology  {'>'} Website Development</p>
     <div className='flex items-center gap-5'>
        <div className='flex items-center gap-[10px]'>
            <DownloadInocn/>
            <p  className='text-sm lg:text-base font-outfit'>Download Certificate</p>
        </div>
        <div className='flex items-center gap-[10px]'>
            <ShareInocn/>
            <p  className='text-sm lg:text-base font-outfit'>Share this course</p>
        </div>
     </div>
     </nav>

    </>
  )
}
