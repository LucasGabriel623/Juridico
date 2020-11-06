$(document).ready(function() {

    $('#table-tipo_processo').on('click', 'button.btn-editar', function(e){

        e.preventDefault();

        $('.modal-title').empty();
        $('.modal-body').empty();

        $('.modal-title').append(`Edição do tipo processo #${$(this).attr('id')}`)

        let idtipo_processo = `idtipo_processo=${$(this).attr('id')}`

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
                        $('#txtDataAgora').val('Data Modificação:')
                        let dataagora = new Date().toLocaleString()
                        $('#dataagora').val(dataagora)

                        if(dado.dados.ativo == "N"){
                            $('#ativo').removeAttr('checked')
                        }

                        $('#idtipo_processo').val(dado.dados.idtipo_processo)
                    })

                    $('.btn-save').hide()
                    $('.btn-update').show()
                    $('#modal-tipo_processo').modal('show')

                } else{
                    Swal.fire({
                        title: 'appJuridico',
                        text: dado.mensagem,
                        type: dado.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})