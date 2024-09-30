<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Uyên Phương - My work</title>
    <link rel="stylesheet" href="./assets/css/root.min.css" />
    <link rel="stylesheet" href="./assets/css/home.css" />
    <link rel="stylesheet" href="./assets/css/my-work.css" />
  </head>

  <body>
    <div class="container d-flex flex-column overflow-hidden my-work_container">
      <header
        class="home-header d-flex align-items-center justify-content-between p-5"
      >
        <a href="./index.html" class="home-header__avatar">
          <img src="./assets/images/home/avatar.svg" alt="Avatar" />
        </a>
        <a href="./index.html" class="img__circle d-none">
          <img src="./assets/images/home/bum.svg" alt="Circle" />
        </a>
        <button class="menu-toggle" aria-label="Toggle menu">☰</button>
        <div class="nav d-flex gap-4 align-items-center flex-nowrap">
          <a class="nav_item nav_item_home text-white" href="./index.html"
            >🏠Home page🏠</a
          >
          <a class="nav_item text-white" href="./about.html">💅About me💅</a>
          <a class="nav_item text-white" href="./my-work.html">💻My work💻</a>
          <a class="nav_item text-white text-truncate" href="./contact.html"
            >📲Contact me📲</a
          >
        </div>
      </header>

      <div class="my-work">
        <div class="d-flex justify-content-center">
          <h1 class="font-alagard fs-96px bg-green">My Works</h1>
        </div>
        <p class="my-work_instagram font-alagard fs-32px text-center mt-2">
          Follow me on Instagram.
        </p>
        <p
          class="my-work_text-mobile bg-green font-alagard fs-24px overflow-hidden py-2 mt-10 d-none"
        >
          . Digital Painting . Digital Painting . Digital Painting . Digital
          Painting . Digital Painting . Digital
        </p>

        <div class="my-work__slider section mt-5">
          <div class="my-work__slider-item fade">
            <img src="./assets/images/my-work/slider-1.svg" />
          </div>

          <div class="my-work__slider-item fade">
            <img src="./assets/images/my-work/slider-2.svg" />
          </div>

          <div class="my-work__slider-item fade">
            <img src="./assets/images/my-work/slider-3.svg" />
          </div>

          <svg
            width="19"
            height="74"
            viewBox="0 0 19 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="my-work__slider-prev"
            onclick="plusSlides(-1)"
            src="./assets/images/my-work/arrow-left.svg"
            alt="prev"
          >
            <path
              d="M17 72.4828L2 37.2414L17 2"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="19"
            height="74"
            viewBox="0 0 19 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="my-work__slider-next"
            onclick="plusSlides(1)"
            src="./assets/images/my-work/arrow-right.svg"
            alt="next"
          >
            <path
              d="M2 72.4828L17 37.2414L2 2"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <p
          class="my-work_text-mobile bg-green font-alagard fs-24px overflow-hidden py-2 mt-10 d-none"
        >
          . My Project . My Project . My Project . My Project . My Project . My
          Project . My Project . My Project
        </p>

        <div class="my-work__calendar section mt-5">
          <div class="row flex-column-reserse">
            <div class="col bg-gradiant py-10 px-5">
              <div class="row">
                <div class="col">
                  <img
                    class="border_shadow-20px"
                    src="./assets/images/my-work/calendar.svg"
                    alt=""
                  />
                </div>
                <div class="col">
                  <div class="row h-100 align-items-end">
                    <div class="col">
                      <img
                        class="border_shadow-20px"
                        src="./assets/images/my-work/calendar-month.svg"
                        alt=""
                      />
                      <div style="height: 20px"></div>
                    </div>
                    <div class="col">
                      <img
                        class="border_shadow-20px"
                        src="./assets/images/my-work/calendar-month-2.svg"
                        alt=""
                      />
                      <div style="height: 40px"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row p-10 bg-black h-100 flex-column">
                <div class="mb-10 font-alagard text-white fs-32px w-100">
                  <h3 class="text-center fw-normal">_ Year of the Dragon _</h3>
                  <h3 class="text-center fw-normal">Calendar</h3>
                </div>
                <div class="bg-white p-4 mt-10">
                  <p class="font-alagard">
                    Get ready to celebrate the Year of the Dragon with a fun,
                    cartoon-style calendar! Featuring 12 original
                    illustrations—one for each month—these dragons are anything
                    but ordinary. Each one is bursting with funky, colorful
                    energy, captured in a range of funny poses and gestures.
                    This calendar isn’t just for keeping track of the days; it’s
                    a splash of joy and creativity to brighten up your year.
                    Enjoy the art, and let these lively dragons bring a smile to
                    your face!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="my-work__video section mt-5">
          <div class="row">
            <div class="col">
              <div class="row p-10 bg-black h-100 flex-column">
                <div class="mb-10 font-alagard text-white fs-32px w-100">
                  <h3 class="text-center fw-normal">_ BAN THO TIVI NHO _</h3>
                  <h3 class="text-center fw-normal">(NGOT) VIDEO</h3>
                </div>
                <div class="bg-white p-4 mt-10">
                  <p class="font-alagard">
                    Ban Tho Tivi Nho" is a short video inspired by Ngọt's song
                    "Bạn thỏ tivi nhỏ." The video creatively combines vintage
                    cartoon footage from YouTube, re-edited in a unique, modern
                    style. This nostalgic yet fresh blend aims to captivate
                    viewers with its playful nod to the past. Enjoy this artful
                    remix and the memories it evokes!
                  </p>
                </div>
              </div>
            </div>
            <div class="col bg-gradiant py-10 px-5">
              <div class="row">
                <video class="w-100" muted autoplay loop>
                  <source
                    src="./assets/images/my-work/tv.mp4"
                    type="video/mp4"
                  />
                  Trình duyệt của bạn không hỗ trợ video.
                </video>
              </div>
            </div>
          </div>
        </div>

        <div class="my-work__poetry section mt-5">
          <div class="row flex-column-reserse">
            <div class="col bg-gradiant py-10 px-5 d-flex align-items-center">
              <div class="row">
                <video class="w-100" muted autoplay loop>
                  <source
                    src="./assets/images/my-work/poetry.mp4"
                    type="video/mp4"
                  />
                  Trình duyệt của bạn không hỗ trợ video.
                </video>
              </div>
            </div>
            <div class="col">
              <div class="row p-10 bg-black">
                <div class="mb-10 font-alagard text-white fs-32px w-100">
                  <h3 class="text-truncate text-center fw-normal">
                    _ TU HAT _
                  </h3>
                  <h3 class="text-center fw-normal">
                    Interactive Web-based Poetry
                  </h3>
                </div>
                <div class="bg-white p-4 mt-10">
                  <p class="font-alagard">
                    "Tu Hat" is an innovative web-based project that brings
                    poetry to life through a blend of visual elements and
                    interactive design. Using HTML and CSS, this work combines
                    illustrations with the timeless words of Xuan Quynh's
                    poetry, creating a deeply immersive experience. The visuals
                    in "Tu Hat" are more than just decorative; they reflect the
                    artist's femininity, imagination, and emotional connection
                    to the poems. This project aims to evoke deep, poetic
                    emotions in viewers, inviting them to explore the
                    intersection of art and literature in a unique, interactive
                    format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="my-work__pharma section mt-5">
          <div class="row">
            <div class="col-6">
              <div class="row p-10 bg-black h-100 flex-column">
                <div class="mb-10 font-alagard text-white fs-32px w-100">
                  <h3 class="text-center fw-normal">_ BEAUTY PHARMA _</h3>
                  <h3 class="text-center fw-normal">
                    Logo, Commercial Poster, Card visit
                  </h3>
                </div>
                <div class="bg-white p-4 mt-10">
                  <p class="font-alagard">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Corrupti, laudantium. Repellat animi quidem, numquam
                    recusandae quia illum consequatur repudiandae quo itaque?
                    Veniam quasi illo natus dolorum, reprehenderit officiis
                    accusantium consequatur. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Corrupti, laudantium. Repellat
                    animi quidem, numquam recusandae quia illum consequatur
                    repudiandae quo itaque? Veniam quasi illo natus dolorum,
                    reprehenderit officiis accusantium consequatur.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6 bg-gradiant py-10 px-10">
              <div class="row justify-content-between flex-nowrap gap-5">
                <div class="col-8">
                  <img
                    src="./assets/images/my-work/beauty-pharma-large.svg"
                    alt="beauty-pharma-large"
                  />
                </div>
                <div class="col-4">
                  <div class="row gap-2">
                    <img
                      src="./assets/images/my-work/beauty-pharma-white.svg"
                      alt="beauty-pharma-white"
                    />
                    <img
                      src="./assets/images/my-work/beauty-pharma-blue.svg"
                      alt="beauty-pharma-blue"
                    />
                  </div>
                </div>
              </div>
              <div class="row gap-5 mt-5 flex-nowrap">
                <div class="col-6">
                  <img
                    src="./assets/images/my-work/beauty-pharma-reactango-white.svg"
                    alt="beauty-reactango-white"
                  />
                </div>
                <div class="col-6">
                  <img
                    src="./assets/images/my-work/beauty-pharme-qr.svg"
                    alt="beauty-pharma-qr"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="my-work__pharma section mt-5">
          <div class="row flex-column-reserse">
            <div class="col bg-gradiant py-10 px-5 d-flex align-items-center">
              <div class="row">
                <img src="./assets/images/my-work/sticker-group.svg" alt="" />
              </div>
            </div>
            <div class="col">
              <div class="row p-10 bg-black h-100 flex-column">
                <div class="mb-10 font-alagard text-white fs-32px w-100">
                  <h3 class="text-center fw-normal">_ Cu Cai Do Sticker _</h3>
                  <h3 class="text-center fw-normal">
                    Domo Sticker Gift for clothing brand
                  </h3>
                </div>
                <div class="bg-white p-4 mt-10">
                  <p class="font-alagard">
                    The calendar is a system of organizing days for social,
                    religious, commercial or administrative purposes. This is
                    done by giving names to periods of time, typically days,
                    weeks, months and years. A date is the designation of a
                    single, specific day within such a system. A calendar is
                    also a physical record (often paper) of such a system. A
                    calendar can also mean a list of planned events, such as a
                    court calendar or a partly or fully chronological list of
                    documents, such as a calendar of wills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="my-work__pharma section mt-5">
          <div class="row">
            <div class="col-6">
              <div class="row p-10 bg-black h-100 flex-column">
                <div class="mb-10 font-alagard text-white fs-32px w-100">
                  <h3 class="text-center fw-normal">_ Sushi Plash _</h3>
                  <h3 class="text-center fw-normal">
                    Digital Interactive Inforgraphic
                  </h3>
                </div>
                <div class="bg-white p-4 mt-10">
                  <p class="font-alagard">
                    Our team has created a digital interactive infographic that
                    takes you through the fascinating process of making sushi.
                    To make the experience both engaging and visually appealing,
                    we chose an 8-bit game format, reminiscent of classic video
                    games. This choice not only adds a nostalgic touch but also
                    enhances the overall fun factor of the project. In this
                    endeavor, I took the lead on illustrations and animation,
                    focusing on vibrant colors and creative elements to enrich
                    the viewer experience. We hope our audience finds this
                    project as enjoyable as we did creating it.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6 bg-gradiant py-10 px-10">
              <img src="./assets/images/my-work/sushi-plash.svg" alt="" />
            </div>
          </div>
        </div>

        <div class="my-work__poetry section mt-5">
          <div class="row flex-column-reserse">
            <div class="col bg-gradiant py-10 px-5">
              <div class="row">
                <img src="./assets/images/my-work/Quythamabat.png" alt="" />
              </div>
            </div>
            <div class="col">
              <div class="row p-10 bg-black h-100 flex-column">
                <div class="mb-10 font-alagard text-white fs-32px w-100">
                  <h3 class="text-center fw-normal">_ Quy Tha Ma Bat _</h3>
                  <h3 class="text-center fw-normal">12 Icon Set</h3>
                </div>

                <div class="bg-white p-4 mt-10">
                  <p class="font-alagard">
                    Our team has crafted a captivating icon set inspired by Vietnamese mythology. Drawing from the rich tapestry of legends, we've depicted dark and ghostly creatures, offering a unique and intriguing visual experience.
                    I was delighted to contribute my illustrations and color palette to this project. Our goal is to introduce our audience to the fascinating world of Vietnamese mythology and provide a fresh perspective on these timeless stories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="my-work__pharma section mt-5">
          <div class="row">
            <div class="col-6">
              <div class="row p-10 bg-black h-100 flex-column">
                <div class="mb-10 font-alagard text-white fs-32px w-100">
                  <h3 class="text-center fw-normal">_ Melotody _</h3>
                  <h3 class="text-center fw-normal">Digital Website</h3>
                </div>
                <div class="bg-white p-4 mt-10">
                  <p class="font-alagard">
                    Melotody is a captivating interactive website that brings the excitement of loto events to life. With its vibrant visuals and innovative concept, Melotody offers a unique and immersive experience. I was thrilled to contribute to this project by creating illustrations, crafting engaging content, and selecting the perfect color palette.
                    Explore Melotody and discover a world of delightful activities. We hope that your time on our website is unforgettable!
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6 bg-gradiant py-10 px-10">
              <img src="./assets/images/my-work/melotody.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex py-5"></div>
    <div class="d-flex py-2 bg-primary"></div>
    <p class="text-primary p-2 font-rainyhearts container px-10">
      .2024 UYEN PHUONG
    </p>

    <video class="bg-video" autoplay muted loop>
      <source src="./assets/images/home/bg.mp4" type="video/mp4" />
      Trình duyệt của bạn không hỗ trợ video.
    </video>
  </body>
  <script src="./assets/js/main.js"></script>
  <script>
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("my-work__slider-item");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
    }
  </script>
  <script>
    const itemsArray = [];
    const nail = document.querySelector(".nail");

    document.addEventListener("mousemove", (e) => {
      gsap.to(nail, {
        x: e.clientX - nail.offsetWidth / 2,
        y: e.clientY - nail.offsetHeight / 2,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    document.addEventListener("click", function (event) {
      const imgNumber = Math.floor(Math.random() * 7) + 1; // Random image number between 1 and 7
      let container = document.createElement("div");
      let elementWidth = 700;

      // Creating an img element
      container.innerHTML = `<div class="img-container">
                                <img src="./assets/images/home/Nail1${imgNumber}.png" alt="" />
                             </div>`;

      const appendedElement = container.firstChild;
      document.querySelector(".items-container").appendChild(appendedElement);

      appendedElement.style.left = `${event.clientX - elementWidth / 2}px`;
      appendedElement.style.top = `${event.clientY}px`;
      const randomRotation = Math.random() * 10 - 5;

      gsap.set(appendedElement, {
        scale: 0,
        rotation: randomRotation,
        transformOrigin: "center",
      });

      const tl = gsap.timeline();

      const randomScale = Math.random() * 0.5 + 0.5;
      tl.to(appendedElement, {
        scale: randomScale,
        duration: 0.5,
        delay: 0.1,
      });

      tl.to(
        appendedElement,
        {
          y: () => `-=500`,
          opacity: 1,
          duration: 4,
          ease: "none",
        },
        "<"
      ).to(
        appendedElement,
        {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            appendedElement.parentNode.removeChild(appendedElement);
            const index = itemsArray.indexOf(appendedElement);
            if (index > -1) {
              itemsArray.splice(index, 1);
            }
          },
        },
        "-=0.5"
      );
    });
  </script>
  <script>
  document.addEventListener("click", function (event) {
    const imgNumber = Math.floor(Math.random() * 7) + 1;
    const imagePath = `./assets/images/home/Nail${imgNumber}.png`;
    console.log("Generated Image Path:", imagePath); // Log the generated path
  
    // ... rest of your code ...
  });
</script>
</html>
</html>

