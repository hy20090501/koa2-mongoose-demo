#Express+Gulp+BrowserSync+nodemon
Run an Express app base on browserSync proxy, you can enjoy browser reloading.

### Installation

To install the stable version:

```
cd myapp
npm install
```
数据库配置：
```
启动mongodb服务器：
mongod --dbpath G:\myMongoDB
初始化测试数据：
mongo;
use adminDB;

db.departments.insert({"id":"1001","name":"市场部"});
db.departments.insert({"id":"1002","name":"销售部"});
db.departments.insert({"id":"1003","name":"行政部"});

db.employees.insert({"id":"001","name":"jack","sex":1,"age":23,"dep":"593667c4ec59b38aefdc25b5"});
db.employees.insert({"id":"002","name":"tom","sex":2,"age":23,"dep":"593667c4ec59b38aefdc25b6"});
db.employees.insert({"id":"003","name":"kan","sex":1,"age":43,"dep":"593667c4ec59b38aefdc25b5"});
db.employees.insert({"id":"004","name":"julis","sex":2,"age":23,"dep":"593667c4ec59b38aefdc25b7"});
db.employees.insert({"id":"005","name":"michael","sex":1,"age":43,"dep":"593667c4ec59b38aefdc25b5"});
db.employees.insert({"id":"006","name":"jordan","sex":1,"age":25,"dep":"593667c4ec59b38aefdc25b5"});
```
Then run `gulp` to start

  * The Express server will run at localhost: 8090
  * The BrowserSync will run at localhost: 3000

Enjoy your local app at http://localhost:8090.

职工列表：http://localhost:8090/employee/list



 
 
 

