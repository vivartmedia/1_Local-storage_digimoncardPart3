export { saveToLocalStorage, getlocalStorage, removeFromLocalStorage };
    
const saveToLocalStorage = (digimon) => {
    //favorites will get the current values in local storage
    //AKA saves the array in favorites
    let favorites = getlocalStorage();


    //If the name is already included in the local storage we will not push into favorites
    if(!favorites.includes(digimon)) {
        favorites.push(digimon);
    }
    //JSON.stringify insures what ever we save into local storage is a string
    localStorage.setItem("Favorites", JSON.stringify(favorites));
}

const getlocalStorage = () => {
    //Getting our values from local storage
    let localStorageData = localStorage.getItem("Favorites");

    //We check if that data is null if so we retun an empty array
    if(localStorageData == null){
        return [];
    }
    // We return an array of local storage.
    return JSON.parse(localStorageData);

}

const removeFromLocalStorage = (digimon) => {
    //We're saving local storage data into favorites variable
    let favorites = getlocalStorage();

    //We're finding the Index of our parameter (digimon)
    let namedIndex = favorites.indexOf(digimon);

    //remove the name from the array using the .splice method
    favorites.splice(namedIndex, 1);

    //We set our new mutated favotires array inside our local storage.
    localStorage.setItem("Favorites", JSON.stringify(favorites))

}

