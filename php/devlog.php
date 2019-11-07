<?php
    $servername = "localhost";
    $username = getenv("USERNAME");
    $password = getenv("PASSWORD");
    $dbname = getenv("HACKJOBDATABASE");
    $conn = new mysqli($servername, $username,$password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    $sql = "SELECT * FROM devlog";
    $result = $conn->query($sql);

    for ($i = 0; $i < $result->num_rows;$i++){
        echo $result->fetch_assoc()['summary'];
    }
    $conn->close();
?>