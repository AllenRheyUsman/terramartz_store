

import Link from 'next/link'; // Make sure to use 'next/link'
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href="/">
         
                <Image 
                    src="/w.png" 
                    alt="Your Logo Name" 
                    width={50}  // Adjust width as needed
                    height={50}  // Adjust height as needed
                    // className='h-15 w-15'
                   
                />
         
        </Link>
    );
}

export default Logo;
