import logger from '../logger';

const sqs = callback => async (req, res) => {
    const event = {
        Records: req.body.map(messageItem => ({
            body: messageItem,
        }))
    };
    try {
        const result = await callback(event);

        logger.log(response);
        res.send({ success: true, result });
    } catch (error) {
        logger.error(error);
        res.status(500);
        res.send({ success: false, error });
    }
};

export default sqs