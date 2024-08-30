let likesBtn=document.querySelector('#likes-btn ');
let likesDisplay=document.querySelector('#display-likes');
let likes=localStorage.getItem('likes')?localStorage.getItem('likes'):0;
likesDisplay.innerText=likes;

function incLikes()
{
    likes++;
    localStorage.setItem('likes',likes);
    likesDisplay.innerText=localStorage.getItem('likes')
}

likesBtn.addEventListener('click',incLikes);
// likesBtn.addEventListener()



let dislikeBtn=document.querySelector('#dislike-btn');
let dislikeCount=document.querySelector('#display-dislike');
let dislike=localStorage.getItem('dislike')?localStorage.getItem('dislike'):0;
dislikeCount.innerText=dislike;

function decLikes()
{
    // console.log("Dislike btn clicked");
    dislike++;
    localStorage.setItem('dislike',dislike);
    dislikeCount.innerText=localStorage.getItem('dislike');

}

dislikeBtn.addEventListener('click',decLikes);