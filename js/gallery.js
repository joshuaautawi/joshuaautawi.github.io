class Gallery {
  galleryImgs = document.querySelectorAll(".gallery-container img");
  /**
   * @type {HTMLButtonElement} - The button for going to the next image.
   */
  prevButton = document.querySelector(".btns button");
  /**
   * @type {HTMLButtonElement} - The button for going to the next image.
   */
  nextButton = document.querySelector(".btns button:last-child");
  imgLength;
  currImageChild = 0;

  init() {
    this.prevButton.disabled = true;
    this.imgLength = this.galleryImgs.length;
    this.prevButton.addEventListener("click", () => {
      this.nextButton.disabled = false;
      this.galleryImgs[this.currImageChild].classList.remove("actived");
      if (this.currImageChild === 1) {
        this.prevButton.disabled = true;
      }
      this.currImageChild--;
      this.galleryImgs[this.currImageChild].classList.add("actived");
    });
    this.nextButton.addEventListener("click", () => {
      this.prevButton.disabled = false;
      this.galleryImgs[this.currImageChild].classList.remove("actived");
      this.currImageChild++;
      if (this.currImageChild == this.imgLength - 1) {
        this.nextButton.disabled = true;
      }
      this.galleryImgs[this.currImageChild].classList.add("actived");
    });
  }
}
new Gallery().init();
