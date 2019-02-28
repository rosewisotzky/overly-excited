// Create an array that contains the words in the sentence
// let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];



// function addExcitement(theWordArray) {

//     let buildMeUp = " "

//     for (let i = 0; i < theWordArray.length; i++) {
//         buildMeUp = buildMeUp + " " + sentence[i];
//         console.log(buildMeUp)


//         addExcitement(sentence)

// let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];



// function addExcitement(theWordArray) {

//     let buildMeUp = " "

//     for (let i = 0; i < theWordArray.length; i++) {
//         if ((i+1) % 3 === 0) {
//             buildMeUp += theWordArray[i] + "! " ;
//         } else {
//             buildMeUp += theWordArray[i] +  " "  ;
//         }
//         console.log(buildMeUp)
//     }
// }

// addExcitement(sentence);

// let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];



// function addExcitement(theWordArray, character) {

//     let buildMeUp = " "

//     for (let i = 0; i < theWordArray.length; i++) {
//         if ((i + 1) % 3 === 0) {
//             buildMeUp += theWordArray[i] + " " + character ;
//         } else {
//             buildMeUp += theWordArray[i] + " ";
//         }
//         console.log(buildMeUp)
//     }
// }

// addExcitement(sentence, "$");

// let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];



// function addExcitement(theWordArray, character, multiplier) {

//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         if ((i + 1) % 3 === 0) {
//             buildMeUp += theWordArray[i];
//             for (let i = 0; i < multiplier; i++) {
//                 buildMeUp += ' ' + character;
//             } 
//         }else {
//                 buildMeUp += theWordArray[i] + " ";
//             }
//             console.log(buildMeUp)
//         }
// }


//     addExcitement(sentence, "$", 3);

let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];



const addExcitement = (theWordArray, character, multiplier) => {

    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i + 1) % 3 === 0) {
            buildMeUp += theWordArray[i];
            for (let i = 0; i < multiplier; i++) {
                buildMeUp +=  character;
            } 
        }else {
                buildMeUp += theWordArray[i] + " ";
            }
            console.log(buildMeUp)
        }
}


    addExcitement(sentence, "$", 3);

    console.log("Hey pal, you completed the things you needed to do and that's pretty dang cool if you ask an old guy like me   ")