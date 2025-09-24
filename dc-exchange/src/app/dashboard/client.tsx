import { useSearchParams } from "next/navigation"

const Client = () => {
    const searchParams=useSearchParams();

    if(searchParams.get("welcome")==="true"){
        
    }
  return (
    <div>Client</div>
  )
}

export default Client