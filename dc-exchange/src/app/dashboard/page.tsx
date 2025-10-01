import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Client from "./dashboardclient";

export default async function Dashboard(){
  const session=await getServerSession();
  console.log("the session is:",session);
  
  if(!session){
    redirect("/")
  }

  return (
    <Client/>
  )
}
 