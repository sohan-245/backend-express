const hellomiddleware = function(req,res,next){
    console.log("hello called")
    //this is most important part
    //middleware always calls next fuction
    //rather than giving response
    next();
}

module.exports=hellomiddleware;