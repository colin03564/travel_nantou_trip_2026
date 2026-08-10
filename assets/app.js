document.addEventListener('DOMContentLoaded', () => {
            const tabs = document.querySelectorAll('.tab-btn');
            const sections = document.querySelectorAll('.info-grid, .day-card');

            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    if (window.scrollY >= sectionTop) {
                        current = section.getAttribute('id');
                    }
                });

                tabs.forEach(tab => {
                    tab.classList.remove('active');
                    if (tab.getAttribute('href') === `#${current}`) {
                        tab.classList.add('active');
                    }
                });
            });
        });
