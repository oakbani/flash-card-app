const mongoose = require('mongoose')
const config = require('./../config')

const mongoConnection = config.MONGO_CONNECTION;

if (config.NODE_ENV === 'dev') {

    mongoose.set('useCreateIndex', true);
    // Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
    // by default, you need to set it to false.
    mongoose.set('useFindAndModify', false);

    //Connection establishment
    mongoose.connect(mongoConnection, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    let db = mongoose.connection;
    db.on('error', () => {
        console.error('Error occured in db connection');
    });
    db.on('open', () => {
        console.log('DB Connection established successfully');
    });
}