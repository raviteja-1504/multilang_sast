def get_user(request, cursor):
    user_id = request.args.get("id")
    query = "SELECT * FROM users WHERE id = '%s'" % user_id
    cursor.execute(query)
