const idJogos = document.querySelector("#jogos")
        const informacoesJogos = [
            { nome: "Jogo da Cobrinha", url: "https://www.google.com/search?q=snake", img: "https://www.harapanrakyat.com/wp-content/uploads/2022/05/Game-Snake-Google-Maps-yang-Seru-Simak-Cara-untuk-Memainkannya-1024x576.jpg" },
            { nome: "Run 3", url: "https://player03.com/run/3/beta", img: "https://player03.com/run/3/beta/favicon.png" },
            { nome: "Minecraft", url: "https://eaglercraft.com/#google_vignette", img: "https://wallpapers.com/images/hd/minecraft-logo-with-basic-block-structure-03dch9gg2iy4hthk.jpg" },
        ]
        
        informacoesJogos.forEach(item => {
                idJogos.innerHTML += 
                `<div id="box">
                    <img class="imagem" src="${item.img}">
                    <h1>${item.nome}</h1>
                    <a target="_blank" href="${item.url}">Acessar</a>
                </div>`
        });