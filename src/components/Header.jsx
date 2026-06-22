function Header() {
  return (
    <div id="nav-bar">
      <a href="/FilipStojkovskiResume.pdf" download>
        <button id="downloadResumeBtn" type="button">
          <i className="fas fa-download" /> Download CV
        </button>
      </a>
    </div>
  )
}

export default Header
