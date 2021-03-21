let validation = (value) =>{
    let errorMessage;
    if(value.name.length < 2){
        errorMessage = "Name must be longer than 2 Character"
    }
     else if(value.email !== /\S+@\S+\.\S+/.test(value.email)){
        errorMessage = "Please provide a valid email"
    }
    else if(value.password !== /\d{1}/.test(value.password)){
        errorMessage = "Password must be 6 character with a number"
    }
    else{
        return errorMessage;
    }
}
export default validation;