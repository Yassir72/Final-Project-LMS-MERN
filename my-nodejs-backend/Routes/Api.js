function logging(req,res,next){
    console.log(`${new Date().toISOString().split('T')[0]} ${new Date().toISOString().split('T')[1].split('.')[0]} : ${req.method} : ${req.url}`);
    next();
}


module.exports = {logging};