fn get_user(input: &str, db: &dyn QueryDb) {
    let query = format!("SELECT * FROM users WHERE name = '{}'", input);
    db.query(&query);
}
trait QueryDb { fn query(&self, sql: &str); }
