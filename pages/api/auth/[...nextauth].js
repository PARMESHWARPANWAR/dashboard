import NextAuth from "next-auth";
import * as jsonwebtoken from "jsonwebtoken";
import jwt from "jsonwebtoken";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";

//import Auth0Provider from "next-auth/providers/auth0";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
  ],

  //   theme: {
  //     colorScheme: "dark", // "auto" | "dark" | "light"
  //     brandColor: "#E8FCF3", // Hex color code
  //     logo: "D", // Absolute URL to image
  //   },

  secret: process.env.SECRET,

  session: {
    jwt: true,
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  jwt: {
    encode: ({ secret, token }) => {
      const encodedToken = jsonwebtoken.sign(token, secret, {
        algorithm: "HS256",
      });
      return encodedToken;
    },
    decode: async ({ secret, token }) => {
      const decodedToken = jsonwebtoken.verify(token, secret, {
        algorithms: ["HS256"],
      });
      return decodedToken;
    },
  },

  pages: {
    // signIn: '/api/auth/signin',  // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: '/api/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  callbacks: {
    // async signIn(user, account, profile) { return true },
    // async redirect(url, baseUrl) { return baseUrl },

    async session({ session, token }) {
      if (!session) return;
      const encodedToken = jwt.sign(token, process.env.SECRET, {
        algorithm: "HS256",
      });
      // session.tokenid = token.id;
      console.log(encodedToken, token.sub, token.email);
      session.token = encodedToken;
      session.id = token.sub;
      session.email = token.email;

      return session;
    },
    //const userServerData = fetch(...); // or some internal logic
  },

  debug: false,
});
