import React , {Fragment}from "react";
import "./Class.css";

const Class = () => {
  return (
    <section className="courses">
      <h1>Jelajahi Daftar Kelas</h1>
      <div class="search_wrapper">
        <input
          type="text"
          id="searchbox"
          placeholder="Cari Kelas"
          onkeyup="search()"
        />
      </div>

      <div className="courses_container" id="course-items">
        <article class="fullcourse">
          <div class="course_image">
            <img src="https://img-b.udemycdn.com/course/240x135/625204_436a_3.jpg" />
          </div>
          <div class="course_info">
            <h4>
              <a href="courses.html">
                The Web Developer Bootcamp 2022 by Colt Steele
              </a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              nesciunt repellendus architecto voluptas unde aspernatur
              doloribus?
            </p>
            <a href="courses.html" class="btn btn-primary">
              Mulai Kelas
            </a>
          </div>
        </article>

        <article class="fullcourse">
          <div class="course_image">
            <img src="https://img-b.udemycdn.com/course/240x135/995016_ebf4_3.jpg" />
          </div>
          <div class="course_info">
            <h4>
              <a href="courses.html">
                Vue - The Complete Guide (incl. Router & Composition API )
              </a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              nesciunt repellendus architecto voluptas unde aspernatur
              doloribus?
            </p>
            <a href="courses.html" class="btn btn-primary">
              Mulai Kelas
            </a>
          </div>
        </article>

        <article class="fullcourse">
          <div class="course_image">
            <img src="https://img-b.udemycdn.com/course/240x135/1430746_2f43_10.jpg" />
          </div>
          <div class="course_info">
            <h4>
              <a href="courses.html">
                The Complete Web Developer in 2020: Zero to Mastery
              </a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              nesciunt repellendus architecto voluptas unde aspernatur
              doloribus?
            </p>
            <a href="courses.html" class="btn btn-primary">
              Mulai Kelas
            </a>
          </div>
        </article>

        <article class="fullcourse">
          <div class="course_image">
            <img src="https://img-b.udemycdn.com/course/240x135/437398_46c3_10.jpg" />
          </div>
          <div class="course_info">
            <h4>
              <a href="courses.html">
                Build Responsive Real-World Websites with HTML and CSS
              </a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              nesciunt repellendus architecto voluptas unde aspernatur
              doloribus?
            </p>
            <a href="courses.html" class="btn btn-primary">
              Mulai Kelas
            </a>
          </div>
        </article>

        <article class="fullcourse">
          <div class="course_image">
            <img src="https://img-b.udemycdn.com/course/240x135/851712_fc61_6.jpg" />
          </div>
          <div class="course_info">
            <h4>
              <a href="courses.html">
                The Complete Javascript Course 2022: From Zero to Expert!
              </a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              nesciunt repellendus architecto voluptas unde aspernatur
              doloribus?
            </p>
            <a href="courses.html" class="btn btn-primary">
              Mulai Kelas
            </a>
          </div>
        </article>

        <article class="fullcourse">
          <div class="course_image">
            <img src="https://img-b.udemycdn.com/course/240x135/756150_c033_2.jpg" />
          </div>
          <div class="course_info">
            <h4>
              <a href="courses.html">
                Angular - The Complete Guide (2022 Edition)
              </a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              nesciunt repellendus architecto voluptas unde aspernatur
              doloribus?
            </p>
            <a href="courses.html" class="btn btn-primary">
              Mulai Kelas
            </a>
          </div>
        </article>

        <article class="fullcourse">
          <div class="course_image">
            <img src="https://img-b.udemycdn.com/course/240x135/1565838_e54e_16.jpg" />
          </div>
          <div class="course_info">
            <h4>
              <a href="courses.html">
                The Complete 2022 Web Development Bootcamp by Dr.Angela Yu
              </a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              nesciunt repellendus architecto voluptas unde aspernatur
              doloribus?
            </p>
            <a href="courses.html" class="btn btn-primary">
              Mulai Kelas
            </a>
          </div>
        </article>

        <article class="fullcourse">
          <div class="course_image">
            <img src="https://img-b.udemycdn.com/course/240x135/947098_02ec_2.jpg" />
          </div>
          <div class="course_info">
            <h4>
              <a href="courses.html">Understanding TypeScript - 2022 Edition</a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              nesciunt repellendus architecto voluptas unde aspernatur
              doloribus?
            </p>
            <a href="courses.html" class="btn btn-primary">
              Mulai Kelas
            </a>
          </div>
        </article>

        <article class="fullcourse">
          <div class="course_image">
            <img src="https://img-b.udemycdn.com/course/240x135/806922_6310_3.jpg" />
          </div>
          <div class="course_info">
            <h4>
              <a href="courses.html"> The Complete ASP.NET MVC 5 Course </a>
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              nesciunt repellendus architecto voluptas unde aspernatur
              doloribus?
            </p>
            <a href="courses.html" class="btn btn-primary">
              Mulai Kelas
            </a>
          </div>
        </article>
      </div>
      {/* <div class="container all_courses">
        <a href="courses.html">See all course</a>
      </div> */}
    </section>
  );
};

export default Class;
