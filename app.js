function pesquisar() {
    let section = document.getElementById
    ("resultados-pesquisa")
    
        let campoPesquisa = document.getElementById
        ("Campo-pesquisa").value

        // SE CAMPO DE PESQUISA FOR UMA STRING SEM NADA
        if(!campoPesquisa) {
            section.innerHTML = "<p>nada foi encontrado</p>"
            return
        }
        campoPesquisa =  campoPesquisa.toLowerCase()

        //inicia uma string vazia, para armanazer os result.
    let resultados = ""; 
    let titulo = "";
    let descricao = ";"
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
    
       if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

        resultados +=`
        <div class="item-resultado">
                        <h2>
                            <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href=${dado.link} target="_blank">VIAJAR NO MULTIVERSO</a>
                    </div>
                    `;

       }
    }
    
    section.innerHTML = resultados;
    

}


