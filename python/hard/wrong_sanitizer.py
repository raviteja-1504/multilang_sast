from markupsafe import escape
def lookup(request, cursor):
    user_id = escape(request.args.get("id"))
    query = "SELECT * FROM users WHERE id = '" + str(user_id) + "'"
    return cursor.execute(query)
