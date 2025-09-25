"use client";
import { useSession } from "next-auth/react";
import Client from "./client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      console.log("status:",status)
      router.push("/?message=you%20are%20not%20signed-in/?toastType=error");
    }if(status==="authenticated"){
      if(loading===true){
        setLoading(false)
      }
    }
  }, [status, data,router,loading,setLoading,searchParams]);

  if (status === "loading" || loading === true) {
    if (loading === false) {
      setLoading(true);
    }
    return (
      <div className="w-full flex item-center justify-center h-full">
        <p className="text-gray-700 w-full h-full text-2xl flex items-center justify-center flex-row">
          Loading <span className="text-gray-700">...</span>
        </p>
      </div>
    );
  } else if (status === "unauthenticated" || !data?.user) {
    router.push("/?message=you%20are%20not%20signed-in");
    return null;
  } else if (searchParams.get("welcome") === "true" && loading===false) {
    return <Client welcome={true} />;
  }else if(status==="authenticated" && loading===false){
    return <Client />;
  }

  return <h1>Some error occured</h1>

}
