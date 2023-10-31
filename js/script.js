let main = document.querySelector("main");


getData = () => { 
    fetch("../data/data.json") 
        .then((res) => { 
        return res.json(); 
    }) 
    .then((data) => {
        document.body.style = `background: ${data.bodyColor};`;
        ejercicios = Object.entries(data.ejercicios);
        main.innerHTML = headerTemplate(data.titulo);
        main.innerHTML += crearAcordeon(ejercicios);
        
        });
    }

getData();
function headerTemplate(titulo) {
    return `<header>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <h1 class="display-3 text-center">
                                ${titulo}
                            </h1>
                        </div>
                    </div>
                </div>
            </header>`;
}
function crearAcordeon(ejercicios) {
    template = `<div class="container-fluid">`;
    for (let i = 0; i < ejercicios.length; i++) {
        if(i === 0) {
            template += crearAcordeonItem(parseInt(ejercicios[i][0]) + 1, ejercicios[i][1], true);
        } else {
            template += crearAcordeonItem(parseInt(ejercicios[i][0]) + 1, ejercicios[i][1], false);
        }
    }
    template += `</div>`;
    
    return template;

}

function crearAcordeonItem(id, enunciado, primary) {
    return `<div class="accordion mt-4 offset-2 col-8" id="accordionEjer${id}">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button ${primary ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#ejer${id}"
                            aria-expanded="true" aria-controls="ejer${id}">
                            ${enunciado}
                        </button>
                    </h2>
                    <div id="ejer${id}" class="accordion-collapse collapse ${primary ? 'show' : ''}" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <code>
                            <script src="ejercicios/ejercicio${id}.js"></script>
                            </code>
                        </div>
                    </div>
                </div>
            </div>`;
}