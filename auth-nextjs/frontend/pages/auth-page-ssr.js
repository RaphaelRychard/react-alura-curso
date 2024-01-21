import {tokenService} from "../src/services/auth/tokenService";
import nookies from "nookies";

function AuthPageSsr(props) {

  return (
    <>
      <div>
        <h1>Auth Page Server Side Render</h1>
        <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
      </div>
      <style global jsx>{`
        body {
          background: #202124;
          color: white;
        }
      `}</style>
    </>
  )
}

export default AuthPageSsr


export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx)
  console.log('cookies', cookies)

  return {
    props: {
      token: tokenService.get(ctx)
    }
  }
}
