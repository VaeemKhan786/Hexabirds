import React, { useState } from "react";
export default function SideNav() {
  const [opne,setOpne]=useState(false)
  function toggelopne(){
    setOpne(true)
    
  }
  return (
  <>
      <div className="flex items-center justify-between">
      <button onClick={toggelopne} className="text-base font-medium font-inter ">Ratings</button>
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.70701 7.70698C7.51948 7.89445 7.26517 7.99976 7.00001 7.99976C6.73484 7.99976 6.48054 7.89445 6.29301 7.70698L0.636007 2.04998C0.540497 1.95773 0.464315 1.84739 0.411906 1.72538C0.359497 1.60338 0.331911 1.47216 0.330757 1.33938C0.329603 1.2066 0.354905 1.07492 0.405186 0.952023C0.455467 0.829127 0.52972 0.717474 0.623612 0.623581C0.717505 0.529689 0.829157 0.455436 0.952053 0.405155C1.07495 0.354874 1.20663 0.329572 1.33941 0.330726C1.47219 0.33188 1.60341 0.359466 1.72541 0.411875C1.84742 0.464284 1.95776 0.540466 2.05001 0.635976L7.00001 5.58598L11.95 0.635976C12.1386 0.453818 12.3912 0.353024 12.6534 0.355302C12.9156 0.357581 13.1664 0.46275 13.3518 0.648158C13.5372 0.833566 13.6424 1.08438 13.6447 1.34658C13.647 1.60877 13.5462 1.86137 13.364 2.04998L7.70701 7.70698Z"
          fill="black"
        />
      </svg>
    </div>
{opne&&(
  <h1>
    jheldfjds
  </h1>
)}
  </>
  );
}
