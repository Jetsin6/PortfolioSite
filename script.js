function showPopup(title, description) {
    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupDescription").textContent = description;
    document.getElementById("popup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }

  // Close popup when clicking outside of the popup content
window.onclick = function(event) {
    const popup = document.getElementById("popup");
    const popupContent = document.querySelector(".popup-content");
    if (event.target === popup) {
      closePopup();
    }
  }