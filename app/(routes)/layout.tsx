 

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import MainToaster from '@/providers/MainToaster'
import AuthContext from '../context/AuthContext'
 
import getCurrentUser from '../actions/getCurrentUser'
import Billboard from '@/components/billboard'
import getBillboard from '@/actions/get-billboard'
import Container from "@/components/ui/container";

export default async function RootLayout({
  children,
}:Readonly<{
  children: React.ReactNode;
}>) {
  
    
  return (
   
      <div>
        <MainToaster/>
        {/* <ToastProvider /> */}
        {/* <ModalProvider /> */}
         
        <Navbar />
       
       
        
       
        <main className=' '>
         
       
          {children}.
          
      
        </main>
        <Footer />
      </div>
    
      
     
   
  )
}