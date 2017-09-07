/**
 * Created by hao on 7/9/17.
 */

module.exports = {
    port: 3000,
    session: {
        secret: 'myback',
        key: 'myback',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/myback'
};
