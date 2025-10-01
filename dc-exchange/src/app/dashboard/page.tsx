import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Client from "./dashboardclient";

export default function Dashboard(){
  const session=getServerSession();
  
  if(!session){
    redirect("/")
  }

  return (
    <Client/>
  )
}
