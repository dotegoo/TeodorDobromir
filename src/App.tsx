import "./App.css";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#main'>Main</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
      <header>
        <div>
          <h1>Teodor Dobromir</h1>
          <p>Front-End Developer</p>
        </div>
      </header>

      <section id='about'>
        <div id='three'>
          <section id='about-me'>
            <h1>About Me</h1>
            <p>
              Hello! I'm Dobromir Teodor Gabriel, a passionate self-taught
              programmer on a journey to explore the vast and exciting world of
              front-end development.
            </p>
          </section>
          <section id='my-journey'>
            <h1>My Journey</h1>
            <p>
              My fascination with technology and design led me to dive into the
              world of programming. As a self-taught enthusiast, I've honed my
              skills in creating visually appealing and user-friendly websites.
              From crafting pixel-perfect layouts to implementing dynamic user
              interfaces, I'm dedicated to mastering the art of front-end
              development.
            </p>
          </section>
          <section id='skills'>
            <h1> Skills</h1>
            <p>
              I specialize in responsive design, utilizing a tech stack that
              includes HTML, CSS, Bootstrap, and React. My commitment to
              excellence is reflected in every project I undertake.
            </p>
          </section>
        </div>
        <div id='two'>
          <section id='certifications'>
            <h1>Certifications</h1>
            <p>
              I hold a certificate in JavaScript, a language that fuels my
              passion for creating interactive and dynamic web experiences.
            </p>
          </section>
          <section id='future'>
            <h1>Future</h1>
            <p>
              My learning journey is ongoing, and I'm enthusiastic about delving
              into emerging technologies to stay at the forefront of front-end
              development trends.
            </p>
          </section>
        </div>
      </section>
      <main id='main'>
        <a href='https://dotegoo.github.io/bac'>
          <div>
            <div id='aa'></div>
            <p>Bac</p>
          </div>
        </a>
        <a href='https://dotegoo.github.io/AlyssaSelene'>
          <div>
            <div id='bb'></div>
            <p>Alyssa Selene Books Page</p>
          </div>
        </a>
      </main>

      <article id='contact'>
        <h1>Contact Me</h1>
        <div className='content'>
          <p>
            I'm thrilled that you've taken the time to explore my portfolio! If
            you have any inquiries, collaboration opportunities, or just want to
            chat about all things front-end development, feel free to reach out.
            I'm always open to new projects and connections.
          </p>
        </div>
        <div className='content'>
          <h1>How to Reach Me</h1>
          <p>Look on my socials listed in the footer of this webpage</p>
        </div>
        <a href='public/Resume.docx' download>
          <a className='Download'>
            <button className='button' type='button'>
              <span className='button__text'>Resume</span>
              <span className='button__icon'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 35 35'
                  id='bdd05811-e15d-428c-bb53-8661459f9307'
                  data-name='Layer 2'
                  className='svg'
                >
                  <path d='M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z'></path>
                  <path d='M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z'></path>
                  <path d='M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z'></path>
                </svg>
              </span>
            </button>
          </a>
        </a>
      </article>
      <footer className='footer'>
        <p>&copy; 2023 Dobromir Teodor Gabriel. All rights reserved.</p>
        <div className='social-links'>
          <p>Follow me:</p>
          <div className='links'>
            <a href='https://instagram.com/doteegoo' target='_blank'>
              Instagram
            </a>
            <span>|</span>
            <a href='https://github.com/dotegoo' target='_blank'>
              GitHub
            </a>
            <span>|</span>
            <a
              href='https://www.linkedin.com/in/teodor-dobromir-5986532a3/'
              target='_blank'
            >
              LinedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
