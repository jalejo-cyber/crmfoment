"use client"

import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabase"
import EmpresaForm from "../../components/EmpresaForm"

export default function Empreses(){

const [empreses,setEmpreses] = useState([])

async function load(){

const {data} = await supabase
.from("empreses")
.select("*")

setEmpreses(data || [])

}

useEffect(()=>{
load()
},[])

return(

<div>

<h1>Empreses</h1>

<EmpresaForm reload={load}/>

<table>

<thead>
<tr>
<th>Raó Social</th>
<th>Contacte</th>
<th>Telèfon</th>
</tr>
</thead>

<tbody>

{empreses.map(e=>(
<tr key={e.id}>
<td>{e.rao_social}</td>
<td>{e.contacte}</td>
<td>{e.telefon}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}
