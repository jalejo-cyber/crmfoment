"use client"

import {useState,useEffect} from "react"
import {supabase} from "crmfoment/lib/supabase"

export default function PersonaForm({reload}){

  const [form,setForm] = useState({})
  const [programes,setProgrames] = useState([])
  const [empreses,setEmpreses] = useState([])

  useEffect(()=>{

    load()

  },[])

  async function load(){

    const {data:p} = await supabase.from("programes").select("*")
    const {data:e} = await supabase.from("empreses").select("*")

    setProgrames(p)
    setEmpreses(e)

  }

  function handleChange(e){

    setForm({
      ...form,
      [e.target.name]:e.target.value
    })

  }

  async function submit(e){

    e.preventDefault()

    await supabase
      .from("persones")
      .insert([form])

    reload()

  }

  return(

    <form onSubmit={submit}>

      <input name="nom" placeholder="Nom" onChange={handleChange}/>

      <input name="cognoms" placeholder="Cognoms" onChange={handleChange}/>

      <input name="telefon" placeholder="Telèfon" onChange={handleChange}/>

      <input name="email" placeholder="Email" onChange={handleChange}/>

      <select name="programa_id" onChange={handleChange}>

        <option>Programa</option>

        {programes.map(p=>(
          <option value={p.id}>{p.nom}</option>
        ))}

      </select>

      <select name="empresa_id" onChange={handleChange}>

        <option>Empresa</option>

        {empreses.map(e=>(
          <option value={e.id}>{e.rao_social}</option>
        ))}

      </select>

      <button>Guardar</button>

    </form>

  )
}
