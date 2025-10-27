import React from 'react'
import Nav from './components/Nav/Nav'
import Home from './components/home/Home'
import About from './components/about/About'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      
      <Nav/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App































// import { useEffect, useState } from 'react';
// import './App.css'

// function App() {

//   const [Name,setName]=useState('')
//    const [email,setEmail]=useState('')
//     const [age,setAge]=useState('')
//     const[apidata,setapidata]=useState([])
//    const url=" http://localhost:3001/user"
   
//   useEffect(() => {
//     const fetchdata = async () => {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data); // ye array of users dikhaega
//       setapidata(data)
//     };

//     fetchdata();
//   }, []);

//   const handleSubmit= async(e)=>{
//     e.preventDefault();
//     let response=await fetch(url,{
//       method:"Post",
//       body:JSON.stringify({Name,email,age})
     
//     });
//       // const data = await response.json();
//       // console.log(data);
   
//   fetchdata();
//   }


//   const handleDelete=async(id)=>{
//     let respos = await fetch(url+"/"+id,{
//       method:"delete"
//     });
//     // fetchdata();
//   }
//   return (
//     <>
//     <form>
//       <input onChange={(e)=>setName(e.target.value)} />
//        <input onChange={(e)=>setEmail(e.target.value)} />
//         <input onChange={(e)=>setAge(e.target.value)} />
//         <button onClick={handleSubmit}>submit</button>

//     </form>

//     {
//      apidata.map((item)=>(<div key={item.id}>
//         <h1>{item.Name}</h1>
//         <button onClick={()=>handleDelete(item.id)}>Delete</button>
//       </div>))
//     }
//     </>
//   )
// }

// export default App
