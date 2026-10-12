require "open3"
class ExportController
  def export
    name = params[:name]
    command = "exporter --name " + name
    Open3.capture2("sh", "-c", command)
  end
end
