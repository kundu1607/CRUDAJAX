<?php
include 'dbconn.php';
$data = json_decode($_POST['kundu']);

$delid = $data->delid;
// print_r($delid);

$qry = "DELETE FROM jaquarydata WHERE id='$delid'";
$qry_run = mysqli_query($conn, $qry);

if ($qry_run) {
    echo "your data delete succesfully";
} else {
    echo "your data not delete";
}

?>