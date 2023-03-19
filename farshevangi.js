
//  I

// const arcwyali = (index) => {
//   return new Promise(res => {
//     setTimeout(res, index)
//   })
// }



// const YNWA = arcwyali(2000).then((i) => {
//   i = "a little bit";
//   console.log(i)
  
// })


// const YNWA1 = arcwyali(7000).then((i) => {
//   i = " a little bit more";
//   console.log(i)
// })


// const YNWA2 = arcwyali(150000).then((i) => {
//   i = " probably not too much";
//   console.log(i)
// })



//  II


GetFacebookProfile(1, (profile))
    .then(() => GetFacebookProfile(profile.friends[0].id, (friendsProfile)))
    .then(() => GetFacebookProfile(friendsProfile.friends[0].id, (FriendsFriend)))
    .then(() => GetFacebookProfile(FriendsFriend.friends[0].id, (finalProfile)))
    .then(() => console.log("Finally I have all profiles"))
    .catch((err) => console.log("ragaca nitoa"))






