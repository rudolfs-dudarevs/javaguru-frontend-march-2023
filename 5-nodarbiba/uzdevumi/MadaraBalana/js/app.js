// Izveidot iepirkuma sarakstu, kurā lietotājs ar ievadlauku var ievietot kādu vērtību.
// Lai iepirkuma saraksta dati nepzustu, aizverot pārlūkprogrammu vai cilni, - tos saglabāsim localStorage.
// Katras lapas ielādē pārbaudīsim vai localStorage ir jau saglabāts iepirkumu saraksts un to attēlosim.
// Gala rezultāta paraugu apskatīt example.jpg

// Sekot uzdevuma izpildes soļiem 1. - 6.
// 7. uzdevuma solis nav obligāts, bet ieteicams.
// Veikt uzlabojumus un papildinājumus iepirkuma saraksta funkcionalitātie pēc ieskatiem
// - arī ļoti ieteicams, ja ir laiks un vēlme.

// Dotie mainigie priekš HTML elementiem:
const itemInput = document.getElementById("item-input");
const addBtn = document.getElementById("add-btn");
const shoppingListContainer = document.getElementById("shopping-list");
// Dotais mainīgais priekš iepirkumu saraksta:
let shoppingList;

// ----------------------------------------------------------------------------
// 1. Iegūstam no localStorage ierakstu(value) ar nosaukumu(key) "shoppingList"

let shoppingListAsString = localStorage.getItem("shopping-list");

// --------------------------------------------------------
// 2. ar JSON.parse() metodi pārvēršam shoppingListAsString
//    no JSON string atpakaļ uz masīvu(array).

parsedShoppingList = JSON.parse(shoppingListAsString);
// console.log(parsedShoppingList);

// Ja shoppingList nav atrasts local storage,
// tas tiek iestatīts kā tukšs masīvs, kurā saglabāt shopping list ierakstus.
if (!shoppingList) {
  // Ja shoppingList tiks atrasts localStorage, šis kods neizpildīsies,
  // jo mums jau ir masīvs ar datiem, kas iegūts no localStorage.
  shoppingList = [];
}

// ---------------------------------------
// 3. Izveidojam funkcijas loģiku, kas tiks izpildīta uz katra addBtn klikšķa.
const addToShoppingList = () => {
  // Iegūstam vērtību no input HTML elementa jeb itemInput mainīgā.
  // 3.1
  let item = itemInput.value;
  // Iestatīt itemInput.value kā tukšu string (notīrīt esošo tekstu no ievdlauka).
  // 3.2
  itemInput.value = "";

  // shoppingList masīvā ievietojam item mainīgo. Izmantot masīva push() metodi.
  // 3.3
  shoppingList.push(item);

  // Uz katra pogas klikšķa jāizsauc funkciju saveStorage() un renderShoppingList()
  // Šī funkcija saglabās iekš local storage shoppingList masīvu ka JSON
  saveStorage();
  // Šī funkcija izveidos un ievietos HTML priekš katra shoppingList masīva elementa.
  renderShoppingList();
};

// --------------------------------------------------------------------------------------
// 4. Izveidot funkcijas loģiku, lai saglabātu localStorage shoppingList masīvu kā JSON.
const saveStorage = () => {
  // Izmantojam JSON.stringify(), lai pārvērstu shoppingList masīvu JSON string formātā.
  // 4.1
  let shoppingListAsJSON = JSON.stringify(shoppingList);

  // Iekš localStorage saglabājam shoppingListAsJSON mainīgo ar nosaukumu "shoppingList"
  // 4.2
  localStorage.setItem("shoppingList", shoppingListAsJSON);
};

// ------------------------------------------------------------------
// 5. Izveidot funkcijas loģiku, lai iterētu caur shoppingList masīvu
//    un katram masīva elementam izveidotu HTML.
const renderShoppingList = (item) => {
  // String mainīgais, kurā ievietosim HTML priekš katra shoppingList masīva elementa.
  let listToRender = "";

  // 5.1 Iterēt cauri shopping list masīvam ar forEach ciklu.
  //     Katram masīva elementam izpildīt sekojošo darbību:
  //
  shoppingList.forEach((item) => {
    listToRender += `
           <li class="list-group-item">
               ${item}
           </li>
       `;
  });

  shoppingListContainer.innerHTML = listToRender;
};

// Lai shopping list no localStorage tikktu attēlots līdz ar lapas ielādi,
// izsaucam renderShoppingList() metodi.
renderShoppingList();

// -----------------------------------------------------------------------------
// 6. mainīgajam addBtn uz klikšķa notikua piesaistīt funkciju addToShoppingList
//    izmantot .addEventListener() metodi.
addBtn.addEventListener("click", addToShoppingList);

// -----------------------------------------------------------------------------
// 7. NAV OBLIGĀTI
//    7.1
//    - Izveidot funkciju clearShoppingList un pogu uz kuras klikšā tiktu iztīrīts localStorage.
//    7.2
//    - Iekš addToShoppingList funkcijas izveidot if/else nosacījumu,
//      kas pārbauda ievadlauka vērtību:
//      IF ievadlaukā ir teksts jeb tas nav tukšs string - izpildīt funkcijas saveStorage() un renderShoppingList()
//      ELSE ievadlaukā ir tukšs string jeb "" - izmantot alert() un paziņot, kas ievadlaukā jāievada vērtība.
//
//      w3schools resurss par alert():
//      https://www.w3schools.com/jsref/met_win_alert.asp
