import MongoClient from 'mongodb';

const URL = "mongodb+srv://PrestonFoshee:RqVd4VeRgSe9gDNO@cluster0.yuzwq.mongodb.net";

export default class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect() {
        this.connection = await MongoClient.connect(URL, { useUnifiedTopology: true });
        this.database = this.connection.db("lab10");
        this.collection = this.database.collection("people");
    }

    async createOne(person) {
        if (this.collection != null) {
            return await this.collection.insertOne({
                "firstName": person,
                "lastName": "",
                "favoriteColor": ""
            });
        }
    }
    // for the readOne method, it works properly if it is not asynchronous.
    // however, VS Code automatically converts it to async.
    // the logic is correct and the console log returns the correct info,
    // but for some reason it won't respond with the JSON data in the GET route.
    async readOne(person) {
        return await this.collection.findOne({ "firstName": person })
            .then((document) => {
                let result = { person: "not found" };
                if (document) {
                    result = document;
                    console.log(result);
                    return result;
                } else {
                    console.log(result);
                    return result;
                }
            })
            .catch((error) => {
                console.log("Error: " + error);
            })
    }

    close() {
        if (this.connection != null) {
            this.connection.close();
        }
    }
}
