document.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        pesquisarValor()
    }
});

const idJogos = document.querySelector("#jogos")
        const informacoesJogos = [
            { nome: "Str0ngDogXP", url: "https://jman1593.github.io/index.html", img: "https://th.bing.com/th/id/OIP.imiD_hFMk8JsYKd-L1cRkAHaHa?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain" },
            { nome: "Google Snake", url: "https://www.google.com/search?q=snake&sca_esv=5ab42de3d1d78b1a&sxsrf=AHTn8zoTwW1cNSxNm0LDU6_D3vkYwgN3ug%3A1741878931939&source=hp&ei=k_bSZ4HjNpS-5OUPvb2FgAo&iflsig=ACkRmUkAAAAAZ9MEo71E4ScFPY1MBdgHX6e_O_jdfpT-&ved=0ahUKEwjB-OjXrIeMAxUUH7kGHb1eAaAQ4dUDCBg&uact=5&oq=snake&gs_lp=Egdnd3Mtd2l6IgVzbmFrZTIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTILEAAYgAQYsQMYgwEyCBAAGIAEGLEDMgUQABiABDILEC4YgAQYsQMYgwEyCBAAGIAEGLEDMgsQLhiABBixAxjUAjILEC4YgAQYxwEYrwEyBRAAGIAESLsHUABY_ANwAHgAkAEAmAHcAaABzgaqAQUwLjQuMbgBA8gBAPgBAZgCBaAC8QbCAgQQIxgnwgIOEAAYgAQYsQMYgwEYigXCAhEQLhiABBixAxjRAxiDARjHAcICBRAuGIAEwgIREC4YgAQYsQMYxwEYjgUYrwHCAggQLhiABBixA5gDAJIHBTAuNC4xoAeXPA&sclient=gws-wiz", img: "https://www.harapanrakyat.com/wp-content/uploads/2022/05/Game-Snake-Google-Maps-yang-Seru-Simak-Cara-untuk-Memainkannya-1024x576.jpg" },
            { nome: "Olimpiadas do Google", url: "https://doodles.google/doodle/doodle-champion-island-games-begin/", img: "https://1.bp.blogspot.com/-uaKqHC-oI70/YPpRE0vAoOI/AAAAAAAAavU/AqIbpF7wOwAfmwPk73RoAlCKf7_toGMKgCLcBGAsYHQ/w1200-h630-p-k-no-nu/doodle-champion-island-google-game-olimpiadas-toquio-2020.jpeg" },
            { nome: "Paciencia", url: "https://www.google.com/search?q=paciencia&sca_esv=9d62b89f1e8f3e7d&sxsrf=AHTn8zrLwYu97O6c4spSwyugE1BTnYsONQ%3A1745504310854&source=hp&ei=NkgKaM7zMNn35OUPquuYiAQ&iflsig=ACkRmUkAAAAAaApWRnLYEwYaWmsDnwD-7Cmcxn1tsD_P&oq=pac&gs_lp=Egdnd3Mtd2l6IgNwYWMqAggAMgoQIxiABBgnGIoFMgoQIxiABBgnGIoFMg4QLhiABBixAxiDARjUAjIIEAAYgAQYsQMyCBAAGIAEGLEDMggQLhiABBixAzIIEAAYgAQYsQMyBRAAGIAEMgsQLhiABBixAxiDATIFEC4YgARI4BNQAFjrAnAAeACQAQCYAX2gAe4CqgEDMC4zuAEByAEA-AEBmAIDoAL7AsICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwGYAwCSBwMwLjOgB9QnsgcDMC4zuAf7Ag&sclient=gws-wiz", img: "https://th.bing.com/th/id/OIP.SesfU0GKAIcmUbQ25ckUlAHaJ4?rs=1&pid=ImgDetMain" },
            { nome: "Campo Minado", url: "https://www.google.com/fbx?fbx=minesweeper", img: "data:image/png;base64,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" },
            { nome: "Contexto", url: "https://contexto.me/pt/", img: "https://th.bing.com/th/id/OIP.Mix_Dl5XQQzI_h8NOBb0DgHaD4?cb=iwc1&rs=1&pid=ImgDetMain" },
            { nome: "Conexo", url: "https://conexo.ws/pt/", img: "https://th.bing.com/th/id/OIP.wdpL07KYYRzUFSWmkm6dygHaE8?r=0&rs=1&pid=ImgDetMain" },
            { nome: "termo", url: "https://termo.pt/", img: "https://play-lh.googleusercontent.com/HMqznNZmnuR2wmipfZUaPcqrZnkWT9xOoV7QepkuMM5F7NiMviYzqmC-IWlzwFbUew" },
            { nome: "Narutodle", url: "https://narutodle.net/", img: "https://cdn.amkstation.com/wp-content/uploads/2024/09/narutodle-answers-today-1-640x375.webp" },
            { nome: "Pokedle", url: "https://pokedle.net/", img: "https://pokedle-images.fra1.cdn.digitaloceanspaces.com/Other/pokedle-logo-pokemons.webp" },
            { nome: "One piecle", url: "https://onepiecedle.net/", img: "https://th.bing.com/th/id/OIP.MpuBZ13x2biBbFLLIIKCsQHaD8?r=0&rs=1&pid=ImgDetMain" },
            { nome: "Minecraftdle", url: "https://www.minecraftdle.net/", img: "https://www.enkisa.com/wp-content/uploads/2014/08/minecraft.jpg" },    
            { nome: "Run 3", url: "https://player03.com/run/3/beta", img: "https://player03.com/run/3/beta/favicon.png" },
            { nome: "Papers Please", url: "https://flashmuseum.org/papers-please/", img: "https://th.bing.com/th/id/OIP.nllosbs0TxWKTDEvQpbCRgHaHa?cb=iwc1&rs=1&pid=ImgDetMain" },
            { nome: "Xadrez", url: "https://www.mathsisfun.com/games/chess.html", img: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpRCNUAz.png" },
            { nome: "Rogue Fable", url: "https://jman1593.github.io/html/rogue%20fable/index.html", img: "https://cdn.phaser.io/news/2017/12/rogue-fable-ii-thumb.png" },
            { nome: "Crossy Road", url: "https://www.vortice.app/play/crossy/", img: "https://assets-prd.ignimgs.com/2023/03/04/crossyroad-1677896516603.jpg" },
            { nome: "Cut The Rope", url: "https://www.vortice.app/play/cut-the-rope/", img: "https://th.bing.com/th/id/OIP.OQTKL2F0AIH2tnrPH82gEwHaHa?rs=1&pid=ImgDetMain" },
            { nome: "Minecraft", url: "https://eaglercraft.com/#google_vignette", img: "https://wallpapers.com/images/hd/minecraft-logo-with-basic-block-structure-03dch9gg2iy4hthk.jpg" },
            { nome: "Geometry Dash", url: "https://geometrydashlite.io/geometry-dash-lite", img: "https://th.bing.com/th/id/R.2a527448abbb085f6c89793cfb5f65f5?rik=A7ss82CSOJPrkg&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2fgeometry-dash%2fimages%2f9%2f90%2fGeometryDash.png%2frevision%2flatest%3fcb%3d20160224042843&ehk=Hvk2rFdCmF08iQinZYieMsLbvo4NDNdKYic8xB6GqZE%3d&risl=&pid=ImgRaw&r=0" },
            { nome: "Just One Boss", url: "https://jman1593.github.io/html/just%20one%20boss/index.html", img: "https://th.bing.com/th/id/OIP.qL5ZGCMduZQumkyNrkxOnwAAAA?rs=1&pid=ImgDetMain" },
            { nome: "Yandex games", url: "https://yandex.com/games/", img: "https://play-lh.googleusercontent.com/yi6-in34SPMUTRgna0EqQyj6B0lZNLeRCBarSxwdqm5rv-SO46FJmjQfrSRkbHSk4F-V" },
            { nome: "Coreball", url: "https://www.onlinescientificresearch.com/games/core-ball/", img: "https://doodle-jump.co/data/image/game/coreball.jpg" },
            { nome: "Super Mario All Stars", url: "https://www.smbgames.be/super-mario-all-stars.php", img: "https://i.ytimg.com/vi/SNl6WJygciw/maxresdefault.jpg" },
            { nome: "Super Mario World", url: "https://jman1593.github.io/play/?id=971", img: "https://th.bing.com/th/id/R.5548b45307457395ba9281d8a5f4f558?rik=z9QXYZfFsMoOwg&riu=http%3a%2f%2fcdn02.nintendo-europe.com%2fmedia%2fimages%2f11_square_images%2fgames_18%2fsuper_nintendo_4%2fSQ_SNES_SuperMarioWorld.jpg&ehk=QlF7AlxXxmhnO2UuM4mDdrn8wGKIGM8VpBY1YG0WVVc%3d&risl=&pid=ImgRaw&r=0" },    
            { nome: "Monkey Mart", url: "https://inzoiplay.com/monkey-market/", img: "https://th.bing.com/th/id/OIP.p-YmWD4Xidvel4SQocIxdwHaHp?rs=1&pid=ImgDetMain" },
            { nome: "Pac Man", url: "https://www.onlinescientificresearch.com/games/pac-man/", img: "https://i.guim.co.uk/img/media/8152f8ea7f06fd8ef5c68a3a594e6ac35dfd774b/0_342_800_480/master/800.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=42bb412858826e59cd33e40975ca3ee1" },
            { nome: "Subway Clash 3D", url: "https://clash3d.com/subwayclash3d", img: "https://i.ytimg.com/vi/Jy_lK4yN6zk/maxresdefault.jpg" },
            { nome: "Human Benchmark", url: "https://humanbenchmark.com/", img: "https://humanbenchmark.com/favicon.ico" },
            { nome: "Subway Surfers", url: "https://subwaysurfersunblocked.org/pt", img: "https://th.bing.com/th/id/R.9ba8ede2adb6d73b8e2e4d3bf7d5edb4?rik=YD78SVnM%2f7q8UQ&pid=ImgRaw&r=0" },
            { nome: "Bad Ice Cream", url: "https://frivwtf.com/pt/bad-ice-cream", img: "https://th.bing.com/th/id/R.ee37599fa6d214931049c257207f8ffc?rik=MvL2EmlDODJT1w&pid=ImgRaw&r=0" },
            { nome: "Bad Ice Cream 2", url: "https://frivwtf.com/pt/bad-ice-cream-2", img: "https://th.bing.com/th/id/OIP.GCMJJYQSutEjs9fKqCtymwHaHa?rs=1&pid=ImgDetMain" },
            { nome: "Bad Ice Cream 3", url: "https://frivwtf.com/pt/bad-ice-cream-3", img: "https://jogosonlinegratis.net/wp-content/uploads/2022/05/bad-ice-cream-3-300x281.jpg" },
            { nome: "Head Ball", url: "https://pogogamesplay.com/games/online-head-ball", img: "https://play-lh.googleusercontent.com/lTV8ClfOPTcWnZA5xwTJq4v9PAzc-wwr08IbB9CGFw9ozmfUvX0MRnK5LFRz4ad-Ig" },
            { nome: "Plants Vs Zombies", url: "https://jogosnainternet.com.br/jogo/plants-vs-zombies/", img: "https://th.bing.com/th/id/R.95e5247e3e9848e22f91ebdabf2e63d0?rik=vTB56dCX2sL8ug&pid=ImgRaw&r=0" },
            { nome: "Fnaf", url: "https://fngames.io/fnaf", img: "https://th.bing.com/th/id/OIP.XW_OsPwLtSFaQrOSHEr5eAHaHa?rs=1&pid=ImgDetMain" },    
            { nome: "Bad Time Simulator", url: "https://jcw87.github.io/c2-sans-fight/", img: "https://th.bing.com/th/id/OIP.t4mHEPOasYEW074cd0i1nQHaHa?w=170&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },    
            { nome: "Zorb.io", url: "https://zorb.io/", img: "https://th.bing.com/th/id/OIP.SVSnnjMGnzrWRVOJk0o91wHaEK?rs=1&pid=ImgDetMain" },    
            { nome: "Mope.io", url: "https://mope.io/", img: "https://th.bing.com/th/id/OIP.4IWzgpNLsmea_UdVCeSODQAAAA?rs=1&pid=ImgDetMain" },    
            { nome: "Limax.io", url: "https://limax.io/", img: "https://th.bing.com/th/id/OIP.ibIkHpjhJHOn_tdTERNPRAHaFj?rs=1&pid=ImgDetMain" },    
            { nome: "Friday Night Funkin", url: "https://sites.google.com/site/fnfunblocked/games", img: "https://1000logos.net/wp-content/uploads/2021/11/Friday-Night-Funkin-Logo.png" },    
            { nome: "Tetris", url: "https://unblockeds-games.github.io/tetris/", img: "https://vectorseek.com/wp-content/uploads/2023/10/tetris-Logo-Vector.svg-.png" },    
            { nome: "Tung Tralala Playground: Italian Meme Sandbox", url: "https://yandex.com/games/app/439348", img: "https://avatars.mds.yandex.net/get-games/1881364/2a00000196f857c8d295ee83c651a5e9918e/pjpg160x160" },    
            { nome: "The Binding of Isaac", url: "https://jman1593.github.io/play/?id=1151", img: "https://th.bing.com/th/id/OIP.UCdc8Ab2Iv_m5TYqB7gizAHaEK?rs=1&pid=ImgDetMain" },    
            { nome: "Rogue souls 1", url:"https://jman1593.github.io/play/?id=724", img: "https://th.bing.com/th/id/OIP.2nNfz9ME7wvmzYai0z7Z6gAAAA?rs=1&pid=ImgDetMain" },    
            { nome: "Rogue souls 2", url:"https://jman1593.github.io/play/?id=723", img: "https://th.bing.com/th/id/OIP.X2-iRAQU1VJVElyHypWt5AHaD0?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain" },    
            { nome: "Swords and souls", url: "https://jman1593.github.io/play/?id=338", img: "https://vignette.wikia.nocookie.net/liberproeliis/images/2/2c/Soul_(Swords_and_Souls).jpg/revision/latest?cb=20161230204611&path-prefix=pt-br" }, 
            { nome: "City Guesser", url: "https://virtualvacation.us/guess", img: "https://thumbs.dreamstime.com/b/globe-m%C3%A9tallique-bleu-de-la-terre-51946285.jpg" },
            { nome: "Quick, Draw !", url: "https://quickdraw.withgoogle.com/", img: "https://th.bing.com/th/id/OIP.lDUuSOrwMFRG_ixFHZAgzwAAAA?r=0&rs=1&pid=ImgDetMain" },
            { nome: "Jacksmith", url: "https://jman1593.github.io/play/?id=607#google_vignette", img: "https://th.bing.com/th/id/R.0f63c54fad7a67a53437d8bc5368032a?rik=dR7hmx6%2bmFCQRA&pid=ImgRaw&r=0" },    
            { nome: "Townscaper", url: "https://oskarstalberg.com/Townscaper/", img: "https://th.bing.com/th/id/OIP.5YHcgLeSYFN_VX7iaWvYMQHaJ3?r=0&o=7rm=3&rs=1&pid=ImgDetMain" },    
            { nome: "Fireboy and Watergirl 1", url: "https://jman1593.github.io/play/?id=589", img: "https://th.bing.com/th/id/OIP.3kKbV4Bx1NfsS0pPFdN13wHaE8?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain" },
            { nome: "Fireboy and Watergirl 2", url: "https://jman1593.github.io/play/?id=590", img: "https://i.ytimg.com/vi/WETA0g1hfiw/maxresdefault.jpg" },
            { nome: "Fireboy and Watergirl 3", url: "https://jman1593.github.io/play/?id=591", img: "https://i.ytimg.com/vi/Bp24rTy3m2Q/hqdefault.jpg" },
            { nome: "Fireboy and Watergirl 4", url: "https://jman1593.github.io/play/?id=592", img: "https://th.bing.com/th/id/OIP.VnmYjzLic_Y0ZxqgHUtMKQHaE8?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain" },
            { nome: "Fireboy and Watergirl 5", url: "https://jman1593.github.io/play/?id=593", img: "https://th.bing.com/th/id/R.bf00532d6fa61120c89d933cc7f9dfcf?rik=qXuM6uTzcLleLA&pid=ImgRaw&r=0" },
            { nome: "Fireboy and Watergirl 6", url: "https://jman1593.github.io/play/?id=594", img: "https://i.ytimg.com/vi/_5pu6CRCM4Y/maxresdefault.jpg" },
            { nome: "The Useless Web", url: "https://theuselessweb.com/", img: "https://media.designrush.com/tinymce_images/695800/conversions/The-Useless-Web-content.jpg" },
            { nome: "Tier Maker", url: "https://tiermaker.com/", img: "https://th.bing.com/th/id/R.c5fe8110dd39a6b22efdb58e2cda6674?rik=ga4y%2fbWqcags1g&pid=ImgRaw&r=0&sres=1&sresct=1" },
            { nome: "Leewufufu", url: "https://leewufufu.com/", img: "https://leewufufu.com/_next/image?url=%2Fleewufufu_logo.png&w=96&q=75" },
            { nome: "Sporkle", url: "https://www.sporcle.com/", img: "https://th.bing.com/th/id/R.8830c91686f9eb4c878d365b40266ebc?rik=cApUE6VXsakQdA&riu=http%3a%2f%2fwww.sporcle.com%2fblog%2fwp-content%2fuploads%2f2018%2f11%2f3.png&ehk=5CkIru%2fVniO0S2T21n7uKyk8C5iag2mEJ7ZsDGZfR2E%3d&risl=&pid=ImgRaw&r=0" },
            { nome: "Suika Game", url: "https://playsuikagame.com/", img: "https://tse1.mm.bing.net/th/id/OIP.BgZ43--_afl5k3fXbDWEiwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
            { nome: "Connect 4", url: "https://www.cbc.ca/kids/games/all/connect-4", img: "https://img.itch.zone/aW1nLzEzNDQxODk4LnBuZw==/original/XgK63d.png" },
            
                
    
        ]
    arrayFinal = informacoesJogos
        resetarValores()
        mostrarValores()

        const inputPesquisar = document.querySelector("#input-pesquisar")

        const btnSearch = document.querySelector("#btn-search")

        function pesquisarValor() {
            let inputPesquisarValue = inputPesquisar.value

            if (event.type === "keydown" && event.key !== "Enter") {
                return;
            }
            
            // console.log(!inputPesquisarValue)
            if(inputPesquisarValue){
                let arrayPesquisados = []
                let pesquisarLimpo = inputPesquisarValue.toLowerCase().trim();
                informacoesJogos.forEach((item) =>{
                    if(item.nome.toLowerCase().trim().includes(pesquisarLimpo)){
                        arrayPesquisados.push(item)
                        // console.log(arrayPesquisados)
                    }
                })
                arrayFinal = arrayPesquisados
                resetarValores()
                mostrarValores()

            } else {
                resetarValores()
                arrayFinal = informacoesJogos
                mostrarValores()

            }
        }

        
        btnSearch.addEventListener("click", pesquisarValor);

        

        const btnTrash = document.querySelector("#btn-trash")
        

        btnTrash.addEventListener("click", botaoLimpar)

        function botaoLimpar(){
            
            let inputPesquisarValue = inputPesquisar.value

            if(inputPesquisarValue){
                inputPesquisar.value = ""
                resetarValores()
                arrayFinal = informacoesJogos
                mostrarValores()
            }
        }


        function mostrarValores(){
            
            arrayFinal.forEach(item => {
                idJogos.innerHTML += 
                `<div id="box">
                    <img class="imagem" src="${item.img}">
                    <h1>${item.nome}</h1>
                    <a target="_blank" href="${item.url}">Acessar</a>
                </div>`
        });
        }
        function resetarValores(){
            idJogos.innerHTML = ""
        }
