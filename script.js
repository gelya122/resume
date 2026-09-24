document.addEventListener('DOMContentLoaded', function () {
    const categoryFilter = document.getElementById('category');
    const searchInput = document.getElementById('skill-search');
    const noResults = document.getElementById('no-results');
    const categories = document.querySelectorAll('.skills > div:not(.filter)');

    function applyFilters() {
        const selectedCategory = categoryFilter.value;
        const query = searchInput.value.trim().toLowerCase();
        let totalVisible = 0;

        categories.forEach(function (category) {
            const skills = category.querySelectorAll('.skill');
            let hasVisibleSkills = false;

            skills.forEach(function (skill) {
                const categoryMatch =
                    selectedCategory === 'all' ||
                    skill.dataset.category === selectedCategory;

                const text = skill.textContent.toLowerCase();
                const searchMatch = query === '' || text.includes(query);

                if (categoryMatch && searchMatch) {
                    skill.style.display = '';
                    hasVisibleSkills = true;
                    totalVisible++;
                } else {
                    skill.style.display = 'none';
                }
            });

            category.style.display = hasVisibleSkills ? '' : 'none';
        });

        // Показываем сообщение, если ничего не найдено
        noResults.hidden = totalVisible !== 0;
    }

    categoryFilter.addEventListener('change', applyFilters);
    searchInput.addEventListener('input', applyFilters);
});