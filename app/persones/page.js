"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { supabase } from "../../lib/supabase"
import PersonaForm from "../../components/PersonaForm"

export default function Persones(){

  const [persones,setPersones] = useState([])

  async function load(){

    const {data} = await supabase
      .from("persones")
      .select(`
        *,
        programes(nom),
        empreses(rao_social)
      `)

    setPersones(data || [])

  }

  useEffect(()=>{
    load()
  },[])

  return(

    <div>

      <h1>Persones</h1>

      <div className="card">
        <PersonaForm reload={load}/>
      </div>

      <div className="card">

        <table>

          <thead>
            <tr>
              <th>Nom</th>
              <th>Programa</th>
              <th>Empresa</th>
            </tr>
          </thead>

          <tbody>

            {persones.map(p=>(
              <tr key={p.id}>

                <td>
                  <Link href={`/persones/${p.id}`}>
                    {p.nom} {p.cognoms}
                  </Link>
                </td>

                <td>{p.programes?.nom}</td>

                <td>{p.empreses?.rao_social}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>

  )

}
