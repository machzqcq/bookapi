# Node and Express

- git clone this repo
- Install dependencies `npm Install`
- Start the server `gulp`  (Might have to install gulp with `npm -g install gulp`)

# Import sample data

 Sample Data [https://gist.github.com/jonathanfmills/d337dae91d75ab71ec0f]_

- Run mongo server `docker run --name some-mongo -d -p 27017:27017  mongo`
- Install RoboMongo Client on host and connect to mongodb on port 27017. Right click and create a db with name bookAPI
- Copy bookJson.js to container `docker cp bookJson.js <container_id>:/`
- Step inside container `docker exec -it <container_id> bash`
- Run the command `mongo bookAPI < bookJson.js`  

Output looks something like the below  

```
root@291f97600aa3:/# mongo bookAPI < bookJson.js
MongoDB shell version v3.4.3
connecting to: mongodb://127.0.0.1:27017/bookAPI
MongoDB server version: 3.4.3
BulkWriteResult({
	"writeErrors" : [ ],
	"writeConcernErrors" : [ ],
	"nInserted" : 8,
	"nUpserted" : 0,
	"nMatched" : 0,
	"nModified" : 0,
	"nRemoved" : 0,
	"upserted" : [ ]
})
bye
```  

