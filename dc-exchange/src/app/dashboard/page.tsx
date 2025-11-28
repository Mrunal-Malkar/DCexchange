import { getServerSession } from "next-auth";
import Client from "./dashboardclient";
import { authProvider } from "@/lib/auth";
import { db } from "@/utils/db-provider";
import { redirect } from "next/navigation";
import { SignInButton } from "@/components/signInButton";

const session = await getServerSession(authProvider);
console.log("hey this is the user at the frontend",session?.user);
async function GetWallet() {
  try {
    const walletPublicKey = await db.solanaWallet.findFirst({
      where: {
        user: session?.user.id,
      },
      select: {     
        publicKey: true,
      },
    });
    return { error: null, walletPublicKey };
  } catch (err) {
    return { error: err };
  }
}

export default async function Dashboard() {
  if (!session?.user) {
    redirect("/");
  }
  
  const Key = await GetWallet();
  console.log("this is the walletPublicKey:",Key.walletPublicKey);
  if (Key.error || !Key.walletPublicKey?.publicKey) {
    return (
      <div className="w-dvw h-[90dvh] flex flex-col gap-y-3 justify-center align-middle items-center">
        <h1 className="text-xl">No wallet found!</h1>
        <SignInButton/>
      </div>
    );
  }

  return <Client publicKey={Key.walletPublicKey?.publicKey} />;
}
