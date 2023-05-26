
function movieticket() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Movie Ticket Purchased")
            resolve()
        }, 2000);
    })
}


function getColdDrinks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I have the coldrinks")
            resolve()
        }, 1000);
    })
}


function getSomeButter() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I have Butter my dear ")
            resolve()
        }, 1500);
    })
}


async function storyOfMovieTheater() {
    try {
        await movieticket()
        await getSomeButter()
        await getColdDrinks()
        console.log("I don't have money ... Now Watch The Movie")
    }

    catch (err) {
        console.log(err)
    }

}


storyOfMovieTheater()