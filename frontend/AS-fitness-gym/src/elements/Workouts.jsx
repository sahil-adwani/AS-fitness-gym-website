import React from 'react'

const Workouts = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          All the featured workouts and sessions that we offer here at AS fitness
        </p>
        <div className="bootcamps">
          <div>
            <h4>zumba classes - every tuesday</h4>
            <p>
            energetic dance workouts that combine music and fitness moves for a fun and effective way to get fit.
            </p>
          </div>
          <div>
            <h4>Yoga and Meditation - every wednesday</h4>
            <p>
            A combination of physical postures, breathing exercises, and meditation to promote mental and physical well-being. It's a path to inner peace and physical harmony.
            </p>
          </div>
          <div>
            <h4>ABS workout session - every thursday</h4>
            <p>
            A well defined and targeted exercise routine to strengthen and sculpt your abdominal muscles.
            </p>
          </div>
          <div>
            <h4>Crossfit and Cardio Session - every friday</h4>
            <p>
            A high-intensity functional fitness program that combines elements of various sports and exercises.
            </p>
          </div>
          <div>
            <h4>Games and Fun Activities - every saturday</h4>
            <p>
            Enjoy a bunch of Activities and engaging games that will keep you motivated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Workouts