import "./About.css";

function About(props){

    return(

        <section id="about" className="about">

            <h2>About Me</h2>

            <p>Name : {props.name}</p>

            <p>College : {props.college}</p>

            <p>

                I am learning React and Web Development.
                I enjoy creating websites and learning new technologies.

            </p>

        </section>

    )

}

export default About;