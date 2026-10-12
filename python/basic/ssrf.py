import requests
def fetch_remote(request):
    url = request.args.get("url")
    return requests.get(url, timeout=3)
