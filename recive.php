<?php
include 'dbconn.php';

$qry = "SELECT * FROM jaquarydata";
$qry_run = mysqli_query($conn, $qry);
$data = array();
while ($row = mysqli_fetch_array($qry_run)) {
    // print_r($row);
    $data[] = $row;
}
echo json_encode($data);

?>