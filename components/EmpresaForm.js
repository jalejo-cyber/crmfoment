"use client"

import { useState } from "react"
import { supabase } from "../lib/supabase"

export default function EmpresaForm({reload}){

const [form,setForm] = useState({})

function handleChange(e){

setForm({
...form,
[e.target.name]:e.target.value
})

}

async function submit(e){

e.preventDefault()

await supabase
.from("empreses")
.insert([form])

reload()

}

return(

<form onSubmit={submit} className="card">

<input
name="rao_social"
placeholder="Raó Social"
onChange={handleChange}
/>

<input
name="contacte"
placeholder="Nom contacte"
onChange={handleChange}
/>

<input
name="telefon"
placeholder="Telèfon"
onChange={handleChange}
/>

<input
name="cif"
placeholder="CIF empresa"
onChange={handleChange}
/>

<input
name="direccio"
placeholder="Direcció"
onChange={handleChange}
/>

<input
name="codi_postal"
placeholder="Codi Postal"
onChange={handleChange}
/>

<select name="mida" onChange={handleChange}>

<option value="">Mida empresa</option>
<option>1-9</option>
<option>10-49</option>
<option>50-249</option>
<option>+250</option>

</select>

<button>Guardar empresa</button>

</form>

)

}
