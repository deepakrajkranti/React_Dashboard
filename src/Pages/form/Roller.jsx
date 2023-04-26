import React, { useState } from 'react';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import './Roller.scss';
import Layout from './Layout';
const Roller = ({data, inputFields,
  option1,
  options,
  option2,
  option3,
  onSubmitHandler,
  handleChange,}) => {
    // console.log(data[0]);
    const[formula,setformula]=useState(false);
  return (
    <div className='Roller'>

      {  data.map((todo,index)=>(

        <div className="container" key={index}>
            <div className="left">
             {todo.sprint}
            </div>
            <div className="center">
             {todo.status1}
            </div>
            <div className="right">
             {todo.comment}
              <div className="edit1" onClick={()=>setformula(!formula)}>
                   <EditAttributesIcon  />
              </div>
            </div>
            <>
            {
              formula && <Layout inputFields={data[index]} option1={option1}  options={options} option2={option2} option3={option3} onSubmitHandler={onSubmitHandler} handleChange={handleChange} />
            }
            </>
        </div>

))}
    </div>
  )
}

export default Roller