$(document).ready(function () {

    // insert ajax

    $('#save').click(function (e) {
        e.preventDefault();
        let pid = $('#stdid').val();
        let pname = $('#name').val();
        let pemail = $('#email').val();
        let pphone = $('#phone').val();
        let pdob = $('#dob').val();
        let paddress = $('#address').val();

        mydata = { id: pid, name: pname, email: pemail, phone: pphone, dob: pdob, address: paddress };

        $.ajax({
            url: "insert.php",
            method: "POST",
            data: { sumit: JSON.stringify(mydata) },
            success: function (data) {
                msg = "<div>" + data + "</div>";
                $('#msg').html(data);
                $('#msg').css("color", "green");
                $('#formid')[0].reset();
                showdata();
            }
        });
    });


    // recive ajax

    function showdata() {
        let output = " ";
        $.ajax({
            url: "recive.php",
            method: "GET",
            dataType: "json",
            success: function (data) {
                let x = data;
                for (i = 0; i < x.length; i++) {
                    // console.log(x[i]);
                    output += "<tr><td>" + x[i].id + "</td><td>" + x[i].name + "</td><td>" + x[i].email + "</td><td>" + x[i].phone + "</td><td>" + x[i].date + "</td><td><button class='btn btn-info btn-sm edit-btn' data-editid=" + x[i].id + ">Edit</button>  <button class='btn btn-danger btn-sm del-btn' data-delid=" + x[i].id + ">Delete</button></td></tr>";
                }
                $('#Showres').html(output);
            }
        });
    }
    showdata();



    // ajax edit 

    $("tbody").on("click", ".edit-btn", function () {
        let id = $(this).attr("data-editid");
        console.log("edit succes");
        console.log(id);
        mydata = { editid: id };
        $.ajax({
            url: "edit.php",
            method: "POST",
            dataType: "json",
            data: { kailram: JSON.stringify(mydata) },
            success: function (data) {
                $('#stdid').val(data[0]);
                $('#name').val(data[1]);
                $('#email').val(data[2]);
                $('#phone').val(data[3]);
                $('#dob').val(data[4]);
                $('#address').val(data[5]);
            }
        });
    });



    // ajax delete 

    $("tbody").on("click", ".del-btn", function () {
        let id = $(this).attr("data-delid");
        // console.log("delete succes");
        // console.log(id);
        mydata = { delid: id };
        $.ajax({
            url: "delete.php",
            method: "POST",
            data: { kundu: JSON.stringify(mydata) },
            success: function (data) {
                console.log(data);
                msg = "<div>" + data + "</div>";
                $('#msg').html(data);
                $('#msg').css("color", "red");
                showdata();
            }
        });
    });
});