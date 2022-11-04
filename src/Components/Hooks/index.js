export function FindInindexReturnposition (Array, titleName, titleSubname, clickedButton){

    Array.findIndex(function (titleName){
        return titleName.titleSubname === clickedButton
    });

}

