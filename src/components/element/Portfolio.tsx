'use client'

/* eslint-disable @next/next/no-img-element */
import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="inner inner-first portfolio">
      {/* Content Block - H2 Section Title Start */}
      <div className="content__block section-grid-title">
        <p className="h2__subtitle animate-in-up">
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
          <span>Portfolio</span>
        </p>
        <h2 className="h2__title animate-in-up">
          Check out my featured projects
        </h2>
      </div>
      {/* Content Block - H2 Section Title End */}
      {/* Content Block - Works Gallery Start */}
      <div className="content__block grid-block">
        <div className="container-fluid px-0 inner__gallery">
          <div
            className="row gx-0 my-gallery"
            itemType="http://schema.org/ImageGallery"
          >
            {/* Works Gallery Single Item Start */}
            <figure
              className="col-12 col-md-6 gallery__item grid-item animate-card-2"
              itemProp="associatedMedia"
              itemType="http://schema.org/ImageObject"
            >
              <a
                href="/img/works/1400x1400_w01.webp"
                data-image="img/works/1400x1400_w01.webp"
                className="gallery__link"
                itemProp="contentUrl"
                data-size="1400x1400"
              >
                <img
                  src="/img/works/800_w01-thumb.webp"
                  className="gallery__image"
                  itemProp="thumbnail"
                  alt="Image description"
                />
              </a>
              <figcaption
                className="gallery__descr"
                itemProp="caption description"
              >
                <h5>Isometric House</h5>
                <div className="card__tags d-flex flex-wrap">
                  <span className="rounded-tag opposite">Illustrations</span>
                  <span className="rounded-tag opposite">3D Render</span>
                </div>
                <p className="small">
                  Mauris porttitor lobortis ligula, quis molestie lorem
                  scelerisque eu. Morbi aliquam enim odio.
                </p>
              </figcaption>
            </figure>
            {/* Works Gallery Single Item End */}
            {/* Works Gallery Single Item Start */}
            <figure
              className="col-12 col-md-6 gallery__item grid-item animate-card-2"
              itemProp="associatedMedia"
              itemType="http://schema.org/ImageObject"
            >
              <a
                href="/img/works/1400x1400_w02.webp"
                data-image="img/works/800_w02-thumb.webp"
                className="gallery__link"
                itemProp="contentUrl"
                data-size="1400x1400"
              >
                <img
                  src="/img/works/800_w02-thumb.webp"
                  className="gallery__image"
                  itemProp="thumbnail"
                  alt="Image description"
                />
              </a>
              <figcaption
                className="gallery__descr opposite"
                itemProp="caption description"
              >
                <h5 className="opposite">Dashboard Template</h5>
                <div className="card__tags d-flex flex-wrap">
                  <span className="rounded-tag">UI Design</span>
                  <span className="rounded-tag">Figma</span>
                </div>
                <p className="small">
                  Mauris porttitor lobortis ligula, quis molestie lorem
                  scelerisque eu. Morbi aliquam enim odio, a mollis ipsum
                  tristique eu.
                </p>
              </figcaption>
            </figure>
            {/* Works Gallery Single Item End */}
            {/* Works Gallery Single Item Start */}
            <figure
              className="col-12 col-md-6 gallery__item grid-item animate-card-2"
              itemProp="associatedMedia"
              itemType="http://schema.org/ImageObject"
            >
              <a
                href="/img/works/1400x1400_w03.webp"
                data-image="img/works/800_w03-thumb.webp"
                className="gallery__link"
                itemProp="contentUrl"
                data-size="1400x1400"
              >
                <img
                  src="/img/works/800_w03-thumb.webp"
                  className="gallery__image"
                  itemProp="thumbnail"
                  alt="Image description"
                />
              </a>
              <figcaption
                className="gallery__descr opposite"
                itemProp="caption description"
              >
                <h5 className="opposite">Notification Icon</h5>
                <div className="card__tags d-flex flex-wrap">
                  <span className="rounded-tag">Illustrations</span>
                  <span className="rounded-tag">3D Render</span>
                </div>
                <p className="small">
                  Mauris porttitor lobortis ligula, quis molestie lorem
                  scelerisque eu. Morbi aliquam enim odio, a mollis ipsum
                  tristique eu.
                </p>
              </figcaption>
            </figure>
            {/* Works Gallery Single Item End */}
            {/* Works Gallery Single Item Start */}
            <figure
              className="col-12 col-md-6 gallery__item grid-item animate-card-2"
              itemProp="associatedMedia"
              itemType="http://schema.org/ImageObject"
            >
              <a
                href="/img/works/1400x1400_w04.webp"
                data-image="img/works/800_w04-thumb.webp"
                className="gallery__link"
                itemProp="contentUrl"
                data-size="1400x1400"
              >
                <img
                  src="/img/works/800_w04-thumb.webp"
                  className="gallery__image"
                  itemProp="thumbnail"
                  alt="Image description"
                />
              </a>
              <figcaption
                className="gallery__descr "
                itemProp="caption description"
              >
                <h5>Smart Penguin</h5>
                <div className="card__tags d-flex flex-wrap">
                  <span className="rounded-tag opposite">Illustrations</span>
                  <span className="rounded-tag opposite">AI Experiment</span>
                </div>
                <p className="small">
                  Mauris porttitor lobortis ligula, quis molestie lorem
                  scelerisque eu. Morbi aliquam enim odio, a mollis ipsum
                  tristique eu.
                </p>
              </figcaption>
            </figure>
            {/* Works Gallery Single Item End */}
          </div>
        </div>
      </div>
      {/* Content Block - Works Gallery End */}
    </section>
  );
};

export default Portfolio;
