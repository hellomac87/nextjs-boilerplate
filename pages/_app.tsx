import { AppProps } from "next/app";
import { wrapper } from "store/configureStore";
import GlobalStyle from "../styles/GlobalStyle";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);