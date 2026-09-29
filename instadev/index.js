// BD

var posts = [
    {
        id: 1,
            user:{
                nickname: "Naulivad",
                local: "Tijucas - SC",
                profileImg: "http://github.com/Naulivad.png"
            },

            image: "https://media.discordapp.net/attachments/1119016883442696293/1552101177297076224/544887226241896293f4909e6e487f09.jpg?ex=6ab4625d&is=6ab310dd&hm=3400d76032b6d71c12dee7a45070b43610e6bc169606e5a5dcd2d7ea63c1ccbf&=&format=webp",
            legend: "eitcha, la ele",
            likes: 0,
            isLike: false,
            data: "2026-09-28T19:24:00",
            Comments: [
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

function renderPost(){
    feed.innerHTML = "";

    for(var i = 0; i < posts.length; i ++){
        var article = document.createElement("article")
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
                        <button>♡</button>
                        <button>○</button>
                        <button>➤</button>
                    </div>
                    <button>▱</button>
                </div>
                <div class="post-info">
                    <strong>${posts[i].user.likes}</strong>

                    <p><strong>${posts[i].user.nickname}</strong ${posts[i].legend}.</p>
                    <a href="#">Ver todos os 67 comentários.</a>

                    <p class="comment">
                        <strong>Bella.wyk</strong>
                        eitcha, la ele
                    </p>

                    <span class="post-date">Há 2 horas</span>
                </div>
        `
        feed.appendChild(article)
    }

}

renderPost();