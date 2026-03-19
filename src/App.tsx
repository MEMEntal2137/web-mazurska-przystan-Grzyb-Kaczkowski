import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [range, setRange] = useState<number>(1);
    function handleRangeChange(e: ChangeEvent<HTMLInputElement>) {

        setRange(Number(e.target.value));
    }


  
const [price, setPrice] = useState<number>(0);
    function handleSubmit(e: SyntheticEvent<HTMLFormElement>)
         {
            e.preventDefault();

            const form = e.currentTarget;

            const boat = (form.elements.namedItem("boat") as HTMLSelectElement).value;
            const kapok = (form.elements.namedItem("kapok") as HTMLInputElement).checked;
            const kurs = (form.elements.namedItem("kurs") as HTMLInputElement).checked;

            let total = 0;

            let zaGodzine = 0;

            switch (boat) {
                case "boat":
                    zaGodzine = 20;
                    break;
                case "rower":
                    zaGodzine = 35;
                    break;
                case "omega":
                    zaGodzine = 150;
                    break;
            }

            total += zaGodzine * range;

            if (kapok) total += 5;
            if (kurs) total += 50 * range;

            setPrice(total);

             alert(`Rezerwacja przyjęta!
Cena: ${total} zł
Godziny: ${range}
Transport: ${boat}
Kapok: ${kapok ? "tak" : "nie"}
Instruktor: ${kurs ? "tak" : "nie"}`);
        }

  return (
    <>
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
           <h2 id="cena">Cena: {price}</h2>
        </Organizer>
    </>

      
  )
}

export default App
