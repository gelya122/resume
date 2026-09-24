// document.addEventListener('DOMContentLoaded', function () {
//     const categoryFilter = document.getElementById('category');
//     const categories = document.querySelectorAll('.skills > div:not(.filter)');

//     categoryFilter.addEventListener('change', function () {
//         const selectedCategory = this.value;

//         categories.forEach(function (category) {
//             const skills = category.querySelectorAll('.skill');

//             let hasVisibleSkills = false;

//             skills.forEach(function (skill) {
//                 if (
//                     selectedCategory === 'all' ||
//                     skill.dataset.category === selectedCategory
//                 ) {
//                     skill.style.display = '';
//                     hasVisibleSkills = true;
//                 } else {
//                     skill.style.display = 'none';
//                 }
//             });

//             category.style.display = hasVisibleSkills ? '' : 'none';
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const categoryFilter = document.getElementById('category');
    if (!categoryFilter) return;

    // Все категории навыков (прямые потомки .skills)
    const categories = document.querySelectorAll('.skills > div:not(.filter)');

    categoryFilter.addEventListener('change', function () {
        const selectedCategory = this.value;

        categories.forEach(function (category) {
            const skills = category.querySelectorAll('.skill');
            let hasVisibleSkills = false;

            skills.forEach(function (skill) {
                const matches =
                    selectedCategory === 'all' ||
                    skill.dataset.category === selectedCategory;

                skill.style.display = matches ? '' : 'none';
                if (matches) hasVisibleSkills = true;
            });

            // Скрываем всю категорию, если в ней нет подходящих навыков
            category.style.display = hasVisibleSkills ? '' : 'none';
        });
    });
});