$(document).ready(function(){

    $('.btn-save').click(function(e){

        e.preventDefault()

        let dados = $('#form-tipo_processo').serialize()

        $('input[type=checkbox]').each(function(){
            if(!this.checked){
                dados += '&' + this.name + '=off'
            }
        })

        $.ajax({
           type: 'POST',
           dataType: 'json',
           assync: true,
           data: dados,
           url: 'src/tipos_processos/modelo/create-tipo_processo.php',
           success: function(dados){
               console.log('passou por aqui')
               Swal.fire({
                    title: 'appJuridico',
                    text: dados.mensagem,
                    type: dados.tipo,
                    confirmButtonText: 'OK'
               })

               $('#modal-tipo_processo').modal('hide')
               $('#table-tipo_processo').DataTable().ajax.reload()
           } 
        })
        
    })
})