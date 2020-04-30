import { Box } from "rebass";
import { UserSession, AppConfig } from "blockstack";
import { configure, getConfig, User } from "radiks";
import React, { useEffect, useState } from "react";
import AppBar from "./subs/AppBar";
import Footer from "./subs/Footer";
import logo from "./dlakes.png";


// init app
const appConfig = new AppConfig(["store_write", "publish_data"]);
const userSession = new UserSession({ appConfig: appConfig });
configure({
  apiServer: 'http://161.189.86.182:1260',
  // apiServer: "http://localhost:1260",
  userSession,
});


const AppLayout = ({ children }) => {
  // console.log(userSession);
  const [isSingedIn, setIsSingedIn] = useState(userSession.isUserSignedIn());
  // console.log(userSession.isUserSignedIn());
  // if (userSession.isUserSignedIn()) console.log(userSession.loadUserData());
  
  // run once componentDidMount
  useEffect(() => {
    const { userSession } = getConfig();
    // console.log("effect session : ", userSession);
    const authRadiksAsync = async () => {
      // console.log("auth");
      await userSession.handlePendingSignIn().then((userData) => {
        window.history.replaceState({}, document.title, "/");
        // console.log("pending session : ", userSession);
        setIsSingedIn(true);

        // console.log(userData);
        // console.log(userSession.isUserSignedIn());
      });
      // console.log(userSession.isUserSignedIn());
      await User.createWithCurrentUser();
      console.log("create current user Success!");
    };

    if (userSession.isSignInPending()) {
      authRadiksAsync();
    }
  }, []);

  return (
    <>
      <AppBar userSession={userSession} isSingedIn={isSingedIn} logo={logo} />
      <Box
        sx={{
          width: 1000,
          px: 220,
          py: 60,
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default AppLayout;
