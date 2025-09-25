import toast, { Toaster } from "react-hot-toast";

const Client = ({welcome}:{welcome?:boolean}) => {
  if(welcome===true){
    toast.success("Welcome to DC Exchange, you are now signed-in!");
  }
  
  return (
    <div>
      <Toaster/>
      Client</div>
  )
}

export default Client