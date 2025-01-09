
/*
CASE1: If password is 'abcd'
*/

const password = 'abcd';

function isValidPassword(password){
	//code here
    if(password.length < 8){
        return false;
    }

    return true;
}

isValidPassword(password) // Returns false as the length of password is less than 8 characters