import fetch from 'node-fetch'

function goGetMyCoffee() {
    fetch('https://api.sampleapis.com/coffee/hot')
     .then(myResponse => myResponse.json())// formating the response
     .then(data => {
        //console.log(data)
        console.log (data[2].ingredients)
    })
    .catch(myErr => console.log('we got an error:',myErr))// shorter way since only 1 funtionand 1 parameter
    
    }

    goGetMyCoffee ()
