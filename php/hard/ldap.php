<?php
function find_user($conn) {
    $user = $_GET['user'];
    $filter = "(uid=" . $user . ")";
    return ldap_search($conn, "ou=people", $filter);
}
