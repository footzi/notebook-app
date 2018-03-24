import mongoose from 'mongoose';
import config from './config';
const connectDB = () => {
    return new Promise((resolve, reject) => {
        mongoose.Promise = global.Promise;
        mongoose.set('debug', true);

        mongoose.connection
            .on('error', error => reject(error))
            .on('close', () =>console.log('DB connection closed'))
            .once('open', () => resolve(mongoose.connections[0]));
        
        mongoose.connect(config.MONGO_URL);
    });
};

export default connectDB;