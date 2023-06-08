'use client'
import {
  LoginButton,
  LogoutButton,
} from "@/components/button.component";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";


const App = () => {
  const session = useSession();
  const { data: exampleData } = api.example.hello.useQuery({
    text: "world",
  },
    { refetchOnWindowFocus: false }
  );
  return (
    <div>
      {session?.data ? (
        <div>
          <LogoutButton />
          {/* <ProfileButton /> */}
          <p>Hello from {exampleData?.greeting}</p>
        </div>

      ) : (
        <div>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
export default api.withTRPC(App);


