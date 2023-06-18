<?php

//se existe um valor no paramentro userName na URL diferente de null
if(isset($_POST['userName'])) {
    //obtem o nome do usuario por meio do metodo http POST na url
    $name = $_POST['userName'];
}else{
    $name = 'no name';
}

$computedString = 'Ei,' . $name;

//uma array com dois intens de par chave/valor
$array = ['userName' => $name, 'computedString' => $computedString];

//json_encode — Retorna a representação JSON de um valor
//json_encode(mixed $value, int $options = 0, int $depth = 512): string
//Retorna a string contendo a representação JSON de um value.
//value : O value a ser codificado. Pode ser qualquer tipo, exceto um resource. Toda a string deve ser codificada como UTF-8.
//Retorna uma string JSON codificada em caso de sucesso ou false em caso de falha.
if(json_encode($array) != '') {
    echo json_encode($array);
}else{
    echo "Não codificou em Json!";
}
?>