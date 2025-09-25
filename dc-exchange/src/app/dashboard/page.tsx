"use client";
import {useSession } from "next-auth/react";
import Client from "./client";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

export default function Dashboard(){
    const searchParams=useSearchParams();

    const session= useSession();
    const router=useRouter();

    if(session.status==="unauthenticated" || !session.data?.user){
        return router.push("/");
    }else if(searchParams.get("welcome")==="true"){
        return <Client welcome={true} />;
    }

    return(
    <Client />
)
}