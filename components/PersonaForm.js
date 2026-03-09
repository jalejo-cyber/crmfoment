import {useState} from "react"

export default function PersonaForm({onCreated}){

  const [form,setForm] = useState({})

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()

    await fetch("/api/persones",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(form)
    })

    onCreated()
  }

  return(

    <form onSubmit={handleSubmit}>

      <input name="nom" placeholder="Nom" onChange={handleChange}/>

      <input name="cognoms" placeholder="Cognoms" onChange={handleChange}/>

      <select name="programa" onChange={handleChange}>
        <option>Impulsa’t</option>
        <option>Projecta’t</option>
      </select>

      <input name="telefon" placeholder="Telèfon" onChange={handleChange}/>

      <input name="email" placeholder="Email" onChange={handleChange}/>

      <input name="naixement" type="date" onChange={handleChange}/>

      <input name="nif" placeholder="Identificació Fiscal" onChange={handleChange}/>

      <input name="seguretat_social" placeholder="Seguretat Social" onChange={handleChange}/>

      <input name="direccio" placeholder="Direcció" onChange={handleChange}/>

      <input name="codi_postal" placeholder="Codi Postal" onChange={handleChange}/>

      <select name="estat" onChange={handleChange}>
        <option>Atur</option>
        <option>Ocupat</option>
      </select>

      <input name="feina_actual" placeholder="Feina actual (si ocupat)" onChange={handleChange}/>

      <button>Guardar</button>

    </form>

  )

}
