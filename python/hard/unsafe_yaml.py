import yaml
def load_profile(request):
    raw = request.args.get("profile")
    return yaml.load(raw, Loader=yaml.Loader)
