const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const galleryImage = document.getElementById("imgGallery");

let imageIndex = 0;
const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdRsdUBoWqeSvYC-yOADKwy9MBC1e1vunsjkYfZz37&s",
  "https://static.vecteezy.com/ti/fotos-gratis/t2/6026259-tranquilo-verao-ferias-ferias-paisagem-tropical-ilha-por-do-sol-praia-palms-shore-calmo-mar-areia-exotico-natureza-cenario-inspirador-e-pacifico-paisagem-marinha-reflexo-ceu-por-do-sol-foto.jpg",
  "https://all.accor.com/magazine/imagerie/ferias-na-praia-o-que-fazer-das-f163.jpg",
  "https://media.istockphoto.com/id/1300296030/pt/foto/tropical-beach-palm-trees-sea-wave-and-white-sand.jpg?s=612x612&w=0&k=20&c=nHjLozpdgxS4FJHDMrq-W-Vm8z3JrTo-C8WKoaLtpao=",
];

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
