import { useState } from 'react'
import TeamMember from "./components/TeamMember/TeamMember";
import './App.css'
import team from './data/team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class ="banner"> 
        <h1 class="banner-title">About [TEAM PROJECT]</h1>
        <p>(Clever little slogan about our project here)</p>
      </div>

      <div class="about-section">
        <div class="box">
          <h1>Who We Are</h1>
          <p>This is going to be a paragraph describing us as a team, I'll figure this out later</p>
        </div>

        <div class="about-details">
          <div class="box">
            <h1>Our Mission</h1>
            <p>This is going to talk about what our goal is, obviously depends on what we pick</p>
          </div>
          <div class="box">
            <h1>Our Vision</h1>
            <p>Same as the above field, our vision can come together once we know what we're building</p>
          </div>
        </div>

      </div>

      <div class="banner">
        <h1>Meet Our Team!</h1>
      </div>

      <div className="team">
        {team.map(member => (
          <TeamMember
          key={member.name}
          photo={member.photo}
          name={member.name}
          role={member.role}
          bio={member.bio}
          />
        ))}
      </div>
    </>
  );
}

export default App
