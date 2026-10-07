// FAKE BD

var posts = [
    {
        id: 1,
            user:{
                nickname: "Naulivad",
                local: "Tijucas - SC",
                profileImg: "http://github.com/Naulivad.png"
            },

            image: "https://media.discordapp.net/attachments/1119016883442696293/1552101177297076224/544887226241896293f4909e6e487f09.jpg?ex=6ac62e9d&is=6ac4dd1d&hm=d498d2ef756339f985895673a9eeeef0fd73815f6d69a16303c94ae185695f20&=&format=webp",
            legend: "eitcha, la ele",
            likes: 0,
            isLike: false,
            data: "2026-09-28T19:24:00",
            comments: [
                {
                    id: 1,
                    username: "bella_wyk",
                    text: "eitcha, la ele",
                    data: "2026-09-28T19:24:00",
                },
                {
                    id: 1,
                    username: "nico_0.0",
                    text: "recebaxxxx",
                    data: "2026-09-28T19:24:00",
                }
            ]


    }
]
// FUNÇOES JS
const feed = document.getElementById("feed");

const botaoAbrir = document.getElementById("botaoAbrirModal")
const botaoFechar = document.getElementById("botaoFecharModal")
const botaoPublicar = document.getElementById("botaoPublicar")
const modal = document.getElementById("modalPost")
const botaolike = document.getElement

botaoAbrir.addEventListener("click", () => {
    modal.classList.remove("hidden")
})

botaoFechar.addEventListener("click", () =>{
    modal.classList.add("hidden");
})

botaoPublicar.addEventListener("click", () =>{
    //PEGAR INFOS
    var URLimage = document.getElementById("imgPost").value;
    var legenda = document.getElementById("legendPost").value;

    //CRIAR POST
    var newPost = {
        id: posts[posts.length - 1].id + 1,
        user: {
            nickname: "Naulivad",
            local: "Tijucas - SC",
            profileImg: "http://github.com/Naulivad.png",
        },
        image: URLimage,
        legend:legenda,
        likes: 0,
        isLike: false,
        data: new Date().toISOString(),
        comments: [] 
    }

    //ADD AOS POSTS

    posts.push(newPost)
    renderPost();
    //RE-RENDERIZAR A TELA
    modal.classList.add("hidden")

    document.getElementById("imgPost").value = "";
    document.getElementById("legendPost").value = "";
})

function curtirPost(idPost){
    for(var i = 0; i < posts.length; i++){
    if(idPost === posts[i].id){
        posts[i].isLike =  !posts[i].isLike;
        posts[i].likes = posts[i].isLike == true 
        ? posts[i].likes + 1 
        : posts[i].likes - 1;
        renderPosts()
    }
}
    }

        
function renderPost(){
    feed.innerHTML = "";

    for(var i = 0; i < posts.length; i ++){
        var article = document.createElement("article")

        var commentsHTML = "";
        for(var comment of posts[i].comments){
            commentsHTML += `
                 <p class="comment">
                        <strong>${comment.username}</strong>
                        ${comment.text}
                    </p>
            `;
        }

        article.innerHTML = `
         <header class="post-header">
                    <div class="post-user">
                        <img src="${posts[i].user.profileImg}">
                        <div>                  
                            <strong>${posts[i].user.nickname}</strong>
                            <span>${posts[i].user.local}</span>
                        </div>
                    </div>
                    <button class="more">•••</button>
                </header>
                <img src="${posts[i].image}" class="post-image">
                <div class="post-actions">
                    <div>
                        <button class= "${posts[i].isLike === true ? 'liked' : ''}"onclick= "curtirPost (${posts[i].id}">♡</button>
                        <button>○</button>
                        <button>➤</button>
                    </div>
                    <button>▱</button>
                </div>
                <div class="post-info">
                    <strong>${posts[i].user.likes}</strong>

                    <p><strong>${posts[i].user.nickname}</strong ${posts[i].legend}.</p>

                    <a href="#">Ver todos os 67 comentários.</a>

                   ${commentsHTML}

                    <span class="post-date">Há 2 horas</span>
                </div>
        `
        feed.appendChild(article)
    }

}

renderPost();