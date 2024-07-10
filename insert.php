<?php
include 'dbconn.php';
$data = json_decode($_POST['sumit']);

$stdid = $data->id;
$name = $data->name;
$email = $data->email;
$phone = $data->phone;
$dob = $data->dob;
$address = $data->address;


$qry = "INSERT INTO jaquarydata(id,name,email,phone,date,address)
VALUES('$stdid','$name','$email','$phone','$dob','$address')ON DUPLICATE KEY UPDATE name='$name',email='$email', phone='$phone',date='$dob',address='$address'  ";
$qry_run = mysqli_query($conn, $qry);

if (!$qry_run) {
    echo "data not save";
}

// if ($qry_run) {
//     echo "data save/updated succesfully ";
// } else {
//     echo "data not save";
// }

if ($stdid == "") {
    echo " data save succesfully";
} else {
    echo " data update succesfully";
}

?>