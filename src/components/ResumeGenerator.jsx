import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { hero, projects, skills } from '../content/data';

const ResumeGenerator = () => {
  const resumeRef = useRef();

  const generatePDF = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
    });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${hero.name.replace(' ', '_')}_Resume.pdf`);
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      <button
        onClick={generatePDF}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-lg"
      >
        Download Resume
      </button>

      {/* Hidden resume template */}
      <div ref={resumeRef} className="absolute -top-full left-0 w-96 bg-white text-black p-6 font-sans" style={{ fontSize: '12px' }}>
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">{hero.name}</h1>
          <p className="text-lg">{hero.title}</p>
          <p>{hero.tagline}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold border-b mb-2">Profile</h2>
          <p>{hero.body}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold border-b mb-2">Skills</h2>
          <ul className="list-disc list-inside">
            {skills.map((skill, index) => (
              <li key={index}>{skill.name} - {skill.category} ({skill.level})</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold border-b mb-2">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <p className="text-sm">Tech: {project.stack.map(s => s.tech).join(', ')}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-xl font-semibold border-b mb-2">Experience</h2>
          <p>Professional experience details would go here.</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeGenerator;