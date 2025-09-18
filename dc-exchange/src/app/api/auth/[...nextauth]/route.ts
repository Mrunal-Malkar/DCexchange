import NextAuth from "next-auth";
import Google from "next-auth/providers/google";


const handler=NextAuth({
  providers:[
    Google({
      clientId:process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret:process.env.GOOGLE_CLIENT_SECRET ?? ""
    })
  ],
  callbacks:{
    async signIn({user,credentials,email,profile}){
      // console.log("the user:",user);
      // console.log("the credentials:",credentials);
      // console.log("the email:",email);
      // console.log("the profile:",profile);
      return true;
    }
  }
})

export {handler as GET,handler as POST}