// Importer le module
const googleTrends = require('google-trends-api');

// Faire une requête sur Google Trends
googleTrends.interestOverTime( { keyword: 'iphone slow' } )
.then( response => {
    // console.log(response)
} )
.catch( err => {
    console.error(err)
});

googleTrends.interestByRegion( { keyword: 'louboutin' } )
.then( response => {
    console.log( json(response))
} )
.catch( err => {
    console.error(err)
});
