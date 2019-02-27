const BasicGallery = require('csc-adv-int-basic-gallery');
const thumbNails = require("./thumbnailgallery.js");

document.addEventListener('DOMContentLoaded', () => {
  const base = document.getElementsByClassName('gallery')[0];
  const containerWidth = base.getBoundingClientRect().width;
  // 500 / 375 = containerWidth / X
  const displayHeight = Math.round((containerWidth * 375) / 500);
  base.style.height = "" + displayHeight + "px";
  const gallery = new thumbNails (base.getElementsByClassName("full-images")[0]);
});