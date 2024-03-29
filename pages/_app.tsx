import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId="KKwUDOUCS2mx3VlfHDMKHsr3mlz1WCNdxMGfvDmn"
      serverUrl="https://c7dag6ixg0mk.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
