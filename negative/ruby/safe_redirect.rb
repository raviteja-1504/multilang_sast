class RedirectController
  ALLOWED = %w[/home /orders /profile]
  def continue
    target = params[:next]
    return redirect_to("/home") unless ALLOWED.include?(target)
    redirect_to(target)
  end
end
