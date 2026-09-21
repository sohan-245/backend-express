const two = function(req,res,next){
    console.log("two called")
    //this is most important part
    //middleware always calls next fuction
    //rather than giving response
    next();
}

module.exports=two;
