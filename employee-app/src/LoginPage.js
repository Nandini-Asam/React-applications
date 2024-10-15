import React ,{useState} from 'react'

export default function LoginPage(){

const [empData,setEmpData]=useState({empName:'',empId:'',empEmail:''})
const [finalData,setFinalData]=useState()
const handleDataChange=(e)=>{
   const {name,value}=e.target
   setEmpData((prev)=>({...prev,[name]:value}))
}

const handleSubmit=(e)=>{
e.preventDefault()
setFinalData([empData.empName,empData.empEmail,empData.empId])
}
{console.log(finalData)}
    return(
        <React.Fragment>
       <form className='Employee-grid' onSubmit={handleSubmit}>
        <label className='Employee-subGrid'>Employee Name:
        <input type="text" name='empName' id='empName' onChange={handleDataChange} value={empData.empName} />
        </label>
        <label className='Employee-subGrid'>Employee ID:
        <input type="text" name='empId' id='empId' onChange={handleDataChange} value={empData.empId}/>
        </label>
        <label className='Employee-subGrid'>Employee Email: 
        <input type="email" name='empEmail' id='empEmail' onChange={handleDataChange} value={empData.empEmail}/>
        </label>
        <button type="submit" className='employee-submit'>Submit</button>
       </form>
       {
        finalData &&
            finalData.map((item) => (
               <div>
                <li>{item}</li>
               </div>
            ))
      
       }
        </React.Fragment>
    )
}