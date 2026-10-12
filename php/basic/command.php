<?php
function convert_file(): string {
    $file = $_GET['file'];
    $command = "converter --file " . $file;
    return shell_exec($command);
}
