import os
def run_tool(request):
    tool = request.args.get("tool")
    command = "reporter --input " + tool
    return os.system(command)
