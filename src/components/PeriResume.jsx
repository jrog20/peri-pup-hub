import { useState } from 'react';
import { Award, Calendar, MapPin, Star } from 'lucide-react';

const PeriResume = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const resumeData = {
    name: "Peri",
    title: "Chief Squirrel Officer & Lead Snuggle Specialist",
    contact: {
      email: "peri@pawmail.com",
      phone: "1-800-WOOF-WOOF",
      location: "The Couch, Living Room Division"
    },
    summary: "Distinguished miniature poodle with 3+ years of experience in household management, treat procurement, and human training. Proven track record of maintaining impeccable grooming standards while simultaneously supervising all household activities.",
    experience: [
      {
        title: "Chief Squirrel Officer",
        company: "Backyard Security Inc.",
        duration: "2022 - Present",
        description: "Leading strategic surveillance operations to monitor and deter unauthorized squirrel activities. Successfully reduced squirrel-related incidents by 85% through strategic barking and territorial marking.",
        achievements: [
          "Implemented 24/7 surveillance system",
          "Trained 2 humans in proper alert protocols",
          "Maintained 100% territory awareness"
        ]
      },
      {
        title: "Lead Snuggle Specialist",
        company: "Couch Comfort Corp.",
        duration: "2021 - Present",
        description: "Providing premium comfort services through strategic positioning and optimal warmth distribution. Expert in maximizing human affection while maintaining personal space boundaries.",
        achievements: [
          "Achieved 99.9% customer satisfaction rate",
          "Developed innovative belly-up technique",
          "Pioneered the 'puppy eyes' effectiveness study"
        ]
      },
      {
        title: "Food Quality Control Manager",
        company: "Kitchen Operations Department",
        duration: "2020 - Present",
        description: "Ensuring all food items meet the highest standards of taste, texture, and nutritional value through rigorous testing and sampling procedures.",
        achievements: [
          "Tested over 1,000 different food items",
          "Maintained strict quality standards",
          "Prevented 15 potential food disasters"
        ]
      }
    ],
    skills: [
      "Advanced Barking Techniques",
      "Strategic Napping",
      "Treat Detection & Procurement",
      "Human Training & Conditioning",
      "Territory Management",
      "Grooming & Fashion Coordination",
      "Emotional Support & Therapy",
      "Squirrel Deterrence Systems"
    ],
    education: [
      {
        degree: "Bachelor of Paw Studies",
        school: "University of Canine Excellence",
        year: "2020",
        gpa: "4.0 (Perfect Paw Score)"
      }
    ],
    certifications: [
      "Certified Good Girl (CGG)",
      "Advanced Belly Rub Technician",
      "Professional Squirrel Spotter",
      "Master of the Puppy Eyes"
    ],
    awards: [
      "Best in Show - Household Division (2023)",
      "Most Improved Napper Award (2022)",
      "Excellence in Treat Detection (2021)",
      "Perfect Attendance - Couch Duty (2020-2023)"
    ]
  };

  return (
    <div className="glass-card glass-card-hover rounded-3xl p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-periwinkle-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
          <Award className="text-white" size={24} />
        </div>
        <h2 className="text-4xl font-bold gradient-text">📄 Peri's Professional Resume</h2>
      </div>

      {/* Header */}
      <div className="text-center mb-8 pb-8 border-b-2 border-periwinkle-200/50">
        <h1 className="text-5xl font-bold gradient-text mb-3">{resumeData.name}</h1>
        <p className="text-2xl text-gray-600 mb-6 font-medium">{resumeData.title}</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl">
            <MapPin size={16} className="text-periwinkle-500" />
            {resumeData.contact.location}
          </div>
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl">
            <Calendar size={16} className="text-periwinkle-500" />
            {resumeData.contact.email}
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 gradient-text">Professional Summary</h3>
        <div className="gradient-bg rounded-2xl p-6 border border-periwinkle-200/50">
          <p className="text-gray-700 leading-relaxed text-lg">{resumeData.summary}</p>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-6 gradient-text">Professional Experience</h3>
        <div className="space-y-6">
          {resumeData.experience.map((job, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 border-l-4 border-periwinkle-400">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-bold text-xl text-periwinkle-700">{job.title}</h4>
                  <p className="text-blue-600 font-medium text-lg">{job.company}</p>
                </div>
                <span className="text-sm text-gray-500 bg-periwinkle-100 px-3 py-1 rounded-full font-medium">
                  {job.duration}
                </span>
              </div>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">{job.description}</p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                {job.achievements.map((achievement, idx) => (
                  <li key={idx} className="leading-relaxed">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-6 gradient-text">Core Competencies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="bg-gradient-to-r from-periwinkle-100 to-blue-100 text-periwinkle-700 px-4 py-3 rounded-xl text-sm font-medium text-center border border-periwinkle-200/50 hover:from-periwinkle-200 hover:to-blue-200 transition-all duration-300">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-semibold mb-6 gradient-text">Education</h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="glass-card rounded-2xl p-6">
              <h4 className="font-bold text-lg text-periwinkle-700">{edu.degree}</h4>
              <p className="text-blue-600 font-medium">{edu.school}</p>
              <p className="text-sm text-gray-500 mt-2">{edu.year} • {edu.gpa}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6 gradient-text">Certifications</h3>
          <div className="space-y-3">
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 glass-card rounded-2xl p-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Star className="text-white" size={16} />
                </div>
                <span className="text-sm font-medium text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 gradient-text">Awards & Recognition</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {resumeData.awards.map((award, index) => (
            <div key={index} className="flex items-center gap-4 glass-card rounded-2xl p-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-periwinkle-400 rounded-full flex items-center justify-center">
                <Award className="text-white" size={20} />
              </div>
              <span className="text-sm font-medium text-gray-700">{award}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fun footer */}
      <div className="mt-8 pt-8 border-t-2 border-periwinkle-200/50 text-center">
        <p className="text-lg text-gray-500 italic">
          "References available upon request (my humans are very proud of me!)" 🐩✨
        </p>
      </div>
    </div>
  );
};

export default PeriResume; 