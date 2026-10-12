require "erb"
class PreviewController
  def preview
    template = params[:template]
    ERB.new(template).result
  end
end
