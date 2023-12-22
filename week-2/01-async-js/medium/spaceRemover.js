// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require("fs");
const filePath = "./hello.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
    if(err){
        console.log("Error opening the file: "+err)
    }else{
        console.log(data);
        const cleanedContent = data.replace(/\s+/g, ' ');
        //using regular expression here.

        // Step 3: Write the cleaned content back to the same file
        console.log(cleanedContent);

        fs.writeFile(filePath, cleanedContent, 'utf-8', function(err){
            if(err){
                console.log("Error writing file: "+err);
            }else{
                console.log("File cleaned and updated successfully.");
            }
        });
    }
})