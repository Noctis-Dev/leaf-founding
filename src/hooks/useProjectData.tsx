import { createContext, useContext, useState } from 'react';

interface ProjectData {
  name: string;
  description: string;
  milestone_value: Array<[string, string]>;
  recomend: string;
}

const ProjectDataContext = createContext<[ProjectData, React.Dispatch<React.SetStateAction<ProjectData>>] | undefined>(undefined);

export const useProjectData = () => {
  const context = useContext(ProjectDataContext);
  if (!context) {
    throw new Error('useProjectData must be used within a ProjectDataProvider');
  }
  return context;
};

export const ProjectDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [projectData, setProjectData] = useState<ProjectData>({
        name: '',
        description: '',
        milestone_value: [],
        recomend: '',
    });

    return (
        <ProjectDataContext.Provider value={[projectData, setProjectData]}>
            {children}
        </ProjectDataContext.Provider>
    );
};