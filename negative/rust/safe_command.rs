use std::process::Command;
fn safe(user_value: &str) {
    let _ = Command::new("/usr/bin/reporter").arg("--input").arg(user_value).status();
}
