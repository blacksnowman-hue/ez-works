import React from 'react';
import './Services.css';

const services = [
    { title: 'Presentation Design', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: '/logos/presentation.png' },
    { title: 'Audio - Visual Production', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: '/logos/audio-visual.png' },
    { title: 'Translation Services', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: '/logos/translation.png' },
    { title: 'Graphic Design', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: '/logos/graphic-design.png' },
    { title: 'Research & Analytics', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: '/logos/research.png' },
    { title: 'Data Processing', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.', icon: '/logos/data-processing.png' },
];

const Services = () => {
    return (
        <div className="services">
            {services.map((service, index) => (
                <div key={index} className="service-card">
                    <img src={service.icon} alt={`${service.title} icon`} className="service-icon" />
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Services;
