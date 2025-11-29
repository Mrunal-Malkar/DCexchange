// import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { Keypair } from "@solana/web3.js";
import { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "@/utils/db-provider";
// import { PrismaClient } from "@prisma/client";

// const prisma=new PrismaClient;
async function getUserId(providerAccountId:string|undefined){
  const userId=await db.user.findFirst({
          where:{
            sub:providerAccountId
          },select:{
            id:true
          }
        });
  return userId;
}

export const authProvider: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    jwt({ token, user,account }) {
      if (user) {
        const userId=getUserId(account?.providerAccountId);
        token.id = userId;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        console.log("this is the token id at the backend", token.id);
        session.user.id = token.id as string;
      }
      return session;
    },
    async signIn({ user, account }) {
      if (account?.provider != "google") {
        return false;
      }
      const existingUser = await db.user.findFirst({
        where: { email: user.email! },
      });
      if (!existingUser) {
        const solKeyPair = Keypair.generate();
        const inrKeyPair = Keypair.generate();
        const solanaPublicKey=solKeyPair.publicKey.toBase58();
        const solanaPrivateKey=Buffer.from(solKeyPair.secretKey).toString("base64");
        const inrWalletPublicKey=inrKeyPair.publicKey.toBase58();
        const inrWalletPrivateKey=Buffer.from(inrKeyPair.secretKey).toString("base64");
        try {
          await db.user.create({
            data: {
              name: user.name!,
              email: user.email!,
              profile: user.image,
              provider:account?.provider,
              sub:account?.providerAccountId,
              solanaWallet: {
                create: {
                  publicKey:solanaPublicKey,
                  privateKey:solanaPrivateKey,
                },
              },
              inrWallet: {
                create: {
                  publicKey: inrWalletPublicKey,
                  privateKey:inrWalletPrivateKey,
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
  },
  // adapter: PrismaAdapter(prisma),
};
