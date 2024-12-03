    function changeSlogan() {
        const slogans = [
            "Empowering your business with innovative solutions.",
            "Revolutionizing the way you work.",
            "Innovative strategies for a brighter future.",
            "Driving efficiency and growth.",
            "Transforming ideas into reality.",
            "Simplify, innovate, succeed.",
            "Redefining possibilities with technology.",
			    "Driving efficiency and growth.",
				"Unlocking potential through smarter solutions.",
    "Streamlining processes for maximum impact.",
    "Your success is our innovation.",
    "Leading the way with transformative ideas.",
    "Building a better tomorrow, today.",
    "Where vision meets execution.",
    "Efficiency reimagined, success guaranteed.",
    "Your partner in operational excellence.",
    "Making complex processes simple.",
    "Solutions that work, for the way you work.",
    "Engineering growth through innovation.",
    "Pioneering the future of business automation.",
    "From inspiration to implementation."
        ];
        
        const sloganElement = document.getElementById('slogan');
        // Generate a random index from the slogans array
        const randomIndex = Math.floor(Math.random() * slogans.length);
        // Set the text of the slogan element to the randomly chosen slogan
        sloganElement.textContent = slogans[randomIndex];
    }