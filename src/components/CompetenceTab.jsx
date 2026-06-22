import { roles, education, certificationDetails } from '../data/roles'
import RoleAccordion from './RoleAccordion'

function CompetenceTab() {
  return (
    <div className="content-tab active">
      <h3>Jump to Section</h3>
      <br />
      <a href="#role-descriptions">Experience</a>
      <br />
      <br />
      <a href="#education">Education</a>
      <br />
      <br />
      <a href="#education">Certifications</a>
      <br />
      <br />
      <br />

      <div className="centerTitle">ROLE DESCRIPTION DETAILS</div>
      <br />
      <br />

      Click role to expand

      <RoleAccordion roles={roles} />

      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <div className="centerTitle" id="education">
        EDUCATION
      </div>
      <br />
      <br />

      {education.map(({ degree, institution, location }) => (
        <div key={degree}>
          <h2>{degree}</h2>
          {institution && <h3>{institution}</h3>}
          <div>{location}</div>
          <br />
          <br />
        </div>
      ))}

      <br />
      <br />
      <br />
      <br />
      <div className="centerTitle">CERTIFICATIONS</div>
      <br />
      <br />
      <ul className="pros-list">
        {certificationDetails.map(({ title, issuer }) => (
          <li key={title} className="pros-li">
            <b>{title}</b> <i className="fas fa-external-link-alt" />
            {issuer && (
              <>
                <br />
                {issuer}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CompetenceTab
