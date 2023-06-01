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

const cvList = [];
cvList[0] = {
  firstName: "Hannah",
  lastName: "Banana",
  telNr: 1234567,
  email: "hannah@gmail.com",
  workExperience: [
    "Fruits Corp Inc.",
    "Merry Berries",
    "TresDeliciouz",
    "Juicy VC",
  ],
  languages: {
    eng: {
      name: "English",
      level: "Native",
    },
    lat: {
      name: "Latviešu",
      level: "Bišku",
    },
    rus: {
      name: "Russkij",
      level: "Neponimaesh",
    },
  },
};

cvList[1] = {
  firstName: "Broseph",
  lastName: "Duh",
  telNr: 1234567,
  email: "broseph@gmail.com",
  workExperience: [
    "Bros 4 Bros Ltd.",
    "Brother & Duh",
    "Bruh Ventures",
    "Brotherly",
  ],
  languages: {
    eng: {
      name: "English",
      level: "Native",
    },
    lat: {
      name: "Latviešu",
      level: "Nope",
    },
    rus: {
      name: "Russkij",
      level: "Ņemnožko",
    },
  },
};

cvList[2] = {
  firstName: "Yolo",
  lastName: "Davidoff",
  telNr: 1234567,
  email: "yolo@gmail.com",
  workExperience: [
    "Yolo International",
    "Off Industries",
    "D - Ventures",
    "David.off",
  ],
  languages: {
    eng: {
      name: "English",
      level: "Veri gud",
    },
    lat: {
      name: "Latviešu",
      level: "Čo?",
    },
    rus: {
      name: "Russkij",
      level: "Native",
    },
  },
};

cvList[3] = {
  firstName: "Masha",
  lastName: "Rasha",
  telNr: 1234567,
  email: "masha@gmail.com",
  workExperience: [
    "Mashkini Pirožki",
    "Kusnyashki Ltd.",
    "Keksiki & Co.",
    "KofeZvezda",
  ],
  languages: {
    eng: {
      name: "English",
      level: "Ņet",
    },
    lat: {
      name: "Latviešu",
      level: "Čo?",
    },
    rus: {
      name: "Russkij",
      level: "Native",
    },
  },
};

const colors = ["#c1c552", "#577192", "#a13e90", "#de1447"];

const appendListElements = () => {
  listContainer.innerHTML = "";

  cvList.forEach((cv, index) => {
    const cvEl = `
    <div class="list-item" style="background-color: ${colors[index]}">
        <h2 class="title">${cv.firstName} ${cv.lastName}</h2>
        <p class="text">Phone Nr.: ${cv.telNr}</p>
        <p class="text">Email: ${cv.email}</p>

        <p class="subtitle">Work experience</p>
        <ul class="list work-experience">
            <li class="text">${cv.workExperience[0]}</li>
            <li class="text">${cv.workExperience[1]}</li>
            <li class="text">${cv.workExperience[2]}</li>
            <li class="text">${cv.workExperience[3]}</li>
        </ul>

        <p class="subtitle">Languages</p>
        <ul class="list languages">
            <li class="text">${cv.languages.lat.name} - ${cv.languages.lat.level}</li>
            <li class="text">${cv.languages.eng.name} - ${cv.languages.eng.level}</li>
            <li class="text">${cv.languages.rus.name} - ${cv.languages.rus.level}</li>
        </ul>
    </div>
    `;
    listContainer.innerHTML += cvEl;
  });
};

generateListBtn.addEventListener("click", appendListElements);
