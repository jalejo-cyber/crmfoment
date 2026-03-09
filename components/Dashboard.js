"use client"

import {useEffect,useState} from "react"
import {supabase} from "jalejo-cyber/crmfoment/lib/supabase"

export default function Dashboard(){

  const [stats,setStats] = useState({
    persones:0,
    empreses:0
  })

  useEffect(()=>{

    async function load(){

      const {count:persones} = await supabase
        .from("persones")
        .select("*",{count:"exact",head:true})

      const {count:empreses} = await supabase
        .from("empreses")
        .select("*",{count:"exact",head:true})

      setStats({
        persones,
        empreses
      })

    }

    load()

  },[])

  return(
    <div className="grid">

      <div className="card">
        <h2>Persones</h2>
        <h1>{stats.persones}</h1>
      </div>

      <div className="card">
        <h2>Empreses</h2>
        <h1>{stats.empreses}</h1>
      </div>

    </div>
  )
}
