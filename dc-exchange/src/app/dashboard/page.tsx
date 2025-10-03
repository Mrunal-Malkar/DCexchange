import { getServerSession } from "next-auth";
import Client from "./dashboardclient";
import { authProvider } from "@/lib/auth";
import { db } from "@/utils/db-provider";
import { redirect } from "next/navigation";


const session=await getServerSession(authProvider);
console.log(session?.user)
async function GetWallet(){
  const walletPublicKey=await db.solanaWallet.findFirst({
    where:{
      userId:session?.user.id
    },
    select:{
      publicKey:true
    }
    }
  )

  if(!walletPublicKey){
    return {error:"NO wallet found"}
  }

  return {error:null,walletPublicKey}
}

export default async function Dashboard(){
  
  if(!session?.user){
    redirect("/");
  }

  const Key=await GetWallet();
  if(Key.error || !Key.walletPublicKey?.publicKey){
    return <h1>No wallet found!</h1>
  }
  

  return (
    <Client publicKey={Key.walletPublicKey?.publicKey}/>
  )
}