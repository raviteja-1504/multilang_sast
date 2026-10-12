def download(request):
    filename = request.args.get("file")
    path = "/srv/uploads/" + filename
    with open(path, "rb") as stream: return stream.read()
