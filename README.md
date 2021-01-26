# userAPI
API to manage products in shopping cart application
NodeJs application with MongoDB

To set the database connection string
Set admindb_connection=mongodb+srv://dbuser:<password>@admin.3kv7w.mongodb.net/AdminDB?retryWrites=true^&w=majority
You may need to replace the password

To enable all console logs
Set DEBUG=app:*

To enable only application related logs
Set DEBUG=app:application

To enable only database connection related logs
Set DEBUG=app:database

To run the application in a different port
Set PORT=<yourport>