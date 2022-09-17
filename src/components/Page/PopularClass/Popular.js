import "./Popular.css"
const Popular=()=>{
    return(
        <section className="courses">
    <h1>Our Popular Course</h1>
    <div class="container2 courses_container"
      id="course-items">
      <article className="course">
        <div className="course_image">
          <img
            src="https://img-b.udemycdn.com/course/240x135/625204_436a_3.jpg" />
        </div>
        <div className="course_info">
          <h4>
            <a href="courses.html">
              The Web Developer Bootcamp 2022 by Colt
              Steele
            </a>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum,
            nesciunt repellendus architecto voluptas unde
            aspernatur
            doloribus?
          </p>
          <a href="courses.html"
            className="btn btn-primary">Mulai Kelas</a>
        </div>
      </article>

      <article className="course">
        <div className="course_image">
          <img
            src="https://img-b.udemycdn.com/course/240x135/995016_ebf4_3.jpg" />
        </div>
        <div className="course_info">
          <h4>
            <a href="courses.html">
              Vue - The Complete Guide (incl. Router &
              Composition API )
            </a>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum,
            nesciunt repellendus architecto voluptas unde
            aspernatur
            doloribus?
          </p>
          <a href="courses.html"
            className="btn btn-primary">Mulai Kelas</a>
        </div>
      </article>

      <article className="course">
        <div className="course_image">
          <img
            src="https://img-b.udemycdn.com/course/240x135/1430746_2f43_10.jpg" />
        </div>
        <div className="course_info">
          <h4>
            <a href="courses.html">
              The Complete Web Developer in 2020: Zero to
              Mastery
            </a>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum,
            nesciunt repellendus architecto voluptas unde
            aspernatur
            doloribus?
          </p>
          <a href="courses.html"
            className="btn btn-primary">Mulai Kelas</a>
        </div>
      </article>
    </div>
    <div className="containerall_courses">
      <a className="containerall_courses"><a
          href="kelas.html"></a></a>
    </div>
  </section>
    )
}

export default Popular