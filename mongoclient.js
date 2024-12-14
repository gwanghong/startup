const { MongoClient } = require('mongodb');

// Replace <username>, <password>, and <dbname> with your details
const uri = 'mongodb+srv://howard729:683nDVu0iSgjq4Oh@cluster0.yhxie.mongodb.net/?';

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('Connected to MongoDB Atlas!');

        // Example: List databases
        const databasesList = await client.db().admin().listDatabases();
        console.log('Databases:');
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Close the connection
        await client.close();
    }
}

main().catch(console.error);
