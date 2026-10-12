from flask import render_template_string
def preview(request):
    template = request.args.get("template")
    return render_template_string(template)
