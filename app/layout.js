import './globals.css'
import { routingHelpers } from 'lib/routingHelpers'
import Navbar from './navbar'

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="max-w-[90rem] mx-auto">
          {children}
        </div>
      </body>
    </html >
  )
}

export default RootLayout;
