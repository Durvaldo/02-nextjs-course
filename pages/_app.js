function MyApp({ Component, pageProps }) {
  return (
    <> 
      <style>{/*css*/`
        * {
          font-family: sans-serif; 
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
