$(document).ready(function(){

    $('.btn-new-tipo').click(function(e){

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo tipo processo')

        const datacriacao = new Date().toLocaleString()

        $('.modal-body').load('src/tipos_processos/visao/form-tipo_processo.html', function(){
            $('#dataagora').val(datacriacao)
        })

        $('.btn-update').hide()
        $('.btn-save').show()

        $('#modal-tipo_processo').modal('show')

    })
})