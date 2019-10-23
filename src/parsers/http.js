import logger from '../logger';

const http = callback => async (req, res) => {
    const event = {
        body: JSON.stringify(req.body),
        query: JSON.stringify(req.query),
        headers: req.headers,
    };

    try {
        const response = await callback(event);

        logger.log(response);
        if (response.statusCode) {
            res.status(response.statusCode);
        }
        res.send({
            ...response,
            body: JSON.parse(response.body),
        });
    } catch (error) {
        logger.error(error);

        res.status(400).send(error);
    }
};

export default http;