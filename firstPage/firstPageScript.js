const mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const item of value) {
            const divUser = document.createElement('div');

            const btnLink = document.createElement('button');
            btnLink.innerHTML = `Go`;

            const link = document.createElement('a');
            link.setAttribute('href', '../secondPage/user-details.html');
            link.append(btnLink);

            const userDataId = document.createElement('div');
            userDataId.innerHTML = `Id : ${item.id}`

            const userDataName = document.createElement('div');
            userDataName.innerHTML = `Name : ${item.name}`

            divUser.append(userDataId,userDataName,link);
            mainDiv.append(divUser);

            btnLink.onclick = (e) => {
                localStorage.setItem('user', JSON.stringify(item));
            }
        }
    })

document.body.append(mainDiv);

