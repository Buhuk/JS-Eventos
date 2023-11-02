{
    let wrapper = document.createElement("div");
    let contador = document.createElement("div").addEventListener('click', contadorAction);
    let borrar = document.createElement("div").addEventListener('click', borrarAction);

    let aumentar = document.createElement("button").addEventListener('click', aumentarAction);
    let disminuir = document.createElement("button").addEventListener('click', disminuirAction);

    let numeroContador = 0;
    contador.innerHTML = `<h2>Contador</h2><div id="botones"></div><h3 id="contadorOut">Contador: 0</div>`;
    borrar.append(document.createElement("button").addEventListener('click', borrarAction));
    wrapper.append(contador);
    wrapper.append(borrar);

    function aumentarAction(event) {
        event.stopPropagation();
        let contador = document.getElementById('contadorOut');
        contador.innerHTML = `Contador: ${numeroContador++}`;
    }
}