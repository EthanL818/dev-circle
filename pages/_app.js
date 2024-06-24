import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import {
  UserContext,
  PopularTagsProvider,
  PopularTechProvider,
} from "../lib/context";
import { useUserData } from "../lib/hooks";

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <>
      <PopularTechProvider>
        <PopularTagsProvider>
          <UserContext.Provider value={userData}>
            <Navbar />
            <Component {...pageProps} />
            <Toaster />
          </UserContext.Provider>
        </PopularTagsProvider>
      </PopularTechProvider>
    </>
  );
}

export default MyApp;
