# 📄 Dokumentacja Techniczna – Projekt "Mazurska Przystań"

**Zespół:** [Piotr Kaczkowski i Paweł Grzyb]
**Klasa:** 3 Technikum
**Data:** [20.03.2026]

## 1. Analiza wymagań klienta
(Opisz własnymi słowami, jakie funkcjonalności musiały znaleźć się w aplikacji na podstawie e-maila od klienta).
* liczenie ceny na podstawie wyborów życiowych klienta
* pokazanie ostrzeżenia o wymaganiu patentu po wybraniu Omegi
* aplikacja miała wyglądać schludnie i wyjustowana

## 2. Architektura rozwiązania
(Wyjaśnij, dlaczego zdecydowaliście się na jeden komponent App.ts i
jak podzieliliście w nim kod na sekcje).
* na górze jest backend na dole jest frontend
* jednego pliku użyliśmy dla wygody

## 3. Zarządzanie stanem (useState)
(Wypełnij poniższą tabelę wszystkimi hookami useState, których użyliście w kodzie).
* |name| |string| |przechowuje imię klienta|
* |range| |number| |przechowuje numer ilości godzin w suwaku|
* |price| |number| |odpowiada za wyświetlanie ceny|
* |omegaAlertShown| |boolean| |sprawdza czy użytkownik wybrał opcję statku Omega|

## 4. Algorytm obliczania ceny
(Opisz krok po kroku, w jaki sposób Twoja aplikacja wylicza cenę końcową.
Możesz użyć pseudokodu lub wzoru matematycznego).

Najpierw sprawdza jaki typ łódki został wybrany oraz jakie opcje dodatkowe zostały zaznaczone
total = 0,zaGodzine=0

na podstawie wybranego typu łódki przypisuje daną wartość do zmiennej "zaGodzine"

total = zaGodzine * ilość godzin, które są brane z suwaka

total += opcje dodatkowe

## 5. Layout i Stylizacja (`Flexbox`)
(Opisz, jakich właściwości `Flexbox` użyliście, aby formularz był responsywny i wyśrodkowany.
Wymień co najmniej 3 właściwości CSS).
1. `display:flex, flexDirection:row` - użyłem go, aby dzieci w bloku organizer ustawiały się w rzędach, a nie w kolumnach
2. `form{text-align:left}` -użyty, aby wszystkie labels były po lewej stronie formularza
3. `flex-wrap: wrap` - sprawia, że tekst zawija się do nowych linijek, zamiast wystawać poza bloki

## 6. Wnioski z realizacji projektu (SDLC)
(Krótka autorefleksja zespołu).
1. Piotr
* **Co było najtrudniejsze?** [Dokumentacja o 20:44]
* **Czego nowego się nauczyliście?** [Dodawanie zdjęć w typescript jest trudne]
* **Co byście zmienili, gdybyście mieli więcej czasu?** [Ogólny wygląd, może kilka zdjęć]
2. Paweł
* **Co było najtrudniejsze?** [dokumentacja po 2 godzinach pisania kodu i 3 kubkach kawy]
* **Czego nowego się nauczyliście?** [Dopiero kiedy komar usiądzie ci na jajach, zdasz sobie sprawę, że nie wszystko rozwiążesz siłą]
* **Czego nowego się nauczyliście?** [jakiś text.trim() usuwa spacje z obu stron]
* **Co byście zmienili, gdybyście mieli więcej czasu?** [swoje życie]
