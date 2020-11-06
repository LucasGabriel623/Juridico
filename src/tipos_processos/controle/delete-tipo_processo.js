$(document).ready(function(){

    $('#table-tipo_processo').on('click','button.btn-deletar', function(e){

        e.preventDefault();

        let idtipo_processo = `idtipo_processo=${$(this).attr('id')}`

        Swal.fire({
            title: 'appJuridico',
            text: 'Deseja realmente excluir o tipo processo?',
            type: 'question',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result) => {
            if(result.value){

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: idtipo_processo,
                    url: 'src/tipos_processos/modelo/delete-tipo_processo.php',
                    success: function(dados){

                        Swal.fire({
                            title: 'appJuridico',
                            text: dados.mensagem,
                            type: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-tipo_processo').DataTable().ajax.reload()

                    }
                })
            } 
        })
    })
})