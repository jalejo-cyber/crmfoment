"use client"

import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabase"

export default function Programes() {

  const [programes,setProgrames] = useState([])

  useEffect(()=>{
    load()
  },[])

  async function load(){

    const {data} = await supabase
      .from("programes")
      .select("*")

    setProgrames(data || [])

  }

  return (

    <div>

      <h1>Programes</h1>

      <table>

        <thead>
          <tr>
            <th>Nom</th>
          </tr>
        </thead>

        <tbody>

          {programes.map(p => (
            <tr key={p.id}>
              <td>{p.nom}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )
}
