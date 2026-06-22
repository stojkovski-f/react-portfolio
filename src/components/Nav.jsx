import { NAV_ITEMS } from '../data/site'

function Nav({ activeTab, onTabChange }) {
  return (
    <ul className="text-nav-links">
      {NAV_ITEMS.map(({ id, label }) => (
        <li
          key={id}
          className={`contentbtn nav-li${activeTab === id ? ' active' : ''}`}
          onClick={() => onTabChange(id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onTabChange(id)
            }
          }}
          role="tab"
          tabIndex={0}
          aria-selected={activeTab === id}
        >
          {label}
        </li>
      ))}
    </ul>
  )
}

export default Nav
