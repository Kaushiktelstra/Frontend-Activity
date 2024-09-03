// script.js
document.addEventListener('DOMContentLoaded', function () {
    const imageUpload = document.getElementById('image-upload');
    const userImage = document.getElementById('user-image');
    const colorPreference = document.getElementById('color-preference');
    const qualificationSection = document.getElementById('qualification-section');

    // Handle image upload and display
    imageUpload.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                userImage.src = e.target.result;
                userImage.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    // Handle background color preference change
    colorPreference.addEventListener('input', function (event) {
        document.body.style.backgroundColor = event.target.value;
    });

    // Highlight qualifications on mouse enter
    qualificationSection.addEventListener('mouseenter', function () {
        qualificationSection.classList.add('highlight');
    });

    // Remove highlight on mouse leave
    qualificationSection.addEventListener('mouseleave', function () {
        qualificationSection.classList.remove('highlight');
    });
});
