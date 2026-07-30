import "./Skills.css";

function Skills(props){

    return(

        <section id="skills" className="skills">

            <h2>My Skills</h2>

            <div className="card">

                <h3>{props.skill1}</h3>

            </div>

            <div className="card">

                <h3>{props.skill2}</h3>

            </div>

            <div className="card">

                <h3>{props.skill3}</h3>

            </div>

            <div className="card">

                <h3>{props.skill4}</h3>

            </div>

        </section>

    )

}

export default Skills;