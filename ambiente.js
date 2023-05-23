function geradorCores(){
    const chars = '0123456789ABCDEF'
    let color = '#'

    for(let i=0; i<6; i++){
        //a cada incremento do laço color(string) recebe um valor aleatório da string chars
        color += chars.charAt(Math.random() * chars.length)
    }

    return color
}

document.getElementById('btn-action').addEventListener('click', () => {

    //atribuindo a cada div 'color' um valor, são 5 div's
    for(let i=0; i<5; i++){
        let color = geradorCores()

        //a cada laço uma div 'color' diferente é recebida
        let div_color = document.getElementById(`color-${i+1}`)
        div_color.style.backgroundColor = color

        //atribuindo a escrita
        let txt_color = document.getElementById(`txt-color-${i+1}`)
        txt_color.textContent = `${color}`

        //estilos para a font
        txt_color.style.fontFamily = "var(--fonte-padrao)";
        txt_color.style.fontSize = "0.9em";
        txt_color.style.fontWeight = "bolder";
    }
})