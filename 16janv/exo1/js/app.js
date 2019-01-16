/* 
Attendre le chargement du DOM
- Sélectionner le document : $()
- Appliquer la fonction ready()
- Exécuter une fonction de callback : () => {...}
*/
    $(document).ready( () => {
        /* 
        Déclaration des variables
        */
            // Créer une variable pour chaque donnée du formulaire
            let myForm = $('form');
            let userEmail = $('[name="email"]');
            let userName = $('[name="name"]');
            let userType = $('[name="type"]');
            let userFrom = $('[name="from"]');
            let userPrefPhone = $('[name="pref_phone"]');
            let userPrefEmail = $('[name="pref_email"]');
            let userPrefAddress = $('[name="pref_address"]');
            let userMessage = $('textarea');
            
            /* userEmail.val('Jacques') // Modifier la valeur
            console.log( userEmail.val() ); // Récupérer la valeur
            console.log( userEmail.val().length ); // Récupérer la taille */
        //

        /* 
        Déclaration des méthodes/functions
        */
            const formSubmission = (event) => {
                // Bloquer le comportement par defaut du form
                event.preventDefault();

                /* 
                    - récupérer la valeur de l'input email
                    - connaitre le nombre de caractères
                    - si il y à minimum 5 caractères 
                        alors > l'input est valide
                        sinon > l'input n'est pas valide
                */

                if( userEmail.val().length >= 5 ){
                    console.log('Email OK');
                }
                else{
                    console.log('Email PAS OK');
                };
            };
        //

        /* 
        Lancer l'interface
        */
            // Capter la soumission du formulaire
            myForm.submit( formSubmission );
        //

    }); // Fin de la fonction de chargement du DOM
//