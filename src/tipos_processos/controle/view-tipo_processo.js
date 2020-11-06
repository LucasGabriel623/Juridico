$(document).ready(function(){

    $('#table-tipo_processo').on('click', 'button.btn-visualizar', function(e){

        e.preventDefault()

        $('.modal-title').empty()
        $('modal-body').empty()

        let idtipo_processo = `idtipo_processo=${$(this).attr('id')}`

        $('.modal-title').append(`Visualização do Tipo processo #${$(this).attr('id')}`)

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: idtipo_processo,
            url: 'src/tipos_processos/modelo/view-tipo_processo.php',
            success: function(dado){
                if(dado.tipo == "success"){

                    $('.modal-body').load('src/tipos_processos/visao/form-tipo_processo.html', function(){

                        $('#nome').val(dado.dados.nome)
                        $('#nome').attr('readonly', 'true')

                        $('#dataagora').val(dado.dados.datamodificacao)

                        if(dado.dados.ativo == "N"){
                            $('#ativo').removeAttr('checked')
                        }

                        $('#ativo').attr('readonly', 'true')

                        $('#idtipo_processo').val(dado.dados.idtipo_processo)
                    })

                    $('.btn-save').hide()
                    $('#modal-tipo_processo').modal('show')

                } else{
                    Swal.fire({
                        title: 'appJuridico',
                        text: dado.mensagem,
                        type: dado.tipo,
                        confirmButtonText: "OK"
                    })
                }

            }
        })
    })
})