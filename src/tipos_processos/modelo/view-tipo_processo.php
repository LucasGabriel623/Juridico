<?php

include '../../banco/conexao.php';

if($conexao){

    $requestData = $_REQUEST;

    $id = isset($requestData['idtipo_processo']) ? $requestData['idtipo_processo'] : '';

    $sql = "SELECT idtipo_processo, nome, ativo,
            DATE_FORMAT(datacriacao, '%d/%m/%Y %H:%i:%s') as datacriacao,
            DATE_FORMAT(datamodificacao, '%d/%m/%Y %H:%i:%s') as datamodificacao
            FROM tipos_processos
            WHERE idtipo_processo = $id";

    $resultado = mysqli_query($conexao, $sql);

    if($resultado && mysqli_num_rows($resultado) > 0){
        while($linha = mysqli_fetch_assoc($resultado)){
            $dados = $linha;
        }

        $dados = array(
            "tipo" => TP_MSG_SUCCESS,
            "mensagem" => '',
            "dados" => $dados
        );
    } else {
        $dados = array(
            "tipo" => TP_MSG_ERROR,
            "mensagem" => 'Não foi possível localicar o tipo processo.',
            "dados" => array()
        );
    }

    mysqli_close($conexao);

} else {
    $dados = array(
        "tipo" => TP_MSG_INFO,
        "mensagem" => MSG_FALHA_CONEXAO,
        "dados" => array()
    );
}

echo json_encode($dados, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);