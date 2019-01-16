/* 
Attendre le chargement du DOM
- Sélectionner le document : $()
- Appliquer la fonction ready()
- Exécuter une fonction de callback : () => {...}
*/
    $(document).ready( () => {
        
        // Les types de variables
        let myString = `Je suis une variable de type STRING|CHAR`;
        console.log(myString);

        let myInteger = 1979; // INTEGER|INT|ENTIER
        console.log(myInteger);

        let myFloat = 39.5345678; // FLOAT
        console.log();

        let myArray = [ `String`, 19, myFloat ]; // ARRAY
        console.log(myArray);

        let myObject = {
            userName: `Julien`,
            userAge: 39,
            userSkills: [
                `HTML`,
                `CSS`,
                `JS`
            ]
        }; // OBJECT
        console.log(myObject);

    }); // Fin de la fonction de chargement du DOM
//