// main.js
document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#000000"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 1,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 4
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        'Kevin Mendoza',
        'a Software Engineer',
        'a Web Developer    ',
        'a Backend Developer',
        'a Frontend Developer',
        'a Full Stack Developer'
    ];

    const dynamicText = document.getElementById('dynamic-text');
    let currentIndex = 0;

    function changeText() {
        // Create a new span for the current phrase
        const newSpan = document.createElement('span');
        newSpan.textContent = phrases[currentIndex];

        // Add the new span to the container
        dynamicText.innerHTML = '';
        dynamicText.appendChild(newSpan);

        // Trigger the flipping effect
        setTimeout(() => {
            dynamicText.classList.add('flipping');
            setTimeout(() => {
                dynamicText.classList.remove('flipping');
                newSpan.classList.add('hidden');
            }, 500); // Match with CSS transition duration
        }, 100); // Short delay to ensure the new span is added before the effect

        // Update the index for the next phrase
        currentIndex = (currentIndex + 1) % phrases.length;
    }

    // Change text every 3 seconds
    setInterval(changeText, 3000);

    // Initial text setup
    changeText();
});

document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icons-grid i');

    icons.forEach(icon => {
        // Create a tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = icon.getAttribute('data-tooltip');
        icon.appendChild(tooltip);

        // Add event listeners for hover
        icon.addEventListener('mouseover', () => {
            icon.classList.add('show-tooltip');
        });

        icon.addEventListener('mouseout', () => {
            icon.classList.remove('show-tooltip');
        });

        // Additional event listeners or modifications can be added here
    });
});