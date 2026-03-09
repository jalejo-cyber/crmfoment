import 'jalejo-cyber/crmfoment/styles/globals.css'
import Navbar from 'jalejo-cyber/crmfoment/components/Navbar'

export default function RootLayout({ children }) {

  return (
    <html>
      <body>

        <Navbar/>

        <div className="container">
          {children}
        </div>

      </body>
    </html>
  )
}
