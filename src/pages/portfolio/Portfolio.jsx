import React, { useState } from 'react';
import { portfolio } from '../../Data';
import { RiLink } from "react-icons/ri";
import './portfolio.css';

const Portfolio = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [isVideo, setIsVideo] = useState(false);

    const handleMediaClick = (media, type) => {
        setSelectedMedia(media);
        setIsVideo(type === 'video');
    };

    const closeLightbox = () => {
        setSelectedMedia(null);
        setIsVideo(false);
    };

    return (
        <section className="portfolio section">
            <h2 className="section-title">
                My <span>Portfolio</span>
            </h2>

            <div className="portfolio-container container grid">
                {portfolio.map(({ id, img, title, description, skills, videoLink, externalLink }) => (
                    <article className="portfolio-card" key={id}>
                        <div
                            className="portfolio-img-wrapper"
                            onClick={() => {
                                if (videoLink) {
                                    handleMediaClick(videoLink, 'video');
                                } else if (!externalLink) {
                                    handleMediaClick(img, 'image');
                                }
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={img} alt="project" className="portfolio-img" />
                        </div>

                        <h3 className="portfolio-title">{title}</h3>
                        <p className="portfolio-description">{description}</p>

                        <div className="portfolio-skills">
                            {skills.map((skill, index) => (
                                <img src={skill} alt="" className="portfolio-skill" key={index} />
                            ))}
                        </div>

                        {externalLink && (
                            <a
                                href={externalLink}
                                className="portfolio-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo <RiLink className="link-icon" />
                            </a>
                        )}
                    </article>
                ))}
            </div>

            {selectedMedia && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    {isVideo ? (
                        <video
                            src={selectedMedia}
                            controls
                            autoPlay
                            className="lightbox-image"
                            onClick={(e) => e.stopPropagation()}
                        />
                    ) : (
                        <img
                            src={selectedMedia}
                            alt="Enlarged project"
                            className="lightbox-image"
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}
                </div>
            )}
        </section>
    );
};

export default Portfolio;
