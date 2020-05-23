const validURL = (str)=>{
    // const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi; 
    let regex = new RegExp(expression);
    if (!str.match(regex)) {	
      // console.log("InValid URL");
      alert("Please enter a valid URL.");
      return false;
    }
    else {
      // console.log("Valid URL");//for check
      return true;
    }
}

// as a jest test result was "TypeError: validURL is not a function" so i tries make it using a usual funcion synatcs

export { validURL }

