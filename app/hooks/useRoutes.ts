import {useMemo} from 'react';
import { usePathname} from 'next/navigation';
import {HiChat, HiShoppingCart} from 'react-icons/hi';
import {HiArrowLeftOnRectangle, HiUsers} from "react-icons/hi2";
import {signOut} from "next-auth/react";
import useConversation from './useConversation';
import useCart from '@/hooks/use-cart';

const useRoutes =()=>{
    const pathname=usePathname();
    const {conversationId} = useConversation();
    const cart = useCart();

    const routes = useMemo(()=>[
        {
            label:'Chat',
            href: '/conversations',
            icon:HiChat,
            active:pathname === '/conversations' || !!conversationId,
            
        },
        {
            label:'Users',
            href: '/users',
            icon: HiUsers,
            active:pathname ==='/users',
            
        },
        {
            label: 'Logout',
            onClick: async () => {
                console.log('Signing out...');
              await signOut({ callbackUrl: '/' }); // Redirect to the home page after sign-out
              console.log('Sign-out completed.');
              
            },
            href: '/',
            icon: HiArrowLeftOnRectangle,
          },
        {
            label:'Cart',
            href:'/cart',
            icon: HiShoppingCart,
            active:pathname ==='/cart',
            count:cart.items.length
        },

        
          

    ],[pathname, conversationId]);
    return routes;
}
export default useRoutes