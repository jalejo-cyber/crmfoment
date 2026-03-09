import Layout from "../components/Layout"

export default function Home(){

  return(
    <Layout>
      <h1>CRM Foment</h1>

      <div className="card">
        <h2>Gestió CRM</h2>

        <p>Aquesta és la beta del CRM per gestionar:</p>

        <ul>
          <li>Persones</li>
          <li>Empreses col·laboradores</li>
          <li>Programes (Impulsa’t / Projecta’t)</li>
        </ul>

      </div>
    </Layout>
  )
}
