
import {withAuth} from 'next-auth/middleware';
export default withAuth({
  pages:{
    signIn:"/login"
  }
});

export const config ={
  matcher:[
    "/users/:path*",
    "/users/:path*",
    //**this is the protected param that only authenticated users can enter */
    
  ]
}