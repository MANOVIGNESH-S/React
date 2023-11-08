import './Assets/css/style.css'
import { User2Icon } from 'lucide-react'

export const App=()=>{
  const func=()=>{
    alert("Your file is being uploaded!")
  }
  return (
    <>
      <form className="form1" onSubmit={func} >
      <h2  className = 'myclass'><center><b><i>FORM <User2Icon/></i></b></center></h2>
       <input type="text" placeholder="Name" className="fele"></input>
       <input type="email" placeholder="Email" className="fele"></input>
       <input type="text" placeholder="ID" className="fele"></input>
       <input type="password" placeholder="Password" className="fele"></input>
       <input type="number" placeholder="Number" className="fele"></input>
       <input type="submit" value="Register" className="fele1"></input>

     </form>


    </>
  )
}