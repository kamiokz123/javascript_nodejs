/* var nft={
    "tittle": "json",
    "id": 253,
    "users": ["kamran", "mehdi", "nadeem"],
    "content":{"length":123, "post":"love"}
}
console.log(nft.tittle);

//using json stringify

console.log(JSON.stringify(nft));
nft=JSON.stringify(nft);

//using json parse

nft= JSON.parse(nft);
console.log(nft);
console.log(nft.tittle);

//adding data to nft 
nft.hash="hello";
console.log(nft);

//changing value in nft
nft.tittle="kami";
console.log(nft.tittle);
nft.content.length=321;
console.log(nft.content);


// adding value to array inside in nft using push
nft.users.push("nad");
console.log(nft.users);

// adding new array to nft
nft.followers=[];
nft.followers.push({
    "username":"hadi",
    "id":243
})
console.log(nft);

// now adding post we use*/

let post= {};

post.userid= 1;
post.username= "kamran123";
post.userprofile= "https://web.facebook.com/kamranhaider.orakzai";
post.post= "love those who deserve it";
post.type= "public";
post.likes=[{

    "userid":12,
    "username":"hadi hussain",
    "userprofile":"https://web.facebook.com/hadi.hussain.7330",
    "liketype":":)"
},{
    "userid":13,
    "username":"mehdi abbas",
    "userprofile":"https://web.facebook.com/mehdi.abbas.37266136",
    "liketype":":)"
}
];
post.comments=[{
    "userid":12,
    "username":"hadi hussain",
    "userprofile":"https://web.facebook.com/hadi.hussain.7330",
    "commenttype":"nice"

},{
    "userid":13,
    "username":"mehdi abbas",
    "userprofile":"https://web.facebook.com/mehdi.abbas.37266136",
    "commenttype":"very good"

}]
console.log(post);
console.log("your post got "+ post.likes.length+ " likes");
