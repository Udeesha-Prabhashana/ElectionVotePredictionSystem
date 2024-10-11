import React from 'react';
import './Manifesto.scss';
import SidebarDoctor from '../../components/sidebar/sidebar';

interface Candidate {
  name: string;
  actions: string;
  percentage: number;
  image: string;
  infra: string;
  trade: string;
}

const candidates: Candidate[] = [
  {
    name: 'Ranil Wickremesinghe',
    actions: '85/159',
    percentage: 53,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vqgSghYBzd7LV_uthPWwRxOeDDpaXou8Cg&s',
    infra: '5/14',
    trade: '5/8',
  },
  {
    name: 'Sajith Premadasa',
    actions: '211/407',
    percentage: 52,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRKGgKkv0ieh8QXqvtXgT9iNvf2-GZw_pnQ&s',
    infra: '16/37',
    trade: '16/45',
  },
  {
    name: 'Anura Dissanayake',
    actions: '378/947',
    percentage: 40,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_88p4MoC5OZcD4rZDRoVhKsJCP5lnFrd7A&s',
    infra: '80/156',
    trade: '43/118',
  },
];

const Manifesto: React.FC = () => {
  return (

    <div className="manifesto-container">
        <SidebarDoctor/>
      <div className="topics-section">
        <h2>Topics</h2>
        <p>Monitorable Actions/All Actions</p>
      </div>
      
      <div className="candidates-container">
        {candidates.map((candidate, index) => (
          <div key={index} className="candidate-card">
            <div className="candidate-header">
              <img src={candidate.image} alt={candidate.name} className="candidate-image" />
              <h3>{candidate.name}</h3>
              <p>{candidate.actions}</p>
            </div>
            <div className="progress-circle">
              <div 
                className="circle" 
                style={{
                  background: `conic-gradient(#ff6b6b ${candidate.percentage}%, #ccc ${candidate.percentage}%)`
                }}
              ></div>
              <span className="percentage-label">{candidate.percentage}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="data-section">
        <div className="data-header-row">
            <div className='title'>Infrastructure</div>
            {candidates.map((candidate, index) => (
            <div key={index}>{candidate.infra}</div>
            ))}
        </div>

        <div className="data-header-row">
            <div className='title'>Trade and Export</div>
            {candidates.map((candidate, index) => (
            <div key={index}>{candidate.trade}</div>
            ))}
        </div>
        </div>


    </div>
  );
};

export default Manifesto;
