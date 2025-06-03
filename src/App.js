import './App.css';
import ProjectCard from './components/ProjectCard';
import projects from './data/projects';

function App() {
  const levels = ['Basic', 'Intermediate', 'Advanced'];

  return (
    <div className="app">
      <h1 className="title">🚀 Projects</h1>

      {levels.map((level) => (
        <div key={level}>
          <h2 className="level-title">{level} Projects</h2>
          <div className="grid">
            {projects
              .filter((project) => project.level === level)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
