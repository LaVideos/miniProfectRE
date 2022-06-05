const postStr = localStorage.getItem('post');
const post = JSON.parse(postStr);

const div4AllPosts = document.createElement('div');
div4AllPosts.classList.add('mainDiv');

fn4CreateDiv(post,div4AllPosts);

document.body.append(div4AllPosts);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
        const div4AllCommentsOfPost = document.createElement('div');
        div4AllCommentsOfPost.classList.add('divPost');
        for (const item of value) {
            const div4CommentOfPost = document.createElement('div');
            fn4CreateDiv(item,div4CommentOfPost);
            div4AllCommentsOfPost.append(div4CommentOfPost);
        }
        document.body.append(div4AllCommentsOfPost);
    })

function fn4CreateDiv(item, toAppend){
    for (const key in item) {
        const div4Post =  document.createElement('div');
        div4Post.innerHTML = `${key} : ${item[key]}`
        toAppend.append(div4Post);
    }
}
