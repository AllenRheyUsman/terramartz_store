"use client";

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const SignOut = () => {
  return (
    <div>  <Link href={"/Nopage"}>
    <button onClick={()=>signOut}>
        sign Out
    </button>
  </Link></div>
  )
}

export default SignOut