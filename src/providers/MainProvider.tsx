
"use client";
import { Toaster } from '@/components/ui/sonner';
import React from 'react'


export default function MainProvider({children}:{children:React.ReactNode}) {
  return (
    <>
        {children}
        <Toaster richColors position='top-right' />
    </>
  )
}
