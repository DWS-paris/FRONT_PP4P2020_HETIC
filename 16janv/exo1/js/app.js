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
            let userContacts;
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

                // Initialiser une variable pour les erreurs du formulaire
                let formError = 0;

                // Initialiser le tableau de préférence de contact
                userContacts = [];

                // Vérifier le champ email
                if( !valueChecker(userEmail, 5) ){
                    // Incrémenter la valeur de formError
                    formError++;
                }

                // Vérifier le champ name
                if( !valueChecker(userName, 2) ){
                    // Incrémenter la valeur de formError
                    formError++;
                }

                // Vérifier le select type
                if( userType.val() === 'NULL' ){
                    // Incrémenter la valeur de formError
                    formError++;

                    userType.addClass('inputError');
                };

                // Vérifier l'input "from"
                if( $('[name="from"]:checked').val() === undefined ){
                    // Incrémenter la valeur de formError
                    formError++;

                    $(userFrom[0])
                    .parent()
                    .parent()
                    .prev()
                    .addClass('labelError');
                };

                // Vérifier les préférences de contact
                const checkboxes = $('[type="checkbox"]');

                // Faire une boucle FOR...OF sur une collection de données
                for( let item of checkboxes ){
                    if( item.checked === true ){
                        // Ajouter la donnée dans le tableau userContacts
                        userContacts.push($(item).val())
                    };
                };

                // Vérifier le nombre de préférences
                if( userContacts.length === 0 ){
                    // Incrémenter la valeur de formError
                    formError++;

                    $('ul:nth-of-type(2)')
                    .prev()
                    .addClass('labelError');
                };

                // Validation finale du formulaire
                if(formError === 0){
                    console.log('OK final');

                    //=> ASYNC Enregistrer les données dans une/un API/BDD/text/Word/...
                        //=> Une fois l'enregistrement fait, vider le formulaire
                        myForm[0].reset();
                };
            };

            // Créer une fonction pour valider les champs du formulaire
            const valueChecker = ( paramInput, paramLength ) => {
                // Capter l'événement focus
                paramInput.focus( () => {
                    // Supprimer la class 'inputError'
                    paramInput.removeClass('inputError');
                });


                // Utiliser les paramêtres
                if( paramInput.val().length >= paramLength ){
                    console.log('Email OK');

                    return true;
                }
                else{
                    // Modifier le DOM pour indiquer l'erreur
                    paramInput.addClass('inputError');

                    return false;
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