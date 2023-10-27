import React,{useState,useEffect} from "react";
import './Dash.css'
import '../App.css'
import { useDispatch } from "react-redux";


const getDatafromLS=()=>{
  const data=localStorage.getItem('students')
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const Dashboard=()=>{

  const [students,setstudents]=useState(getDatafromLS());

  const [Name,setName]=useState('');
  const [RollNo,setRollNo]=useState('');
  const [Address,setAddress]=useState('');

  const style={
    height: "50px",
    width: "70px",
    border: "2px solid grey",
    color:"tomato",
    backgroundcolor: "red",
  }
  
  const dispatch=useDispatch();


  const handleAddstudent=(e)=>{
    e.preventDefault();
    let student={
      Name,
      RollNo,
      Address,
    }
    setstudents([...students,student]);
    setName('');
    setRollNo('');
    setAddress('');
    
    const newadd={
      Name:Name,
      RollNo:RollNo,
      Address:Address,
    }
    dispatch({type:"Add",payload:newadd});
  }

    useEffect(()=>{
      localStorage.setItem('students',JSON.stringify(students))
    },[students])

  return(
    
    <>
    <div className="heading">
     <h1>Student Management</h1>
    </div>
    
    <div className="wrapper">
     
     <div className="form-container">
      <form autoComplete="off" className="form-group" onSubmit={handleAddstudent}>
        <input type="text" className="form-control" placeholder="Name" onChange={(e)=>setName(e.target.value)} value={Name}></input>
        <br></br>
        <br></br>
        <input type="number" className="form-control" placeholder="Roll No" onChange={(e)=>setRollNo(e.target.value)} value={RollNo}></input>
        <br></br>
        <br></br>
        <input type="text" className="form-control" placeholder="Address" onChange={(e)=>setAddress(e.target.value)} value={Address}></input>
        <br>
        </br>
        <button type="submit" style={style}>Add</button>
      </form>
     </div>
     <div className="form-container">
     {students.length>0&&<>
     <div className="Table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>RollNo</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>{students.map((student)=>
        <tr>
        <td>{student.Name}</td>
        <td>{student.RollNo}</td>
        <td>{student.Address}</td>
        </tr>
        )}
       
        </tbody>
      </table>
      </div>
      </>} 
       {
        students.length<1&&<div>No students</div>
      }
      </div>
     
    </div>
    </>
  )
}

export default Dashboard