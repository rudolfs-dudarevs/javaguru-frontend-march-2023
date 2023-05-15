// Viena no pieejamajām iebūvētajām JavaScript klasēm ir Date
// Klases ir jāinicializē, jeb jāizveido jauns objekts no klases deklerācijas.
const date = new Date();
// Date objekts noklusēti atgriež datuma formātu pēc ISO standarta:
console.log(date)
// Klases var arī inicializēt ar dotām vērtībām:
const presetDate = new Date("1991-01-31");
// Šis izskatās līdzīgi kā funkcijai padot kādu argumentu.
console.log(presetDate);

// Date objektam piemīt arī vairākas metodes, lai mijiedarbotos ar datumu.
// Piem., izvadīt šodienas datumu.
const todaysDate = date.getDate();
console.log(todaysDate)
// Izvadīt rītdienas datumu:
const tomorrowsDate = date.getDate() + 1;
console.log(tomorrowsDate)

// DATE METODES PRAKTISKAJAM DARBAM
// Gads
const example1 = new Date();
const year = example1.getFullYear();
console.log("Example 1", year);

// Mēnesis kā skaitlis (NEBŪS nepieciešams)
const example2 = new Date();
const monthAsNumber = example2.getMonth();
console.log("Example 2", monthAsNumber);

// Mēnesis kā teksts (BŪS nepieciešams)
const example3 = new Date();
const monthAsText = example3.toLocaleString('default', { month: 'short' });
console.log("Example 3", monthAsText);

// Datums
const example4 = new Date();
const dateAsNumber = example4.getDate();
console.log("Example 4", date);


// Masīvs ar objektiem, mašīnu dati
const carData = [
    {
        brand: "Volvo",
        model: "S60"
    },
    {
        brand: "Audi",
        model: "Q5"
    },
    {
        brand: "BMW",
        model: "X6"
    }
]

// Klases deklerācija.
// Klases deklerācija ir kā šablons no kura varēsim izveidot dinamiskus oibjektus,
// atkarībā no tā ar kādiem datiem inicializēsim šo klasi.
class Car {
    constructor(brand) {
        this.brand = brand;
    }

    aboutBrand() {
        return `This is a ${this.brand}`
    }
} 


// Klase Model mantos visas īpašības no klases Car ar extend atslēgvārdu
class Model extends Car {
    constructor(model, brand) {
        // Ja mantojam no kādas citas klases, nepieciešams izmantot super() metodi,
        // kas inciializēs klases intanci no kuras mantojam.
        super(brand);
        this.model = model;
    }

    aboutModel() {
        return `It is a model ${this.model}.`
    }

    fullDetails() {
        // Tā kā šī klase manto visas īpašības no klases Car,
        // Varam izmantot metodi aboutBrand()
        return `${this.aboutBrand()} ${this.aboutModel()}`
    }
}

carData.forEach((vehicle) => {
    const carModel = new Model(vehicle.model, vehicle.brand);
    const info = carModel.fullDetails();
    console.log(info);
})