const userObjStr = localStorage.getItem('user');
const userObj = JSON.parse(userObjStr);

const mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');
for (const item in userObj) {
    if (typeof userObj[item] !== 'object') {
        createDiv(item,userObj[item],mainDiv,'div');
    } else {
        const div2El = document.createElement('div');
        div2El.innerHTML = `${item} : `
        for (const it in userObj[item]) {
            if (typeof userObj[item][it] !== 'object') {
                createDiv(it,userObj[item][it],div2El,'li');
            } else {
                const someEl = document.createElement('li');
                someEl.innerHTML = `${it} : `
                for (const i in userObj[item][it]) {
                    createDiv(i,userObj[item][it][i],someEl,'li');
                }
                div2El.append(someEl);
            }
            mainDiv.append(div2El);
        }
    }
}

const div4Btn = document.createElement('div');

const btnPosts = document.createElement('button');
btnPosts.innerHTML = `post of current user`;

btnPosts.setAttribute('id', 'btnPosts')

div4Btn.classList.add('btnDiv');
div4Btn.append(btnPosts)

document.body.append(mainDiv, div4Btn);

btnPosts.onclick = (e) => {
    btnPosts.disabled = true;
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${userObj.id}/posts`)
        .then(value => value.json())
        .then(value => {
            const div4AllTittles = document.createElement('div');
            div4AllTittles.classList.add('allTitles');
            for (const item of value) {
                const div4Titles = document.createElement('div');

                const link = document.createElement('a');
                link.setAttribute('href', '../thirdPage/post-details.html')

                const btnAllPostData = document.createElement('button');
                btnAllPostData.innerHTML = 'All post data';

                link.append(btnAllPostData);

                const title = document.createElement('div')
                title.innerHTML = `Title : ${item.title}'`;

                div4Titles.append(title,link);
                div4AllTittles.append(div4Titles);

                btnAllPostData.onclick = (e) => {
                    localStorage.setItem('post', JSON.stringify(item));
                }
            }
            document.body.append(div4AllTittles);
        })
}

function createDiv(it,item,divToAppend,typeOfTag){
    const el = document.createElement(`${typeOfTag}`);
    el.innerHTML = `${it} - ${item}`;
    divToAppend.append(el);
}
