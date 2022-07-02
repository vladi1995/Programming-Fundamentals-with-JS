function printDna(givenLength) {
    let printed = (givenLength) => {
        let arrayOfString = ["A","T","C","G","T","T","A","G","G","G"];
        let dataPrint = "";
        let k = 0;

        for (let i = 0; i < givenLength; i++) {
            if (i%5==0) {
                k=0;
            }
            for (let j = 0; j < arrayOfString.length; j++) {
                dataPrint = ""; 
                    
                 if (i%2 != 0) {
                    dataPrint += "*" + arrayOfString[2*k] + "-" + "-" + arrayOfString[2*k+1] + "*";
                } else if (i == 0) {
                    dataPrint += "**" + arrayOfString[0] + arrayOfString[1] + "**";
                } else if (i%4 == 0) {
                    dataPrint += "**" + arrayOfString[2*k] + arrayOfString[2*k+1] + "**";
                } else if (i%2 == 0) {
                    dataPrint += arrayOfString[2*k] + "----" + arrayOfString[2*k+1];
                }
            }  
          k++;
          console.log(dataPrint);
        }
    }

    printed(givenLength);
}

printDna(11);
