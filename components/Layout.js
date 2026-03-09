import Link from "next/link"

export default function Layout({children}){

  return(
    <>
      <header>
        <nav>
          <Link href="/">Dashboard</Link>
          <Link href="/persones">Persones</Link>
          <Link href="/empreses">Empreses</Link>
          <Link href="/programes">Programes</Link>
        </nav>
      </header>

      <div className="container">
        {children}
      </div>
    </>
  )
}
