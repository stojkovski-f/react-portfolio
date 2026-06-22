import { LINKEDIN_URL } from '../data/site'

function ContactTab() {
  return (
    <div className="content-tab active">
      Hey, there!
      <br />
      <br />
      I check Linkedin somewhat reguraly so that&apos;s probably <br />
      the best place to reach me. <br />
      <br />
      Lets get the conversation going! <br />
      <br />
      Connect or Message me on <a href={LINKEDIN_URL}>Linkedin</a>.
    </div>
  )
}

export default ContactTab
