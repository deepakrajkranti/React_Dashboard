import React from 'react';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import './Roller.scss';
const Roller = ({data}) => {
    console.log(data[0]);
  return (
    <div className='Roller'>

      {  data.map((todo,index)=>(

        <div className="container">
            <div className="left">
             {todo.sprint}
            </div>
            <div className="center">
             {todo.status1}
            </div>
            <div className="right">
             {todo.comment}
              <div className="edit1">
                   <EditAttributesIcon />
              </div>
            </div>
        </div>

))}
    </div>
  )
}

export default Roller