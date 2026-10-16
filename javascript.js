function upDate(previewPic) {
  console.log("Mouse over triggered");
  console.log("Alt text:", previewPic.alt);
  console.log("Source:", previewPic.src);

  const preview = document.getElementById("image");
  if (!preview) {
    throw new Error('Preview element with id "image" was not found.');
  }

  preview.textContent = previewPic.alt;
  preview.style.backgroundImage = `url("${previewPic.src}")`;
}

function undo() {
  const preview = document.getElementById("image");
  if (!preview) {
    throw new Error('Preview element with id "image" was not found.');
  }

  preview.style.backgroundImage = "none";
  preview.textContent = "Hover over an image below to display here.";
}
