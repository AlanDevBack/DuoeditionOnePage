function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar tag image
    const img = document.querySelector("#profile img")
    
    //substituir a imagem
    if(html.classList.contains('light')) {
        //se tiver light mode adicionar a imagem light
      img.setAttribute("src", "./assets/Duoeditionlight.png")
    } else {
        //se tiver sem light, manter imagem normal
      img.setAttribute("src", "./assets/Duoedition logo.png")
    }
}