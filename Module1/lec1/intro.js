function getfirstname(fullName)
{
    fullName = fullName.split(" ");
    return fullName[0];
}
function getlastname(fullName){
    fullName = fullName.split(" ");
    return fullName[1];
}
function fun(fullName , cb){
    let name = cb(fullName);
    console.log(name);
}
fun("steve Man", getfirstname);
fun("Steve Iron", getlastname);
