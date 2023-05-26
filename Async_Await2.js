const posts = [{ title: 'POST1' }];


function create2ndPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST2' });
            resolve()
        }, 3000)
    })
}


function create3rPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: 'POST3' });
            resolve();
        }, 2000)
    })
}


function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const poppedElement = posts.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR: ARRAY IS EMPTY")
            }
        }, 1000)
    })
}


async function updatePost() {
    try {
        await create2ndPost()
        const responce = await deletePost()
        console.log(responce)
    }
    catch (err) {
        console.log()
    }

}

updatePost().cat