<?php
include "db.php";

if(isset($_POST['get_product_list'])){
    get_product_list();
}

function get_product_list(){
    global $con;

    $query = "SELECT * FROM products;";

    $result = mysqli_query($con, $query);

    $response = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $response[] = $row;
    }

    $response = json_encode($response, JSON_UNESCAPED_UNICODE);
    echo $response;
}