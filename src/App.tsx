import './App.css'
import Organizer from "./Organizer.tsx";
import type {SyntheticEvent} from "react";

function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
  event.preventDefault();
  console.log(event.currentTarget); //
}

function App() {
  return (
    <>
        <Organizer>
          <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="nazwa"
            placeholder="Wpisz swoje imie"/>
            <br/>
            <select name="boat" id="boat">
              <option value="none"/>
              <option value="boat">Łódka</option>
              <option value="omega">Omega</option>
            </select>
            <br/>
            <label>
              Godziny
            <input
            type="range"
            name="hours"
            />
            </label>
            <br/>
            <label>
              <input
              type="checkbox"
              name="extras"
              checked={false}/>
              Extra
            </label>
            <br/>
            <label>
            <input
            type="radio"
            name="payment"
            value="paypal"/>
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
            <button type="submit">Submit</button>
          </form>
        </Organizer>
    </>
  )
}

export default App
