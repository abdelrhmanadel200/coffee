document.addEventListener('DOMContentLoaded', () => {
    const blogGrid = document.getElementById('blogGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuToggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');
    const blogForm = document.getElementById('blogForm');

    let posts = [
        {
            id: 1,
            title: "The Art of Pour-Over Coffee",
            excerpt: "Master the technique for a perfect cup of pour-over coffee. Learn about water temperature, grind size, and pouring techniques...",
            readTime: 5,
            category: "brewing"
        },
        {
            id: 2,
            title: "Exploring Single-Origin Beans",
            excerpt: "Dive into the world of single-origin coffee beans. Discover the unique flavors and characteristics of beans from different regions...",
            readTime: 7,
            category: "origins"
        },
        {
            id: 3,
            title: "The Rise of Third Wave Coffee",
            excerpt: "Understand the movement that's revolutionizing coffee culture. From farm to cup, explore the emphasis on quality and sustainability...",
            readTime: 6,
            category: "culture"
        },
        {
            id: 4,
            title: "Home Roasting: Getting Started",
            excerpt: "Learn how to roast your own coffee beans at home. Explore different roasting methods and equipment for the perfect roast...",
            readTime: 8,
            category: "roasting"
        },
        {
            id: 5,
            title: "The Science of Espresso Extraction",
            excerpt: "Delve into the physics and chemistry behind pulling the perfect espresso shot. Understand pressure, temperature, and grind size...",
            readTime: 6,
            category: "brewing"
        },
        {
            id: 6,
            title: "Coffee Farming: From Seed to Harvest",
            excerpt: "Follow the journey of coffee from plantation to picking. Learn about sustainable farming practices and challenges faced by farmers...",
            readTime: 7,
            category: "origins"
        }
    ];

    function renderPosts(postsToRender) {
        blogGrid.innerHTML = '';
        postsToRender.forEach(post => {
            const postElement = document.createElement('article');
            postElement.className = 'blog-card';
            postElement.setAttribute('data-category', post.category);
            postElement.innerHTML = `
                <div class="card-content">
                    <h2>${post.title}</h2>
                    <p>${post.excerpt}</p>
                    <span class="read-time">${post.readTime} min read</span>
                </div>
            `;
            blogGrid.appendChild(postElement);
        });
    }

    function filterPosts(category) {
        const filteredPosts = category === 'all' ? posts : posts.filter(post => post.category === category);
        renderPosts(filteredPosts);
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterPosts(filter);
        });
    });

    menuToggle.addEventListener('click', () => {
        menuItems.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.floating-menu')) {
            menuItems.classList.remove('active');
        }
    });

    blogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('blogTitle').value;
        const content = document.getElementById('blogContent').value;
        const category = document.getElementById('blogCategory').value;
        const readTime = Math.ceil(content.split(' ').length / 200); // Estimate read time based on word count

        const newPost = {
            id: posts.length + 1,
            title: title,
            excerpt: content.slice(0, 150) + '...',
            readTime: readTime,
            category: category
        };

        posts.unshift(newPost);
        filterPosts('all');
        blogForm.reset();

        // Update active filter to 'All'
        filterButtons.forEach(btn => btn.classList.remove('active'));
        filterButtons[0].classList.add('active');
    });

    // Initial render
    renderPosts(posts);
});