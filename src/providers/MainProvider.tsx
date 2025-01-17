
"use client";
import { Toaster } from '@/components/ui/sonner';
import React, { useEffect } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { useGetSingleUserQuery } from '@/redux/api/auth/authApi';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setUser } from '@/redux/features/auth/authSlice';


export default function MainProvider({children}:{children:React.ReactNode}) {
  const dispatch=useAppDispatch()
  const {accessToken}=useAppSelector(s=>s.auth)
  const { data } = useGetSingleUserQuery(undefined, { skip: !accessToken });

  useEffect(() => {
    dispatch(setUser(data?.data));
  }, [data]);
  return (
    <>
        {children}
        <Toaster richColors position='top-right' />
        <ProgressBar
                height='4px'
                color='#f9be34'
                options={{ showSpinner: false }}
                shallowRouting
            />
    </>
  )
}
