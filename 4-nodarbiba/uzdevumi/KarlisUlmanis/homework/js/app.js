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

let name = ["Aiga", "Baiba", "Eduards", "Rainers"];
let surname = ["Bumbiere", "Jokdare", "Tauriņš", "Kuprinskis"];
let emailArray = ["aiga@inbox.lv", "baiba@gmail.com", "eduards.taurins@bbl.lv", "rainis@spainis.au"];
let phoneNumber = [2244685, 22266589, 23771268, 21166688];
let language = ["latviešu", "krievu", "angļu"];
let languageLevel = ["basic", "good", "expert", "native"];


let cvFirst = {
    firstName: name[0],
    lastName: surname[0],
    email: emailArray[0],
    telnr: phoneNumber[0],
    workExperience: ["LMT", "Tele2", "Bite"],
    languages: {
        lv: {
            name: language[0],
            level: languageLevel[3] 
        },
        ru: {
            name: language[1],
            level: languageLevel[1] 
        },
        en: {
            name: language[2],
            level: languageLevel[0] 
        }
    }
}

let cvSecond = {
    firstName: name[1],
    lastName: surname[1],
    email: emailArray[1],
    telnr: phoneNumber[1],
    workExperience: ["Origo", "Mego", "Rimi"],
    languages: {
        lv: {
            name: language[0],
            level: languageLevel[3] 
        },
        ru: {
            name: language[1],
            level: languageLevel[2] 
        },
        en: {
            name: language[2],
            level: languageLevel[1] 
        }
    }
}

let cvThird = {
    firstName: name[2],
    lastName: surname[2],
    email: emailArray[2],
    telnr: phoneNumber[2],
    workExperience: ["accenture", "evolution gaming", "Casino Royale"],
    languages: {
        lv: {
            name: language[0],
            level: languageLevel[0] 
        },
        ru: {
            name: language[1],
            level: languageLevel[0] 
        },
        en: {
            name: language[2],
            level: languageLevel[3] 
        }
    }
}

let cvFour = {
    firstName: name[3],
    lastName: surname[3],
    email: emailArray[3],
    telnr: phoneNumber[3],
    workExperience: ["Mūsa Motors", "Volvo Centrs"],
    languages: {
        lv: {
            name: language[0],
            level: languageLevel[2] 
        },
        ru: {
            name: language[1],
            level: languageLevel[0] 
        },
        en: {
            name: language[2],
            level: languageLevel[3] 
        }
    }
}

const cvList = [cvFirst, cvSecond, cvThird, cvFour];

console.log(cvList[0].firstName);

const appendListElements = () => {
    cvList.forEach((array, index) => {
        let addList = 
        `<div class="list-item">
            <h2 class="title">Name: ${cvList[index].firstName} ${cvList[index].lastName}</h2>
            <p class="text">PhoneNr.: ${cvList[index].telnr}</>
            <p class="text">Email: ${cvList[index].email}</>
            <p class="subtitle">Work experience</p>
                <ul>
                    <li class="text">${cvList[index].workExperience[0]}</li>
                    <li class="text">${cvList[index].workExperience[1]}</li>
                    <li class="text">${cvList[index].workExperience[2]}</li>
                </ul>
            <p class="subtitle">Languages</p>
                <ul>
                    <li class="text">${cvList[index].languages.lv.name} - ${cvList[index].languages.lv.level}</li>
                    <li class="text">${cvList[index].languages.ru.name} - ${cvList[index].languages.ru.level}</li>
                    <li class="text">${cvList[index].languages.en.name} - ${cvList[index].languages.en.level}</li>
                </ul>
            </div>`
            listContainer.innerHTML += addList;
        });
}

generateListBtn.addEventListener("click", appendListElements);
