const logger = {
    log: () => { },
    error: () => { }
};
export const setLog = logFunction => {
    logger.log = logFunction;
}
export const setError = errorFunction => {
    logger.error = errorFunction;
}
export default logger;