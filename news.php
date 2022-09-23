<?php 
//Get connection and headers
include("connection.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers *");
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
header('Content-Type: application/json');

//Prepare and execute to get news
$query = $mysqli->prepare("SELECT * FROM news");
$query->execute();

$array = $query->get_result();

//Save result in news array
$news = [];
while($a = $array->fetch_assoc()){
    $news[] = $a;
}

//If the array was empty, send back that no news found
if (empty($news)) {
    http_response_code(400);
    echo json_encode([
        'error' => 400,
        'message' => 'No news'
    ]);
    
    return;
}

echo $json = json_encode($news);

?>