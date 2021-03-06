// import App from 'next/app'
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../global.css';
//import 'bootswatch/dist/cosmo/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
    return ( 
    <>
        <Head>
            <title>My Portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
        </Head>
        <Component {...pageProps} />
    </>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp