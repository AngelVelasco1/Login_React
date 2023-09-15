export const loginV1 = async (req, res) => {
    if(!req.rateLimit) return; 
    res.status(200).send(req.data);
}