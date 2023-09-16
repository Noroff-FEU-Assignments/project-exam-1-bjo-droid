const wordpressUrl = "https://bjotech.no/blog/wp-json/wp/v2/posts/";
const id = new URLSearchParams(window.location.search).get("id");
const postUrl = wordpressUrl + id + "?_embed";
const container = document.querySelector(".blog-container");

async function getPost() {
  try {
    const response = await fetch(postUrl);
    const post = await response.json();
    console.log(post);
    document.title = "Bjotech | Article about " + post.title.rendered;
    document.querySelector(".blog-header h1").innerHTML = post.title.rendered;
    document.querySelector(".blog-image img").src =
      post._embedded["wp:featuredmedia"][0].source_url;
    document.querySelector(".blog-image img").alt =
      post._embedded["wp:featuredmedia"][0].alt_text;
    document.querySelector(".content p").innerHTML = post.content.rendered;
  } catch (error) {
    console.log(error);
  }
}

getPost();

// Get the modal
var modal = document.getElementById("img-modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("blogImage");
var modalImg = document.getElementById("pop-out");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
