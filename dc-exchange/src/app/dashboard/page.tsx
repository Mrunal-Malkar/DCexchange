"use client";
import {useSession } from "next-auth/react";
import Client from "./client";
import { useRouter } from "next/router";

export default function Dashboard(){
    const session= useSession();
    const router=useRouter();

    if(session.status==="unauthenticated" || !session.data?.user){
        return router.push("/");
    }

    return(
    <Client />
)
}