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





















      
  )
}

export default App
