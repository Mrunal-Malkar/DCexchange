import { db } from "@/utils/db-provider";
import { Keypair } from "@solana/web3.js";
import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

export const authProvider:NextAuthOptions={
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      const existingUser = await db.user.findFirst({
        where: { email: user.email! },
      });

      if (!existingUser) {
        const solKeyPair = Keypair.generate();
        const inrKeyPair = Keypair.generate();
        try {
          await db.user.create({
            data: {
              name: user.name!,
              email: user.email!,
              profile: user.image,
              solanaWallet: {
                create: {
                  publicKey: solKeyPair.publicKey.toBase58(),
                  privateKey: Buffer.from(solKeyPair.secretKey).toString(
                    "base64"
                  ),
                },
              },
              inrWallet: {
                create: {
                  publicKey: inrKeyPair.publicKey.toBase58(),
                  privateKey: Buffer.from(inrKeyPair.secretKey).toString(
                    "base64"
                  ),
                },
              },
            },
          });
        } catch (err) {
          console.log("Error creating a new user!");
          return false;
        }
      }
      return true;
    },

    jwt({token,user}){
        if(user){
            token.id=user.id;
        }
        return token;
    },
    session({session,token}){
        if(session.user){
            session.user.id=token.id as string;
        }
        return session;
    }
  },
}