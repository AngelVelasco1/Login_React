export const loginV1 = async (req, res, next) => {
    if(!req.rateLimit) return; 
    res.status(req.data.status).send(req.data);
}