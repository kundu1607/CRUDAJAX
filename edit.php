<?php
include 'dbconn.php';
$data = json_decode($_POST['kailram']);

$editid = $data->editid;

$qry = "SELECT * FROM jaquarydata WHERE id='$editid'";
$qry_run = mysqli_query($conn, $qry);
$row = mysqli_fetch_array($qry_run);


echo json_encode($row);

?>