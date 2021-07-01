const Card = require('./../schema/card')
class TestController {

    /**
    * API | GET
    * @param {*} req
    * @param {*} res
    */
    static helloFunc = async (req, res) => {
        let cards = await Card.findOne();
        res.send(cards);
    }

    /**
    * API | POST
    * @example {
    *      name: String
    * }
    * @param {*} req
    * @param {*} res
    */
    static addRecord = async (req, res) => {
        let cards = await Card.create({ name: "hello world" });
        res.send(cards);
    }

}
module.exports = TestController;