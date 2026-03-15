import './App.css'
import Organizer from "./Organizer.tsx";
import type {SyntheticEvent} from "react";

function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
  event.preventDefault();
  //co się stanie jak zasubmitujesz?
}

function handleRangeChange() {
//co się stanie jak przesuniesz suwak?
}

function App() {
  return (
    <>
        <Organizer>
          <form onSubmit={handleSubmit}>
            <input
            type="text"
            id="nazwa"
            placeholder="Wpisz swoje imie"/>
            <br/>
            <select name="boat" id="boat">
              <option value="none">Wypożyczany transport</option>
              <option value="boat">Kajak(20zł/h)</option>
              <option value="rower">Rower wodny(35zł/h)</option>
              <option value="omega">Omega(150zł/h)</option>
            </select>
            <br/>
            <label style={{display: "flex", flexDirection: "row"}}>
              <p>Godziny</p>
            <input
            type="range"
            name="hours"
            onChange={handleRangeChange}
            step="1"
            max="8"
            min="1"
            />
              <p id="rangeId">1</p>
            </label>

            <label>
              <input
              type="checkbox"
              name="kapok"
              />
              kapok(5zł)
            </label>
            <br/>
            <label>
              <input
                  type="checkbox"
                  name="kurs"
              />
              instruktor(50zł/h)
            </label>
            <br/>
            <label>
            <input
            type="radio"
            name="payment"
            value="paypal"
            />
              PayPal
            </label>
            <br/>
            <label>
              <input
                  type="radio"
                  name="payment"
                  value="blik"/>
              Blik
            </label>
            <br/>
            <button type="submit">Rezerwuję</button>
          </form>
          <br/>
          <h2 id="cena">Cena:</h2>
        </Organizer>
    </>
  )
}

export default App
