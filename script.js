document.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        pesquisarValor()
    }
});

const idJogos = document.querySelector("#jogos")
        const informacoesJogos = [
            { nome: "Conexo", url: "https://conexo.ws/pt/", img: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1PW5UM.img?w=768&h=543&m=6" },
            { nome: "termo", url: "https://termo.pt/", img: "https://play-lh.googleusercontent.com/HMqznNZmnuR2wmipfZUaPcqrZnkWT9xOoV7QepkuMM5F7NiMviYzqmC-IWlzwFbUew" },
            { nome: "Xadrez", url: "https://www.mathsisfun.com/games/chess.html", img: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpRCNUAz.png" },
            { nome: "Yandex games", url: "https://yandex.com/games/", img: "https://play-lh.googleusercontent.com/yi6-in34SPMUTRgna0EqQyj6B0lZNLeRCBarSxwdqm5rv-SO46FJmjQfrSRkbHSk4F-V" },
            { nome: "Human Benchmark", url: "https://humanbenchmark.com/", img: "https://humanbenchmark.com/favicon.ico" }, 
            { nome: "Bad Time Simulator", url: "https://jcw87.github.io/c2-sans-fight/", img: "https://th.bing.com/th/id/OIP.t4mHEPOasYEW074cd0i1nQHaHa?w=170&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },    
            { nome: "Friday Night Funkin", url: "https://sites.google.com/site/fnfunblocked/games", img: "https://1000logos.net/wp-content/uploads/2021/11/Friday-Night-Funkin-Logo.png" },      
            { nome: "City Guesser", url: "https://virtualvacation.us/guess", img: "https://thumbs.dreamstime.com/b/globe-m%C3%A9tallique-bleu-de-la-terre-51946285.jpg" },
            { nome: "Townscaper", url: "https://oskarstalberg.com/Townscaper/", img: "https://th.bing.com/th/id/OIP.5YHcgLeSYFN_VX7iaWvYMQHaJ3?r=0&o=7rm=3&rs=1&pid=ImgDetMain" },    
            { nome: "The Useless Web", url: "https://theuselessweb.com/", img: "https://media.designrush.com/tinymce_images/695800/conversions/The-Useless-Web-content.jpg" },
            { nome: "Tier Maker", url: "https://tiermaker.com/", img: "https://th.bing.com/th/id/R.c5fe8110dd39a6b22efdb58e2cda6674?rik=ga4y%2fbWqcags1g&pid=ImgRaw&r=0&sres=1&sresct=1" },
            { nome: "Leewufufu", url: "https://leewufufu.com/", img: "https://leewufufu.com/_next/image?url=%2Fleewufufu_logo.png&w=96&q=75" },
            { nome: "Sporcle", url: "https://www.sporcle.com/", img: "https://th.bing.com/th/id/R.8830c91686f9eb4c878d365b40266ebc?rik=cApUE6VXsakQdA&riu=http%3a%2f%2fwww.sporcle.com%2fblog%2fwp-content%2fuploads%2f2018%2f11%2f3.png&ehk=5CkIru%2fVniO0S2T21n7uKyk8C5iag2mEJ7ZsDGZfR2E%3d&risl=&pid=ImgRaw&r=0" },
            { nome: "Connect 4", url: "https://www.cbc.ca/kids/games/all/connect-4", img: "https://img.itch.zone/aW1nLzEzNDQxODk4LnBuZw==/original/XgK63d.png" },
            { nome: "Little Alchemy", url: "https://littlealchemy.com/", img: "https://littlealchemy.com/img/loading-screen-logo.png" },
            { nome: "Room 796", url: "https://floor796.com/", img: "https://tecnobits.com/wp-content/uploads/2025/05/Floor796-1024x700.png" },
            { nome: "Draw a stickman", url: "https://drawastickman.com/", img: "https://p7.hiclipart.com/preview/218/926/400/stick-man-stick-figure-clip-art-happy-stick-man.jpg" },
            { nome: "HammyHome", url: "https://hammyhome.com/", img: "https://tse4.mm.bing.net/th/id/OIP.r8bSYTMs1JNUoQHZpA0utwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
            { nome: "Monkepo", url: "https://monkepo.online/", img: "https://monkepo.online/img/monkepo.png" },
            { nome: "All Games", url: "https://nb-ga.github.io/games-site/index.html", img: "https://down-br.img.susercontent.com/file/br-11134207-23010-ij43bn4da9lv88" },
            { nome: "Peta Games", url: "https://www.peta.org/features/games/", img: "https://capitalresearch.org/app/uploads/PETA-Logo.png" },
            { nome: "Meca Bricks", url: "https://mecabricks.com/", img: "https://styles.redditmedia.com/t5_2glb7r/styles/bannerBackgroundImage_0yycyizqubs71.jpg?format=pjpg&s=5c0065a0301f8c2688fd2b0f294cd8a70debdca3" },
            { nome: "Pokechill", url: "https://play-pokechill.github.io/", img: "https://incrementaldb.b-cdn.net/img/484832icon.png" },
            { nome: "Oasis", url: "https://oasis.decart.ai/welcome", img: "https://tse3.mm.bing.net/th/id/OIP.Omkqx6B7eb6f3FE_AAdDugHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
            { nome: "Jogos do g1", url: "https://g1.globo.com/jogos/", img: "https://tse2.mm.bing.net/th/id/OIP.L_iImcL-1TXh2jPEQfQ28gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
            { nome: "Pokennection", url: "https://www.pokennection.com/", img: "https://pngimg.com/uploads/pokeball/pokeball_PNG21.png" },
            { nome: "A dark room", url: "https://adarkroom.doublespeakgames.com/", img: "https://play-lh.googleusercontent.com/b-CitCFqGzCKgrR-FFm5diz9f1DL65SiIAw0d-_UwrL8agFmFRhQdG32kCuFduDs-w" },
            { nome: "Browser Quest", url: "https://browserquest.gonzalo-mg.com/", img: "https://play-lh.googleusercontent.com/_NsYztuk_PprEVE1zA551WdlzyOeAEuqkl9XVpUQr6n-_EW7ygIUUUlGpUf1zW-zBw" },
            { nome: "2048", url: "https://play2048.co/", img: "https://tse2.mm.bing.net/th/id/OIP.vBZr715b4avX7wjVhQaHSwHaEK?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3" },
            { nome: "Quordle", url: "https://www.merriam-webster.com/games/quordle/#/classic", img: "https://1oar.com/upload/imgs/game/quordle-game-2-.png" },
            { nome: "Semantle", url: "https://semantle.com/", img: "https://easternherald.com/wp-content/uploads/2025/01/semantle.png" },
            { nome: "Reversi Pro", url: "https://reversi.pro/pt/", img: "https://play-lh.googleusercontent.com/e6UDlXMkKI3ygCoDj-ShB4z5D_Xh7_ORv0OWWOCr6cCdtQGtzMeL_4xwYUHAhuMWUQ" },
            { nome: "Candy box", url: "https://candybox2.github.io/candybox/", img: "https://static.wikia.nocookie.net/candybox2_gamepedia/images/c/c9/Logo.png/revision/latest/scale-to-width-down/430?cb=20140827130237" },
            { nome: "Candy box 2", url: "https://candybox2.github.io/", img: "https://static.wikia.nocookie.net/candybox2_gamepedia/images/c/c9/Logo.png/revision/latest/scale-to-width-down/430?cb=20140827130237" },
            { nome: "Stop Game", url: "https://stopgame.com.br/pt", img: "https://tse1.mm.bing.net/th/id/OIP.zQ7OOjPvwIz1FZmUFalHmQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
            { nome: "Bongo Cat", url: "https://bongo.cat/", img: "https://tse3.mm.bing.net/th/id/OIP.i-AAdby2T4_ARNQNRHiS4wHaD4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
            { nome: "38-0", url: "https://38zero.com.br/multi", img: "https://pbs.twimg.com/profile_images/2063665363888578560/Z5K9NOrT.jpg" },
            { nome: "Era ball", url: "https://eraball.com/", img: "https://tse3.mm.bing.net/th/id/OIP.-OoRp3eAcW0_HaHIerTx-QHaHk?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
            { nome: "Whip", url: "https://whip.run/", img: "https://whip.run/favicon.ico" },
            { nome: "Drive mad", url: "https://www.drivemad.com/", img: "https://www.drivemad.com/favicon.ico" },
            { nome: "Retro bowl", url: "https://retrobowl25unblocked.github.io/", img: "data:image/webp;base64,UklGRqYLAABXRUJQVlA4IJoLAADwfQCdASoAAgACPlEokEYjoqGhJdiYeHAKCWVu6B/JIFKemk/n4z+5fuZ424ae9f239oP7N+4n2pStfgroP+58mLhf/O/m7/ivmv/e/81/Sff15gH+T/of+m9s/pP8wH8w/i3/T/q/vTf2P/Wf3T3F+gB/bP7Z61P+n9nb+c+oB/AP7b/8vam/0/7YfDD+7novf/zs9umn6Mf1X28LgP4BqwMJX8t/IDej5fVpzw5/LP+u/8P+Ya3B/Uf0P8Uuq0D7fYVvsK32Fb7Ct9hW+wrfYVvsK32ES3yN6zxzXRmNUzeKHRY3esbvWN3rG7wmeR9DIIsbvWN3rG71jd6nHV+spWSWelDmDoq9uCnF0kO+wrfYVvsK32FXvxUKpJWN0FAUJXcV/38y4h4huoixu9Y3esbvWNduM2Ykidd09Op56dosbvWN3qfyyIT/CdqDO9ajmu9Y3esbvWN3rEMNsn0CxMay3kT8GAsG/N1Oir5HZSnbM1WbvWN3rG71jd42nkhOk37a6hFh9vXRCzJxmKSAnZATsfKxqKaBMCwcbpEdOCUUgTtPtJbaiSxVhMkwd57flIJMq7EgJ2QE7ICY6w7mp6f0K1SHT+SZFDosbvWN3hhQ6LR9Rr2S+sdCHa5yK7Km5KwQTSL6V7jRRCKGod9PzcVsK32Fb7Ct81KfB+Lg0r38nV53QW5haE78VmQYE7ICdkBOnLusmc8dqijJ1vTGydkBOyAnYkeynNtGkp/jApHzJR8k3IUPWOsHR2aN1f8M4GSD1jd6xu9Y3eEzyQEx19YbvnRih0WN3rG71jWheZO9s1vqqYqzHQTC169yBsnZATsgJ2QE7FQKITzjdE9Wv2l1VonjVuyIMTBXeenaLG71jd6xsCJtVAK147yyQE7ICdkBOyAnYqBNrBsnSGGbcnMX85tFjd6xu9Y3esa3arb+QH5hWtt0yOYwd6epb64VC7RY3esbvWN3qhQ1aMcwMSWtvu0m0WN3rG71jd6xsCW/49CL8V/O9xdosbvWN3rG71R5yJpcTGTZpT4bvWN3rG71jd6xGMhhRFgCMUMjbPo3Q0zDJ/6bDAnZATsgJ082W6ctyqZ45Y96MNlgIQruK0e2Mwps92qww3esbvWN3qjzdbMDzURXemm5U4iXtaOpW+wrfYSPn0QonEDq6ql8AVDoonr+F+waLwBBKKR3lEFkEn+3VvhIshaQMJ6xV9hW+wrnQ8ahWE97BXuMNNePG87RY3escCho9Uzj/Dno82KWpKM55sUtSdXcoFRzKVrIgrfYVvsK3RMjnNeee7gyfW+C57uDJ9b4Lnu4MiASwB0WN3rG71jhMdWEk+Pclsx1YSTir7CrQAD+/VafSWkqQhGH5UOGXHJIbgASJKB5nygBSTjZv2OQIyg88TylvMKK3sX1CB1u8SMoJp8Dyq0DHEgyp8sGMuf3ULcQIO6laEbEwj2owgAmqGhwCT/C6irW7C0PWicd/oYminB/k/+vPMWPI4nTTN/5E2LtKjEjv8o7qngW9bwMxPZYVmFtwNp/gKhOgj5W3U7hAT2NfdfaIABP9Ydm9QfbTjKfELl/VKb9U3JagQkDB53A+/YBS0sN2ObdZCcrxrH8jNqzFv8CZP2+vQNYYbTTUJDzPF/NTiu8X7QtL8LqNWsBgX1fywM1atNlz/5OuedWw0noPpyBP9BdtNNDFoAAjGRTR9HXTnBe36SrY3RP59nMABKb6/8Qr9ghCYJSPmsq5bBrZ3z8VtYWDfy3ltAKksYX2KZUzFUvf18s1EpgeeU1vM10J9Iq198AarGqLTF3s+DWz+MKCN8VYnl5laVsnLgCrzwDSsy8ead1fMVdbwJ82nzN2ys4TTp1Z8qCO3SmWcICKYKcex2pN17Qhj+bHLlE1v2dFvnY5wZkATbICJDWCpT77XMGdHx06aBTU16UIUVb17xBPEgk4VP4sICR32A4tIM/5r2AN7VW0jhnyF7XNVdV5WoZ0t4p36cGju1QAJDvOwryDGNuPTZiT3uODZygjpFAwBFoWM4C7bYSygAhYClB3UgDT0s/8I8Ci9vcdtGyAoVi94CaHefwQmu/XnjY4ee3ATZA2Urn7hD1ymVlbTudb7QcPofbK/9+q6w6Qqr20APHYwFweGS0eW/6rBg/RTXrgy2K0PTOfC2hkOiVyMXi5RBQKAn11f4k5cwG+i/tAAcaEOiNFiWZwAUl09QFA4UY7V1La3fVK9mG2pTnX7qfyvWGh258WX5bTTBeXkXJipnQyH/chws3LZcFJDGGJk1KncXBxIsuEnLea4GxZ6pcXYcTXA8OkATjlkB5oMcfcI5pZ7C4CHCakX0YoOKP5EymXe6vQDxGAmDuZw8ca9sBYfPUWBrZfIAF5miSBtrlRzT5+2uWkPLTLPfw5Rd1h6cc1eG986oLJ8aFNEdf/AfP5jN6UMILCk2TGOfAnkkTiycA3MpubsORzf+ST5wEQOAaIZTUvri3+BLHqLz98e76AADUYjwmHSBojMIENgUqLdh425o9E/0xtbHFei20kJdQsaPrtk9AKkkAAAo9KE4Vs6tYbOXtVVC+FKeiuwEJ++HWpv0/V2Zf3QcyCy3D79etxyygiY62isl1QskGRtj0OZmagnFRSw83hCUtzn73eeHydQkMT3BUPekHpRTwZYKA8dak1lwvRIn9KQ8C8Dm6Lx8d39arXuJN0pjQ2SOVXoh0RIEpGkrDvKSVeAZkyE7hR3IQQCiLbBs0HQKMtAUDAjKBf7ELANYAMr7AF4vCKKnRk22fzFP//1yCRhLkEebIwlxRkyh3mWVz3AuVdbVg1mbVVT2YuyNlOEE4Knb9584R1YtpA7HZdTnwEdjsupz4ZFR0AEe0XNwh2W8XWeYpKHUG5zMtA+6yepaGSOmeEnNFN6BPy4ZOr1qS4WdrYywiJTLVDbiprPxAfhyzWMpC2LbD1BLttvIC5HwxL1K+LJJXdAyis3k1UN/yFVZ+N2AkVaovU00YgYVKjH5u3gfrjRHbgcAAVIiFPnF1YQAN12QZunChbOePGK4iaeTBjlMACcDomWOdgBLz5H61ky05EYc1E4rNku/4CoTpE1FWao5kPtnukhg6bWPvYABd1kTFG0hopSg2yziv2TjPpXDsPbyG/9otdUn1zfGLXcPwtGSApc6P09R5YQiL8+6tTH094Yqi/TjrdF+Sp+E0+bT5m7ZYiU1YLk9E8ljbxVETFaI9APgJDdy1NSvxwEbf4QffkJ+l1nHUXj7+v4lXrYnbqsZBfz7Lq7Ec92AARcWnUKCGFeSviK3dQA6uxhwXeD6exAct7X/LGs74WwED8AAAZTKOcASp++aANoBVnx3DM/qm5qeeuyk1dq9XRJrGx0zCeakQF9OO92GU7tYzvSB3etAUl2YOO5jtin5MBcF3x/Xu76ozGJbFY8Cfj1lAZaj4GwIYcPtfxUsRZjQbaarPeDFCgfM17Q7OzzRbRVZiJljhnZ+YALHumRJADmFbidrMzKknilJb6XweQyBFIIgHtGFkP0ZXV66fA/hWJIzc72JefQCxuLcwhsWApgrC0M8M3gqJAxHaj6ALhOa6cAOYOatCKsXdGhRrN86hxVtwt0kcHhKeMId8D6DuaoXH2EkspwtJQgOyn90oHSgS2PUxp7IGKfJrnhytXUI31PQlktT5wn6UZcJk6axdHWRaAmP9fG5Hjf7n+r6NAAk1jV9dPvV8B7EqzOlOv4yVQSyKkl0rgZvQmMgFzB3whpqJUfJaLbxnbst8ENi4BG4iRJV7/h4OVkG6Lf88P4HPZjYukbjll+6gHES0p4oABkNhpEVShBgLzHOz6YPoIEihzXG4De/jzjwDrYf/Y4CA8L3w8Jg9EsAH9AKZPQxIE/FTAfVNQ0989yHIZfeCI3x+kgNA4M6+qAERzADYMLo1eALcAW4AtwBbgC3AFsxYQks55JWZWqcS4AAAAAAAAAA=" },
            { nome: "Diablo", url: "https://johnimril.github.io/diablo_web/", img: "https://johnimril.github.io/diablo_web/favicon.ico" },
            { nome: "Push to learn", url: "https://pushtolearn.com/unblocked-games-g-plus#google_vignette", img: "https://pushtolearn.com/favicon.ico" },
            
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
