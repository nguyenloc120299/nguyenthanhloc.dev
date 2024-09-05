import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="inner contact">
    {/* Content Block - H2 Section Title Start */}
    <div className="content__block section-title">
      <p className="h2__subtitle  animate-in-up">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="13px"
          height="13px"
          viewBox="0 0 13 13"
          fill="currentColor"
        >
          <path
            fill="currentColor"
            d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
              C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
              C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
          />
        </svg>
        <span>Contact</span>
      </p>
      <h2 className="h2__title  animate-in-up">
        {`Let's make something awesome together!`}
      </h2>
    </div>
    {/* Content Block - H2 Section Title End */}
    {/* Content Block - Contact Form Start */}
    <div className="content__block grid-block block-grid-large">
      <div className="form-container">
        {/* Reply Messages Start */}
        <div className="form__reply centered text-center">
          <i className="ph-bold ph-smiley reply__icon" />
          <p className="reply__title">Done!</p>
          <span className="reply__text">
           {` Thanks for your message. I'll get back as soon as possible.`}
          </span>
        </div>
        {/* Reply Messages End */}
        {/* Contact Form Start */}
        <form className="form contact-form" id="contact-form">
          {/* Hidden Required Fields */}
          <input
            type="hidden"
            name="project_name"
            defaultValue="Starter Template"
          />
          <input
            type="hidden"
            name="admin_email"
            defaultValue="support@mixdesign.club"
          />
          <input
            type="hidden"
            name="form_subject"
            defaultValue="Contact Form Message"
          />
          {/* END Hidden Required Fields*/}
          <div className="container-fluid p-0">
            <div className="row gx-0">
              <div className="col-12 col-md-6 form__item animate-in-up">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name*"
                  
                />
              </div>
              <div className="col-12 col-md-6 form__item animate-in-up">
                <input type="text" name="Company" placeholder="Company Name" />
              </div>
              <div className="col-12 col-md-6 form__item animate-in-up">
                <input
                  type="email"
                  name="E-mail"
                  placeholder="Email Adress*"
                  
                />
              </div>
              <div className="col-12 col-md-6 form__item animate-in-up">
                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone Number*"
                  
                />
              </div>
              <div className="col-12 form__item animate-in-up">
                <textarea
                  name="Message"
                  placeholder="A Few Words*"
                  
                  defaultValue={""}
                />
              </div>
              <div className="col-12 form__item animate-in-up">
                <button
                  className="btn btn-default btn-hover btn-hover-accent"
                  type="submit"
                >
                  <span className="btn-caption">Send Message</span>
                  <i className="ph-bold ph-paper-plane-tilt" />
                </button>
              </div>
            </div>
          </div>
        </form>
        {/* Contact Form End */}
      </div>
    </div>
    {/* Content Block - Contact Form End */}
    {/* Content Block - Socials Cards Start */}
    <div className="content__block grid-block">
      <div className="socials-cards d-flex justify-content-start flex-wrap">
        {/* socials item */}
        <div className="socials-cards__item d-flex grid-item-s animate-card-5">
          <div className="socials-cards__card">
            <i className="ph-bold ph-dribbble-logo" />
            <a
              className="socials-cards__link"
              href="https://dribbble.com/"
              target="_blank"
            />
          </div>
        </div>
        {/* socials item */}
        <div className="socials-cards__item d-flex grid-item-s animate-card-5">
          <div className="socials-cards__card">
            <i className="ph-bold ph-behance-logo" />
            <a
              className="socials-cards__link"
              href="https://www.behance.net/"
              target="_blank"
            />
          </div>
        </div>
        {/* socials item */}
        <div className="socials-cards__item d-flex grid-item-s animate-card-5">
          <div className="socials-cards__card">
            <i className="ph-bold ph-instagram-logo" />
            <a
              className="socials-cards__link"
              href="https://www.instagram.com/"
              target="_blank"
            />
          </div>
        </div>
        {/* socials item */}
        <div className="socials-cards__item d-flex grid-item-s animate-card-5">
          <div className="socials-cards__card">
            <i className="ph-bold ph-twitch-logo" />
            <a
              className="socials-cards__link"
              href="https://www.twitch.tv/"
              target="_blank"
            />
          </div>
        </div>
        {/* socials item */}
        <div className="socials-cards__item d-flex grid-item-s animate-card-5">
          <div className="socials-cards__card">
            <i className="ph-bold ph-pinterest-logo" />
            <a
              className="socials-cards__link"
              href="https://www.pinterest.com/"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
    {/* Content Block - Socials Cards End */}
    {/* Content Block - Teaser Start */}
    <div className="content__block">
      <div className="teaser">
        <p className="teaser__text animate-in-up">
          Want to know more about me, tell me about your project or just to say
          hello?
          <a
            className="text-link-bold"
            href="mailto:example@example.com?subject=Message%20from%20your%20site"
          >
            Drop me a line
          </a>
         {` and I'll get back as soon as possible.`}
        </p>
      </div>
    </div>
    {/* Content Block - Teaser End */}
    {/* Content Block - Contact Data Start */}
    <div className="content__block">
      <div className="container-fluid p-0 contact-lines animate-in-up">
        <div className="row g-0 contact-lines__item">
          {/* data item */}
          <div className="col-12 col-md-4 contact-lines__data">
            <p className="contact-lines__title animate-in-up">Location</p>
            <p className="contact-lines__text animate-in-up">
              <a
                className="text-link-bold"
                href="https://maps.app.goo.gl/xMJXTEUeHkv6kYRQ6"
                target="_blank"
              >
                Odesa, Ukraine
              </a>
            </p>
          </div>
          {/* data item */}
          <div className="col-12 col-md-4 contact-lines__data">
            <p className="contact-lines__title animate-in-up">Phone</p>
            <p className="contact-lines__text animate-in-up">
              <a className="text-link-bold" href="tel:+12127089400">
                +1 212-708-9400
              </a>
            </p>
          </div>
          {/* data item */}
          <div className="col-12 col-md-4 contact-lines__data">
            <p className="contact-lines__title animate-in-up">Email</p>
            <p className="contact-lines__text animate-in-up">
              <a
                className="text-link-bold"
                href="mailto:example@example.com?subject=Message%20from%20your%20site"
              >
                hello@alexwalker.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Content Block - Contact Data End */}
  </section>
  
  )
}

export default Contact