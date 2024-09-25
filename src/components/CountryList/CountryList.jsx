import "./CountryList.css";

export function CountryList({ countries,setSelectedCountryCode}) {
  return (
      <div className="all-countries">
        <h2><u>List of countries:</u></h2>
          {countries.map((el) => {
            return (
                <div key={el.countryCode} onClick={()=>setSelectedCountryCode(el.countryCode)} className="all-info">
                    <p><u>Name:</u> {el.name}</p>
                    <p><u>Code:</u> {el.countryCode}</p>
                </div>
            )
          })}
      </div>
  );
}