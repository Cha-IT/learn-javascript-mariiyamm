//oppgave1: jeg skriver navnet mitt med variabel const og skriver ut det med console.log + navn
const navn = "Maria";
console.log("Hei, " + navn)

//oppgave2:
let tall1 = 8;      //skrev tall1
let tall2 = 4;      //skrev tall2
let sum = tall1 + tall2     //addisjon
let sub = tall1 - tall2     //substraksjon
let mult = tall1 * tall2    //multiplikasjon
let divis = tall1 / tall2   //divisjon

console.log(tall1 + ' + ' + tall2 + ' = ' + sum)
console.log(tall1 + ' - ' + tall2 + ' = ' + sub)
console.log(tall1 + ' * ' + tall2 + ' = ' + mult)
console.log(tall1 + ' / ' + tall2 + ' = ' + divis)

//oppgave3
let alder = 18      //variabel med alder

if(alder < 18){     //sjeker alder 
    console.log("Du får ikke kjøpe øl")
} else{             //skriver resten
    console.log("Du får kjøpe øl")
}

//oppgave4
if(alder < 18){         //har tatt alder fra forige oppgave
    console.log("Du kan sjøpe barnebillet")     //skrev med console.log
} else if(alder > 17 && alder < 67){        //sjekte andre gang
    console.log("Du kan kjøpe voksenbillett")
} else{     //skrev siste valg
    console.log("Du kan kjøpe honnørbillett")
}