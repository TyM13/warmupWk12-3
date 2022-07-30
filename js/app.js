// function getlinkSuccess (response) {
//     document.body.insertAdjacentHTML(`afterbegin`, `
//     <h1>success</h1>
//     <h1>${response[`data`][0][`name`]}</h1>
//     <p>${response[`data`][0][`street`]}</p>
//     `
// )
// }

// function getlinkfail (error) {
//     document.body.insertAdjacentHTML(`afterbegin`, `
//     <h1>failed to get info</h1>`
//     )

// }

// function buttonclick (details) {


// axios.request({
//     url:    `https://api.openbrewerydb.org/breweries/random`
// }).then(getlinkSuccess).catch(getlinkfail)
// }

// let button_one = document.getElementById(`button_one`);
// button_one.addEventListener(`click`, buttonclick)


//------------------------------------------//




function getlinkSuccesstwo (response) {
    document.body.insertAdjacentHTML(`afterbegin`, `
    <h1>success</h1>
    <h1>${response[`data`][0][`name`]}</h1>
    <p>${response[`data`][0][`street`]}</p>
    `
)
}

function getlinkfailtwo (error) {
    document.body.insertAdjacentHTML(`afterbegin`, `
    <h1>failed to get info</h1>`
    )

}

function buttonclicked (details) {


axios.request({
    url:    `https://api2.binance.com/api/v3/ticker/24hr `
}).then(getlinkSuccesstwo).catch(getlinkfailtwo)
}

let button_one = document.getElementById(`button_two`);
button_one.addEventListener(`click`, buttonclicked)





