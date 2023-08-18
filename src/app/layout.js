import { Nunito_Sans } from 'next/font/google';
import { config } from "@fortawesome/fontawesome-svg-core";

import '../styles/global.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Header from "../components/header/Header";
import Filters from 'src/components/filters/Filters';

config.autoAddCss = false;

const font = Nunito_Sans({
  subsets: ['latin']
})

export const metadata = {
  title: 'Countries App',
  description: 'Show list of countries',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main>
          <Filters />
          {children}
        </main>
      </body>
    </html>
  )
}
