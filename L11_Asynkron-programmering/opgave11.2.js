// opgave11.2.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

function userTable(users) {
    let tabel = '<h1>Brugere</h1><h3>(Klik på en bruger for at vise posts)</h3><table style="width:100%">';
    for (user of users) {
        tabel += '<tr><td>' + user.id +
            '</td><td>' + user.name +
            '</td><td>' + user.company.name +
            '</td></tr>\n';
    }
    tabel += '</table><br><div></div>';
    return tabel;   
}



function postTable(posts) {
    let tabel = '<h2>Posts for bruger:</h2><table style="width:100%">';
    for (post of posts) {
        tabel += '<tr><td>' + post.userId +
            '</td><td>' + post.id +
            '</td><td>' + post.title +
            '</td></tr>\n';
    }
    tabel += '</table>';
    return tabel;
}


async function main(userUrl) {
    let users;
    try {
        users = await get(userUrl);
        
    } catch (error) {
        console.log("Fejl: " + error);
    }
    document.body.innerHTML = userTable(users);
    let trs = document.querySelectorAll('tr');
    for (tr of trs) {
        tr.onclick = postHandler;
    }
}


async function postHandler(event) {
    let userId = event.currentTarget.firstElementChild.innerHTML;
    let posts;

    try {
        posts = await get(postUrl + userId);
    } catch (error) {
        console.log("Fejl: " + error);
    }
    document.querySelector('div').innerHTML = postTable(posts);
}


main(userUrl);

