import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '../ui/button'
import { CiMenuBurger } from "react-icons/ci";
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import NavItems from './NavItems';

const NavMobile = () => {
  return (
    <nav className='md:hidden'>
        <Sheet>
            <SheetTrigger className=' align-middle text-lg cursor-pointer'>
                <CiMenuBurger />
            </SheetTrigger>
            <SheetContent className='flex flex-col bg-white gap-6 md:hidden'>
                <Image 
                    src={'/assets/images/logo.svg'}
                    alt='logo'
                    height={40}
                    width={130}
                />
                <Separator className='border border-gray-100' />
                <NavItems />
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default NavMobile