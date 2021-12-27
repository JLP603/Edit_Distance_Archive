
//read txt file and display it on page after choosing file from file chooser
window.addEventListener('load', function() {
    
    document.getElementById("myBtn").addEventListener("click", function() {
      
      var reader = new FileReader();
      reader.addEventListener('load', function() {
        document.getElementById('file').innerText = this.result;
      });
      //has gibberish in it if it is a docx file
      reader.readAsText(document.querySelector('input').files[0]);
    });
}, true)
//read txt file and display after choosing file from file chooser
// end


//below rtf code doesnt work https://npm.io/package/rtf2text
// const rtf2text = require('rtf2text')
// const fs = require('fs')

// parseRTF.string('{\\rtf1\\ansi\\b hi there\\b0}', (err, text) => {

// })

// parseRTF.stream(fs.createReadStream('file-sample_100kB.rtf'), (err, text) => {

// })
//
//didnt work https://www.npmjs.com/package/node-unrtf
// const { UnRTF } = require("node-unrtf");

// const file = "file-sample_100kB.rtf";
// const unRtf = new UnRTF();
// const options = {
// 	outputHtml: true,
// };

// const res = await unRtf.convert(file, options);
// console.log(res);

// const { UnRTF } = require("node-unrtf");

// const file = "file-sample_100kB.rtf";
// const unRtf = new UnRTF();
// const options = {
// 	outputHtml: true,
// };

// const res = await unRtf.convert(file, options);
// console.log(res);

// https://github.com/mlewand/rtf-parse
// const rtfParse = require( 'rtf-parse' ),
// 	path = require( 'path' );

// rtfParse.parseFile( path.join( '_fixtures', 'file-sample_100kB.rtf' ) )
// 	.then( doc => {
// 		// Do anything you like with rtf.model.Document instance of your document.
//         console.log(content)
// 	} );