<?php

    include('../../banco/conexao.php');

    if($conexao){

        $requestData = $_REQUEST;

        $id = isset($requestData['idtipo_processo']) ? $requestData['idtipo_processo'] : '';

        $sql = "SELECT * FROM PROCESSOS WHERE idtipo_processo = $id";
        $resultado = mysqli_query($conexao, $sql);

        if($resultado && mysqli_num_rows($resultado) > 0){
            $dados = array(
                'tipo' => TP_MSG_INFO,
                'mensagem' => "Cliente não pode ser deletado possui processo(s) relacionado(s)."
            );
        } else {
            
            $sql = "DELETE FROM tipos_processos WHERE idtipo_processo = $id";

            $resultado = mysqli_query($conexao, $sql);
            if($resultado){
                $dados = array(
                    'tipo' => TP_MSG_SUCCESS,
                    'mensagem' => "Tipo processo deletado com sucesso."
                );
            } else {
                $dados = array(
                    'tipo' => TP_MSG_ERROR,
                    'mensagem' => "Não foi possível deletar o tipo processo."
                );
            }

        }

        mysqli_close($conexao);

    } else {
        $dados = array(
            'tipo' => TP_MSG_INFO,
            'mensagem' => MSG_FALHA_CONEXAO
        );
    }

    echo json_encode($dados, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);