import { useState } from 'react'

function RoleAccordionItem({ role }) {
  const [open, setOpen] = useState(false)

  return (
    <li>
      <h1
        className={`toggle-button${open ? ' active' : ''}`}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setOpen(!open)
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={open}
      >
        <span className="toggle-triangle">&#9654;</span> {role.title}
        <div className="toggleExtraText">{role.period}</div>
      </h1>

      <div className={`toggle-content${open ? ' active' : ''}`}>
        {role.responsibilities && (
          <p>
            My role responsibilities in Haypp (Snusbolaget) were to:
            {role.responsibilities.map((item) => (
              <span key={item}>
                <br /> - {item}
              </span>
            ))}
          </p>
        )}

        {role.intro && (
          <p>
            {Array.isArray(role.intro)
              ? role.intro.map((paragraph, index) => (
                  <span key={paragraph}>
                    {paragraph}
                    {index < role.intro.length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </span>
                ))
              : role.intro}
          </p>
        )}

        {role.paragraphs?.map((paragraph, index) => (
          <p key={paragraph}>
            {paragraph}
            {index < role.paragraphs.length - 1 && (
              <>
                <br />
                <br />
              </>
            )}
          </p>
        ))}

        {role.keyResults && (
          <>
            <h3> {role.keyResultsLabel || 'Key results for clients'}</h3>
            {role.keyResults.map(({ heading, body }) => (
              <div key={heading}>
                <h2>{heading}</h2>
                {body}
              </div>
            ))}
          </>
        )}
      </div>
    </li>
  )
}

function RoleAccordion({ roles }) {
  return (
    <ul className="toggle-list" id="role-descriptions">
      {roles.map((role) => (
        <RoleAccordionItem key={role.id} role={role} />
      ))}
    </ul>
  )
}

export default RoleAccordion
