import logger from '../logger';

const sns = callback => async (req, res) => {
    const event = {
        Records: [
            { Sns: { Message: JSON.stringify(req.body) } },
        ],
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

export default sns