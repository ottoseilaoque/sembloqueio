const idJogos = document.querySelector("#jogos")
        const informacoesJogos = [
            { nome: "Jogo da Cobrinha", url: "https://www.google.com/search?q=snake", img: "https://www.harapanrakyat.com/wp-content/uploads/2022/05/Game-Snake-Google-Maps-yang-Seru-Simak-Cara-untuk-Memainkannya-1024x576.jpg" },
            { nome: "Run 3", url: "https://player03.com/run/3/beta", img: "https://player03.com/run/3/beta/favicon.png" },
            { nome: "Rogue fable", url: "https://jman1593.github.io/html/rogue%20fable/index.html", img: "https://cdn.phaser.io/news/2017/12/rogue-fable-ii-thumb.png" },
            { nome: "Crossy road", url: "https://www.vortice.app/play/crossy/", img: "https://assets-prd.ignimgs.com/2023/03/04/crossyroad-1677896516603.jpg" },
            { nome: "Cut the rope", url: "https://www.vortice.app/play/cut-the-rope/", img: "https://th.bing.com/th/id/OIP.OQTKL2F0AIH2tnrPH82gEwHaHa?rs=1&pid=ImgDetMain" },
            { nome: "Minecraft", url: "https://eaglercraft.com/#google_vignette", img: "https://wallpapers.com/images/hd/minecraft-logo-with-basic-block-structure-03dch9gg2iy4hthk.jpg" },
            { nome: "Geometry Dash", url: "https://geometrydashlite.io/geometry-dash-lite", img: "https://th.bing.com/th/id/R.2a527448abbb085f6c89793cfb5f65f5?rik=A7ss82CSOJPrkg&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2fgeometry-dash%2fimages%2f9%2f90%2fGeometryDash.png%2frevision%2flatest%3fcb%3d20160224042843&ehk=Hvk2rFdCmF08iQinZYieMsLbvo4NDNdKYic8xB6GqZE%3d&risl=&pid=ImgRaw&r=0" },
            { nome: "Just one boss", url: "https://jman1593.github.io/html/just%20one%20boss/index.html", img: "https://th.bing.com/th/id/OIP.qL5ZGCMduZQumkyNrkxOnwAAAA?rs=1&pid=ImgDetMain" },
            { nome: "Basket randow", url: "https://yandex.com/games/app/197304", img: "https://play-lh.googleusercontent.com/gP8T5Z1O-ngxIloiwcBZzrzyLPYDp0R_1BDNKUDZboIRPVImeyWI8-7aExvB9gAGNKc" },
        ]
        
        informacoesJogos.forEach(item => {
                idJogos.innerHTML += 
                `<div id="box">
                    <img class="imagem" src="${item.img}">
                    <h1>${item.nome}</h1>
                    <a target="_blank" href="${item.url}">Acessar</a>
                </div>`
        });