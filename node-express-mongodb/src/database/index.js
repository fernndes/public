const mongoose = require("mongoose")

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/?retryWrites=true&w=majority`)
}

main().catch(err => console.log(err));