import './App.css';
import ProjectCard from './components/ProjectCard';
import projects from './data/projects';

function App() {
  return (
    <div className="app">
      <h1 className="title">🚀 Projects</h1>
      <div className="grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default App;
