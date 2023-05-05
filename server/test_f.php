<?php
// db connection
session_start();
$con = mysqli_connect('localhost', 'shopv2_db_user', 'xzyp4bLj26#d6eeGE', 'noval372_sweet-shop'); // Connection to database server
mysqli_set_charset($con, "utf8mb4");

if (mysqli_connect_errno()) { //If error occurs, returns an error code
    echo 'Database connection error: ' . mysqli_connect_error();
}

if (isset($_POST['get_products_names'])) {
   echo get_products_names();
}
function get_products_names()
{
    global $con;

    $search_value = $_POST['search_value'];

    $query = "SELECT * FROM products;";

    $result = mysqli_query($con, $query);
    $result_array = [];


    while ($row = mysqli_fetch_assoc($result)) {

         if ( strpos($row["product_title"], $search_value ) === false) {
             continue;
         }

        $result_array[] = $row["product_title"];
    }
// Pārtaisa masīvu par stringu, lai sūtītu uz JS
   return json_encode($result_array);
}