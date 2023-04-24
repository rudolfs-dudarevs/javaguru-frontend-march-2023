// Izveidot Objektu, kas saturēs informāciju par jūsu personīgo vai izdomāta tēla CV.

// 1. Mainiga nosaukums, kurš satur Objektu ir vardsUzvards (jūsu vārds/uzvārds)
// 2. CV objekts satur 3 īpašības (properties) ar string tipa vērtību:
//    -- firstName
//    -- lastName
//    -- email
// 3. CV objekts satut 1 īpašību (property) ar number tipa vērtību:
//    -- telNr
// 4. CV objekts satur 1 īpašību ar masīva tipa vērtību.
//    -- workExperience
//    Šis masīvs satur 4 string tipa vērtība - 4 jūsu iepriekšējo darbavietu nosaukumus.
// 5. CV objekts satur 1 īpašību ar objekta tipa vērtību.
//    -- languages
//    Languages objektā ir 3 īpašības ar nosaukumiem lv, rus, eng, piem.
//    Katra no languages objekta īpašībām ir objekts, kas satur 2 īpašības - name, level.
//    
//    languages: {
//          lv: {
//             name: "Latviešu",
//             level: "Native"
//          },
//          rus: {
//              ...
//          }, 
//          eng: {
//              ...
//          }
//    }
//
// 6. Izvadīt konsolē CV objekta īpašību firstName un lastName apvienojumu.
// 7. Izvadīt konsolē CV objekta īpašības workExperience 2 elementu (index 1).
// 8. Izvadīt konsolē CV objekta īpašības languages objekta eng īpašības name un level apvienojumu.
//    -- piem., vardsUzvards.languages.lv objekta īpašību apvienojums izskatītos šādi:
//       Latviešu - Native 
//       Un tiktu panākta ar string literal pierakstu `${vardsUzvards.languages.lv.name} - ${vardsUzvards.languages.lv.level}`


const cv = {

    firstName: "Jeff",
    lastName:  "Bezos",
    email: "jeff@amazon.com",
    telNr: +1-541-754-3010,
    workExperience: [
        "SIA Amazon",
        "SIA Blue Origin",
        "SIA Bezos Unlimited",
        "SIA Jeffy Home Deliveries"
    ],

    languages: {
        lv:{
            name:"Latviesu",
            level: "Native"
        },
        eng:{
            name:"English",
            level:"Professional"
        },
        dk:{
            name:"Danish",
            level:"Basic",
        }
    }
}

//Task 6.
console.log(cv.firstName + " " + cv.lastName)
//Task 7.
console.log(cv.workExperience[1])
//Task 8.
console.log(`${cv.languages.eng.name} - ${cv.languages.eng.level}`)