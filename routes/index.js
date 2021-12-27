const express = require('express')
const router = express.Router()






router.get('/',(req,res)=>{
    res.render('index')
    




})
//Read docx file with set file path beginning
const fs = require ("fs")
const { types } = require('util')
const WordExtractor = require("word-extractor")
// const extractor = new WordExtractor()
// const extracted = extractor.extract("Test jlp.docx")

// extracted.then((docx)=>{
//     console.log(docx.getHeaders({includeFooters: false}));

//     console.log(docx.getBody());
//     console.log(docx.getHeaders({includeFooters: false}));
//     //console.log(docx.getHeaders());
//     console.log(docx.getTextboxes());
//     console.log(docx.getFooters());


// })
// .catch((err) => {
//     console.log(err.message);

// });
var file1,file2;
const getWordBodyText = async (fileName)=>{
    try {
        if(fs.existsSync(fileName)){
            const extractor = new WordExtractor()
            const extracted = await extractor.extract(fileName)
            if(extractor) {
                return extracted.getBody();

            }
        }

    } catch (error) {
        return error.message
    }
}
getWordBodyText("Test jlp.docx").then(content => {
    console.log(content)
    file1=content
    console.log("Read docx file done.")
}).catch(errMsg => {
    return error.message;
});
// //Read docx file with set file path end

// Read the harcoded txt file and print its contents on command line.
var filename = "Test jlp.txt";
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  file2=data
  console.log(data)
  console.log("File: "+ filename + " read.")
});

//reads rtf file contents and outputs in console but has weird characters
// fs.readFile('./file-sample_100kB.rtf','utf8',(error,data)=>{
//     if(error){
//         return console.log(error);
//     }
    
//     console.log(convertToPlain(data));
// });
//console.log('Completed')

const EditDistance=require("../public/scripts/EditDistance")
var result= EditDistance.levenshtein("sample","ampl");
console.log("Edit Distance is: "+result);
console.log("File1 content:"+file1+"_end");
console.log("File2 content:"+file2+"_end");
var result= EditDistance.levenshtein(file1,file2);
console.log("Edit Distance is: "+result);
//add levenshtein distance
//select wordx documents from file chooser and make it have another if branch for wordx files
//read rtf files
module.exports=router