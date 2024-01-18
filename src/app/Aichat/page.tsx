import Header from '@/components/Header'; // Import the Header component
import Link from 'next/link';
import { FaRobot } from "react-icons/fa";



const Page: React.FC = () => {
  return (
    <div>
      <Header/>
      <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover ai-img'>
        <div className='p-5 text-gray-200'>
            <h2 className='text-7xl'>AI-Chat-Bot.</h2>
        </div>
      </div>
      <div className='flex items-center justify-center'>
      <Link href="https://openai.com/">
      <FaRobot className='mt-10 mb-9 p-5 text-9xl flex text-blue-600 hover:-translate-y-1 hover:scale-110 duration-300'/>
      </Link>
      </div>
    </div>
  )
}

export default Page;
