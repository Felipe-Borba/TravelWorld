const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const galleryImage = document.getElementById("imgGallery");

let imageIndex = 0;
const images = [
  "https://all.accor.com/magazine/imagerie/ferias-na-praia-o-que-fazer-das-f163.jpg",
  "https://media.istockphoto.com/id/1300296030/pt/foto/tropical-beach-palm-trees-sea-wave-and-white-sand.jpg?s=612x612&w=0&k=20&c=nHjLozpdgxS4FJHDMrq-W-Vm8z3JrTo-C8WKoaLtpao=",
];
galleryImage.setAttribute("src", images[0]);

rightBtn.addEventListener("click", () => {
  let next = imageIndex + 1;
  if (next > images.length - 1) {
    next = 0;
  }
  galleryImage.setAttribute("src", images[next]);
  imageIndex = next;
});

leftBtn.addEventListener("click", () => {
  let next = imageIndex - 1;
  if (next < 0) {
    next = images.length - 1;
  }
  galleryImage.setAttribute("src", images[next]);
  imageIndex = next;
});
