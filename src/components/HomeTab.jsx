import {
  pros,
  hashtags,
  coreSkills,
  otherSkills,
  leadershipExperience,
  certifications,
  clientLogos,
} from '../data/home'
import { testimonials } from '../data/testimonials'
import TestimonialCard from './TestimonialCard'

function HomeTab({ onNavigate }) {
  return (
    <div className="content-tab active">
      <div className="hero-text white-text">
        Hi, I&apos;m Filip! A tech professional based in Stockholm. <br /> I build tailored
        solutions and help <br />
        engineering teams excel. <br />
      </div>
      <br />
      <button id="hireMeButton" type="button" onClick={() => onNavigate('contact')}>
        Lets connect!
      </button>
      <div className="square dots" />
      <img className="profile-pic" src="/my-profile-pic.png" alt="Filip Stojkovski" />

      <div>
        <div className="empty-space" />
        <h1 id="why-work-with-me">Me in bulletpoints</h1>
        <ul className="pros-list">
          {pros.map((item) => (
            <li key={item} className="pros-li">
              {item}
            </li>
          ))}
        </ul>
        <br />
        {hashtags.map((tag) => (
          <span key={tag} className="hashtag-term">
            {tag}
          </span>
        ))}
        <br />
        <br /> From backend develompent I have gradually transitioned into technical leadership. This
        gives me a unique possibility to use both my engineering background and people skills to build
        trust and communication between different parts of the organization and turn bussiness goals to
        robust technical deliveries.
        <br />
      </div>

      <div className="empty-space" />
      <div className="cblock">
        <h1 className="margin-bottom-0">Core Tech Skills</h1>
        <h2 className="margin-top-0">8+ years of experience with</h2>
        <br />
        <h1 className="extra-large">{coreSkills}</h1>
        <br />
      </div>

      <div className="empty-space" />
      <div className="cblock">
        <div className="white-text slim-text">Other Tech Skills</div>
        {otherSkills}
      </div>
      <div className="empty-space" />

      <div className="empty-space" />
      <div className="cblock">
        <div className="white-text slim-text">Technical Leadership Experience</div>
        <ul>
          {leadershipExperience.map((item) => (
            <li key={item} className="pros-li">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="empty-space" />

      <div className="cblock">
        <div className="white-text slim-text">Certifications</div>
        <div className="small-explanation-right">
          <span className="contentbtn" onClick={() => onNavigate('competence')} role="button" tabIndex={0}>
            see competence tab for more details.
          </span>
        </div>

        <div className="all-certs">
          {certifications.map((cert) =>
            cert.type === 'image' ? (
              <span key={cert.alt} className="cert-text-container">
                <img className="cert-badge-image" src={cert.src} alt={cert.alt} />
              </span>
            ) : (
              <span key={cert.label} className="cert-text-container cert-logo-text">
                {cert.label}
                <span className={`flag-icon flag-icon-${cert.flag} flag-float-top`} />
              </span>
            ),
          )}
        </div>
      </div>

      <div className="empty-space" />
      <div className="empty-space" />
      <div className="white-text slim-text">Clients I have worked with _________</div>

      <div className="cblock">
        {clientLogos.map(({ src, alt }) => (
          <div key={alt} className="client-logo">
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>

      <div className="empty-space" />

      <div>
        <div className="white-text slim-text">What are people saying?</div>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default HomeTab
