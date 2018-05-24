var minify = require('html-minifier').minify;
var fs=require("fs");
var path=require("path");

exports.default=function(done){
    var simonSaysPath=path.join(__dirname,"simonsays.html");
    var simonSaysMinPath=path.join(__dirname,"simonsaysmin.html");
    
    return fs.readFile(simonSaysPath,"utf8",function(err,data){
        var minified=minify(data,{minifyCSS:true,minifyJS:true,collapseWhitespace:true,collapseInlineTagWhitespace:true});
        fs.writeFile(simonSaysMinPath,minified,function(err){
            if(err){
                
                console.log(err.message);
            }
            done();
        });
        
    });
    //fs.readFile(path.join __dirname)
};