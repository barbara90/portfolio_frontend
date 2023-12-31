import BO_CV from '../source/BO_CV1.jpg';

export function LandingPage() {
    return(
        <div class="App">
        
            <h1> Barbara Oláh </h1>
            <div>
                <img src={BO_CV} alt= "CV Image" class="App-logo"/>
            </div>
            <article> I work as a Project Coordinator, but I am passionate about other segments of the IT too. I have experience in multiple roles since 2016 like
                 <b> Software Quality Engineering</b> and <b>Fullstack Software Engineering</b> as well. Here you can find my LinkedIn profile, please check it and let's connect! 
            <nav> <a href="https://www.linkedin.com/in/barbara-ol%C3%A1h-64316960/">LinkedIn</a></nav>
            </article>
        </div>
    );
}