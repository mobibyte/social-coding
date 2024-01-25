document.getElementById("customize-btn").addEventListener("click", function() {
    document.getElementById("customize-form").style.display = "block";
});

document.getElementById("save-btn").addEventListener("click", function(event) {
    event.preventDefault();

    // Update profile with new information
    const newPicFile = document.getElementById("new-pic").files[0];
    const newName = document.getElementById("new-name").value;
    const newLocation = document.getElementById("new-location").value;

    if (newPicFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profile-pic").src = e.target.result;
        };
        reader.readAsDataURL(newPicFile);
    }

    document.getElementById("profile-info").querySelector("h1").innerText = newName || "Your Name";
    document.getElementById("profile-info").querySelectorAll("p")[0].innerText = "Location: " + (newLocation || "Your City, Country");

    // Hide customization form
    document.getElementById("customize-form").style.display = "none";
});
