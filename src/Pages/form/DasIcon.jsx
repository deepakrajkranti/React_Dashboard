import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './DasIcon.scss';
const DasIcon = () => {
  return (
    <div className='icon1'>
       <div className="top">
         <PersonAddIcon/>
         <div className="name">
            User1
         </div>
         <div className="details">
            Employee Details
         </div>
       </div>
       <div className="bottom">
           <button className="order-no">
                 AED118902E3
           </button>
       </div>   
    </div>
  )
}

export default DasIcon