const mongoose = require('mongoose');
const env = require("../../views/config.env")

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewURlParser: true,
            useUnifiedTopology: true
            // // useFindAndModify: false,
            // // useCreateIndex: true
        })

        console.log(`MongoDB connected: ${con.connection.host}`)
    } catch(err) {
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDB