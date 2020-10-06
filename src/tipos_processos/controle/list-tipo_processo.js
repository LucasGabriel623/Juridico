$(document).ready(function() {

    $('#table-tipo_processo').DataTable({
        "processing": true,
        "serverSide": true,
        "pageLength": 5,
        "lengthMenu": [5, 10, 25, 50],
        "language": {
            "url": "recursos/DataTable/dataTables.brazil.json"
        },

        "ajax": {
            "url": "src/tipos_processos/modelo/list-tipo_processo.php",
            "type": "POST"
        },
        "columns": [
            { "data": "idtipos_processos" },
            { "data": "nome" },
            {
                "data": "datamodificacao",
                "className": 'text-center'
            },
            {
                "data": "ativo",
                "className": 'text-center',
                "orderable": false,
                "search": false,
                "render": function(data) {
                    let classAtivo = data == "S" ? 'fas fa-check text-success ' : 'fas fa-times text-danger'
                    return `<i class="${classAtivo}"></i>`
                }
            },
            {
                "data": "idtipos_processos",
                "className": "text-right",
                "orderable": false,
                "search": false,
                "render": function(data) {
                    return `<button id="${data}" class="btn btn-sm btn-primary btn-vizualizar"><i class="fas fa-eye"></i></button>
                    <button id="${data}" class="btn btn-sm btn-warning btn-editar"><i class="fas fa-pencel"></i></button>
                   <button id="${data}" class="btn btn-sm btn-danger btn-deletar"><i i class="fas fa-trash"></i></button>`
                }
            }
        ]
    })

})