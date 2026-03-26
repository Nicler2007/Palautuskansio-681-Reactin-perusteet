import { useState, useEffect } from "react"
import axios from "axios"
import Filter from "./components/Filter"
import Countries from "./components/Countries"

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <Filter value={search} onChange={handleSearchChange} />

      <Countries
        countries={filteredCountries}
        setSearch={setSearch}
      />
    </div>
  )
}

export default App