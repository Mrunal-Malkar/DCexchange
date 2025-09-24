import {db} from "@/utils/db-provider";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { Keypair } from "@solana/web3.js";
import { redirect } from "next/navigation";


const handler = NextAuth({
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

        await db.user.create({
          data: {
            name: user.name!,
            email: user.email!,
            profile: profile?.image,
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
        })
        .catch(()=>{
          alert("error in signing user in, try again later!");
          redirect("/");
          return false;
        })
        .then(()=>{
          redirect("/dashboard?welcome=true");
          return true;
        })
      }
      redirect("/dashboard");
      return true;
    },
  },
});

export { handler as GET, handler as POST };
