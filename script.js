document.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        pesquisarValor()
    }
});

const idJogos = document.querySelector("#jogos")
        const informacoesJogos = [
            { nome: "Str0ngDogXP", url: "https://jman1593.github.io/index.html", img: "https://th.bing.com/th/id/OIP.imiD_hFMk8JsYKd-L1cRkAHaHa?r=0&cb=thvnextc1&rs=1&pid=ImgDetMain" },
            { nome: "Art.fullsusmtb.org", url: "https://art.fullsusmtb.org/", img: "https://th.bing.com/th/id/OSAAS.11A6887B9338C167DDBDC26FB44C4C47?w=72&h=72&c=17&rs=1&o=6&cb=12&pid=TechQna" },
            { nome: "Google doodle games", url: "https://googledoodle-games.com/br/all/", img: "https://pngimg.com/uploads/google/google_PNG19630.png" },
            { nome: "Cool Unblocked Games", url: "https://coolubg.github.io/", img: "https://coolubg.github.io/favicon.ico" },
            { nome: "Az Games", url: "https://azgames.io/", img: "https://img.sur.ly/favicons/a/azgames.io.ico" },
            { nome: "Jogos Friv", url: "https://jogosfriv.com.br/", img: "https://jogosfriv.com.br/favicon.png" },
            { nome: "Friv2Online", url: "https://www.friv2online.com/pt", img: "https://www.friv2online.com/favicon.png" },
            { nome: "Flash Legacy", url: "https://www.flashlegacy.com/", img: "https://www.flashlegacy.com/favicon.ico" },
            { nome: "Google Feud", url: "https://googlefeud.com/", img: "https://i.ytimg.com/vi/xC-oO1mJUGY/maxresdefault.jpg" },
            { nome: "Conexo", url: "https://conexo.ws/pt/", img: "https://th.bing.com/th/id/OIP.wdpL07KYYRzUFSWmkm6dygHaE8?r=0&rs=1&pid=ImgDetMain" },
            { nome: "termo", url: "https://termo.pt/", img: "https://play-lh.googleusercontent.com/HMqznNZmnuR2wmipfZUaPcqrZnkWT9xOoV7QepkuMM5F7NiMviYzqmC-IWlzwFbUew" },
            { nome: "Clashdle", url: "https://clashdle.com/", img: "https://tse2.mm.bing.net/th/id/OIP.d682TRpurvbhjEwraoKPTwHaD5?rs=1&pid=ImgDetMain&o=7&rm=3" },
            { nome: "Narutodle", url: "https://narutodle.net/", img: "https://cdn.amkstation.com/wp-content/uploads/2024/09/narutodle-answers-today-1-640x375.webp" },
            { nome: "Pokedle", url: "https://pokedle.net/", img: "https://pokedle-images.fra1.cdn.digitaloceanspaces.com/Other/pokedle-logo-pokemons.webp" },
            { nome: "One piecle", url: "https://onepiecedle.net/", img: "https://th.bing.com/th/id/OIP.MpuBZ13x2biBbFLLIIKCsQHaD8?r=0&rs=1&pid=ImgDetMain" },
            { nome: "Minecraftdle", url: "https://www.minecraftdle.net/", img: "https://www.enkisa.com/wp-content/uploads/2014/08/minecraft.jpg" },    
            { nome: "Run 3", url: "https://run3.io/", img: "https://player03.com/run/3/beta/favicon.png" },
            { nome: "Papers Please", url: "https://flashmuseum.org/papers-please/", img: "https://th.bing.com/th/id/OIP.nllosbs0TxWKTDEvQpbCRgHaHa?cb=iwc1&rs=1&pid=ImgDetMain" },
            { nome: "Xadrez", url: "https://www.mathsisfun.com/games/chess.html", img: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpRCNUAz.png" },
            { nome: "Crossy Road", url: "https://www.vortice.app/play/crossy/", img: "https://assets-prd.ignimgs.com/2023/03/04/crossyroad-1677896516603.jpg" },
            { nome: "Cut The Rope", url: "https://www.vortice.app/play/cut-the-rope/", img: "https://th.bing.com/th/id/OIP.OQTKL2F0AIH2tnrPH82gEwHaHa?rs=1&pid=ImgDetMain" },
            { nome: "Minecraft", url: "https://eaglercraft.com/#google_vignette", img: "https://wallpapers.com/images/hd/minecraft-logo-with-basic-block-structure-03dch9gg2iy4hthk.jpg" },
            { nome: "Geometry Dash", url: "https://geometrydashlite.io/geometry-dash-lite", img: "https://th.bing.com/th/id/R.2a527448abbb085f6c89793cfb5f65f5?rik=A7ss82CSOJPrkg&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2fgeometry-dash%2fimages%2f9%2f90%2fGeometryDash.png%2frevision%2flatest%3fcb%3d20160224042843&ehk=Hvk2rFdCmF08iQinZYieMsLbvo4NDNdKYic8xB6GqZE%3d&risl=&pid=ImgRaw&r=0" },
            { nome: "Yandex games", url: "https://yandex.com/games/", img: "https://play-lh.googleusercontent.com/yi6-in34SPMUTRgna0EqQyj6B0lZNLeRCBarSxwdqm5rv-SO46FJmjQfrSRkbHSk4F-V" },
            { nome: "Coreball", url: "https://www.onlinescientificresearch.com/games/core-ball/", img: "https://doodle-jump.co/data/image/game/coreball.jpg" },
            { nome: "Mario Games", url: "https://www.smbgames.be/", img: "https://th.bing.com/th/id/R.492992c0108b56cfea23d21b95fe1638?rik=iaC2P%2fYwsWTxNA&riu=http%3a%2f%2fimages4.wikia.nocookie.net%2f__cb20120816162011%2fmario%2fimages%2f1%2f15%2fMarioNSMB2.png&ehk=GveOwgWOmPL98azJDprI%2bn8TIQAcaAdaGiBCKcB8mlU%3d&risl=1&pid=ImgRaw&r=0" },
            { nome: "Monkey Mart", url: "https://inzoiplay.com/monkey-market/", img: "https://th.bing.com/th/id/OIP.p-YmWD4Xidvel4SQocIxdwHaHp?rs=1&pid=ImgDetMain" },
            { nome: "Pac Man", url: "https://www.onlinescientificresearch.com/games/pac-man/", img: "https://i.guim.co.uk/img/media/8152f8ea7f06fd8ef5c68a3a594e6ac35dfd774b/0_342_800_480/master/800.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=42bb412858826e59cd33e40975ca3ee1" },
            { nome: "Subway Clash 3D", url: "https://clash3d.com/subwayclash3d", img: "https://i.ytimg.com/vi/Jy_lK4yN6zk/maxresdefault.jpg" },
            { nome: "Human Benchmark", url: "https://humanbenchmark.com/", img: "https://humanbenchmark.com/favicon.ico" },
            { nome: "Subway Surfers", url: "https://subwaysurfersunblocked.org/pt", img: "https://th.bing.com/th/id/R.9ba8ede2adb6d73b8e2e4d3bf7d5edb4?rik=YD78SVnM%2f7q8UQ&pid=ImgRaw&r=0" },
            { nome: "Head Ball", url: "https://pogogamesplay.com/games/online-head-ball", img: "https://play-lh.googleusercontent.com/lTV8ClfOPTcWnZA5xwTJq4v9PAzc-wwr08IbB9CGFw9ozmfUvX0MRnK5LFRz4ad-Ig" },
            { nome: "Plants Vs Zombies", url: "https://jogosnainternet.com.br/jogo/plants-vs-zombies/", img: "https://th.bing.com/th/id/R.95e5247e3e9848e22f91ebdabf2e63d0?rik=vTB56dCX2sL8ug&pid=ImgRaw&r=0" },
            { nome: "Fnaf", url: "https://fngames.io/fnaf", img: "https://th.bing.com/th/id/OIP.XW_OsPwLtSFaQrOSHEr5eAHaHa?rs=1&pid=ImgDetMain" },    
            { nome: "Bad Time Simulator", url: "https://jcw87.github.io/c2-sans-fight/", img: "https://th.bing.com/th/id/OIP.t4mHEPOasYEW074cd0i1nQHaHa?w=170&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },    
            { nome: "Zorb.io", url: "https://zorb.io/", img: "https://th.bing.com/th/id/OIP.SVSnnjMGnzrWRVOJk0o91wHaEK?rs=1&pid=ImgDetMain" },    
            { nome: "Powerline.io", url: "https://powerline.io/", img: "https://tse3.mm.bing.net/th/id/OIP.ufEcTveQ-27i1jyEXrzkggAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },    
            { nome: "Mope.io", url: "https://mope.io/", img: "https://th.bing.com/th/id/OIP.4IWzgpNLsmea_UdVCeSODQAAAA?rs=1&pid=ImgDetMain" },    
            { nome: "Limax.io", url: "https://limax.io/", img: "https://th.bing.com/th/id/OIP.ibIkHpjhJHOn_tdTERNPRAHaFj?rs=1&pid=ImgDetMain" },    
            { nome: "Kart bros.io", url: "https://kartbros.io/", img: "https://tinyplay.io/data/image/kart-bros-tinyplay.png" },
            { nome: "Survev.io", url: "https://survev.io/", img: "https://tse3.mm.bing.net/th/id/OIP.4_KgqPKjdXZtVpwbwRhlpwHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },
            { nome: "Friday Night Funkin", url: "https://sites.google.com/site/fnfunblocked/games", img: "https://1000logos.net/wp-content/uploads/2021/11/Friday-Night-Funkin-Logo.png" },    
            { nome: "Tetris", url: "https://unblockeds-games.github.io/tetris/", img: "https://vectorseek.com/wp-content/uploads/2023/10/tetris-Logo-Vector.svg-.png" },    
            { nome: "City Guesser", url: "https://virtualvacation.us/guess", img: "https://thumbs.dreamstime.com/b/globe-m%C3%A9tallique-bleu-de-la-terre-51946285.jpg" },
            { nome: "Quick, Draw !", url: "https://quickdraw.withgoogle.com/", img: "https://th.bing.com/th/id/OIP.lDUuSOrwMFRG_ixFHZAgzwAAAA?r=0&rs=1&pid=ImgDetMain" },    
            { nome: "Townscaper", url: "https://oskarstalberg.com/Townscaper/", img: "https://th.bing.com/th/id/OIP.5YHcgLeSYFN_VX7iaWvYMQHaJ3?r=0&o=7rm=3&rs=1&pid=ImgDetMain" },    
            { nome: "The Useless Web", url: "https://theuselessweb.com/", img: "https://media.designrush.com/tinymce_images/695800/conversions/The-Useless-Web-content.jpg" },
            { nome: "Tier Maker", url: "https://tiermaker.com/", img: "https://th.bing.com/th/id/R.c5fe8110dd39a6b22efdb58e2cda6674?rik=ga4y%2fbWqcags1g&pid=ImgRaw&r=0&sres=1&sresct=1" },
            { nome: "Leewufufu", url: "https://leewufufu.com/", img: "https://leewufufu.com/_next/image?url=%2Fleewufufu_logo.png&w=96&q=75" },
            { nome: "Sporkle", url: "https://www.sporcle.com/", img: "https://th.bing.com/th/id/R.8830c91686f9eb4c878d365b40266ebc?rik=cApUE6VXsakQdA&riu=http%3a%2f%2fwww.sporcle.com%2fblog%2fwp-content%2fuploads%2f2018%2f11%2f3.png&ehk=5CkIru%2fVniO0S2T21n7uKyk8C5iag2mEJ7ZsDGZfR2E%3d&risl=&pid=ImgRaw&r=0" },
            { nome: "Suika Game", url: "https://playsuikagame.com/", img: "https://tse1.mm.bing.net/th/id/OIP.BgZ43--_afl5k3fXbDWEiwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
            { nome: "Connect 4", url: "https://www.cbc.ca/kids/games/all/connect-4", img: "https://img.itch.zone/aW1nLzEzNDQxODk4LnBuZw==/original/XgK63d.png" },
            { nome: "Wplace", url: "https://wplace.live/", img: "https://tse4.mm.bing.net/th/id/OIP.on3ITfOCU4hndpq0PgBMKgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
            { nome: "JKLM.fun", url: "https://jklm.fun/", img: "https://jklm.fun/images/icon512.png" },
            { nome: "Pako highway", url: "https://pakohighway.online/", img: "https://img.itch.zone/aW1nLzkzODQzNzIucG5n/original/oklXuv.png" },
            { nome: "Geo-Fs", url: "https://www.geo-fs.com/", img: "https://tse4.mm.bing.net/th/id/OIP.O5tDdcmw4GWSPjCbCtvaEQHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },
            { nome: "Play light (clica em more games)", url: "https://playlight.dev/demo", img: "https://playlight.dev/images/logo_white_small.png" },
            { nome: "Club penguin Jorney", url: "https://play.cpjourney.net/", img: "https://th.bing.com/th/id/R.809f518a153ec21e3e8fbef995b69533?rik=Jmpp%2fqnLfR0IfQ&riu=http%3a%2f%2fimg2.wikia.nocookie.net%2f__cb20100825210835%2flogopedia%2fimages%2ff%2ff4%2fClub_Penguin_logo.png&ehk=2V6nIbNTGj86diof1RXWI%2fEa1i6oJ3KMcm1GdGUVGzU%3d&risl=&pid=ImgRaw&r=0" },
            { nome: "O que você prefere", url: "https://wouldyourather.app/pt/s/o7fas", img: "https://cdn-images.360jogos.com/assets/game-img/43000/43184.webp" },
            { nome: "Lostgamer.io", url: "https://lostgamer.io/", img: "https://browsercraft.com/images/games/covers/lostgamer-dot-io.jpg" },
            { nome: "Little Alchemy", url: "https://littlealchemy.com/", img: "https://littlealchemy.com/img/loading-screen-logo.png" },
            
    
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
