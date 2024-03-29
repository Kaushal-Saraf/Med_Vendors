import { Toaster } from 'react-hot-toast'
import Header from './Components/Header'
import './globals.css'

export const metadata = {
  title: 'Med_Vendors',
  description: 'Generated by KAUSHAL SARAF',
}
export default function RootLayout({ children }) {
  return (
    <html>
      <body className='bg-blue-100'>
        <Toaster position='top-right'/>
        <Header/>
        {children}
      </body>
    </html>
  )
}
