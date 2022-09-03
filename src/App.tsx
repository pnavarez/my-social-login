import { Button, Stack } from "@mui/material";
import { useState } from "react";
import { auth, google, facebook, twitter, github } from "./config/firebaseConfig";
import { AuthProvider, signInWithPopup, signOut, UserCredential } from 'firebase/auth';
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<UserCredential>();

  const LoginFalse = () => (
    <>
      <Stack spacing={2}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#de5246" }}
          onClick={() => login(google)}
        >
          Login with Google
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#3b5998" }}
          onClick={() => login(facebook)}
        >
          Login with Facebook
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#00acee" }}
          onClick={() => login(twitter)}
        >
          Login with Twitter
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#000000" }}
          onClick={() => login(github)}
        >
          Login with Github
        </Button>
      </Stack>
    </>
  );

  const LoginTrue = () => (
    <>
      <Stack spacing={2} sx={{alignItems: "center"}}>
        <h1>Welcome</h1>
        <img src={user?.user.photoURL!} style={{ width: "150px", borderRadius: "100%" }} />
        <h5>Login with {user?.providerId}</h5>
        <h2>{user?.user.displayName}</h2>
        <h2>{user?.user.email}</h2>
        <h5>Last SignIn Time</h5>
        <h2>{user?.user.metadata.lastSignInTime}</h2>
        <Button variant="contained" onClick={() => logout()}>
          Logout
        </Button>
      </Stack>
    </>
  );

  const login = async (provider: AuthProvider) => {
    const res = await signInWithPopup(auth, provider);
    setIsLogin(true);
    setUser(res);
    console.log('res: ', res);
  };

  const logout = async () => {
    const res = await signOut(auth);
    setIsLogin(false);
    setUser(undefined);
    console.log('res: ', res);
  };

  return <div className="App">{isLogin ? <LoginTrue /> : <LoginFalse />}</div>;
}

export default App;
