"use client"

import Link from "next/link"

export default function Navbar(){

  return(
    <div className="navbar">

      <Link href="/">Dashboard</Link>

      <Link href="/persones">Persones</Link>

      <Link href="/empreses">Empreses</Link>

      <Link href="/programes">Programes</Link>

    </div>
  )
}
