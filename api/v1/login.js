export const loginV1 = async (req, res, next) => {
    console.log(req.data);
    if(!req.rateLimit) return; 
    res.status(req.data.status).send(req.data);
}