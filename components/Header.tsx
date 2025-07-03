'use client'

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs"

const Header = () => {
    const {user} = useUser()
    
  return (
    <div className= "flex items-center justify-between p-5 border-b">
        {user&&(
            <h1 className="text-2xl">
                {user?.firstName}
            {`'s`} Compendium
            </h1>
        )}

        {/*Breadcrumb*/}
        <div>
            <SignedOut>
                <SignInButton></SignInButton>
            </SignedOut>
            <SignedIn>
            <UserButton></UserButton>
            </SignedIn>
        </div>
    </div>
  )
}

export default Header