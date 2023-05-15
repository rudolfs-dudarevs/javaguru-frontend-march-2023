// Izveidot funkcijas appendListElements() kodu, lai izveidotu HTML elementus un pievienotu tos #list-container.
// Rezultatam jāizskatās kā example.jpg redzamajam sarkastam.

// 1. Aizpilkdīts cvList masīvu ar 4 brīvi izvēlētu personu/tēlu CV objektiem (nav jābūt reāliem piemēriem).
//    CV objekti satur īpašības:
//       -- firstName (string)
//       -- lastName (string)
//       -- phoneNr (number)
//       -- email (string)
//       -- workExperience (array of strings with 4 values)
//       -- languages (object with 3 properties as objects - lv, rus, eng - , each property has 2 properties - name, level)
//    CV objekta struktūrai un īpašībām ir jābūt gluži kā Objects patstāvīgā darba uzdevumā izveidotajam CV objektam.
// 3. Iekš funckcijas appendListElements deklerācijas ar for vai forEach ciklu iterēt caur cvList masīvu.
// 4. Katrā masīva iterācijā izveidot string mainīgo, kas satur kā tekstu attēlojamo HTML:
//    - div elementus ar klasi "list-item"
//    - katrs div elements satur <h2 class="title">Name: ...</h2> elementu, kur ... aizvietot ar attiecīgās iterācijas objekta firstName un lastName īpašību apvienojumu.
//    - katrs div elements satur <p class="text">PhoneNr.: ...</> elementu, kur ... aizvietot ar attiecīgās iterācijas objekta phoneNr īpašību.
//    - katrs div elements satur <p class="text">Email: ...</> elementu, kur ... aizvietot ar attiecīgās iterācijas objekta email īpašību.
//    - katrs div elements satur <ul></ul> elementu, jeb sarakstu ar workExperience masīva vērtībām:
//        <p class="subtitle">Work experience</p>
//        <ul>
//            <li class="text">${elements.workExperiences[0]}</li>
//            <li class="text">${elements.workExperiences[1]}</li>
//            ...
//        </ul>
//     - katrs div elements satur <ul></ul> elementu, jeb sarakstu ar languages masīva objektu vērtībām:
//        <p class="subtitle">Languages</p>
//        <ul>
//            <li class="text">${elements.workExperiences.lv.name} - ${elements.workExperiences.lv.level}</li>
//            ...
//        </ul>
// 5. Katrā iterācijā izveidoto string mainīgo pievienot #list-container elementa innerHTML īpašībai.
// 6. funkciju appendListElements piesaistīts pogas #generate-list-btn klikšķim/
// 7. Brīvi noformēt katru .list-item elementu ar CSS iekš list-container.css faila.
//    Ieteicams izveidojot katra .list-item child elementus jeb tur iekšā esošos <h2>, <p>, <ul> un <li> elementus - piešķirt šiem elementiem class atribūtus, kad tie tiek izveidoti.

const listContainer = document.getElementById("list-container");
const generateListBtn = document.getElementById("generate-list-btn");

const janisBerzs = {
  firstName: "Jānis",
  lastName: "Bērzs",
  email: "janis.berzs@gmail.com",
  telNr: 29564524,
  workExperience: ["SIA Tet", "SIA Bite", "Valsts policija", "a/s Drošība"],
  languages: {
    lv: {
      name: "Latviešu valoda",
      level: "Native",
    },
    eng: {
      name: "Angļu valoda",
      level: "Fluent",
    },
    rus: {
      name: "Krievu valoda",
      level: "Intermediate",
    },
  },
};

const martaSaulite = {
  firstName: "Marta",
  lastName: "Saulīte",
  email: "marta.saulite@gmail.com",
  telNr: 26958746,
  workExperience: [
    "SIA Latvijas finieris",
    "Latvijas valsts meži",
    "SIA Torri",
    "a/s Kociņš",
  ],
  languages: {
    lv: {
      name: "Latviešu valoda",
      level: "Native",
    },
    eng: {
      name: "Angļu valoda",
      level: "Intermediate",
    },
    rus: {
      name: "Krievu valoda",
      level: "Intermediate",
    },
  },
};

const marisApsars = {
  firstName: "Māris",
  lastName: "Apsars",
  email: "maris.apsars@gmail.com",
  telNr: 26587569,
  workExperience: [
    "Pasažieru vilciens",
    "SIA LPO",
    "a/s Aiviekste",
    "a/s Sili",
  ],
  languages: {
    lv: {
      name: "Latviešu valoda",
      level: "Native",
    },
    eng: {
      name: "Angļu valoda",
      level: "Beginner",
    },
    rus: {
      name: "Krievu valoda",
      level: "Intermediate",
    },
  },
};

const janaPalte = {
  firstName: "Jana",
  lastName: "Palte",
  email: "jana.palte@gmail.com",
  telNr: 26254785,
  workExperience: ["a/s Laima", "SIA Varam", "SIA Porta", "a/s Jak"],
  languages: {
    lv: {
      name: "Latviešu valoda",
      level: "Native",
    },
    eng: {
      name: "Angļu valoda",
      level: "Fluent",
    },
    rus: {
      name: "Krievu valoda",
      level: "Beginner",
    },
  },
};

const cvList = [janisBerzs, martaSaulite, marisApsars, janaPalte];

const appendListElements = () => {
  listContainer.innerHTML = "";

  cvList.forEach((element, i) => {
    let list = `
      <div class="list-item">
        <h2 class="title">
          ${element.firstName} ${element.lastName}
        </h2>
        <p class="text">PhoneNr.: ${element.telNr}</p>
        <p class="text">Email.: ${element.email}</p>
        <p class="subtitle">Work experience: </p>
        <ul>
          <li class="text">${element.workExperience[0]}</li>
          <li class="text">${element.workExperience[1]}</li>
          <li class="text">${element.workExperience[2]}</li>
          <li class="text">${element.workExperience[3]}</li>
        </ul>

        <p class="subtitle">Languages:</p>
        <ul>
          <li class="text">
            ${element.languages.lv.name} - ${element.languages.lv.level}
          </li>
          <li class="text">
            ${element.languages.eng.name} - ${element.languages.eng.level}
          </li>
          <li class="text">
            ${element.languages.rus.name} - ${element.languages.rus.level}
          </li>
        </ul>
      </div>
    `;

    listContainer.innerHTML += list;
  });
};

generateListBtn.addEventListener("click", appendListElements);

// 3. Iekš funckcijas appendListElements deklerācijas ar for vai forEach ciklu iterēt caur cvList masīvu.
// 4. Katrā masīva iterācijā izveidot string mainīgo, kas satur kā tekstu attēlojamo HTML:
//    - div elementus ar klasi "list-item"
//    - katrs div elements satur <h2 class="title">Name: ...</h2> elementu, kur ... aizvietot ar attiecīgās iterācijas objekta firstName un lastName īpašību apvienojumu.
//    - katrs div elements satur <p class="text">PhoneNr.: ...</> elementu, kur ... aizvietot ar attiecīgās iterācijas objekta phoneNr īpašību.
//    - katrs div elements satur <p class="text">Email: ...</> elementu, kur ... aizvietot ar attiecīgās iterācijas objekta email īpašību.
//    - katrs div elements satur <ul></ul> elementu, jeb sarakstu ar workExperience masīva vērtībām:
//        <p class="subtitle">Work experience</p>
//        <ul>
//            <li class="text">${elements.workExperiences[0]}</li>
//            <li class="text">${elements.workExperiences[1]}</li>
//            ...
//        </ul>
//     - katrs div elements satur <ul></ul> elementu, jeb sarakstu ar languages masīva objektu vērtībām:
//        <p class="subtitle">Languages</p>
//        <ul>
//            <li class="text">${elements.workExperiences.lv.name} - ${elements.workExperiences.lv.level}</li>
//            ...
//        </ul>
// 5. Katrā iterācijā izveidoto string mainīgo pievienot #list-container elementa innerHTML īpašībai.
// 6. funkciju appendListElements piesaistīts pogas #generate-list-btn klikšķim/
// 7. Brīvi noformēt katru .list-item elementu ar CSS iekš list-container.css faila.
//    Ieteicams izveidojot katra .list-item child elementus jeb tur iekšā esošos <h2>, <p>, <ul> un <li> elementus - piešķirt šiem elementiem class atribūtus, kad tie tiek izveidoti.
