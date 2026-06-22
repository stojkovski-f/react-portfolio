function TestimonialCard({ quote, name, url, alignLeft }) {
  return (
    <div className={`testimonial${alignLeft ? ' t-left' : ''}`}>
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      <cite>
        <a target="_blank" rel="noreferrer" href={url} className="name">
          {name}
        </a>
      </cite>
    </div>
  )
}

export default TestimonialCard
