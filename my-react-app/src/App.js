import { useEffect, useState } from 'react';
import './App.css';
import Videocard from './videocard';
import { database } from './firebase.js';
import { onValue, ref } from 'firebase/database';


function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = ref(database, "objects");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        const projectsArray = Object.values(data).map((project) => project);
setProjects(projectsArray);
//console.log(projects);
      }
    });
  }, [ ]);

  return (
    <div className="app"> 
        <div className="app_top">
          <img  className="app_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"/>
        <h1>reels</h1>
        </div>
        <div className="app-videos">
  {projects.map((project, index) => {
    console.log(projects);  

    return (
      <Videocard
        key={index} 
        channel={project.channel}
        avatarSrc={project.avatarSrc}
        song={project.song}
        url={project.url}
        likes={project.likes}
        shares={project.shares}
      />

    );
  })}
</div>

    </div>
  );
}

export default App;
