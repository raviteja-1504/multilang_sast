<?php
function get_user(mysqli $db): mixed {
    $stmt = mysqli_prepare($db, "SELECT * FROM users WHERE id = ?");
    mysqli_stmt_bind_param($stmt, "s", $_GET['id']);
    return mysqli_stmt_execute($stmt);
}
