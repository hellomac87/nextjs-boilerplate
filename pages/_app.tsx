import { Container, AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Container>
      <GlobalStyle />
      <Component {...pageProps} />
    </Container>
  );
}
