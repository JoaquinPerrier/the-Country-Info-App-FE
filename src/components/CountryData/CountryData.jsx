import "./CountryData.css";

export function CountryData({ countryData, setSelectedCountryCode }) {
  console.log(countryData)
  return (
      <div className="country-data">
        <h2><u>Border countries:</u></h2>
        {countryData.commonName == "empty"?
        <p>Click in one country to search for more information...</p>
        :
        <div>
        <h2><u>Country data:</u></h2>
        <div class="country">
          <h3>{countryData.commonName}</h3>
          <h4>Border countries:</h4>
          {countryData.borders.length >= 1  ?
          <>
          {countryData.borders.map((el) => {
            return (
                <div key={el.countryCode} onClick={()=>setSelectedCountryCode(el.countryCode)} className="each-border-country">
                    <p><b>Name:</b> {el.commonName}</p>
                    <p><b>Code: </b>{el.countryCode}</p>
                </div>
            )
          })}
          </>
          :
          <p>No border countries.</p>
          }
          </div>
        </div>
        }
        
      </div>
  );
}