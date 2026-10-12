class OrdersController
  def show
    id = params[:id]
    sql = "SELECT * FROM orders WHERE id = '#{id}'"
    ActiveRecord::Base.connection.execute(sql)
  end
end
