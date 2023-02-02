let server = [
  {
    userName: "Elad",
    userID: 123321,
  },
];
function callGoogleUsers(data, callBack1, callBack2) {
  server.forEach((user) => {
    if (user.userID == data) {
      callBack1(user.userID, user.userName);
    } else {
      callBack2();
    }
  });
}
function onSuccess(id, userName) {
  console.log(`The use information for ${id} ${userName} has been retrieved.`);
}
function onFailure() {
  console.log("You've failed to retrieve the information.");
}
callGoogleUsers(123321, onSuccess, onFailure);
callGoogleUsers(111222, onSuccess, onFailure);
