from pathlib import Path
BASE = Path("/srv/uploads").resolve()
def download(request):
    candidate = (BASE / request.args.get("file")).resolve()
    if candidate != BASE and BASE not in candidate.parents:
        raise ValueError("path escapes upload directory")
    return candidate.read_bytes()
