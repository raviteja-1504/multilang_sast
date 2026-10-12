<?php
function get_user(mysqli $db): mixed {
    $id = $_GET['id'];
    $sql = "SELECT * FROM users WHERE id = '" . $id . "'";
    return mysqli_query($db, $sql);
}
