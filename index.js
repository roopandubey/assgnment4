var productData = {
    id: "1",
    name: "Men Navy Blue Solid Sweatshirt",
    preview:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    description:
      "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "United Colors of Benetton",
    price: 2599
  };
  
  function getDOMTree(obj) {
    var mainSection = document.getElementById("product-detail");
  
    var lhs = document.createElement("div");
    lhs.id = "left-section";
    var lhsImage = document.createElement("img");
    lhsImage.id = "image-preview";
    lhsImage.src = obj.preview;
    lhsImage.alt = "Preview-Image";
    lhs.appendChild(lhsImage);
    mainSection.appendChild(lhs);
  
    var rhs = document.createElement("div");
    rhs.id = "right-section";
  
    var h1 = document.createElement("h1");
    h1.id = "name";
    h1.innerHTML = obj.name;
    rhs.appendChild(h1);
  
    var h3Brand = document.createElement("h3");
    h3Brand.id = "brand";
    h3Brand.innerHTML = obj.brand;
    rhs.appendChild(h3Brand);
  
    var h3Price = document.createElement("h3");
    h3Price.id = "price-header";
    h3Price.innerText = "Price: Rs ";
    var span = document.createElement("span");
    span.id = "price";
    span.innerHTML = obj.price;
    h3Price.appendChild(span);
    rhs.appendChild(h3Price);
  
    var h3desc = document.createElement("h3");
    h3desc.innerHTML = "Description";
    rhs.appendChild(h3desc);
  
    var p = document.createElement("p");
    p.id = "description";
    p.innerHTML = obj.description;
    rhs.appendChild(p);
  
    var h3Preview = document.createElement("h3");
    h3Preview.innerHTML = "Product Preview";
    rhs.appendChild(h3Preview);
  
    var thumbnail = document.createElement("div");
    thumbnail.id = "thumbnail";
    var imgID = "";
    for (var i = 0; i < obj.photos.length; i++) {
      var img = document.createElement("img");
      imgID = "img" + i;
      img.id = imgID;
      if (i === 0) {
        img.className = "border";
      }
      img.src = obj.photos[i];
      img.alt = "preview" + i;
      thumbnail.appendChild(img);
    }
    rhs.appendChild(thumbnail);
  
    var btn = document.createElement("button");
    btn.id = "add2cart";
    btn.innerHTML = "Add to Cart";
    rhs.appendChild(btn);
  
    mainSection.appendChild(rhs);
  
    function removeBorder() {
      img0.classList.remove("border");
      img1.classList.remove("border");
      img2.classList.remove("border");
      img3.classList.remove("border");
      img4.classList.remove("border");
    }
  
    var img0 = document.getElementById("img0");
    img0.addEventListener("click", function () {
      removeBorder();
      img0.className = "border";
      lhsImage.src = img0.src;
    });
  
    var img1 = document.getElementById("img1");
    img1.addEventListener("click", function () {
      removeBorder();
      img1.className = "border";
      lhsImage.src = img1.src;
    });
  
    var img2 = document.getElementById("img2");
    img2.addEventListener("click", function () {
      removeBorder();
      img2.className = "border";
      lhsImage.src = img2.src;
    });
  
    var img3 = document.getElementById("img3");
    img3.addEventListener("click", function () {
      removeBorder();
      img3.className = "border";
      lhsImage.src = img3.src;
    });
  
    var img4 = document.getElementById("img4");
    img4.addEventListener("click", function () {
      removeBorder();
      img4.className = "border";
      lhsImage.src = img4.src;
    });
  }
  
  getDOMTree(productData);
  