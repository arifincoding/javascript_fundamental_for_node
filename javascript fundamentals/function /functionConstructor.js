function UserCredential(username, password) {
    this.username = username;
    this.password = password;
}
// output dalam bentuk object
const user = new UserCredential("nezuko", "kimetsu1212");

console.log(user); //output : UserCredential{username:'nezuko', password: 'kimetsu1212'}

console.log(user.username); // output : nezuko
console.log(user.password); // output : kimetsu1212