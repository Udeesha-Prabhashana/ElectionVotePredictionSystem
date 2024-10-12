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
  agriculture: string;
  socialProtection: string;
  education: string;
  lawAndOrder: string;
  governance: string;
  health: string;
  labour: string;
}

const candidates: Candidate[] = [
  {
    name: 'Ranil Wickremesinghe',
    actions: '85/159',
    percentage: 53,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vqgSghYBzd7LV_uthPWwRxOeDDpaXou8Cg&s',
    infra: '5/14',
    trade: '5/8',
    agriculture: '6/11',
    socialProtection: '11/18',
    education: '11/17',
    lawAndOrder: '4/11',
    governance: '12/21',
    health: '1/6',
    labour: '4/11',
  },
  {
    name: 'Sajith Premadasa',
    actions: '211/407',
    percentage: 52,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRKGgKkv0ieh8QXqvtXgT9iNvf2-GZw_pnQ&s',
    infra: '16/37',
    trade: '16/45',
    agriculture: '12/35',
    socialProtection: '29/48',
    education: '13/28',
    lawAndOrder: '15/25',
    governance: '31/53',
    health: '3/12',
    labour: '14/26',
  },
  {
    name: 'Anura Dissanayake',
    actions: '378/947',
    percentage: 40,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_88p4MoC5OZcD4rZDRoVhKsJCP5lnFrd7A&s',
    infra: '80/156',
    trade: '43/118',
    agriculture: '43/108',
    socialProtection: '35/78',
    education: '24/74',
    lawAndOrder: '23/74',
    governance: '17/23',
    health: '10/41',
    labour: '10/18',
  },
];

const Manifesto: React.FC = () => {
  return (
    <div className="manifesto-container">
      <SidebarDoctor />
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
                  background: `conic-gradient(#ff6b6b ${candidate.percentage}%, #ccc ${candidate.percentage}%)`,
                }}
              ></div>
              <span className="percentage-label">{candidate.percentage}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="data-section">
        {/* Infrastructure */}
        <div className="data-header-row">
          <div className="title">Infrastructure</div>
          {candidates.map((candidate, index) => (
            <div key={index}>{candidate.infra}</div>
          ))}
        </div>

        {/* Trade and Export */}
        <div className="data-header-row">
          <div className="title">Trade and Export</div>
          {candidates.map((candidate, index) => (
            <div key={index}>{candidate.trade}</div>
          ))}
        </div>

        {/* Agriculture */}
        <div className="data-header-row">
          <div className="title">Agriculture</div>
          {candidates.map((candidate, index) => (
            <div key={index}>{candidate.agriculture}</div>
          ))}
        </div>

        {/* Social Protection */}
        <div className="data-header-row">
          <div className="title">Social Protection</div>
          {candidates.map((candidate, index) => (
            <div key={index}>{candidate.socialProtection}</div>
          ))}
        </div>

        {/* Education */}
        <div className="data-header-row">
          <div className="title">Education</div>
          {candidates.map((candidate, index) => (
            <div key={index}>{candidate.education}</div>
          ))}
        </div>

        {/* Law and Order */}
        <div className="data-header-row">
          <div className="title">Law and Order</div>
          {candidates.map((candidate, index) => (
            <div key={index}>{candidate.lawAndOrder}</div>
          ))}
        </div>

        {/* Governance */}
        <div className="data-header-row">
          <div className="title">Governance</div>
          {candidates.map((candidate, index) => (
            <div key={index}>{candidate.governance}</div>
          ))}
        </div>

        {/* Health */}
        <div className="data-header-row">
          <div className="title">Health</div>
          {candidates.map((candidate, index) => (
            <div key={index}>{candidate.health}</div>
          ))}
        </div>

        {/* Labour */}
        <div className="data-header-row">
          <div className="title">Labour</div>
          {candidates.map((candidate, index) => (
            <div key={index}>{candidate.labour}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manifesto;
