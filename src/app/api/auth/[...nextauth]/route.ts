import UserApi from "@/api/UserApi";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

interface iUser {
  email: string | null | undefined;
  password: string | null | undefined;
  first_name: string | null | undefined;
  last_name: string | null | undefined;
}

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;

const VerifyUser = async (user: iUser) => {
  try {
    const api = new UserApi();
    return await api.verifyIsUser(user);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const CreateUser = async (user: iUser) => {
  try {
    const api = new UserApi();
    return await api.createUser(user);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const getSessionUser = async (userEmail: string | null | undefined) => {
  try {
    const api = new UserApi();
    const responseData = await api.getUser(userEmail);
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      // 로그인 성공 시 호출되는 콜백

      const _user = {
        email: user.email,
        password: user.id,
        first_name: user.name,
        last_name: user.name,
      };

      if (await getSessionUser(_user.email)) {
        return true;
      } else {
        if (await CreateUser(_user)) {
          return true;
        } else {
          return false;
        }
      }
      // 로그인 성공후, get user 로 유저 있는지 확인 하고, 없으면 create view 로 생성 하자
      // if (await VerifyUser(_user)) {
      //   return true;
      // } else {
      //   return false;
      // }
    },
    async redirect({ url, baseUrl }) {
      // console.log(baseUrl);
      // 로그인 후 리디렉션될 주소를 정하는 콜백
      return baseUrl;
    },
    async session({ session, token, user }) {
      // 세션 정보를 커스텀하는 콜백

      const _user = await getSessionUser(session.user?.email);

      if (!session.user) {
        session.user = {};
      }

      // session.user에 id 속성을 추가합니다.

      return session;
    },
    async jwt({ token, user, account }) {
      // JWT 토큰을 커스텀하는 콜백
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
