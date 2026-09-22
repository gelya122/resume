document.addEventListener('DOMContentLoaded', function () {
    const categoryFilter = document.getElementById('category');
    const categories = document.querySelectorAll('.skills > div:not(.filter)');

    categoryFilter.addEventListener('change', function () {
        const selectedCategory = this.value;

        categories.forEach(function (category) {
            const skills = category.querySelectorAll('.skill');

            let hasVisibleSkills = false;

            skills.forEach(function (skill) {
                if (
                    selectedCategory === 'all' ||
                    skill.dataset.category === selectedCategory
                ) {
                    skill.style.display = '';
                    hasVisibleSkills = true;
                } else {
                    skill.style.display = 'none';
                }
            });

            category.style.display = hasVisibleSkills ? '' : 'none';
        });
    });
});