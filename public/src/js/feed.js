var shareImageButton = document.querySelector("#share-image-button");
var createPostArea = document.querySelector("#create-post");
var closeCreatePostModalButton = document.querySelector(
  "#close-create-post-modal-btn"
);

function openCreatePostModal() {
  createPostArea.style.display = "block";

  if (deferredPrompt) {
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(function (choiseResult) {
      // Optionally, send analytics event with outcome of user choice
      console.log(choiseResult.outcome);

      if (choiseResult.outcome === "dismissed") {
        console.log("User cancelled installation");
      } else {
        console.log("User added app to the homescreen");
      }
    });
  }

  // We've used the prompt, and can't use it again, throw it away
  deferredPrompt = null;
}

function closeCreatePostModal() {
  createPostArea.style.display = "none";
}

shareImageButton.addEventListener("click", openCreatePostModal);

closeCreatePostModalButton.addEventListener("click", closeCreatePostModal);
