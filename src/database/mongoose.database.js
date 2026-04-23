const mongoose = require("mongoose");

const connectToDatabase = async () => {
    await mongoose.connect(
        // `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pyhwodh.mongodb.net/?appName=Cluster0`
        `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-paa9jen-shard-00-00.pyhwodh.mongodb.net:27017,ac-paa9jen-shard-00-01.pyhwodh.mongodb.net:27017,ac-paa9jen-shard-00-02.pyhwodh.mongodb.net:27017/?ssl=true&replicaSet=atlas-dm9vb9-shard-0&authSource=admin&appName=Cluster0`
    );
    console.log("Conectado ao mongoDB caralho!!!");
};

module.exports = connectToDatabase;
