"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "../../../lib/supabase"

export default function PersonaDetail(){

  const { id } = useParams()

  const [persona,setPersona] = useState(null)

  useEffect(()=>{
    load()
  },[])

  async function load(){

    const {data,error} = await supabase
      .from("persones")
      .select(`
        *,
        programes(nom),
        empreses(rao_social)
      `)
      .eq("id",id)
      .single()

    if(data) setPersona(data)

  }

  if(!persona){
    return <p>Carregant...</p>
  }

  return(

    <div>

      <h1>{persona.nom} {persona.cognoms}</h1>

      <div className="card">

        <h3>Dades personals</h3>

        <p><b>Telèfon:</b> {persona.telefon}</p>
        <p><b>Email:</b> {persona.email}</p>
        <p><b>Data naixement:</b> {persona.data_naixement}</p>
        <p><b>NIF:</b> {persona.nif}</p>
        <p><b>Seguretat Social:</b> {persona.seguretat_social}</p>
        <p><b>Direcció:</b> {persona.direccio}</p>
        <p><b>Codi Postal:</b> {persona.codi_postal}</p>

      </div>

      <div className="card">

        <h3>Situació laboral</h3>

        <p><b>Estat:</b> {persona.estat}</p>
        <p><b>Feina actual:</b> {persona.feina_actual}</p>

      </div>

      <div className="card">

        <h3>Programa</h3>

        <p>{persona.programes?.nom}</p>

      </div>

      <div className="card">

        <h3>Empresa</h3>

        <p>{persona.empreses?.rao_social}</p>

      </div>

    </div>

  )

}
