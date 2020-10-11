import { Container, AppProps } from "next/app";
import { wrapper } from "../store";
import GlobalStyle from "../styles/GlobalStyle";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Container>
      <GlobalStyle />
      <Component {...pageProps} />
    </Container>
  );
}

export default wrapper.withRedux(App);