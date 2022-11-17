function mascaraCep(mascaraInput) {
    const tamanhoInput = document.getElementById('cepInput').maxLength
    let valorInput = document.getElementById('cepInput').value
    //console.log('tamanho máximo:', tamanhoInput, 'valor input', valorInput)
    const mascara = {
        cep : valorInput.replace(/[^\d]/g, "").replace(/^(\d{5})(\d{3}).*/, '$1-$2' )
    };

    if(valorInput.length == tamanhoInput){
        document.getElementById('cepInput').value = mascara[mascaraInput]
    }
}
