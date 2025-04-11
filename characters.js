const characters = [
    // FNAF 1 Characters
    {
        name: "Anniversary Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7d/Anniversary_Freddy.webp",
        description: "Through his special anniversary magic, he will sometimes cause your cursor to go invisible! Keep switching through your devices until he gets confused and makes your cursor visible again",
        section: "fnaf1"
    },
    {
        name: "Backstage Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8b/Backstage_Chica_Revamp.png",
        description: "If you wear the mask for a while, you will start to heat up from how hot the mask is, raising your temperature up. Remove the mask to lower your temperature.",
        section: "fnaf1"
    },
    {
        name: "Beta Camera Buttons",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a7/Beta_Camera_Revamp.webp",
        description: "The camera buttons on Floor 1 will change to the Beta Camera Buttons. This causes the hitbox to click the buttons to be a lot shorter due to how smaller and rounder the buttons are, thus giving you a harder time to switch the cams on Floor 1.",
        section: "fnaf1"
    },
    {
        name: "Backstage Bonnie Gang",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a7/Backstage_Bonnie_Resize.png",
        description: "If you wear your mask for too long, hallucinations of Bonnie will start appearing, raising your Fear Meter. If the meter is filled up while wearing the mask, you will pass out.",
        section: "fnaf1"
    },
    {
        name: "Bonnie Plush",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/46/Bonnie_Plush.webp",
        description: "He will start to fade into the Left Door if it stays open/closed for too long. If he fully fades in, he will start to constantly change the state of the door for 30 seconds.",
        section: "fnaf1"
    },
    {
        name: "Chica Plush",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/33/Chica_Plush.png",
        description: "She will start to fade into the Right Door if it stays open/closed for too long. If she fully fades in, she will start to constantly change the state of the door for 30 seconds.",
        section: "fnaf1"
    },
    {
        name: "Newspaper Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c3/Newspaper_Freddy_Revamp.png",
        description: "Once per night a newspaper will appear, granting you a free batch of 20 Fazcoins. You must quickly press the ACCEPT button to gain your Fazcoins. If you don't click on it fast enough, you will lose all of your current Fazcoins.",
        section: "fnaf1"
    },
    {
        name: "Celebrate Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f4/Celebrate_Freddy.png",
        description: "He is trying to celebrate a kid's birthday party. However, this kid is very spoiled and wants a thermonuclear bomb for a present. You must go over a bomb defusal check in the Task System to shorten out the wires. Cut the wires by spam-clicking them. If the bomb isn't defused by 3:AM, then it will explode the entire building onto you!",
        section: "fnaf1"
    },
    {
        name: "Celebrate Poster",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/33/Celebrate_Poster_Revamp.webp",
        description: "It will sometimes cover your view when you look in the cam system. Honk on Freddy's nose to make the poster go away.",
        section: "fnaf1"
    },
    {
        name: "Staring Stage Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c9/Staring_Stage_Freddy.webp",
        description: "A picture of him staring at you in the show stage will randomly appear in your screen. You must quickly spam click on his nose before he kills you.",
        section: "fnaf1"
    },
    {
        name: "Stage Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/df/Stage_Bonnie_Revamp.png",
        description: "He will be in the stage camera, advancing in stages to get closer to you. If you see his face right in front of the camera, quickly honk his nose to make him go back. If he leaves the camera, he will kill you.",
        section: "fnaf1"
    },
    {
        name: "Stage Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/65/Stage_Chica_Revamp.png",
        description: "Sometimes, she will look at the Show Stage camera, causing the screen to become a bit brighter than usual. Click on her beak to stop the brightness.",
        section: "fnaf1"
    },
    {
        name: "Sparky The Dog",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/39/Sparky_The_Dog.webp",
        description: "He will subtract time from your clock whenever you close a door with the AWDF keys.",
        section: "fnaf1"
    },
    {
        name: "Emerald Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a7/Emerald_Freddy.png",
        description: "When he appears in the office everything will be very glitchy and there will be a strong, green glow. In order to get rid of it, you need to close all the doors, then he will disappear.",
        section: "fnaf1"
    },
    {
        name: "Pots & Pans",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/83/Pots_%26_Pans.webp",
        description: "Sometimes, they will fall off from their shelves in the Kitchen Camera, making a lot of noise in the process.",
        section: "fnaf1"
    },
    {
        name: "Power Outage Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ec/Power_Outage_Freddy_Revamp.jpg",
        description: "This poor bear thinks the power is already out when it clearly is not. He will show up in your left door and play his jingle, in which you need to close the door on him to remind him that the power is still working.",
        section: "fnaf1"
    },
    {
        name: "Out Of Order Sign",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/af/Out_Of_Order_Revamp.png",
        description: "Sometimes this sign will appear in Pirate's Cove, signaling (when paired with Foxy) that Foxy is not active at the time. if this happens, you're free to not look at Pirate's Cove until the sign disappears.",
        section: "fnaf1"
    },
    {
        name: "Door Buttons",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3d/Door_Button_Resize.png",
        description: "You wont be able to use A and D to close the doors, with the buttons replacing them.",
        section: "fnaf1"
    },
    {
        name: "Pizzeria Carousal",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/00/Pizzeria_Carousal_Revamp.png",
        description: "It will be in your office. Turning on the Power Generator will activate it, making it spin around faster. Unfortunately, it drains a large amount of power when it spins. Turn off the Power Generator to deactivate the carousal.",
        section: "fnaf2"
    },
    {
        name: "Springtrap's Corpse",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c2/Springtrap%27s_Corpse.webp",
        description: "At 4:AM, he will appear in the office. Do not use your mask or you will get springlocked. You have to turn on the heater to springlock him back, but it will cost 10 Faz-coins to do so.",
        section: "fnaf3"
    },
    {
        name: "Demomare Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e3/Demomare_Fredbear.png",
        description: "His orange eyes may appear in one of your doorways in the Office. Close the door while having the opposite door in the House map in the Duct System closed.",
        section: "fnaf4"
    },
    {
        name: "Consequences Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/72/Consequences_Freddy.webp",
        description: "Each time you switch floors, Consequences Freddy will constantly fall from the top of the screen and to the bottom for a period of time, distracting you.",
        section: "fnafw"
    },
    {
        name: "Maskless Ennard",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e9/Maskless_Ennard.webp",
        description: "When you hear a metallic sound, look for his eyes in both doors and vents and close the corresponding door.",
        section: "fnafsl"
    },
];
