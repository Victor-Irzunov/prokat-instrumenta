import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Прокат инструмента в Минске | Аренда на выгодных условиях',
  description: 'Широкий выбор профессионального инструмента для строительства, ремонта и обслуживания. Мы предлагаем качественное оборудование по низким ценам. Выгодные условия аренды инструмента. Звоните прямо сейчас!'
}


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>

      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
