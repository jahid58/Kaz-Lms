
      
  const experiences = [
    {
      image: "/assets/images/experience/1.png",
      name: "Thomas Winsley",
      position: "Grasmallhic Designer",
      location: "Dhaka, Bangladesh",
      review: "Lorem ipsum dolor sit amet consectetur. A vel urna tellus ut auctor facilisis aliquet egestas feugiat. Dolor nullam facilisis at mi urna enim tristique lacus sodales. Sapien mauris sit purus tristique commodo vel curabitur tristique."
    },
    {
      image: "/assets/images/experience/2.png",
      name: "Thomas Winsley",
      position: "Grasmallhic Designer",
      location: "Dhaka, Bangladesh",
      review: "Lorem ipsum dolor sit amet consectetur. A vel urna tellus ut auctor facilisis aliquet egestas feugiat. Dolor nullam facilisis at mi urna enim tristique lacus sodales. Sapien mauris sit purus tristique commodo vel curabitur tristique."
    },
    {
      image: "/assets/images/experience/4.png",
      name: "Thomas Winsley",
      position: "Grasmallhic Designer",
      location: "Dhaka, Bangladesh",
      review: "Lorem ipsum dolor sit amet consectetur. A vel urna tellus ut auctor facilisis aliquet egestas feugiat. Dolor nullam facilisis at mi urna enim tristique lacus sodales. Sapien mauris sit purus tristique commodo vel curabitur tristique."
    }
  ];

  const experienceContainer = document.getElementById('experienceContainer');

  experiences.forEach(experience => {
    const experienceHTML = `
      <div class="">
        <div class="review-card">
          <img src="${experience.image}" alt="${experience.name} Image" />
          <div class="review">
            <img src="${experience.image}" alt="${experience.name} Image" />
            <p>${experience.review}</p>
          </div>
        </div>

        <div class="mt-2">
          <h5>${experience.name}</h5>
          <small>${experience.position}, ${experience.location}</small>
        </div>
      </div>
    `;
    experienceContainer.insertAdjacentHTML("beforeend", experienceHTML);
  });
  const categories = [
    { icon: "bi bi-display", title: "Development", courses: "38 Courses" },
    { icon: "bi bi-headphones", title: "Design", courses: "38 Courses" },
    { icon: "bi bi-cloud", title: "Cloud Computing", courses: "38 Courses" },
    { icon: "bi bi-bar-chart", title: "Data Science", courses: "38 Courses" },
    { icon: "bi bi-person-circle", title: "Personal Development", courses: "38 Courses" }
  ];

  const categoryCardsContainer = document.getElementById("categoryCardsContainer");
  categories.forEach(category => {
    const cardHTML = `
      <div class="card-container">
        <div class="category-card">
          <i class="${category.icon} category-icon"></i>
          <p class="category-title">${category.title}</p>
          <small class="category-text">${category.courses}</small>
        </div>
      </div>
    `;
    categoryCardsContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
  // featured 

  const featuredCourses = [
    {
      image: "/assets/images/featured/1.jpg",
      title: "DESIGN RULES: Principles + Practices for Great UI Design",
      price: "$245",
      discount: "-10%"
    },
    {
      image: "/assets/images/featured/2.jpg",
      title: "The Complete Python Bootcamp From Zero to Hero",
      price: "$245",
      discount: "-10%"
    },
    {
      image: "/assets/images/featured/3.jpg",
      title: "The Complete Python Bootcamp From Zero to Hero",
      price: "$245",
      discount: "-10%"
    },
    {
      image: "/assets/images/featured/4.jpg",
      title: "The Data Science Course: Complete Data Science",
      price: "$245",
      discount: "-10%"
    },
    {
      image: "/assets/images/featured/5.jpg",
      title: "The Data Science Course: Complete Data Science",
      price: "$245",
      discount: "-10%"
    }
  ];

  const featuredCoursesContainer = document.getElementById("featuredCoursesContainer");
  featuredCourses.forEach(course => {
    const courseHTML = `
      <div class="course-card">
        <img class="course-image" src='${course.image}'/>
        <div class="course-info">
          <p class="course-title">${course.title}</p>
          <div class="d-flex justify-content-between align-items-center">
            <p class="course-price">${course.price} <span class="course-discount">${course.discount}</span></p>
            <a href="#" class="view-more">View More</a>
          </div>
        </div>
      </div>
    `;
    featuredCoursesContainer.insertAdjacentHTML("beforeend", courseHTML);
  });

// popular courses
  const popularCourses = [
    {
      image: "/assets/images/popular-course/1.jpg",
      category: "Design",
      students: 10,
      lessons: 12,
      rating: "3.5★",
      title: "DESIGN RULES: Principles + Practices for Great UI Design",
      price: "$490"
    },
    {
      image: "/assets/images/popular-course/2.jpg",
      category: "Design",
      students: 10,
      lessons: 12,
      rating: "3.5★",
      title: "DESIGN RULES: Principles + Practices for Great UI Design",
      price: "$490"
    },
    {
      image: "/assets/images/popular-course/3.jpg",
      category: "Design",
      students: 10,
      lessons: 12,
      rating: "3.5★",
      title: "DESIGN RULES: Principles + Practices for Great UI Design",
      price: "$490"
    },
    {
      image: "/assets/images/popular-course/4.jpg",
      category: "Design",
      students: 10,
      lessons: 12,
      rating: "3.5★",
      title: "DESIGN RULES: Principles + Practices for Great UI Design",
      price: "$490"
    },
    {
      image: "/assets/images/popular-course/2.jpg",
      category: "Design",
      students: 10,
      lessons: 12,
      rating: "3.5★",
      title: "DESIGN RULES: Principles + Practices for Great UI Design",
      price: "$490"
    }
  ];

  const popularCoursesContainer = document.getElementById("popularCoursesContainer");

  popularCourses.forEach(course => {
    const courseHTML = `
      <div class="swiper-slide">
        <div class="card popular-course-card">
          <img src="${course.image}" class="card-img-top" alt="${course.title}" />
          <div class="card-body popular-course-body">
            <div class="flex-between mb-2">
              <small class="popular-course-category">${course.category}</small>
              <div class="popular-course-info flex-between">
                <i class="bi bi-people me-2"></i>
                <p>${course.students}</p>
                <i class="bi bi-book ms-4 me-2"></i>
                <p>${course.lessons}</p>
                <p class="popular-course-rating mx-2">${course.rating}</p>
              </div>
            </div>
            <p class="popular-course-title mb-2">${course.title}</p>
            <div class="flex-between">
              <p class="popular-course-price">${course.price}</p>
              <a href="#" class="popular-course-link">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    `;
    popularCoursesContainer.insertAdjacentHTML("beforeend", courseHTML);
  });
// bundled courses
  const bundledCourses = [
    {
      image: "/assets/images/bundle/1.jpeg",
      category: "Design",
      students: 10,
      lessons: 12,
      rating: "3.5★",
      title: "DESIGN RULES: Principles + Practices for Great UI Design",
      price: "$490"
    },
    {
      image: "/assets/images/bundle/2.jpeg",
      category: "Design",
      students: 10,
      lessons: 12,
      rating: "3.5★",
      title: "DESIGN RULES: Principles + Practices for Great UI Design",
      price: "$490"
    },
    {
      image: "/assets/images/bundle/3.jpeg",
      category: "Design",
      students: 10,
      lessons: 12,
      rating: "3.5★",
      title: "DESIGN RULES: Principles + Practices for Great UI Design",
      price: "$490"
    },
    {
      image: "/assets/images/bundle/4.jpeg",
      category: "Design",
      students: 10,
      lessons: 12,
      rating: "3.5★",
      title: "DESIGN RULES: Principles + Practices for Great UI Design",
      price: "$490"
    },
    {
      image: "/assets/images/bundle/2.jpeg",
      category: "Design",
      students: 10,
      lessons: 12,
      rating: "3.5★",
      title: "DESIGN RULES: Principles + Practices for Great UI Design",
      price: "$490"
    }
  ];

  const bundledCoursesContainer = document.getElementById("bundledCoursesContainer");

  bundledCourses.forEach(course => {
    const courseHTML = `
      <div class="swiper-slide">
        <div class="card popular-course-card">
          <img src="${course.image}" class="card-img-top" alt="${course.title}" />
          <div class="card-body popular-course-body">
            <div class="flex-between mb-2">
              <small class="popular-course-category">${course.category}</small>
              <div class="popular-course-info flex-between">
                <i class="bi bi-people me-2"></i>
                <p>${course.students}</p>
                <i class="bi bi-book ms-4 me-2"></i>
                <p>${course.lessons}</p>
                <p class="popular-course-rating mx-2">${course.rating}</p>
              </div>
            </div>
            <p class="popular-course-title mb-2">${course.title}</p>
            <div class="flex-between">
              <p class="popular-course-price">${course.price}</p>
              <a href="#" class="popular-course-link">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    `;
    bundledCoursesContainer.insertAdjacentHTML("beforeend", courseHTML);
  });
// leaders
  const leaders = [
    {
      name: "Mr. Jonson",
      image: "/assets/images/leader/1.jpg",
      description: "sed elit eu ipsum viverra Nam scelerisque ipsum ex. viverra Morbi elementum elit"
    },
    {
      name: "Mr. Jonson",
      image: "/assets/images/leader/2.jpg",
      description: "sed elit eu ipsum viverra Nam scelerisque ipsum ex. viverra Morbi elementum elit"
    },
    {
      name: "Mr. Jonson",
      image: "/assets/images/leader/3.jpg",
      description: "sed elit eu ipsum viverra Nam scelerisque ipsum ex. viverra Morbi elementum elit"
    },
    {
      name: "Mr. Jonson",
      image: "/assets/images/leader/4.jpg",
      description: "sed elit eu ipsum viverra Nam scelerisque ipsum ex. viverra Morbi elementum elit"
    },
    {
      name: "Mr. Jonson",
      image: "/assets/images/leader/2.jpg",
      description: "sed elit eu ipsum viverra Nam scelerisque ipsum ex. viverra Morbi elementum elit"
    }
  ];

  const container = document.querySelector('.ourLeader');

  leaders.forEach(leader => {
    const leaderCard = `
      <div class="leader-card">
        <img src='${leader.image}'/>
        <div class="leader-info">
          <h5 class="leader-name">${leader.name}</h5>
          <p>${leader.description}</p>
        </div>
      </div>
    `;

    container.innerHTML += leaderCard;
  });



      var swiper = new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 20,

        // Add pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true, // Enable pagination bullets clickable
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },

          1560: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });

