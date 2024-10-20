import React from "react";

function MoonPhaseCard() {
const [moonData, setMoonData] = React.useState([]);
    async function fetchMoonPhases(){
        try{
          const response = await fetch("https://moon-phase.p.rapidapi.com/basic?lat=51.4826&lon=0.0077",{
              method: "GET",
              headers: {
                  Accept: "application/json",
              }
          });
         const data = await response.json();
          setMoonData(data)
        }catch(error){
            console.error('Error fetching data', error)
        }

    }
    return (
        <div className="MoonPhaseCard-container">
            <div>
                <h3>Phase:</h3>
            </div>
            <div>
                <h3>Stage:</h3>
            </div>
            <div>
                <h3>Days until next full moon:</h3>
            </div>
            <div>
                <h3>Days until next next moon:</h3>
            </div>

        </div>
    );
}
export default MoonPhaseCard;