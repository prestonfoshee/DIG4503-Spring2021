import MongoClient from 'mongodb';

const URL = "mongodb+srv://PrestonFoshee:RqVd4VeRgSe9gDNO@cluster0.yuzwq.mongodb.net";

export default class Database {
    constructor() {
        this.connection = null;
        this.database = null;
        this.collection = null;
    }

    async connect(database, collection) {
        this.connection = await MongoClient.connect(URL, { useUnifiedTopology: true });
        this.database = this.connection.db(database);
        this.collection = this.database.collection(collection);
    }

    async createOne(ISBN, title, author, description) {
        if (this.collection != null) {
            const result = await this.collection.insertOne({
                "ISBN": ISBN,
                "title": title,
                "author": author,
                "description": description
            });
            return result.ops;
        }
    }

    async readOne(ISBN) {
        if (this.collection != null) {
            return await this.collection.findOne({ "ISBN": ISBN })
                .then(document => {
                    let result = { "book": "not found" };
                    if (document) {
                        result = document;
                        return result;
                    } else {
                        return result;
                    }
                })
                .catch(error => {
                    console.log("Error: " + error);
                });
        }

    }

    async readMany(title, author) {
        if (this.collection != null) {
            return await this.collection.find({ "title": title } || { "author": author }).toArray()
                .then(cursorArray => {
                    let result = { "books": "no boooks found" };
                    if (cursorArray) {
                        result = { "books": cursorArray };
                        return result;
                    } else {
                        return result;
                    }
                })
                .catch(error => {
                    console.log("Error: " + error);
                })
        }
    }

    // updateOne() successfully updates a document and returns that document, but is the non-updated version of it.
    async updateOne(ISBN, title, author, description) {
        if (this.collection != null) {
            const query = { "ISBN": ISBN };
            const update = {
                $set: { "title": title },
                $set: { "author": author },
                $set: { "description": description }
            }
            const options = { returnNewDocument: true };
            return await this.collection.findOneAndUpdate(query, update, options)
                .then(updatedDocument => {
                    let result = { "updated": "incorrect ISBN" };
                    if (updatedDocument) {
                        result = updatedDocument.value;
                        return result;
                    } else {
                        return result;
                    }
                })
                .catch(error => {
                    console.log("Error: " + error);
                    return { "error": "enter information to update" };
                });
        }
    }

    async deleteOne(ISBN) {
        if (this.collection != null) {
            const result = await this.collection.deleteOne({ "ISBN": ISBN });
            return { "deleted": result.deletedCount };
        } else {
            return { "deleted": 0 };
        }
    }

    async close() {
        if (this.connection != null) {
            this.connection.close();
        }
    }
}