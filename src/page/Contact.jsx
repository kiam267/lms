import axios from "axios";



export default function Contact() {

  const user = localStorage.getItem("Token");

  axios.get('http://localhost:8080/api/auth/user', {
    headers: {
      "Authorization" : user,
    }
  } ).then(res => console.log(res)).catch(err => console.log(err))
  return (
    <div>

      







      <div className="mt-5 w-3/4 block m-auto">

      </div>
    </div>
  )
}
