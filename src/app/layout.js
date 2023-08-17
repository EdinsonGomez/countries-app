import { Nunito_Sans } from 'next/font/google'

const font = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Countries App',
  description: 'Show list of countries',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
