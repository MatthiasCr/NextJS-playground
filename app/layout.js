import './globals.css'
import { routingHelpers } from 'lib/routingHelpers'
import Navbar from './navbar'

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="max-w-screen-2xl mx-auto">
          {children}
        </div>
      </body>
    </html >
  )
}

export default RootLayout;
