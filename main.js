
function returnPramise() {
    return new Promise((resolve, reject) => {
        const mydate = new Date().getHours();
        console.log(mydate)

        if (mydate < 11) {
            resolve('good morning');
        }
        reject('good afternoon');
    });

}

function clickToReturn() {
    returnPramise()

        .then((data) => { my_h1.innerHTML = data })
        .catch((err) => { my_h1.innerHTML = err })
}



function checkNumber(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 % num2 === 0) {
            resolve('yes')
        }
        reject('no')
    })
}
function clickToCheckNumber() {

    checkNumber(8, 3)
        .then((result) => { numberresult.innerHTML = result })
        .catch((erroeanswe) => { numberresult.innerHTML = erroeanswe })

}


function getArrayAndNumber(number, myarray) {
    return new Promise((resolve, reject) => {
        if (number === myarray.length) {
            resolve('yes')
        }
        reject('no')
    })
}

function clickCheckthearray() {

    getArrayAndNumber(5, [2, 4, 5, 9, 7])
        .then((available) => arraynumber.innerHTML = available)
        .catch((notAvailable) => arraynumber.innerHTML = notAvailable)
}


async function callToPrmoise() {
    try {
        await getArrayAndNumber(5, [2, 4,9, 7])
            .then((sss) => console.log(sss))

    }
    catch (error) {
        console.log(error);
    }
}
callToPrmoise()