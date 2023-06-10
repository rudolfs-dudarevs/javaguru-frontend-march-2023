/* 
    Šajā majasdarba izveidosim nelielu aplikāciju, kura izvadīs uz ekrāna izvēlēto suņa šķirnes bildi.
    Apkskatīt DogApiDemo.mp4 

    * plus punkti, ja izmantosim document.createElement() nevis `<option>..</option>` pieraksta viedu, lai veidotu dinamisku HTML.
    ** plus punktui, ja būs labi vizuāli noformēts.
    *** visa banka, ja būs media queries un izskatīsies labi arī uz mobilā ekrāna. 

    Izmantosim API https://dog.ceo/dog-api/
    dogBreedList.js piejams saraksts (masīvs) ar suņu šķirnēm.
    Tā kā iekš HTML dogBreedList.js ir iekļauts tieši rindiņu pirms app.js faila - šis saraksts ar suņu šķirnēm
    ir pieejams globāli. Jeb varam to izmantot šeit, iekš app.js ar tā masīva nosaukumu "dogBreedList".
*/
console.log(dogBreedList);

/*
    1)  Izveidot dropdown ar suņu šķirnēm
    
        HTML mums ir piejajams <select id='dogSelector'>, kas saglabāts mainīgajā dogSelector.
        Šajā select elementā nepieciešams pievienot vairākus <option value="value">name</option> elementus. 
        Jeb izveidot dropdown menu ar suņu šķirņu sarakstu.
        - Deklarējam funkciju renderDogBreedList()
        - Iekš funkcijas renderDogBreedList() izmantojot forEach((breed) => {}), lai iterētu caur dogBreedList masīvu
          un ar innerHTML pievienotu dogSelector elementam nepieciešamos <option> elementus:
            `<option value=${breed.value}>${breed.name}</option>`
        - tieši pēc renderDogBreedList() funkcijas deklerācijas, izaucam šo pašu funkciju - <select> elements tiek aizpildīts ar <option> elementiem.
    
    
    2)  Izveidot funkciju suņa bildes attēlošanai:

        - izvedojam funkciju renderDogImg(data) kurai kā parametrs tik padots no API atgrieztais objekts ar suņa datiem un attēla url.
        - Izmantojot innerHTML, ievietot dogImg elementā sekojošo HTML:
            `<img src=${data.message} class="dog-image">`

    3)  Izveidot funkciju, kas no API pieprasīt konkrētās suņa šķirnes attēlu

        - Deklarēt funkciju getDogImg()
        - Fukcijā getDogImg() izveidojam string tipa mainīgo breedUrl, kas saturēs API url priekš konkrētās suņa šķirnes. 
        - Šajā breedUrl string vērtībā ievietot suņa šķirnes nosaukums no <select> elementa value attiecīgajā URL daļā: 
            let breedName = `https://dog.ceo/api/breed/${dogSelector.value}/images/random`
        - izmantojot fetch() metodi izvejdojam request uz API
            fetch(breedUrl)
                .then(response => response.json())
                .then(data => renderDogImg(data))
                .catch(error => alert(error));
*/

const apiURL = "https://dog.ceo/dog-api/";
const dogSelector = document.getElementById("dogSelector");
const dogImg = document.getElementById("dogImg");

const renderDogBreedList = () => {
  dogBreedList.forEach((breed) => {
    let breedList = `<option value=${breed.value}>${breed.name}</option>`;
    dogSelector.innerHTML += breedList;
  });
};

const renderDogImg = (data) => {
  dogImg.innerHTML = `<img src=${data.message} class="dog-image">`;
};

const getDogImg = () => {
  let breedUrl = `https://dog.ceo/api/breed/${dogSelector.value}/images/random`;
  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => renderDogImg(data))
    .catch((error) => alert(error));
};

renderDogBreedList();

// Izveidojam notikuma klausītāju uz "change" notikumu, kas izsauks funkciju getDog img un pieprasīs no API datus
// un pēc tam izsauks funkciju renderDogImg(), lai izveidotu <img> elementu
// "change" notikums tiek izsaukt tiklīdz <select> elementa vērtība mainās jeb izvēloties jaunu šķirni tiek izsaukta funkcija getDogImg.
dogSelector.addEventListener("change", getDogImg);
