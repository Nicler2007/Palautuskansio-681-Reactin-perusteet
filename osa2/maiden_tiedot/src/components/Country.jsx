import Weather from "./Weather"

const Country = ({ country }) => {
  const capital = country.capital?.[0]

  return (
    <div>
      <h2>{country.name.common}</h2>

      <p>capital {capital}</p>
      <p>area {country.area}</p>

      <h3>languages</h3>
      <ul>
        {Object.values(country.languages || {}).map(lang => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <img
        src={country.flags.png}
        alt={`flag of ${country.name.common}`}
        width="150"
      />

      <Weather capital={capital} />
    </div>
  )
}

export default Country