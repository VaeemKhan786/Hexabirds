import React from 'react'
import Card from './Card';
export default function AllCard({OneCard}) {
    
  return (
    <>
   
   
        <div className="flex items-center justify-between flex-wrap mx-[-12px]">
         <Card AllCard={OneCard}/>
        </div>
    </>
  )
}
