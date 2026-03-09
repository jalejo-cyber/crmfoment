"use client"

import {useEffect,useState} from "react"
import {supabase} from "../../lib/supabase"
import PersonaForm from "../../components/PersonaForm"

export default function Persones(){

  const [persones,setPersones] = useState([])

  async function load(){

    const {data} = await supabase
      .from("persones")
      .select("*, programes(nom), empreses(rao_social)")

    setPersones(data)

  }

  useEffect(()=>{
    load()
  },[])

  return(

    <div>

      <h1>Persones</h1>

      <PersonaForm reload={load}/>

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
              <td>{p.nom} {p.cognoms}</td>
              <td>{p.programes?.nom}</td>
              <td>{p.empreses?.rao_social}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )
}
