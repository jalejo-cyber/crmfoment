import {useEffect,useState} from "react"
import Layout from "../components/Layout"
import PersonaForm from "../components/PersonaForm"

export default function Persones(){

  const [persones,setPersones] = useState([])

  const load = async ()=>{
    const res = await fetch("/api/persones")
    const data = await res.json()
    setPersones(data)
  }

  useEffect(()=>{
    load()
  },[])

  return(
    <Layout>

      <h1>Persones</h1>

      <div className="card">
        <PersonaForm onCreated={load}/>
      </div>

      <div className="card">

        <table>

          <thead>
            <tr>
              <th>Nom</th>
              <th>Programa</th>
              <th>Telèfon</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>

            {persones.map(p=>(
              <tr key={p.id}>
                <td>{p.nom} {p.cognoms}</td>
                <td>{p.programa}</td>
                <td>{p.telefon}</td>
                <td>{p.email}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </Layout>
  )
}
