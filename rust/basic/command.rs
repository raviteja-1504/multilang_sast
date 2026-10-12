use std::process::Command;
fn run_tool(user_value: &str) {
    let command = format!("reporter --input {}", user_value);
    let _ = Command::new("sh").arg("-c").arg(command).status();
}
