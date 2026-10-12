<?php
function find_document($collection) {
    $filter = ['email' => $_GET['email']];
    return $collection->find($filter, ['limit' => 1]);
}
