import GlobalStyle from "../src/theme/GloabalStyle";

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp