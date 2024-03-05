var man = [
    {
      id: 1,
      name: "Sơ mi nam",
      code: "TC1025011BA",
      price: 250000,
      image: "https://i.pinimg.com/564x/55/b8/68/55b868ffd853d8df501fba0a79acd5e4.jpg"
    },
    {
      id: 2,
      name: "Áo khoác",
      code: "TC1025011BA",
      price: 398000,
      image: "https://i.pinimg.com/564x/b7/46/09/b746090cf61b0a2d65e55251e100ba65.jpg"
    },
    {
      id: 3,
      name: "Áo khoác da",
      code: "TC1025011BA",
      price: 300000,
      image: "https://i.pinimg.com/564x/24/92/f2/2492f290aa034ca1ede7e47f29b685eb.jpg"
    },
    {
      id: 4,
      name: "Áo thun",
      code: "TC1025011BA",
      price: 300000,
      image: "https://i.pinimg.com/474x/46/44/ce/4644ce17db402a31c4d64f4bd9ec886b.jpg"
    }
];

var women = [
    {
      id: 1,
      name: "Váy Fashion",
      code: "TC1025011BA",
      price: 250000,
      image: "https://i.pinimg.com/564x/83/42/51/834251f183acc743686656d65ccd4090.jpg"
    },
    {
      id: 2,
      name: "Đầm Babydoll",
      code: "TC1025011BA",
      price: 398000,
      image: "https://i.pinimg.com/564x/5c/27/9e/5c279e00e045387041398a13c51356f8.jpg"
    },
    {
      id: 3,
      name: "Váy hoa nhí",
      code: "TC1025011BA",
      price: 300000,
      image: "https://i.pinimg.com/564x/cf/4d/1d/cf4d1d1a86a804216f74507c4f51bc76.jpg"
    },
    {
      id: 4,
      name: "Áo khoác",
      code: "TC1025011BA",
      price: 300000,
      image: "https://i.pinimg.com/564x/2c/16/1b/2c161b76addd399651297d87b98a37e5.jpg"
    }
];

function listProducts(){
    for (let i=0; i<=man.length-1; i++){
        var demo='<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="'+man[i].image+'" class="card-img-top" style="height: 400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+ ',</h5>';
        demo += '<p class="card-text">'+man[i].price+ ',</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("man").innerHTML += demo;
    }
    
    for (let i=0; i<=women.length-1; i++){
        var demo='<div class="col-3">';
        demo += '<div class="card" style="width: 18rem;">';
        demo += '<img src="'+women[i].image+'" class="card-img-top" style="height: 400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+women[i].name+ ',</h5>';
        demo += '<p class="card-text">'+women[i].price+ ',</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML += demo;
    }
}

function oder(){
    alert("Thank you your oder");
}