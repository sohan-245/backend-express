const one = function(req,res,next){
    console.log("one called")
    //this is most important part
    //middleware always calls next fuction
    //rather than giving response
    next();
}

module.exports=one;