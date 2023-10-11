const sectBtns = document.querySelectorAll(".control");
const sections = document.querySelectorAll(".section");

function showSection(sectionId) {
    sections.forEach((section) => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

sectBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        const sectionId = this.dataset.id;
        showSection(sectionId);

        // Remove 'active-btn' class from all buttons
        sectBtns.forEach((btn) => {
            btn.classList.remove('active-btn');
        });

        // Add 'active-btn' class to the clicked button
        this.classList.add('active-btn');
    });
});

//toggle theme

const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
})




