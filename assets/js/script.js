const ele = document.getElementById("ele1")

const pintar = function(color = "green"){
    ele.style.backgroundColor = color
}

/*llama a la función y no le pasa parametro con lo que la variable color se le asigna el valor por defecto: verde*/
pintar()

ele.addEventListener("click", () => {pintar("yellow")})

