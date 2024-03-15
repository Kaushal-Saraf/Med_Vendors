import Header from './Components/Header'
import './globals.css'

export const metadata = {
  title: 'Med_Vendors',
  description: 'Generated by KAUSHAL SARAF',
  // viewport:{
  //   width:'device-width',
  //   // 'initial-scale':'1',
  //   // shrink-to-fit:'no',
  // }
}
export default function RootLayout({ children }) {
  return (
    <html>
      <body className='bg-blue-100'>
        <Header/>
        {children}
      </body>
    </html>
  )
}
