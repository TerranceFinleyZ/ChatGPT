'use client'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config'
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth'
import Header from '@/components/Header'
import ActiveSlider from '@/components/ActiveSlider'


export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter()
  const userSession = sessionStorage.getItem('user');

  console.log({user})

  if (!user && !userSession){
    router.push('/sign-in')
  }


  return (
    <main>
      <div>
      <Header />
      <ActiveSlider />
      </div>
    </main>
  );
}
