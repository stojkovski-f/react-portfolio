import { LINKEDIN_URL } from '../data/site'

function AboutTab() {
  return (
    <div className="content-tab active">
      <img className="presentation-pic" src="/Filip_Tech_Talk.jpg" alt="Filip giving a tech talk" />

      <div className="cblock">
        <div className="white-text slim-text">About me</div>
        Born 1990 in North Macedonia.
       My interest and taking part in competitions in Maths and Physics at school eventiually led
        me to a career in tech. Creativity and problem solving have always been my passion. I also was
        engaged in volounteering and took part in different workshops about communication, 
        conflict resolution and leadership that have shaped my soft skills.
        In 2019 I decided to move closer to my familiy in Sweden and 
        got a role in an e-commerce agency in Stockholm. Since then I have been fortunate to works with some great brands
        in Sweden and internationally and have built lots of technical solutions for their e-commerce platforms.
        The experience of working with many different teams and e-commerce project has given me a unique perspective 
        on how to build and evolve successful e-commerce projects.
        <div className="empty-space" />

        <div className="white-text slim-text">Martial Arts - A Lifelong Inspiration</div>
        My interest for martial arts started when I was 10. I started with Judo, and tried several other
        martial arts, eventually setteling on Aikido. Decades later, I&apos;m still actively practicing
        Aikido in Vanadis Aikidoklubb in Stockholm. In 2023 I earned my 2nd DAN black belt which has
        been an achievement I deeply personally cherish.
        <div className="empty-space" />
        <img className="presentation-pic" src="/aikido.jpg" alt="Aikido practice" />
        <img className="presentation-pic" src="/aikido2.jpg" alt="Aikido practice" />
        <div className="white-text slim-text">University</div>
        <br />
        <br /> I am thankfull for my years at the english speaking university St. Paul the Apostle where
        I got the chance to be imersed in an international environment of students and teacher.
      </div>
      <div className="empty-space" />
      <img className="presentation-pic" src="/graduation.jpg" alt="Graduation" />

      <div className="cblock">
        <div className="white-text slim-text">Professional career</div>
        I got my first job in 2015 back in my hometown. I was creating 2D games that can be played in web
        browsers. Initial with Adobe Flash and AS3, but as that quickly went out of use we switched to
        Phaser.js JavaScript based stack.
        <br />
        <br />
        After about 2.5 years I wanted to move on from 2D games, and do someting more technically involved
        where I would work also with backend tech. I got a role as a Fullstack Magento developer. I was
        working with a mix of front-end and backend tasks, even some work on servers and local
        environments.
        <br />
        <br />
        2019 I moved to Sweden and got a Backend Developer position at Improove Commerce where I continued
        to work with Magento/Adobe commrece.
        <br />
        <br />
        In 2020 I was excited to join Vaimo as a Backend developer it was a chance to work with top
        developers at a world scale. I got my Adobe certification and got to work with multiple teams and
        well established clients in the following 2.5 years.
        <img className="presentation-pic" src="/stockholm_coworking.jpg" alt="Stockholm coworking space" />
      </div>

      <div className="cblock">
        <div className="white-text slim-text">What&apos;s next?</div>
        My latest postion has been as Tech Lead  at Haypp Stockholm where I was focused on the
        US market. This has been an exciting step into a more leadership role that I really enjoyed and
        sparked my ambition to keep growing in this direction.
        <br />
        <br />I am currently looking for the next oportunity. What excites me is the oportunity to work
        with engineering teams, and help bussines and tech connect better.
        <br />
        <br />
        If you have anything relevant to share don&apos;t hesitate to reach out trough{' '}
        <a href={LINKEDIN_URL}>Linkedin</a>.
      </div>
    </div>
  )
}

export default AboutTab
