const characters = [
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
        name: "Freddy's Left Ear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/96/Freddy%27sLeftEarIcon.png",
        description: "Every second you're not looking at the left hall camera on Floor 1, it gets angrier. If it gets too angry, it will jumpscare you, deafening you for (AI/0.5)/1.25 seconds and causing an audio error.",
        section: "fnaf1"
    },
    {
        name: "Freddy's Right Ear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a0/Freddy%27sRightEarIcon.png",
        description: "Every second you're not looking at the right hall camera on Floor 1, it gets angrier. If it gets too angry, it will jumpscare you, deafening you for (AI/0.5)/1.25 seconds and causing an audio error.",
        section: "fnaf1"
    },
    {
        name: "Standing Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6a/Standing_Golden_Freddy.png",
        description: "He is slumped over in your office. Sometimes he will stand in your office at any time of the night. When this happens, you will have to look at the cameras or put on the mask, or your night will end.",
        section: "fnaf1"
    },
    {
        name: "Fun Time! Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/65/Fun_Time%21_Revamp_2.png",
        description: "Every 5 seconds, a poster will appear in the cam system, even if you have the monitor down, or if you are in another system. Honk the nose to make them disappear. Having too many posters will result in death.",
        section: "fnaf1"
    },
    {
        name: "Yellow Cupcake",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d7/Yellow_Cupcake_Resize.png",
        description: "The longer the cameras are down, the more chance of him appearing in your office. When he's there, not much will happen besides you being unable to change the state of the fan in your office. Once he appears, he will not leave, instead you'll need crush him by clicking on him! This will kill him and make him unable to appear again for the rest of the night. If your wondering if he'll appear again in your next night, don't worry, we'll just use one of his many clones to take his place. Survive the night to win!",
        section: "fnaf1"
    },
    {
        name: "Mike",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6a/Mike_Skull.png",
        description: "All 4 corners of him will be in the 4 corners of your screen. Throughout the night, they will slowly close into the centre of your screen. You can use the Shakelight in the center of your screen to make them go further back. If they ever fully connect, Mike will kill you.",
        section: "fnaf2"
    },
    {
        name: "Party Room Withered Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/14/Party_Room_WF_Revamp.png",
        description: "He is chilling in Party Room A in Floor 2. He will get bored and will enter your office. He sees you as a pest and will kill you if he stays in your office for too long. To send him back, go to Party Room A, and stare at it for a while to make Withered Freddy interested in going back again.",
        section: "fnaf2"
    },
    {
        name: "Crying Cake Child",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/24/Crying_Cake_Child_Revamp.jpg",
        description: "A minigame will appear on the right side of the screen, where it involves him and a purple car getting near him. Click the car multiple times to send it back. Failing to do so will result in a jumpscare.",
        section: "fnaf2"
    },
    {
        name: "Dream Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c6/Dream_Bonnie_Revamp.webp",
        description: "He will be in the left corner of your office. Sometimes, he will stare at you and shake. You must repeatedly open and close the left door to make him chill before he kills you.",
        section: "fnaf2"
    },
    {
        name: "Dream Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/41/Dream_Chica_Revamp.webp",
        description: "She will appear in the right corner of your office. If you see her shaking, quickly open and close the right door multiple times to make her stop.",
        section: "fnaf2"
    },
    {
        name: "Dream Puppet",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3c/Dream_Yellow_Bear_Revamp.webp",
        description: "Using the Global Music Box for too long will make Dream Puppet slide towards you in your office and block the view with his face. Turn off the Global Music Box to make him go back.",
        section: "fnaf2"
    },
    {
        name: "Dream Yellow Bear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/da/Dream_Puppet_Revamp.webp",
        description: "Sometimes when you take off your mask, he will show up right in front of you. Quickly flip up the monitor to make him disappear before he kills you.",
        section: "fnaf2"
    },
    {
        name: "Flashlight Battery",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/78/Flashlight_Battery_Resize.png",
        description: "When using the flashlight, the battery meter will show up in the top right of your screen, slowly depleting the longer the flashlight is on. If the battery meter is fully depleted, you will have to wait until the meter fully recharges in order to use the flashlight again. The meter will recharge by itself when you don't use your flashlight.",
        section: "fnaf2"
    },
    {
        name: "Tater the Waiter Gator",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/47/Tater_the_Waiter_Gator.png",
        description: "By the sound of hissing, you must find him on the cameras and click on him. If you do not have time to do this, you will die.",
        section: "fnaf2"
    },
    {
        name: "Give Gifts Puppet",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/10/Give_Gifts_Puppet_Revamp.webp",
        description: "Once per night, The Puppet will appear in the mouse cursor alongside 4 Crying Children in the corner of your screen. You must place the cursor on the children to give them gifts. Then you must then do the same to give them masks and breathe life to them. If the children were not given life before the start of the next hour, you will die.",
        section: "fnaf2"
    },
    {
        name: "Go Go Go Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8f/Go_Foxy.jpg",
        description: "He will have a tiny 8-bit version of his cove alongside the actual Pirates Cove. If he starts to come out of his cove once per night, you must buy an 8-Bit present in the Prize corner to distract Foxy from killing you.",
        section: "fnaf2"
    },
    {
        name: "Go Go Go Purple Guy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/66/Go_Go_Go_Purple_Guy.webp",
        description: "Will make one random Foxy variant spawn into the night every time you're on the Glitch Floor.",
        section: "fnaf2"
    },
    {
        name: "Mangle's Eye",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d4/Mangles_Eye_Resize.webp",
        description: "Sometimes at random, Mangle will lose her eye in the office. Find it and click on it to retrieve it for Mangle before she kills you.",
        section: "fnaf2"
    },
    {
        name: "Withered Emerald Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/69/Withered_Emerald_Freddy.png",
        description: "Sometimes, a danger sign will appear in your televisions, that means Withered Emerald Freddy is in one of your doors, let him in or else you will die, when he reach the office, you need to put on the mask and after flashlight him on the face to avoid your office start corrupt and after crash your game!",
        section: "fnaf2"
    },
    {
        name: "Cheat Toys & Withereds",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/31/Cheat_Toys_%26_Withereds.webp",
        description: "They'll move around Floor 2. If they reach a room near the elevator, shine the flashlight on that camera they are on to send them back. If one of them reaches the elevator, you're dead.",
        section: "fnaf2"
    },
    {
        name: "Springtrap's Corpse",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c2/Springtrap%27s_Corpse.webp",
        description: "At 4:AM, he will appear in the office. Do not use your mask or you will get springlocked. You have to turn on the heater to springlock him back, but it will cost 10 Faz-coins to do so.",
        section: "fnaf3"
    },
    {
        name: "Stage 01 Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6c/Stage01_Fredbear_Resize.png",
        description: "He will randomly appear in your office when you put your monitor down. He is eyeless, but the mask will not work on him at this state. Shine your Golden Flashlight at his face to make his eyes glow. Once his eyes fully glow, then you are able to put up the mask. He will kill you if you take too long to shine the Golden Flashlight at his face or put on the mask.",
        section: "fnaf3"
    },
    {
        name: "Bad Ending Heads",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b6/Bad_Ending_Heads.webp",
        description: "Occasionally, one of their heads will cover the monitor. You'll have to do a specific action to avoid getting jumpscared. If its Freddy: Press on his nose. Bonnie: Close the left door. Chica: Change the Kitchen music. Foxy: Check Pirate's Cove. Yellow Bear: Check the Glitch Floor.",
        section: "fnaf3"
    },
    {
        name: "Chrome Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/ff/Chrome_Freddy.png",
        description: "He will be on the third floor and will randomly scare you if stared at for too long at the cameras, erroring out your ventilation.",
        section: "fnaf3"
    },
    {
        name: "Poster SpringBonnie Duo",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3e/Poster_SpringBonnie_Duo.webp",
        description: "Two posters of them will be in Bedroom 1 and Bedroom 2. You must keep an eye on both of them to keep them trapped in their posters. If you let either one escape, you're dead!",
        section: "fnaf3"
    },
    {
        name: "Death Screen Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/05/Death_Screen_Springtrap.webp",
        description: "He is attempting to be free from his suit in your office. If you see that he is almost about to break out from his suit, spam click him to wind the springlocks back on to trap him further. If he escapes his suit, you're dead.",
        section: "fnaf3"
    },
    {
        name: "Shadow Bonnie Figure",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/12/Shadow_Bonnie_Figure.png",
        description: "He will dash through any part of the screen, trying to touch your mouse. If he succeeds, the game will glitch out and your run will end.",
        section: "fnaf3"
    },
    {
        name: "Spare Toy Parts",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/55/Spare_Toy_Parts.webp",
        description: "The parts will slowly roll out of the box if you keep any door closed for too long. If a spare part fully rolls out, it will jam a random door, preventing you from using it.",
        section: "fnaf3"
    },
    {
        name: "Foxy Lamp",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c2/Foxy_Lamp_Revamp.png",
        description: "His eyepatch will cover one eyehole of the mask at random whenever you wear it. This will make you lose a bit of oxygen. You can click on the eyepatch to make it disappear. Note that it will remain in the mask even if you take the mask off if you don't click on it.",
        section: "fnaf3"
    },
    {
        name: "Sugar",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a9/Sugar.png",
        description: "She works very similar to Toy Foxy. He will crawl through the Vent System, and when he comes to your office, you must quickly put on the mask. If you didn't have time to put on the mask, you will die.",
        section: "fnaf3"
    },
    {
        name: "Windowtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2f/Windowtrap.webp",
        description: "There will be a portal on the Glitch Floor showing the old Fazbears Frights location, specifically showing the Fazbear's Fright Office. At 2:AM, Windowtrap will appear on the other side of the window and slowly start walking towards the left side. If he ever fully walks offscreen, you must close the left door to your office, otherwise it's a quick game over!",
        section: "fnaf3"
    },
    {
        name: "Demomare Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e3/Demomare_Fredbear.png",
        description: "His orange eyes may appear in one of your doorways in the Office. Close the door while having the opposite door in the House map in the Duct System closed.",
        section: "fnaf4"
    },
    {
        name: "Toy Phone",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/25/Toy_phone.png",
        description: "Its Mute button is on the House map in the Duct System. When you hear its distinct ringing noise, press the Mute button. If you fail to mute the call, you will have to deal with 30 seconds of subtle screen hallucinations.",
        section: "fnaf4"
    },
    {
        name: "Protomare Foxy 4",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/5c/Protomare_Foxy_4.png",
        description: "He will go through the vents, but you won't be able to avoid him until he reaches the door, he will appear in the office, if his eyes are his original eyes you will have to shine a light on him, but if his eyes are Nightmare Foxy, close the door of ventilation. If you close any door in your office, Protomare Foxy 4 will go backwards.",
        section: "fnaf4"
    },
    {
        name: "Protomare Foxy 6",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d8/Protomare_Foxy_6.png",
        description: "He may appear peeking out the closet in Child's Bedroom on Floor 6, ready to attack. Spam click the flashlight on the House map in the Duct System until you hear a closet shutting sound.",
        section: "fnaf4"
    },
    {
        name: "Protomare Fredbear 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/47/Protomare_Fredbear_2.png",
        description: "He will randomly appear on your screen, moving too fast, quickly click his nose to avoid him blocking you the Duct System FNAF 4 House Map.",
        section: "fnaf4"
    },
    {
        name: "Protomare Fredbear 3",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/10/Protomare_Fredbear_3.png",
        description: "He would have a rare chance to appear on your desk. If he does, you can click on him to replace your mask with him. If you do, your mask will be able to be flipped up and down quicker and can negate any effects related to the toxic meter.",
        section: "fnaf4"
    },
    {
        name: "Protomare Fredbear 5",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e7/Protomare_Fredbear_5.webp",
        description: "He will randomly appear on your screen, spinning around. To get rid of him before he jumpscares you, click on the flashlight button on the Duct House Map.",
        section: "fnaf4"
    },
    {
        name: "Purple Robot",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ed/Purple_Robot_Revamp.png",
        description: "He will be in Lumber Co. Floor. If the chest square in the middle of his torso is green, you must chop down at least 2 of the trees quickly. If you don’t cut down any of the trees when this happens, the toxic meter will slowly increase, but will increase faster for every time you fail it.",
        section: "fnaf4"
    },
    {
        name: "Consequences Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/72/Consequences_Freddy.webp",
        description: "Each time you switch floors, Consequences Freddy will constantly fall from the top of the screen and to the bottom for a period of time, distracting you.",
        section: "fnafw"
    },
    {
        name: "Mirrored Redbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fa/Mirrored_Redbear.webp",
        description: "Using the heater too frequently will cause Redbear to move faster in the Vent System. Use the Vent Snares to drive him back.",
        section: "fnafw"
    },
    {
        name: "Munchies",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1d/Munchies_Resize.webp",
        description: "3 of them will be in your office. When pulling down the camera, they have a chance to disappear. If one of them disappears, pull the lever once. If two of them disappear, pull the lever twice. Failing to do this, or pulling the lever more times than necessary, will result in the controlled shock panel being disabled for one in-game hour.",
        section: "fnafw"
    },
    {
        name: "Metalman",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7c/Metalman.png",
        description: "Every time you buy something in the Prize Corner (Tapes, Plushies, anything), he will run into your office. Put on your mask to survive his wrath.",
        section: "fnafw"
    },
    {
        name: "Gargoyle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/44/Gargoyle.png",
        description: "Occasionally, one of the Gargoyles on the manor entrance of Floor 5 will be replaced by it. To change it back to normal state, you will have to use the pixelation slider on the Task System and increase it to over 75%. If it stays for too long, it will kill you.",
        section: "fnafw"
    },
    {
        name: "Adventure Grass",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f6/Adventure_Grass.png",
        description: "There will be a new meter a the top of the screen, if it goes down all the way you will very slowly start to pass out. The only way to refill this is to go to the GPS System, which will be replaced with grass. Hover your mouse over it to refill it. Go touch some grass in other words.",
        section: "fnafw"
    },
    {
        name: "Dogfight",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a0/Dogfight.png",
        description: "As the night begins, two dogfights will fight each other in your office, shooting bullets. If a bullet hits your cursor, the lever will break for a few seconds. Buy a flag in the Prize Counter and flash your light on it with the Power A/C on to turn it into a white flag, thus giving them a truce.",
        section: "fnafw"
    },
    {
        name: "Flan Crew",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/61/Flan_Gang_Resize.png",
        description: "They will accumulate in your desk the more you flip your monitor. Quickly shock them before they jumpscare you.",
        section: "fnafw"
    },
    {
        name: "Flying JJ & Talking JJ",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/38/Fjatjj.png",
        description: "They are distractions in your offce. Flying JJ will just fly around your office. Talking JJ will show up sometimes and say her line from foxy fighters.",
        section: "fnafw"
    },
    {
        name: "Half-Bake",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/98/Half-Bake.webp",
        description: "Everytime you look at the Duct System, she’ll walk farther in the vent system. If she reaches your office, you’re dead. There is no way to reverse her process, though you can use the front vent door to stop her.",
        section: "fnafw"
    },
    {
        name: "Mechrab",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e1/Mechrab.png",
        description: "He will be in the Duct System, heading towards the exit to your office. You must use the Neon Wall to repel him, since the Duct Snare and Duct Doors can't work on him. If he gets in your office, it will dance in your office alongside other Mechrabs, distracting you.",
        section: "fnafw"
    },
    {
        name: "Quad Endo",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f5/Quad_Endo_Revamp.png",
        description: "When you close either the left or right door, he will run through the duct system to the respective side. Put the neon wall to the respective side quickly to avoid his jumpscare. If both doors are closed at the side time, however, he won’t attack.",
        section: "fnafw"
    },
    {
        name: "Reaper Bytes",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c2/Reaper_Bytes.webp",
        description: "They'll be at the top of your screen. Occasionally, one of them will throw their scythe at your cursor. Quickly move your cursor to dodge their attacks. If it hits, there's a 90% chance it'll fill up the toxic meter by 65%, and a 10% chance it'll instantly kill you.",
        section: "fnafw"
    },
    {
        name: "Sub-Tunnel Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/79/Sub-Tunnel_Freddy.webp",
        description: "He will randomly appear on the Glitch Floor, and will make your camera stuck in there. Alongside him there will also be an exit to the Glitch Floor, you have to drag him to the portal to fix your camera.",
        section: "fnafw"
    },
    {
        name: "Maskless Ennard",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e9/Maskless_Ennard.webp",
        description: "When you hear a metallic sound, look for his eyes in both doors and vents and close the corresponding door.",
        section: "fnafsl"
    },
    {
        name: "Prototime Foxy 7",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b2/Prototime_Foxy_7.png",
        description: "Every time a new hour sticks two dice will appear next to the current time, then both will roll and land on a random number from 1-6. Based on what numbers are rolled that many seconds will have to pass until the time can continue as normal.",
        section: "fnafsl"
    },
    {
        name: "Prototime Freddy 12",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6a/Prototime_Freddy_12.png",
        description: "You will be given an extra 100% more Power but if you ever get to 120° it will all go away.",
        section: "fnafsl"
    },
    {
        name: "Tutorial Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/41/Tutorial_Freddy.png",
        description: "You will now have to buy stuff on the Task System to add to your atmosphere, health & safety and entertainment, when everything reaches a specific number given by him, he will give you a bonus revenue in faz-coins. But there is also a risk meter, if the risk meter gets too high he will jumpscare you.",
        section: "ffps"
    },
    {
        name: "Proxy Blacklight Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/cd/Proxy_Blacklight_Foxy.png",
        description: "He will appear in both in either the Front Vent Doorway or the Right Vent when the monitor is flipped down. If he is in the Front Vent, use the Lever. If he is in the Right Vent, use the Silent Ventilation and the Controlled Shock at the same time. Once he gets in, he will kill you.",
        section: "fnafhw"
    },
    {
        name: "Game Over Toy Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1e/Game_Over_Toy_Chica.png",
        description: "Game Over Toy Chica has gone against her fellow Arcade Mayhems, to assist you. She will spawn Purple 8-Bit Cupcakes across the screen. Clicking them with your cursor, will upgrade it. At 3am, a minigame will appear where you have to defeat the other Arcade Mayhem crew. If you die, the night will end.",
        section: "fnafar"
    },
    {
        name: "Candy Crazed Toy Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/19/Candy_Crazed_Toy_Freddy.png",
        description: "His shop will be set up in the Monkey Room, selling sweets and chocolates, that's it...what, you think the sweets are deadly and will kill you if you eat too many? You think Candy Crazed Toy Freddy thinks you're a sweet and come kill you? Get real, broski!",
        section: "fnafar"
    },
    {
        name: "Bat Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/ff/Bat_Foxy_Revamp.png",
        description: "He will fly on top of the Fury’s Rage Floor. If you jump under him, you’ll take damage. The higher the AI, the more faster he’ll go.",
        section: "fis2"
    },
    {
        name: "Fury Scraptrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/39/Fury_Scraptrap.webp",
        description: "He stays on the GPS System. When the Fury's Rage Floor is being watched for too long, he'll move towards you. If he reaches you, he'll jumpscare you.",
        section: "fnaffr"
    },
    {
        name: "Alien S.T.A.F.F. Bot",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/85/Alien_STAFF_Bot.webp",
        description: "A tractor beam will follow your cursor. When the cursor is over the beam, it'll go up. If the cursor is on the top of the screen, and is in the tractor beam, Alien Bot will jumpscare you. His AI determines the speed of the tractor beams horizontal movement.",
        section: "fnafsb"
    },
    {
        name: "Virtual Yenndo",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e4/Virtual_Yenndo.webp",
        description: "He will randomly appear in your office when putting the monitor down. When this happens, he will dramatically raise the toxic meter. Open up the monitor again before you die from the toxins.",
        section: "fnafhw2"
    },
    {
        name: "Shadow Freddles",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c6/Shadow_Freddles_Resize.webp",
        description: "When you lift up the monitor, they will start to appear in front of you. Shine your UV Flashlight to make them go away. If you let too many of them appear, you will die.",
        section: "tnt"
    },
    {
        name: "Trailer Stage Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f2/Trailer_Stage_Bonnie.webp",
        description: "He'll occasionally create duplicates of the Mask and Monitor buttons. The duplicates will not activate said mechanics. There's no way to prevent this.",
        section: "tnt"
    },
    {
        name: "Trailer Stage Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/82/Trailer_Stage_Chica.webp",
        description: "She'll occasionally create duplicates of the 'Change Music' button on the Kitchen Camera. The duplicates will not change the music box's music. There's no way to prevent this.",
        section: "tnt"
    },
    {
        name: "Trailer Stage Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/82/Trailer_Stage_Chica.webp",
        description: "He'll occasionally create duplicates of the GPS functions (Lure, Radio Jammer, Forcefield, ORCA Device). The duplicates will not activate the said functions. There's no way to prevent this.",
        section: "tnt"
    },
    {
        name: "Golden Mechrab",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0f/Golden_Mechrab.webp",
        description: "It will appear in the office after it reaches 3:AM, and its shell will shine very brightly, blocking your view tremendously. Use the Silent Ventilation to lower the brightness.",
        section: "tnt"
    },
    {
        name: "Vinnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/bb/Vinnie.webp",
        description: "When he appears in your office, that means he has locked you out of the Kitchen Camera. Change the Kitchen’s music via Switch Box Station to make him leave.",
        section: "fnac"
    },
    {
        name: "Minigame Shadow Candy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/72/MSCandy.png",
        description: "He may appear while looking at the YouTube system, in which case you must look at the Maze system, and vice versa. Looking at any other system will result in a jumpscare.",
        section: "fnac"
    },
    {
        name: "Minigame Old Candy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2b/Minigame_Old_Candy.webp",
        description: "A minigame will appear at the side of the screen involving Old Candy crossing platforms. Use the Arrow keys to control him. Failing the minigame will make you lose access to the Arcade Room in Floor 3 for 10 seconds.",
        section: "fnac"
    },
    {
        name: "Phantom Candy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/02/Phantom_Candy_Resize.webp",
        description: "He will appear on a floor button, randomly switching for a couple of seconds. Clicking on the button he's on will make you get a ventilation and audio error.",
        section: "fnac"
    },
    {
        name: "Jumpscare RAT",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/33/Jumpscare_RAT.webp",
        description: "It can appear on any camera that leads directly to the elevator. If he does, quickly shut the respective door to divert his attack. If he does get in, he'll do a non-lethal Jumpscare that inverts your screen for an in-game hour.",
        section: "fnac"
    },
    {
        name: "Withered Chester",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/83/Withered_Chester_Revamp.png",
        description: "He will crawl through the vent system, in which using the vent snares will hold him back. However, he will instantly jumpscare you as soon as he reaches the vent opening.",
        section: "fnac"
    },
    {
        name: "Lollipop",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/87/Lollipop.webp",
        description: "He will appear in the office when too much noise is being made. If he is on the left, type LOL to get rid of him. If he is on the right, type POP to get rid of him.",
        section: "fnac"
    },
    {
        name: "Monster Vinnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2e/Monster_Vinnie.webp",
        description: "He will appear in both Floor 1 Hallways at random times. You must Light-Flash them to send him away. However, he will rapidly switch between the 2 cameras in order to avoid your attack. Failure to do so in a long time will result in death.",
        section: "fnac"
    },
    {
        name: "Vision Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9e/Vision_Foxy.png",
        description: "If you hear humming it means Vision Foxy is about to run down one of two Halls (Left Hall or Right Hall) on Floor 1. Check either hall camera, and then pull down the camera and shine your flashlight on the doorway of the hall he's coming to until he goes away. If you do not look at the cam he's in or flash him quick enough, you will receive a fatal jumpscare.",
        section: "fntr"
    },
    {
        name: "Vision Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/98/Vision_Freddy.png",
        description: "He can appear at either of the doorways in the office. If you flash him with your light, then he will disable your flashlight for a short period of time. Simply close the door to get rid of him.",
        section: "fntr"
    },
    {
        name: "Vision Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/50/Vision_Bonnie.png",
        description: "His icon may appear on one of the televisions in the office. When this happens, you only have a short amount of time to find him on the cameras of Floor 1 and stare him down until he goes away.",
        section: "fntr"
    },
    {
        name: "Vision Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b0/Vision_Chica.png",
        description: "If you see her on a camera, quickly switch cameras to avoid a camera system error.",
        section: "fntr"
    },
    {
        name: "Bunnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/40/FNtR_%282024%29_Bunnie.png",
        description: "She will be on Floor 7 and will bother you by sticking her face up on the camera screen. You need to get rid of her by pressing her nose.",
        section: "fntr"
    },
    {
        name: "H.I.M",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c8/FNtR_%282024%29_H.I.M.png",
        description: "He will sit in the basement, you need to make sure that the cake that is next to him does not disappear. If something goes missing from the cake, you will get an infinite number of bugs (Death).",
        section: "fntr"
    },
    {
        name: "FNtR (2024) Ben",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/66/FNtR_%282024%29_Ben.png",
        description: "He will sometimes interfere with you, take pictures of you and blind you with a flash.",
        section: "fntr"
    },
    {
        name: "FNtR (2024) Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9d/FNtR_%282024%29_Bonnie.png",
        description: "He will try to steal your flashlight and other things, to stop this you need to raise the temperature to the maximum then he will leave.",
        section: "fntr"
    },
    {
        name: "FNtR (2024) Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/10/FNtR_%282024%29_Fredbear.png",
        description: "He will slowly move around the room. If it reaches the monitor, you must press Spacebar and close the monitor. If you don't cover the monitor, it will scare you and kill you.",
        section: "fntr"
    },
    {
        name: "FNtR (2024) Yellow Bear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/5a/FNtR_%282024%29_Yellow_Bear.png",
        description: "He has 4 ways of attacking you throughout the night, and will switch after each attack is successfully dealt with. If you fail to deal with him in time, he'll mess your night up badly. He will appear in one of the doorways. Don't shine your flashlight at him, or else it will be disabled for a short while. He leaves by himself randomly. If you hear the sounds of beeping, look for him in Floor 1. He will appear in either Cam 03, 04, 06, and 07. You have a short time to stare him down to make him go away. He will randomly appear on a random camera upon viewing it. Look away from him, or he will disable that camera for a short period of time. If you hear giggling, check the two F4 hallway cams for him. If you see him, Light-Flash him before he kills you.",
        section: "fntr"
    },
    {
        name: "Dark Blacklight Glamrock Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/ff/Dark_Blacklight_Glamrock_Freddy.png",
        description: "If you’re using too much power usage, he’ll run into your office. Turn off as much power you can and shine him with the UV flashlight or else he’ll end your game.",
        section: "funko"
    },
    {
        name: "Glow Toxic Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/84/Glow_Toxic_Springtrap.webp",
        description: "Green slugs will move all across your screen for the entire night, starting at the top right of the screen. If your cursor touches too many of them, Glow Toxic Springtrap will kill you!",
        section: "funko"
    },
    {
        name: "Glow Orville Elephant",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b1/GlowOrvilleElephant.png",
        description: "He'll start to fade into the office whenever the Shakelight is being used. Use the Silent Ventilation to make him fade back out. If he fully fades in, he'll jumpscare you, and take a percentage of power depending on how long the Shakelight was used.",
        section: "funko"
    },
    {
        name: "Blacklight Roxanne Wolf",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/03/Blacklight_Roxanne.png",
        description: "She will appear in Party Room B and will quickly get up to leave the room, and into the office. When she is in your office, use the Fazer-Baster or Faz-Cam to send her away! The Silent Ventilation slows her down.",
        section: "funko"
    },
    {
        name: "Action Figure Black Heart Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4c/Action_Figure_Blackheart_Bonnie.png",
        description: "When you hear his loud heartbeat, use the UV Flashlight to reveal his heart in a doorway. If his eyes appear instead, close the door, or he'll take your own heart!",
        section: "funko"
    },
    {
        name: "Action Figure Dreadbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c5/Action_Figure_Dreadbear.webp",
        description: "He'll appear on any camera on Floor 3. When he does, stare at him to make him disappear. If you switch the cameras too much, he'll destroy the last camera he was on.",
        section: "funko"
    },
    {
        name: "Action Figure Glow Rockstar Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fe/Action_Figure_Glow_Rockstar_Freddy.png",
        description: "A piece of him will fall off every ingame hour. Find the piece in the Task System. If you don't collect the piece by the next hour, Action Figure Glow Rockstar Freddy will attack you.",
        section: "funko"
    },
    {
        name: "Action Figure Lefty",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/39/Action_Figure_Lefty.png",
        description: "The more noise is being made, the more often he will show up in a random Floor 2 camera. Simply shine your light at him before he jumpscares you.",
        section: "funko"
    },
    {
        name: "Action Figure Nightmare Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/cd/Action_Figure_Nightmare_Bonnie.png",
        description: "He will be trying to obtain 20/20 vision! Unfortunately, 2020 has already happened, and if he obtains it, it will cause the collapse of time itself! To prevent this from happening, collect his Nightmarionne arm on Floor 4 to take away his obsession of vision.",
        section: "funko"
    },
    {
        name: "Balloon Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b6/Balloon_Bonnie.webp",
        description: "If the left door is open for too long, he’ll send out his balloon. When you see it in your office, use the pizza-cutter to get rid of it or else Balloon Bonnie will jumpscare you! The Power A/C makes the chances of the balloon appearing more.",
        section: "funko"
    },
    {
        name: "Balloon Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c8/Balloon_Chica.webp",
        description: "If the right door is open for too long, she’ll send out her balloon. When you see it in your office, use the pizza-cutter to get rid of it or else Balloon Chica will jumpscare you! The heater makes the chances of the balloon appearing more.",
        section: "funko"
    },
    {
        name: "Balloon Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f9/Balloon_Foxy.webp",
        description: "If the front vent door is open for too long, he’ll send out his balloon. When you see it in your office, use the pizza-cutter to get rid of it or else Balloon Foxy will jumpscare you! The Silent Ventilation makes the chances of the balloon appearing more.",
        section: "funko"
    },
    {
        name: "Balloon Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a8/Balloon_Freddy.webp",
        description: "If the right vent door is open for too long, he’ll send out his balloon. When you see it in your office, use the pizza-cutter to get rid of it or else Balloon Freddy will jumpscare you! The power generator makes the chances of the balloon appearing more.",
        section: "funko"
    },
    {
        name: "Tie-Dye Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/92/Tie-Dye_Bonnie.webp",
        description: "When he enters your office, you have to type 'Tie Dye' in the textbox that appears on top of him to make him go away.",
        section: "funko"
    },
    {
        name: "Tie-Dye Bonnie Plush",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8b/Tie-Dye_Bonnie_Plush.webp",
        description: "He’ll be in the GPS system with a meter on top of him. The power generator will charge the meter and the heater will wind it down. If it fills up, he’ll run to the player and end the night.",
        section: "funko"
    },
    {
        name: "Tie-Dye Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4f/Tie-Dye_Chica.webp",
        description: "Once activated into the night, The Lumber Co. floor will be covered in yellow tie-dye colored mist. There's no way to stop this.",
        section: "funko"
    },
    {
        name: "Tie-Dye Chica Plush",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a4/Tie-Dye_Chica_Plush.webp",
        description: "She might be seen when looking through the light system. When this happens, quickly use the Faz-Cam in your office to get rid of her.",
        section: "funko"
    },
    {
        name: "Tie-Dye Cupcake",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4b/Tie-Dye_Cupcake.webp",
        description: "The longer the cameras are up, the more chance of him appearing on your desk increases. When he’s there, he will replace your UV flashlight with the normal flashlight until you drop down from the cameras for several seconds.",
        section: "funko"
    },
    {
        name: "Tie-Dye Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/49/Tie-Dye_Foxy_Resize.webp",
        description: "Thrice per night, he will try to pick a fight with you in the Fury Rage floor. After beating him, he will become a sore loser and will cause one of the systems to malfunction. Use the controlled shock in your office by the number of times you fought him to prevent that from happening.",
        section: "funko"
    },
    {
        name: "Tie-Dye Foxy Plush",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/54/Tie-Dye_Foxy_Plush.webp",
        description: "Whenever a system goes out, he’ll run into your office. Shine the UV flashlight in his face to fed him off.",
        section: "funko"
    },
    {
        name: "Tie-Dye Freddy Plush",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/17/Tie-Dye_Freddy_Plush.webp",
        description: "When you see him in your office, click an 8-bit version of him on the Task System to make him go back before he kills you! The 8-bit version will go move at random spots each second.",
        section: "funko"
    },
    {
        name: "Tie-Dye Funtime Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f8/Tie-Dye_Funtime_Foxy.webp",
        description: "Her tie-dye fog will start to block the view of the Task System. Turn on the fan or the Power A/C to get rid of it. If the entire system is fully fogged up, he'll jumpscare you.",
        section: "funko"
    },
    {
        name: "Tie-Dye Mangle Plush",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b5/Tie-Dye_Mangle_Plush.webp",
        description: "She will start in Kids’ Cove and slowly get up. When he does, she’ll get into the elevator and make non-stop static, rising the noise meter. Look at the monitor to get rid of him.",
        section: "funko"
    },
    {
        name: "Tie-Dye Springtrap Plush",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d3/Tie-Dye_Springtrap_Plush.webp",
        description: "He’ll start in Floor 4 and make his way towards the elevator. When he goes into the office, he won’t be visible. Use the Faz-Cam to get rid of him.",
        section: "funko"
    },
    {
        name: "Toon Balloon Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3d/Toon_Balloon_Foxy_Revamp.png",
        description: "When he appears one of the Televisions by the front wall. You need to change the channel to get rid of him. If you leave him there for too long, he'll disable your comments section on the YouTube System.",
        section: "funko"
    },
    {
        name: "Funko Livewire Toy Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7d/Funko_Livewire.png",
        description: "Due to Funko painting his eyes white, not green, he's blind. He got off the elevator on the wrong floor. He'll be roaming around Floor 7, and slowly make his way towards the Power Room. You need to use the Christmas Jukebox to lure him away, otherwise, he'll overload it, causing your office to go dark.",
        section: "funko"
    },
    {
        name: "Funko Phantom BB",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e6/Funko_Phantom_BB.webp",
        description: "Sometimes Funko Phantom BB will show up in a random camera in Floor 3. If he is, use the audio lure onto him to get him away. If he stays there for too long, he jumpscares you, causing the ventilation to break.",
        section: "funko"
    },
    {
        name: "Funko POP Dark Blacklight Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e7/POP_Blacklight_Foxy.png",
        description: "Due to his POP being on every child's list, he'll put the Toy Duplicator Machine into overdrive and make an army of himself. They'll march soulless towards you down the Festive Hallway on Floor 7. Turn on the Heater to melt them all. If they get in. The true Pop Dark Blacklight Foxy will make you into fish bait!",
        section: "funko"
    },
    {
        name: "Funko POP Dark Blacklight Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/45/Funko_POP_DBF.webp",
        description: "Due to his POP being on every child's list, he'll put the Toy Duplicator Machine into overdrive and make an army of himself. They'll march soulless towards you down the Festive Hallway on Floor 7. Shine the UV Flashlight into the Forward Vent to blind them all. If they get in. The true Pop Dark Blacklight Freddy will give you his bear hug of death!",
        section: "funko"
    },
    {
        name: "Funko Pop TV Lolbit",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f5/TV_Lolbit.webp",
        description: "They will replace the middle television in the office. When it turns on, garbled gibberish will emit from it. You need to type FUNKO FALL 2017 into the textbox in the Task System to turn it off.",
        section: "funko"
    },
    {
        name: "Funko Pop Withered Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/70/Funko_POP_WB.png",
        description: "He will be in the Left Closet, being sad since he doesn’t have red eyes like the other cool Withered Bonnie variants. But controlled shocking him will make his eyes red. He will be so happy and start jumping up and down. But he has under estimated his weight and will crash to Floor 3. Now because the floor has a hole in it, the audio lures on Floor 3 will stop working. Not shocking him before 5:AM will result in death.",
        section: "funko"
    },
    {
        name: "Digital Glow Nightmare Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a9/Digital_Glow_Nightmare_Foxy.png",
        description: "He will appear in your office at random points during the night. When he appears there will be two Nightmare Foxy's next to him. Use the Fazer-Blaster to shoot the one that's glowing.",
        section: "quidd"
    },
    {
        name: "Digital Glow Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f0/Digital_Glow_Bonnie.webp",
        description: "He will stay in your office. If you don't use the Mask or the Monitor, then he will start glowing. Having the mask up will cause him to stop glowing, and using the monitor resets his glowing process. If he glows too much, then you will die.",
        section: "quidd"
    },
    {
        name: "Frozen Over Bidybab",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c0/Frozen_Over_Bidybab.webp",
        description: "She will move through the Vent System, if the temperature is too high she will move very slowly as she is not used to those environments, keep the temperature as high as possible because the vent snares and the door only take her back a few steps!",
        section: "quidd"
    },
    {
        name: "Frozen Over Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d0/Frozen_Over_Foxy.webp",
        description: "He works very similar to Burnt Foxy. If you see his icon above the temperature meter, that means he appeared on the Foxy Hall on Floor 3. When he's there, he'll constantly lower your temperature, all the way down to 60°C. To make him go away, turn on the heater for a couple of seconds, or look at him on the Foxy Hall for a bit.",
        section: "quidd"
    },
    {
        name: "Frozen Over Funtime Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f8/Frozen_Over_Funtime_Foxy.webp",
        description: "He will show up in your office if you are there for too long. He can be so angry that the temperature drops at 10 degrees every 5 seconds, all the way to 0 degrees. Turn off the fan to make him melt, but it only works at 120 degrees. If your temperature ends at 0 degrees, you will die.",
        section: "quidd"
    },
    {
        name: "Frozen Over Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c9/Frozen_Over_Mangle.webp",
        description: "She will randomly appear in your office if you put down the monitor. His radio static is loud enough to cause icicles to fall from the ceiling. Avoid the icicles on your screen so that Frozen Over Mangle can leave on her own. Getting hit by an Icicle will cause the temperature to lower by 30%. If the temperature is at 60% when you hit an icicle, you will be bitten by her.",
        section: "quidd"
    },
    {
        name: "Frozen Over Puppet",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/73/Frozen_Over_Puppet.webp",
        description: "A frozen music box will be in the Ice Caverns on Floor 7, where you will need to keep it wound up by clicking and holding over the blue button over the frozen music box. The Power A/C can also be used to keep the music box wound up. If it fully wounds down, the temperature of the building will slowly go down to 60°, and when it hits 60°, it will stay like that for the rest of the night.",
        section: "quidd"
    },
    {
        name: "Frozen Over Toy Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/78/Frozen_Over_Toy_Freddy.webp",
        description: "When the internet drains too much, he'll use his bone chilling powers to completely freeze the cameras over.",
        section: "quidd"
    },
    {
        name: "Frozen Over Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/03/Frozen_Over_Springtrap.webp",
        description: "He will fade in on the Beta System whenever you use the Power A/C. If he fades in all the way, he will freeze up the camera and prevent you from looking at it. The only way to make him fade out is to use the Heater for a few seconds.",
        section: "quidd"
    },
    {
        name: "Nightlight Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7e/Nightlight_Mangle_Revamp.png",
        description: "He will be visible in the darkness in Floor 2 in random cameras. Avoid using the Floor 2 flashlight on her or he will glow more. If she glows too much, he will kill you.",
        section: "quidd"
    },
    {
        name: "Nightlight Puppet",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fe/Nightlight_Puppet_Revamp.png",
        description: "A music box will be on the Light System. Keep it wound by shining the light at her nightlight music box or the buttons to change systems and floors will randomly move around.",
        section: "quidd"
    },
    {
        name: "Nightlight Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2f/Nightlight_Springtrap.webp",
        description: "He'll be on the GPS system. Using the flashlight (office or floor 2) will make him move towards you. Using the Silent Ventilation will push him back. If he reaches you, a jumpscare is all you should expect.",
        section: "quidd"
    },
    {
        name: "Quidd Shadow Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/77/Quidd_Shadow_Bonnie_Resize.webp",
        description: "If you stare at him for too long at the GPS System when he shows up, he will corrupt it and disable it. You must quickly go to the Task System and fix it when that happens.",
        section: "quidd"
    },
    {
        name: "Nightmare Gumball Swivelhands",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/12/Ngbsh.webp",
        description: "He stays at the very right side of your office and will swivel his hands faster and faster if a system error remains unfixed for too long. If they swivel too fast, he will jumpscare you. His hands will start to swivel slower and slower when there are no errors to fix.",
        section: "ulcn"
    },
    {
        name: "Wireframe Adventure Funtime Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/45/Wireframe_Adventure_Funtime_Foxy.webp",
        description: "He'll appear in the Office when the Shakelight is being used too much. When she does, he'll give the office a wireframe effect for 2 hours.",
        section: "ulcn"
    },
    {
        name: "Finished Model Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/cd/Finished_Model_Freddy.webp",
        description: "He is trying to remodel himself in your Office due to being so ugly. The usage of the Power A/C makes his model more uglier. Keep it off to avoid death!",
        section: "ulcn"
    },
    {
        name: "Negate Rainbow Blacklight Toy Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/46/NRBTB.webp",
        description: "He will countdown from three to one. When he is counting down either the color white or red will flash on screen. When he gets to one and it's white, nothing will happen. However, if it was red, open up your monitor. When he haywires and you aren't in the monitor you get jumpscared and have your timer set back to 1 hour before.",
        section: "ulcn"
    },
    {
        name: "Windowsrionne",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f9/Windowsrionne.webp",
        description: "There will be two monitors in your office, and Windowsrionne will appear in one of them. Stopping him will require you to press L when he is on the left, and R when in the right. Waiting too long will cause Windowsrionne to show up in both monitors and kill you.",
        section: "ulcn"
    },
    {
        name: "Rusty Ennard",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/28/Rusty_Ennard.png",
        description: "He will make his way out of The Sewers. If you don't use the Fazblaster once he's in the office, he'll steal the Golden Flashlight.",
        section: "ulcn"
    },
    {
        name: "VR Lolbit",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f5/VR_CircusRama.webp",
        description: "When they fade in on the Glitch Floor. Turn on the Fan to make her fade away. If he fades in fully, she'll fake jumpscare you, and will cause your monitor to be trapped on the Glitch Floor for a few short minutes.",
        section: "ulcn"
    },
    {
        name: "Blacklight Yenndo",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/ba/Blacklight_Yenndo_Skin.webp",
        description: "He is mad that Funko cancelled the 'Blacklight Sister Location Wave' before it was even announced. Blacklight Yenndo will fill the entirety of Floor 1 with blue, toxic fumes. Turn on the Power AC to get rid of the fumes. If you don't, your toxic meter will rise, and you will eventually pass out.",
        section: "ulcn"
    },
    {
        name: "Trolltrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f9/Trolltrap.webp",
        description: "When it's pitch black during a blackout from a ventilation error, he can appear at any door or vent. Shut the vent or door depending on where he's at before it goes pitch black from the ventilation error again.",
        section: "ulcn"
    },
    {
        name: "Ultra Tangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fa/Ultra_Tangle.webp",
        description: "She will go through the same path that Mangle took in FNAF 2. When she gets to the vent, close the right vent door to prevent her from getting into the office.",
        section: "ulcn"
    },
    {
        name: "System Error Big Chungus",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8d/System_Error_Big_Chungus_Skin.webp",
        description: "You'll know when he's in the Candy Cane Forest on Floor 7, when one of the candy canes has missing textures. You need to go into the Task System and use the Anti-Virus to get rid of him, or else he'll completely corrupt it, causing the camera to get the Blue Screen of Death.",
        section: "ulcn"
    },
    {
        name: "Shadow Nightmare Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/5d/Shadow_Nightmare_Mangle.webp",
        description: "Sometimes he'll appear over one of the vent snares, quickly draining your power. Hover your mouse over her for a view seconds to get rid of him.",
        section: "ulcn"
    },
    {
        name: "Missing Toy Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6e/Missing_Toy_Foxy.webp",
        description: "They would ask you to make a new skin for them in the Task System. However, if you make a skin that looks like another character, then they will kill you.",
        section: "ulcn"
    },
    {
        name: "Coal Jack-O-Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/56/Coal_Jack-O-Bonnie.webp",
        description: "At 4AM he'll conjure another doorway into existence inside of your office. Except there is no door to close! (well kind of ) When he appears in the doorway, you must search the F8 cameras for the Door Button that connected to it. Click it to close the door to stop Coal Jack-O-Bonnie from entering your office and send him to back into his dimension, as otherwise you will meet an untimely fate!",
        section: "ulcn"
    },
    {
        name: "Glamfred Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/83/Glamfred_Bonnie.webp",
        description: "He will be in the Vent System and will act like any other vent animatronic. Yeah, there's nothing else then that, so don't forget to close the vent door on his face.",
        section: "ulcn"
    },
    {
        name: "Dust Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a8/Dust_Mangle.webp",
        description: "She will go through the Vent System, immune to the Vent Door. Use the Vent Snare to fend him off, just remember that when the Power Generator is active, she will move faster.",
        section: "ulcn"
    },
    {
        name: "OMC High-Score Toy Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/20/OMC_Highscore_Toy_Chica.webp",
        description: "The monitor screen will sometimes have the color scheme of Old Man Consequences. Press the Eye button in the top right corner that hides certain elements of the map to turn the screen back to normal. The button will be inactive for 10 seconds thereafter. Taking too long will result in your game window being minimized for the rest of the night!",
        section: "ulcn"
    },
    {
        name: "OMC Grimm Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e3/OMC_Grimm_Foxy.webp",
        description: "He may appear in your office with the intent of killing you, that's not cool of him to do. Change the position of the Wet Floor Sign in your office to make him leave.",
        section: "ulcn"
    },
    {
        name: "OMC Fredbear Flower",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d4/OMC_Fredbear_Flower.webp",
        description: "Your screen will start to become grainy throughout the night. Shut off a camera to stop it for a short while.",
        section: "ulcn"
    },
    {
        name: "OMC Classic RAT",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/10/OMC_Classic_Rat.webp",
        description: "Once per night, the glitch floor will turn a reddish hue. When it does, that means he's about to attack. Quickly take a short-sight pill to prevent him from attacking. If you don't, he'll jumpscare you.",
        section: "ulcn"
    },
    {
        name: "Ultra Mono Freddy Mask",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/27/Ultra_Mono_Freddy_Mask.png",
        description: "You can't see your meters while using the mask.",
        section: "ulcn"
    },
    {
        name: "Bromine",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fd/Bromine.webp",
        description: "The toxic meter is now red-brown. The capacity of the oxygen meter is reduced by the amount of current toxicity, capping at 50 % of its normal capacity.",
        section: "ulcn"
    },
    {
        name: "Adventure Funtime Blood Puppet",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e0/Funtime_Blood_Puppet.webp",
        description: "He will be in The Graveyard on Floor 5 trying to start a campfire and you need to help him. Help him by cutting down (AI level/2) trees on the Lumber Co. floor where every time you cut down a tree it will give Funtime Blood Puppet wood to put into the fire. After giving him enough wood his campfire will finally start which will make him happy. If his campfire fails to start by 4:AM he will get sad, then he'll blame it on you! (Death).",
        section: "ulcn"
    },
    {
        name: "Negate Rainbow Plushbabies",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c1/Negate_Rainbow_Plushbabies.webp",
        description: "Every time you go into the Light System, another one spawns on it. If too many spawn, or there are less than 5 of them at 5:AM, they will jumpscare you.",
        section: "ulcn"
    },
    {
        name: "Negate Rainbow Totem Panic",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e9/Totem_Panic_Negate_Rainbow.webp",
        description: "When his loud ambience song starts playing, that means he will attack and turn back time to one hour before! You need to go to one of the closets in Floor 4 and drag his pieces to build him to avoid his attack.",
        section: "ulcn"
    },
    {
        name: "Neon Emerald Toy Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d4/Neon_Emerald_Toy_Chica.webp",
        description: "Neon Emerald Toy Chica will go through the Vent System. She can bypass the Vent Snare and the vent door. Your only defense is to use the Lever right next to the vent to make her go back.",
        section: "ulcn"
    },
    {
        name: "Neon Emerald Toy Chica V2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4e/NETC_Resize.png",
        description: "She will wander around the 3rd floor, avoid using an Audio Lure on her, or else she will go down to your office, and you will have to put on your mask.",
        section: "ulcn"
    },
    {
        name: "Neon Totem Panic",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/31/Neon_Totem_Panic.webp",
        description: "He will be having a rave party in the Master Bedroom on Floor 5, unfortunately it's so loud, you can hear it in the office. You need to pull the lever in the office to cut the power and end the party, or you'll have a thumping headache by 4:AM.",
        section: "ulcn"
    },
    {
        name: "Abominable Toy Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7b/Abominable_Toy_Freddy.webp",
        description: "Abominable Toy Freddy will appear in the Ice Caverns on Floor 7, indicated by him growling. If he escapes into Santa's Workshop, turn on the Heater to drive him back. If he gets in, it's game over.",
        section: "ulcn"
    },
    {
        name: "Amber Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c6/Amber_Freddy.webp",
        description: "He is encased in a carbonate of amber in the Prop Storage camera in Floor 4. If you use the heater for too long, the amber will melt, making some of your modes sticky, thus making it so that you have to press a mode button twice to turn it on. If the amber carbonate fully melts all the way, he will kill you.",
        section: "ulcn"
    },
    {
        name: "Bad Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e6/Bad_Freddy_Resize.png",
        description: "If you have the Power A/C activated for a long time, it will appear in the YouTube System and cover your screen, leaving the floor unusable! To make him quit, you need to Spam-Click his nose!",
        section: "ulcn"
    },
    {
        name: "Eggy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d3/Eggy.webp",
        description: "Everytime you view the task system, an egg will be balancing on a wobbly wooden shelf. Use the right and left arrow keys to keep it steady so that the egg doesn't fall. If the egg falls, the animation time for all doors in the office will be doubled, making door timings need more precision.",
        section: "ulcn"
    },
    {
        name: "Dark Totem Panic 666",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/03/Dark_Totem_Panic_666.webp",
        description: "His aura will slowly envelop your screen and he'll jumpscare you, if you have the Christmas Jukebox on the Christmas Floor on loud volume for too long. Turning it down or off, reverses his progression.",
        section: "ulcn"
    },
    {
        name: "Dark Foxy's Revenge",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/dc/Dark_Foxy%27s_Revenge.webp",
        description: "He's back and he wants revenge. He will make a lap around the first floor, starting at Funtime Cove and going through Pirate Cove, Left Hall and Right Hall. To make him move backwards, turn off the power generator. If he runs a full lap, you're removed from the game (Death).",
        section: "ulcn"
    },
    {
        name: "Funny Face Latex Mask",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c5/Funny_Face_Latex_Mask.webp",
        description: "He is in the Duct System, trying to sell you dank memes. His memes are very dank to the point where they give you nausea. Shut the corresponding Duct Door that he is going to, otherwise your vision will be slightly dizzy.",
        section: "ulcn"
    },
    {
        name: "Inverted El Chip",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/21/Inverted_El_Chip.webp",
        description: "He's in the Basement, slowly filling the noise and toxic meters, as well as draining the internet and oxygen meters, but he can only drain one at a time. Click him to change which meter he is currently affecting.",
        section: "ulcn"
    },
    {
        name: "Insult Withered Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f0/InsultWFreddy.png",
        description: "Everything the Sea Bonnies said was true, not to you, but to Withered Freddy, he is an idiot. He failed High-School and now he's gotta retake a test to pass, and his final grade matches with your points, so if he fails, -500 points will be removed! To prevent this, help him study by training him and showing basic math equations on Window Room 1 on Floor 8. He'll begin his test at 5AM, just make sure you've made him study enough so that he can pass and add +500 points to your final point value!",
        section: "ulcn"
    },
    {
        name: "Jack-O-Mr. Hippo",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a5/Jack-O-Mr_Hippo.webp",
        description: "He will travel through the left side of F4. He'll get mad whenever the office temperature is low, because it makes him cold. Keep the temperature high to prevent him from coming to your office and killing you.",
        section: "ulcn"
    },
    {
        name: "Mario Panic",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f7/MarioPanic.webp",
        description: "A tube will be in your office during the whole night! You need to seal it up when Mario Panic starts talking to avoid Mario Panic appearing! You need to double-click the tube to seal it! If the tube isn't sealed, Mario Panic will appear in the tube and after that, Mario Panic will end your run with a jumpscare.",
        section: "ulcn"
    },
    {
        name: "Mario Toy Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3c/Mario_Toy_Freddy.webp",
        description: "Once per night he will appear in your office and have Several Paragoomba's fly downwards towards the bottom of the screen. Avoid hitting them with your mouse until their all gone, unless you want to meet a. early demise.",
        section: "ulcn"
    },
    {
        name: "Miner 8-Bit Baby",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/62/Miner_8-Bit_Baby.png",
        description: "She is tunneling her way through the ground in search for diamonds. You need to use the Radio Jammer to stop her, otherwise the floor will collapse beneath you, burying you alive.",
        section: "ulcn"
    },
    {
        name: "Clicky",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/71/Clicky.webp",
        description: "Every time you double click anywhere on the monitor screen, there is a chance that a Windows 3.0 pop up will appear as a distraction. Click on the red X button to close it.",
        section: "ulcn"
    },
    {
        name: "Crimson Rose Freddy Corpse",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/63/Crimson_Rose_Freddy_Corpse.webp",
        description: "His corpse will sometimes litter all over your screen, covering certain HUD modes. Sweep them out by moving your mouse over him.",
        section: "ulcn"
    },
    {
        name: "Totem Fear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4c/Totem_FEAR.webp",
        description: "He will move to you like the normal Freddy Fazbear throughout Floor 2. You only can see him in the darkness because he will hide if you shine the light at him! When he reaches one of the vent cameras, you need to close the corresponding door, but that will only stall him! You need to flash him constantly to break him, because he can't hide in those vents! When he breaks, he will reset to the Show Stage. If you click his nose, he will instantly become faster and kill you because that's annoying!",
        section: "ulcn"
    },
    {
        name: "Bonnie 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/62/Bonnie_2.png",
        description: "He'll be having a rad guitar solo on the Show Stage! Occasionally, his guitar skills would be so rad, it'll max out the noise meter. Buy some scissors from the prize counter and use them to cut the strings of his guitar. He'll repair his guitar eventually, though.",
        section: "ulcn"
    },
    {
        name: "Bonnie 3",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/45/Bonnie_3.webp",
        description: "He'll be making a delicious carrot cake in the Grand Kitchen, but he needs your help for finding ingredients. Whenever you get a math question right on the Task System, you'll get one carrot. Collect AI + 7 carrots by the end of the night, or he'll burn the pizzeria down with you still inside it! (Death).",
        section: "ulcn"
    },
    {
        name: "Bonnie 4",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f2/Bonnie_4.webp",
        description: "He's not Bonnie, he's actually Shattered Glass Bonnie from the Mirror Dimension, using holographic technology. Don't fall for his deception by Camera Flashing him. If he gets in, you're dead.",
        section: "ulcn"
    },
    {
        name: "Bonnie 5",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/ca/Bonnie_5.png",
        description: "He'll occasionally appear in the Disco Room on Floor 8, his eyes being blacked out. However, when his eyes appear, that signals he's about to attack. Use the Alarm System on the camera to scare him away. If you don't, he'll jumpscare you.",
        section: "ulcn"
    },
    {
        name: "Bonnie 6",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f3/Bonnie_6.png",
        description: "His face will block a random camera on Floor 5. You can't change the camera its on, but it'll change every hour.",
        section: "ulcn"
    },
    {
        name: "Bonnie 7",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9f/Bonnie_7.webp",
        description: "When he appears in the office, he'll be playing his guitar, raising the noise meter. Use the Golden Flashlight to scare him off.",
        section: "ulcn"
    },
    {
        name: "Bonnie 8",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d3/Bonnie_8.png",
        description: "He'll go through the vent system, unaffected by the vent snares, vent door and lever. When he reaches the vent opening (Signalled by a guitar strum), Shine the UV Flashlight on the Front Vent to send him away.",
        section: "ulcn"
    },
    {
        name: "Bonnie 9",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c9/Bonnie_9.png",
        description: "He sits in the Power Room on Floor 7. Occasionally, his rabbit instincts will take over and he'll start gnawing on the wires. Turn the volume of the Christmas Jukebox up to make him stop. If you don't do it in time, he'll chew through the wires, causing a blackout.",
        section: "ulcn"
    },
    {
        name: "Bonnie 10",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7b/Bonnie_10.png",
        description: "Similarly to Raised Eyebrow Rock, he appears in the top right corner, judging you. He will nod his head if you do bad enough in the night, and if you beat it, he will give you less points based on his AI. However, if you prevent a character from attacking too much, then he will raise his eyebrow on your succes, raising the noise meter with a massive vine boom.",
        section: "ulcn"
    },
    {
        name: "Bonnie 11",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/15/Bonnie_11.png",
        description: "This Bonnie does not exist physically, rather as jumbled code on the Glitch Floor. When his spirt starts to fade him on that system, quickly switch between the UV and Golden Flashlights to make him fade out again. If he fully fades in, he'll jumpscare you.",
        section: "ulcn"
    },
    {
        name: "Bonnie 12",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/46/Bonnie_12.png",
        description: "Similarly to Bonnie 6, his face will block a random system. You can't change the system its on, but it'll change every hour.",
        section: "ulcn"
    },
    {
        name: "Bonnie 13",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2b/Bonnie_13.webp",
        description: "At 3AM, he'll appear in the Office. Although he's invisible, you can use the Shakelight to locate him. Find him and shine the Shakelight on him to send him away. If you don't, he'll jumpscare you.",
        section: "ulcn"
    },
    {
        name: "Bonnie 14",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/36/Bonnie_14.webp",
        description: "His figurine will be on sale in Candy Crazed Toy Freddy's shop (Don't ask why). If you buy it, he'll start rocking out on your monitor, regaining lost power!",
        section: "ulcn"
    },
    {
        name: "Bonnie 15",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9c/Bonnie_15.png",
        description: "He'll be in each Party Room on Floor 2, crying. Occasionally, one of the Bonnie's will stand up, preparing to run into your office and jumpscare you. If the one in Party Room A stands up, shine the flashlight and turn on any mode but all OFF. If its the right one, shine the flashlight and turn on all OFF. If you do the wrong action or simply take too long, he'll jumpscare you.",
        section: "ulcn"
    },
    {
        name: "Bonnie 16",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1e/Bonnie_16.png",
        description: "He'll occasionally appear in place of where the Bonnie figurine would normally be. Don't worry though, he's here to spread morale support! When he appears, he'll drain the Toxic Meter.",
        section: "ulcn"
    },
    {
        name: "Bonnie 17",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/46/Bonnie_17.png",
        description: "He will go through the Duct System. He'll be affected by the Audio lure, but not for long. The higher the noise levels, the faster he'll move. If he reaches you, he'll jumpscare you.",
        section: "ulcn"
    },
    {
        name: "Bonnie 18",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a2/Bonnie_18.png",
        description: "He'll be smashing up all the pumpkins on the Pumpkin Patch in Floor 5! However, if he smashes up all the pumpkins, he'll have nothing to break, and he'll come to your office to smash you! (Death). To stop this, press the 'REPLENISH PUMPKINS' button on the Pumpkin Patch camera to distract Bonnie 18!",
        section: "ulcn"
    },
    {
        name: "Bonnie 19",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4b/Bonnie_19.png",
        description: "He stays, watching.",
        section: "ulcn"
    },
    {
        name: "Bonnie 20",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/98/Bonnie_18.webp",
        description: "He will be in the House Kitchen on Floor 6 where he will be making a variety of drinks. When he's finished making one, he will appear in your office with the drink he has made, then he will ask if you want it or not, where you can say Yes or No. Some drinks will have a positive affect while some will have a negative effect, so choose wisely, as you can only say no five times before he just gives it to you anyway. Monty Gator's Green with Envy! = Takes 30% of your Oxygen. Superstar Daycare Strawberry Shake = Gives 15% more Power. Foxy's Fruity Cove Cooler = Gives 10 Faz Coins. Sodaroni Slushy = Adds 30% to your Toxic Meter.",
        section: "ulcn"
    },
    {
        name: "Bonnie 21",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/71/Bonnie_4.png",
        description: "He still thinks 9+10=21, so you'll need to teach him how to do basic math. He'll stay in the Task System, watching the math bar. Complete AI÷2 math questions to make him learn again. If you don't, he'll be angry you failed to teach him and jumpscare you.",
        section: "ulcn"
    },
    {
        name: "Bonnie 22",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/87/Bonnie_22.png",
        description: "He stays on Parts and Services on Floor 2, plotting something... He's too busy plotting though, so he won't come to attack you.",
        section: "ulcn"
    },
    {
        name: "Bonnie 23",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d6/Bonnie_23.png",
        description: "He'll be on a random camera on Floor 5. Check up on him from time to time, he's pretty lonely :(",
        section: "ulcn"
    },
    {
        name: "Bonnie 24",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fa/Bonnie_24.webp",
        description: "He will be in the cheese room, why? Because he think it looks cool. While he's taking in the beauty of the room, he will start to think about you. You two are friends after all. Remember that time you two went on that cruise ship? That was a lot of fun, good times. So while thinking about you, he will remember that you told him that your a big fan of cheese sandwich's, so he wants to show you how cool the cheese room is! But he forgot that a mortal cannot view the room as it's on a higher plan of existence. So when he shows you it, you will pass out from shock (and maybe die). So when he appears in your office and asks you if you want to see the cheese room, you will need to type 'NO' on your keybord to make him leave. He will understand your request and not bother you for the rest of the night, as you did give him that milkshake a few days ago, and MAN that was a good milkshake! Also don't forget to survive the night to win!",
        section: "ulcn"
    },
    {
        name: "Playtime",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b0/PlaytimeBaldi.png",
        description: "She will randomly show up in your office while you are on the monitor and force you to play jumprope with her. Use left-click to make your cursor hop over the jumpropes that appear next to your cursor. She will force you to jumprope an (AI level/2) number of times before letting you go.",
        section: "bb"
    },
    {
        name: "Arts and Crafters",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/21/SockMonkey.png",
        description: "He can be found on basically any camera on any floor. If you have a lot of Faz-Coins, he'll get jealous and start screeching at you before sending you back 2 hours. Quickly change the camera when you see him!",
        section: "bb"
    },
    {
        name: "It's A Bully",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f0/It%27s_a_Bully.png",
        description: "He will appear at 5:AM and will force you to give him one of your items! Make your choice quickly or else he will steal all your items!",
        section: "bb"
    },
    {
        name: "Principal Of The Thing",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7c/Principal_Of_The_Thing_Resize.webp",
        description: "If you use any mechanic for too long, then he will block you from being in the office for a timed sequence that gets longer every time. 15 seconds, 30 seconds, 45 seconds, 60 seconds, 99 seconds",
        section: "bb"
    },
    {
        name: "Cloudy Copter",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/90/CloudyCopter.png",
        description: "At a random point in the night, he'll appear in your office and start blowing wind, moving your cursor away. To get him to stop, hover your mouse over him and use the flashlight to scare him away.",
        section: "bb"
    },
    {
        name: "Placeface",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d0/PlaceFace.png",
        description: "Placeface will randomly appear every 2 in-game hours, blocking your screen completely. While he is blocking your screen, he also says 'Elephant Hit', which increases the noise meter. Type 31718 on your keyboard to make him go away.",
        section: "bb"
    },
    {
        name: "Bladder",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/96/Bladder.png",
        description: "He'll move away from you on the GPS System. There'll be math questions on the Task System. Answering a question incorrectly will half his speed, but answering right will double his speed. The only way to survive is to answer enough questions incorrectly. If he fully reaches out of the GPS System view, he will kill you.",
        section: "bb"
    },
    {
        name: "TestDithered",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/04/TestDithered.png",
        description: "TestDithered will randomly appear and cover up your controlled shock button. When this happens, use the flashlight on him to make him go away. Waiting too long to do so will result in him stealing your shock button.",
        section: "bb"
    },
    {
        name: "Treasure Island Suicide Mouse",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/10/Treasure_Island_Sad_Mouse.png",
        description: "The TVs in the F4 Left Hall will begin to show the Suicide Mouse broadcast. Click on all of them to make it turn off. The longer they're on, the more he'll fade in, killing you if he fully fades in.",
        section: "fnati"
    },
    {
        name: "Jake Smith",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/45/Jake_Smith_Revamp.webp",
        description: "He will turn off random cameras as well using the Faz-Cam if the heater is on for too long.",
        section: "fnati"
    },
    {
        name: "2.0 Oswald",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/49/2.0_Oswald.png",
        description: "If there is a lot of noise for too long, he will walk into your office. Turn off two cameras to make him run off!",
        section: "fnati"
    },
    {
        name: "2.0 The Face",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c5/20_Face.png",
        description: "He will be in the basement, trying to pull out his eyes. Once he does, he will go upstairs and take yours! Change the Kitchen's music to make him stop for a bit. He won't kill you, but he will make you blind you for the rest of the night.",
        section: "fnati"
    },
    {
        name: "4.0 Ortensia",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/38/Treasure_Island_Ortensia.png",
        description: "When collecting a green rupee, she has a 50% chance of appearing in the Main Hall on floor 2. Turn off a camera to get rid of her!",
        section: "fnati"
    },
    {
        name: "4.0 Undying",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/17/40_Undying_Resize.png",
        description: "This inhuman creature will move around the duct system and eventually reach your office. Keep a close eye on him and make sure the entrance he is going to is open, or else he will break down the duct door. After breaking the duct door, he'll leave.",
        section: "fnati"
    },
    {
        name: "Lisa Bertsch",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/aa/Lisa_Bertsch_Revamp.png",
        description: "When she calls, quickly mute her, otherwise she will create a lengthy audio disturbance and add one FNATI character to the night. The mute button will appear in different places each time.",
        section: "fnati"
    },
    {
        name: "2.0 Acephalous & Disembodied",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4a/Ace_20.png",
        description: "Both of them have teamed up! Disembodied, who is on Acephalous's head, will point to which room they will travel to on floor 2. Flash the light multiple times to make Disembodied go to a different direction.",
        section: "fnati"
    },
    {
        name: "5.0 Disembodied",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/69/50_Disembodied.png",
        description: "If you go on any other system other than the Cam System for too long, he'll appear on the desk and start disabling cameras. Press the Exotic Butters to make him stop.",
        section: "fnati"
    },
    {
        name: "5.0 Oswald Duo",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fe/5.0_Oswald_Duo.png",
        description: "V1 Oswald (the right) and V2 Oswald (the left) will appear in Bedroom 1 and 2 respectively. If one of them appears on one of the bedrooms, turn off the camera for the other bedroom. If both of them appear at the same time, turn off the Master Bedroom instead. Doing the wrong action will end your night in a jumpscare!",
        section: "fnati"
    },
    {
        name: "5.0 Photo-Negative Minnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/01/50_Photo-Negative_Minnie.png",
        description: "She will sometimes be within the pills shelf, trying to eat the pills. Turn on a recently turned off camera to make her stop!",
        section: "fnati"
    },
    {
        name: "Acephalous",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/5c/Acephalous_Revamp_2.png",
        description: "He will travel through the duct system, and once he reaches your office, stay still to make him leave. Not doing so will make him end your game.",
        section: "fnati"
    },
    {
        name: "Animatronic Alice",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/59/Animatronic_Alice_Resize.webp",
        description: "She is always in your office. She will occasionally stand up when you are switching floors. Click on her when she stands up before she kills you.",
        section: "fnati"
    },
    {
        name: "Nightmare Suicide Mouse",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/83/Nightmare_Suicide_Mouse_Revamp.png",
        description: "He can appear in Oxygen Storage or Prop Storage. Shock him to make him teleport into the office, then use the flashlight on him to prevent death!",
        section: "fnati"
    },
    {
        name: "Classic Acephalous",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/02/Classic_Ace_Resize.webp",
        description: "He might appear in your office. Whatever number of fingers he holds up is what floor you must turn off a camera in. Not doing so will result in death!",
        section: "fnati"
    },
    {
        name: "Classic Disembodied",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/76/Classic_Disembodied_Revamp.png",
        description: "If he appears in your office, that means he blocked your Right Duct Door. Turn on the fan and the A/C to make him stop.",
        section: "fnati"
    },
    {
        name: "Classic Daisy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3a/Classic_Daisy_Revamp.png",
        description: "If she appears in your office, that means she has blocked your Left Duct Door. Turn on the fan and the heater to make her stop.",
        section: "fnati"
    },
    {
        name: "Classic Henry",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/5e/Classic_Henry_Resize.webp",
        description: "If he's in your office, do not turn off a camera or he'll end your night. Pull the lever to make him leave.",
        section: "fnati"
    },
    {
        name: "Classic Hourglass",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f0/Classic_Hourglass_Revamp.png",
        description: "He will be invisible to the duct system. Once he reaches the bottom, he will break the duct door and poke his head out. Flash the flashlight on him to get rid of him! Afterwards, you need to fix the duct door via a task in the task system, that is if he did break the door.",
        section: "fnati"
    },
    {
        name: "Classic MickMick",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4e/Classic_MickMick_Revamp.png",
        description: "Whenever the ventilation goes out, he spawn in floor 1. Quickly turn off the camera he is on to make sure he won't kill you!",
        section: "fnati"
    },
    {
        name: "Classic Oswald",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8e/Revamped_Classic_Oswald.png",
        description: "If there is noise for too long, he will walk into your office. Turn off a camera to make him run off!",
        section: "fnati"
    },
    {
        name: "Classic Pete",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1d/Classic_Pete_Resize.webp",
        description: "Thrice per night, he will try to pick a fight with you in the Fury Rage floor. After beating him, he will become a sore loser and run towards your office. Use the F4 controlled shock in your office after beating him to prevent that from happening.",
        section: "fnati"
    },
    {
        name: "Classic Photo-Negative Mickey",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/18/Classic_Photo-Negative_Mickey.png",
        description: "Every time you turn off a camera, he will go farther down the vent system. Eventually he will end up in your office, then you must quickly turn off another camera to make him leave!",
        section: "fnati"
    },
    {
        name: "Classic Photo-Negative Minnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4c/Classic_PNM_Revamp.png",
        description: "Every time you turn off a camera, she will go farther down the duct system. Eventually she will end up in your office, then you must quickly turn off another camera to make her leave!",
        section: "fnati"
    },
    {
        name: "Classic Pluto",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/22/Classic_Pluto.png",
        description: "He will make it so you will manually fix the camera once you disabled it by going to the task system.",
        section: "fnati"
    },
    {
        name: "Classic Slester",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c2/Classic_Slester_Resize.webp",
        description: "Rainbow static will start engulfing your screen. Go to the glitch floor to make him stop.",
        section: "fnati"
    },
    {
        name: "Classic The Face",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/cd/Classic_Face_Resize.webp",
        description: "He can randomly appear in your office. Pull up your monitor to make him go away. Putting your mask on will also make him go away, but he will take your mask away for a couple of seconds as well.",
        section: "fnati"
    },
    {
        name: "Classic Undying",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3f/Classic_Undying.png",
        description: "He'll always be at Party Room A. When his figurine of him is on the desk, do not visit his camera or else you'll meet a deadly surprise.",
        section: "fnati"
    },
    {
        name: "Goofy's Head",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fc/Goofy%27s_Head_Revamp.png",
        description: "He will replace the exotic butters. Clicking him has a 50/50 chance to turn off a random camera.",
        section: "fnati"
    },
    {
        name: "Red Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/85/RedFreddy.png",
        description: "He's trying to make a new Freddy Fazbear's Pizza in Floor 5 but he needs ideas first, you need to pick the right choice for him to build his Pizzeria, failing or picking the wrong one will cause him to say 'WHY YOU' or 'ITS MY MAP' and will kill you.",
        section: "gmod"
    },
    {
        name: "Pink Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e5/PinkFreddy.png",
        description: "He will be at the Prize Counter deactivated. Once he is activated, he will try and pause your time. Stop him by distracting him with the Fan.",
        section: "gmod"
    },
    {
        name: "Splinks Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/76/Splinks_Freddy.png",
        description: "This Splinks Freddy will randomly appear on your screens. You have to click away before getting locked and having an error noise play.",
        section: "gmod"
    },
    {
        name: "Freddy Of King",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/dd/FreddyOfKing.png",
        description: "He will tamper randomly with another character's AI and try to make them more aggressive. Even if the character was max AI. Stop him by luring him in your office and control shock him.",
        section: "gmod"
    },
    {
        name: "Splinks Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/ac/Splinks_Golden_Freddy.png",
        description: "He will randomly show up on your screen, playing old GMOD animations from the good ol' days on his TV next to him. If you see a video that has himself in it, click on his nose next to his TV Screen. Taking too long or clicking on his nose when he doesn't appear on the TV Screen will result in death.",
        section: "gmod"
    },
    {
        name: "Splinks Purple Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e7/SplinksPurpleFreddy.png",
        description: "He will try to mess up with the Duct systems, this can be fixed using a 'Duct system fix' button.",
        section: "gmod"
    },
    {
        name: "Splinks Golden Toy Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/45/Yellow_Toy_Freddy.png",
        description: "If you see his hat on the left or right, then close the door, if it is in front of you, put on the mask! If you don't have time to close the door, he will scare you. And if he appears in the office, he will scare you and temporarily block the monitor.",
        section: "gmod"
    },
    {
        name: "Splinks Shadow Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6d/SplinksShadowFreddy.png",
        description: "He will be at Floor 4 trying to learn Source Filmmaker, you must guide him on how to learn it, if he succeeded, he will give you 20% power, if he fails, he will rapidly give you hallucinations of him, with no other way to prevent it.",
        section: "gmod"
    },
    {
        name: "Splinks Stuffed Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ed/Splinks_Stuffed_Freddy.png",
        description: "He works like Stuffed Freddy, but he only appears near the end of the night, and is of worse quality. You need to click on the cross in the upper right corner to make it go away. Also, the more often you make noise, the more often you will see a fake death screen.",
        section: "gmod"
    },
    {
        name: "Splinks Toy Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a1/Splinks_Toy_Freddy.png",
        description: "He will be sitting on Floor 5 in Bedroom 1, looking at his tablet. You must help him fix the errors that appear on his tablet. If you don't, it will lock your tablet for 3 hours and prevent you from wearing the mask.",
        section: "gmod"
    },
    {
        name: "Splinks Toy Parts",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ee/Splinks_Toy_Parts.png",
        description: "At first, they will just randomly scare you and that’s all, but then, they will add extra points with each character that randomly jumpscares you: Toy Freddy=5. Toy Bonnie=1. Mangle =15. Balloon Boy=23.",
        section: "gmod"
    },
    {
        name: "Stretched Poster Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/65/Stretched_Freddy.png",
        description: "Players will connect from the globe to play, however some have different intentions than others. Occasionally, one of the players will run in the office, watch them carefully to see what they're up too, if they have items like a Physgun, Crowbar, Camera, Tool Gun, or Medkit, they're good to go, however if they carry anything else, they're a troll, meaning that they'll kill everyone in the server, eventually you! Go to the task system and look at the server list and look for the username of the troll to kick them. Mingebags might also appear, in which you have 6 seconds to kick them before the server crashes!",
        section: "gmod"
    },
    {
        name: "Dr. Dolman The Bat",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/40/Batdolman.png",
        description: "He is sick and tired of being called a cat despite the fact he's a bat. He needs you to buy a sign to tell people to shut up about him being a cat, failing this will result to death.",
        section: "gmod"
    },
    {
        name: "Glamrock Lolbit",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7b/Glamrock_Lolbit.png",
        description: "Glamrock Lolbit will randomly appear on your screen during the night and make lots of noise! Open your camera monitor and type L-O-L using the system modes that have the corresponding letters next to them, the order they appear in switches every time.",
        section: "gmod"
    },
    {
        name: "Splinks Balloon Boy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8c/Splinks_Balloon_Boy.png",
        description: "If you don't have time to put on your mask, he will steal your tablet and flashlight.",
        section: "gmod"
    },
    {
        name: "Splinks JJ",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d1/Splinks_JJ.png",
        description: "if you see her, you need to close the Right Vent Door. If she comes into your office, she will steal random mechanics.",
        section: "gmod"
    },
    {
        name: "Splinks Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fe/Splinks_Bonnie.png",
        description: "He will sit on Floor 3, and the more noise you make, the closer he will be. When he appears in the office, you urgently need to put on a mask, otherwise he will kill you. If you don't make noise, he doesn't come to your office, but will continue to sit on the third floor.",
        section: "gmod"
    },
    {
        name: "Splinks Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7f/Splinks_Chica.png",
        description: "Sometimes a bug appears in your office. You urgently need to go to the monitor and correct the error. If you don't, Splinks Chica will kill you.",
        section: "gmod"
    },
    {
        name: "Splinks Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ee/Splinks_Foxy.png",
        description: "When you hear running, you must immediately put on the mask. Splinks Foxy will then appear in the office, and then he will leave. If you don’t put on the mask, he will scare you.",
        section: "gmod"
    },
    {
        name: "Splinks Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/ae/SplinksFredbear.png",
        description: "He will be on his computer, playing Garry's Mod, though he is bored of the same thing so he wanted to add FNAF mods to it, you must guide him to install which addon, picking the wrong one would increase more of his diskspace and make him angry to take away 20% of your power.",
        section: "gmod"
    },
    {
        name: "Splinks Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/33/Splinks_Mangle.png",
        description: "By the sound of the ventilation, you should understand which door you should close: left or right or front. When you close the corresponding door, you will hear a knocking sound. If you don't close them in time, they'll scare you.",
        section: "gmod"
    },
    {
        name: "Splinks Purple Guy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ed/Splinks_Purple_Guy.png",
        description: "He will sometimes break the camera on Floor 3. The higher the percentage meter, the more often he breaks different cameras. To get rid of him, the temperature needs to be heated to maximum, then you will hear the death sound effect from Garry's Mod, and the cameras that he managed to break will return to normal!",
        section: "gmod"
    },
    {
        name: "Mango The Monkey",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d6/MangoTheMonkey.png",
        description: "He likes the noise and will start to crash his cymbals slower, the noise being too silent will make him angry, try to raise the noise up to make him happy.",
        section: "gmod"
    },
    {
        name: "SCP-001 - 'Normalcy'",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2e/Normalcy.png",
        description: "SCP-001 will sit on your desk, you're free to view it any time you'd like, just remember to remember the laws of normalcy. If you catch something in your office or on the cameras, look at SCP-001 to make sure that they aren't breaking any laws, if they do, click on it to send it away from the night. If one of these entities appears hostile, you only have a short amount of time to get rid of them before they kill you.",
        section: "scp"
    },
    {
        name: "SCP-001 - 'Sheaf of Papers'",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/13/SheafofPapers.png",
        description: "After flipping up the mask, a chance of a paper of a character who's not already in the night will appear. Click on it to throw it away before the character on the paper gets added to the night!",
        section: "scp"
    },
    {
        name: "SCP-001 - 'The Database'",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/5f/TheDatabase.png",
        description: "A separate system titled 'Wiki System' will be added to your night, here you can look at the Multiverse Custom Night wiki itself. If a new character gets added a message will pop-up saying so, and that new character will be added into your night. Quickly head over to the three dots on the page and click 'delete' before the new character can get you! Just note that if you delete a page in a short amount of time, the wiki editors will get angry and restart the night, so hold off on that new character with their way to defend yourself for a while before deleting the page.",
        section: "scp"
    },
    {
        name: "SCP-001 - 'The World at Large'",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/40/TheWorldAtLarge.png",
        description: "The trees on the Lumber Co. Floor will grow faster than usual. If one of them grows to it's maximum limit, it'll block one of the cameras on each floor and remain there until the tree is cut down.",
        section: "scp"
    },
    {
        name: "SCP-001 - 'When Day Breaks'",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f5/SCP-001.png",
        description: "At a random point in the night (during 12AM - 2AM), a broadcast from the SCP Foundation will play stating that all sunlight has become dangerous! Of course as you're in an office in a building, this won't affect you, however, SCP-001-A instances will get into the building in search of you! When you hear SCP-001-A instances sliming around, turn on the fan or Power A/C to make the office cooler, which will deter them. While they won't always make their way to the office, if you make too much noise, they'll know exactly where you are. Closing the door won't make them go away, instead they'll linger outside begging for you to come out, you can also make the office cooler to make them go away, but they'll come back. If they make their way in the office, they'll drag you outside into the sun! (Death).",
        section: "scp"
    },
    {
        name: "SCP-003",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3c/SCP-003.png",
        description: "SCP-003-1 will be on your desk for the entire night on top of SCP-003-2. If your office temperature drops below 95°, SCP-003-1 will begin to grow. In it's first stage, SCP-003-1 will increase in mass then take form similar to a brittle star. In the second stage, SCP-003-2 will try to come into contact with living material which includes you! If it reaches you, it will 'template' off of you until it completely takes over you! These stages can be reversed if the temperature is brought up again.",
        section: "scp"
    },
    {
        name: "SCP-005",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/15/SCP-005.png",
        description: "On any camera with a door, whether that'd be on the CAM System, Vent System, or Duct System, SCP-005 will appear next to it. If a character comes into contact with SCP-005, they will use the key to open the door and leave it open for 10 seconds, click on the key to move it somewhere else.",
        section: "scp"
    },
    {
        name: "SCP-009",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/89/SCP-009.png",
        description: "When your office becomes around 100°, SCP-009 will begin forming on you, making your mouse slower and slower until you eventually freeze to death. Cool the office down to make SCP-009 melt.",
        section: "scp"
    },
    {
        name: "SCP-012",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1a/SCP-012.png",
        description: "When switching cameras, there'll be a chance that SCP-012 will be on that camera playing 'On Mount Golgotha'. It'll try to bring your cursor to it, so fight back and switch cameras! If it succeeds in bringing your cursor over, it will slowly harm you until you die! Numbers don't work for switching cameras while SCP-012 is on the camera.",
        section: "scp"
    },
    {
        name: "SCP-014-J",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/37/SCP-014-J.png",
        description: "Your fingers are now broken and you can't eat foods like Pickles or Hot Dog normally, so you have to click and drag SCP-014-J to the food items to eat them, I wouldn't trust it though.",
        section: "scp"
    },
    {
        name: "SCP-018",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a1/SCP-018.png",
        description: "SCP-018 will bounce in your office for the entire night. Overtime, SCP-018's speed will continue to increase eventually to the point where it can kill. SCP-018 has four stages of speed, clicking on SCP-018 will move it back a stage, the four stages and how many hits it takes to kill are as follows: Stage 1: Low Speed, Non-Lethal, 0 Hits to Kill. Stage 2: Medium Speed, Lethal, 25 Hits to Kill. Stage 3: High Speed, Lethal, 10 Hits to Kill. Stage 4: Very High Speed, Lethal, 5 Hits to Kill.",
        section: "scp"
    },
    {
        name: "SCP-019",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fb/SCP-019.png",
        description: "SCP-019 will sit in your office on your desk. Occasionally, SCP-019-2 entities will crawl out of SCP-019, if they crawl out completely, you'll die! To stop this, spam click on the SCP-019-2 entities to kill them. They move slower the cooler the office is.",
        section: "scp"
    },
    {
        name: "SCP-049",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b6/SCP-049.png",
        description: "SCP-049 will try to enter your office in Floor 4, check which hallway he's going down, then close the respective door. Instances of SCP-049-2 will also sometimes enter your office, shock them to get rid of them.",
        section: "scp"
    },
    {
        name: "SCP-079",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/20/SCP-079.png",
        description: "SCP-079 has taken control of the entire building! Not only will it control the doors, fan, controlled shock and lever, but it will also sometimes appear on your monitor and play random sounds.",
        section: "scp"
    },
    {
        name: "SCP-096",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/39/SCP-096.png",
        description: "A new button will be added on your camera monitor, which turns on pressure sensor mode, but it wastes more power. If you hear auditable crying on Floor 1, turn on pressure sensor mode to make sure that you don't accidentally view SCP-096's face on the next camera. If you don't turn on pressure sensor and look at his face, he'll begin crying and babbling before chasing after you to kill you! The office doors won't stop him.",
        section: "scp"
    },
    {
        name: "SCP-106",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9c/SCP-106.png",
        description: "When you hear the sound of groaning and creaking, that means SCP-106 is emerging on Floor 4 and is approaching your office! When he gets into your office, wait until he's close enough to you, then shock him to make him go away. If he catches you, one of two things will happen. First and least exciting is that he kills you, second is that he will take you to his pocket dimension where you will have to survive in his WWI trench, shine your lighter at him when he gets dangerously close to send him back. After an hour in the pocket dimension, he'll set you free. If you close the door on him when he's entering, he'll simply pass through it and corrode the door, making it unusable for the rest of the night.",
        section: "scp"
    },
    {
        name: "SCP-109",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e6/SCP-109.png",
        description: "Your cursor will be given a stamina meter and an icon of SCP-109 will be at the bottom of the screen. If you start slowing down, click on SCP-109 to drink from it and relieve energy. If you try to drink SCP-109 while you're out of stamina entirely, you'll get sick and throw up while distorting visuals appear on your screen for the duration of your vomiting.",
        section: "scp"
    },
    {
        name: "Rush",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/78/Rush_Revamp.png",
        description: "When the office lights flicker, that means Rush is coming. Quickly put on the mask and wait for it to pass before taking off the mask. If you don't put on the mask in time, you'll be jumpscared.",
        section: "doors"
    },
    {
        name: "Hide",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9a/Hide_Revamp.webp",
        description: "It'll start to appear when the mask is kept up for too long, flashing images on your screen. Simply take the mask off to stop it. If you ignore its warnings for too long, it'll kick you out of the mask anyways and fill the toxic meter by 65%.",
        section: "doors"
    },
    {
        name: "Seek",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/93/Seek_Resize.webp",
        description: "At the end of the night, Seek will chase you throughout the building. Avoid the many obstacles scattered throughout the building, including fallen props and fires in the buildings to reach the exit and win the night. If it reaches you, a jumpscare is all you should expect.",
        section: "doors"
    },
    {
        name: "Figure",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/61/Figure_Resize.webp",
        description: "When it growls, that means it has appeared in the power room on Floor 7. When that happens, do not have any percentage of the noise meter filled while viewing said floor, or he'll rush to the elevator and jumpscare you.",
        section: "doors"
    },
    {
        name: "Screech",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/15/Screech_Remake.png",
        description: "When you hear it make it's 'Psst' sound, that means it's appeared in the light system. Quickly find it on the light system and shine the light on it to make it disappear. If it sticks around for too long, it'll jumpscare you, not killing you but increasing the toxic meter by 25%.",
        section: "doors"
    },
    {
        name: "Halt",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e8/Halt_Resize.webp",
        description: "It'll occasionally appear on either the left and right side of the office. If it appears on the left, keep your cursor on the right. If it's on the right, keep the cursor on the left. If you keep your cursor on its side for too long, it'll fill up the toxic meter by 50%.",
        section: "doors"
    },
    {
        name: "Timothy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/20/Timothy_Resize.webp",
        description: "It has a chance to appear on any system and on any floor and any camera. If it does, it'll jumpscare you, filling the toxic meter by 10%.",
        section: "doors"
    },
    {
        name: "Jeff The Killer NPC",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a3/Heknowsyourcrimes.png",
        description: "Jeff The Killer will bide in your office, counting how many crimes you've done so far in the night (Like closing the doors/vents when theres nobody to close off, or accidentally using the mask when there's nobody to trick.) And when 7 crimes have been committed, he'll give you a riddle to solve, if you fail the riddle, he'll stab you, increasing the Toxic Meter by 75%.",
        section: "doors"
    },
    {
        name: "Bob",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/76/Bob.png",
        description: "He will be sitting on the Balcony on Floor 8, just chilling. You can interact with him by holding E on his camera, but nothing will happen.",
        section: "doors"
    },
    {
        name: "Glitch",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/71/Glitch.gif",
        description: "If the Player Remains Motionless in the Office for an Extended Period of Time, Glitch will Jumpscare them, Filling up the Toxic Meter by a lot.",
        section: "doors"
    },
    {
        name: "El Goblino",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/20/El_Goblino.png",
        description: "Due to his insatiable greed for gold, he has made Fazcoins more rare to find! Survive the night to win!",
        section: "doors"
    },
    {
        name: "Jack",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/46/Jack.png",
        description: "Randomly upon putting on the Mask, Jack will jumpscare you. While it's jumpscare is not lethal, it forces the Mask off, potentially causing you to die.",
        section: "doors"
    },
    {
        name: "Guiding Light",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/37/Guiding_Light.png",
        description: "After Dying with Guiding Light Active, it will give you a Tip on how to not get Killed by certain Enemies.",
        section: "doors"
    },
    {
        name: "Ambush",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/30/Ambush.png",
        description: "When you hear Ambush's sounds, quickly put on the Mask. Once Ambush reaches the Office, it will dash back and forth multiple times before finally disappearing. If the Mask is off at any point while Ambush is in the Office, you will die.",
        section: "doors"
    },
    {
        name: "Circuit Breaker Puzzle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4f/Circuit_breaker.png",
        description: "It will be on the wall in the Light System. Solve the puzzle before 5AM or your screen will be pitch black for the remaining hour!",
        section: "doors"
    },
    {
        name: "Dread",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c9/Dread.png",
        description: "Staying on a Floor for too long will trigger Dread to spawn. Its kill timer is 10 seconds. Turn on All-Off mode for 5 seconds to make it fade away.",
        section: "doors"
    },
    {
        name: "Dupe",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7f/Dupe.png",
        description: "Occasionally, the number on a Floor button will be different than what it normally is. Press and hold the 'Report' button until the number is back to normal before it's too late.",
        section: "doors"
    },
    {
        name: "Eyes",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/ae/Eyes_icon.png",
        description: "When Switching Cameras, Eyes can Suddenly Appear. You must either Switch Cameras or Pull the Monitor Down. If you Stare at Eyes, it will Begin to Rapidly Fill the Toxic Meter until you either Look Away or Die.",
        section: "doors"
    },
    {
        name: "Shadow",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8e/Shadow.png",
        description: "Randomly upon lowering the Monitor, Shadow will appear and flicker the office lights for a few seconds.",
        section: "doors"
    },
    {
        name: "Jeff",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/46/Jeff.png",
        description: "At 3AM, Jeff will Appear and Give the Player Helpful Boosts. Each Boost Costs a Different Amount of Faz-Coins to Purchase. After 3AM Ends, both Jeff and his Shop will Disappear for the Rest of the Night.",
        section: "doors"
    },
    {
        name: "Gloombats",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/20/Gloombats.png",
        description: "One will spawn everytime you turn on the Flashlight or Straplight. It will fly towards your mouse cursor at a speed depending on its AI level for 2 seconds before giving up on you. Letting your mouse cursor hit one will take away 1 HP. They can't spawn while the Power A/C is on.",
        section: "doors"
    },
    {
        name: "Void",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/46/Void.png",
        description: "If time is stopped by a character for too long, Void will attack, dealing 20-40 damage to the HP bar.",
        section: "doors"
    },
    {
        name: "TPRR Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/47/TPRR_Foxy.png",
        description: "During the night you'll need to check Window Room 1 on F8 to see if TPRR Foxy is leaving his cove. Once Foxy leaves he will make one of his parts appear in your office, slowly entering the office piece by piece. To stop him from trying to leave his cove, use the Alarm System on that camera to make him go back into his cove. A maximum of 4 pieces can be in your office before Foxy kills you!",
        section: "tprr"
    },
    {
        name: "TPRR Backstage Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/bc/TPRR_Backstage_Freddy.png",
        description: "It will replace your mask, but due to how thick it is, your body will get hotter which also affects the temperature of the office.",
        section: "tprr"
    },
    {
        name: "TPRR Adventure Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c1/TPRR_Adventure_Golden_Freddy.png",
        description: "He will have a chance to appear in your office whenever you pull up your mask, if he does appear quickly pull out your Golden Flashlight and shine it on them to make them go away before they can kill you!",
        section: "tprr"
    },
    {
        name: "TPRR Adventure Nightmare Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/08/TPRR_Adventure_Nightmare_Foxy.png",
        description: "He'll show up in the task system, all night long he changes, he gets upset in the old days, watch him to make him leave. If he shows up in your office, he will turn back time by one hour.",
        section: "tprr"
    },
    {
        name: "TPRR Adventure Nightmare Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/ce/TPRR_Adventure_Nightmare_Chica.png",
        description: "She's lost TPRR Adventure Nightmare Cupcake in the Light System! Find him in the system before 2 AM, or TPRR Adventure Nightmare Chica will use sludge on you, slowing down your mouse and turning speeds.",
        section: "tprr"
    },
    {
        name: "TPRR Adventure Nightmare Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fd/TPRR_Adventure_Nightmare_Bonnie.png",
        description: "A Rainy Day 2 will always be above the Wet Floor Sign. Make sure not to keep the sign on one side for too long or the water will cause the side to cave in and make the basement no longer accessible!",
        section: "tprr"
    },
    {
        name: "TPRR Adventure Phantom Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ed/TPRR_Adventure_Phantom_Foxy.png",
        description: "He will be on the Light System with some Blokees transformers figures someone has bought him to play with, unfortunately he only has one arm and since the room is dark, you will have to shine the light for him to see what he's doing and track his progress to see how he's holding up, once you help him finish his figures he will play with them for the rest of the night, however if you don't help him by 2 AM he will be confused on what to do and will just appear in your office just to cause problems.",
        section: "tprr"
    },
    {
        name: "TPRR Adventure Phantom BB",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/27/TPRR_Adventure_Phantom_BB.png",
        description: "He will frequently appear in one of the televisions on your desk after putting the monitor down. Refresh the TV by double clicking it to repel him. If not done in time, TPRR Adventure Phantom BB will jumpscare you, erroring out your vents.",
        section: "tprr"
    },
    {
        name: "TPRR Adventure Phantom Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e0/TPRR_Adventure_Phantom_Chica.png",
        description: "She’ll travel through the duct system, and is immune to the vent seals. Use the heater to reset her. If she gets into your office, she’ll use Sludge and drag your speed, your cursor and head moving speed to be exact.",
        section: "tprr"
    },
    {
        name: "TPRR Adventure Phantom Puppet",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/77/TPRR_Adventure_Phantom_Puppet.png",
        description: "His face can appear at random, peeking out from the left doorway. When this happens, don't activate the Global Music Box. To make him leave, use the Fan to make him leave you alone, or he'll jumpscare you and an audio error will occur. Oh yeah, that's so cool and unique. I'm one of the popular kids now!",
        section: "tprr"
    },
    {
        name: "TPRR Adventure Plushtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/47/TPRR_Adventure_Plushtrap.png",
        description: "He will stay deactivated on the bottom middle of the GPS System. However, he will be a sneaky boi, and will try to hide in a different area of the system. Spam click on him to send him back before he messes with one of the system modes.",
        section: "tprr"
    },
    {
        name: "TPRR Adventure Shadow Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/ce/TPRR_Adventure_Shadow_Freddy.png",
        description: "His face may appear when hovering your cursor over any open doorway in the Office. Close the door on his face before he jumpscares you, causing all systems to error out!",
        section: "tprr"
    },
    {
        name: "TPRR Adventure Withered Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d0/TPRR_Adventure_Withered_Bonnie.png",
        description: "It's raining Unscrew 2 from the ceiling. Touching it will cause a 50/50 chance of making you spontaneously explode. Its best to just avoid the attack. But hey, if you live the first time, you get 10 points to your score total :D",
        section: "tprr"
    },
    {
        name: "TPRR Adventure Withered Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f8/TPRR_Adventure_Withered_Foxy.png",
        description: "He will be in Party Room 1 looking sad, you need to have both doors closed when the clock hits 4AM, otherwise he will jumpscare you.",
        section: "tprr"
    },
    {
        name: "TPRR Adventure Withered Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/52/TPRR_Adventure_Withered_Freddy.png",
        description: "Remember yesterday when you let him borrow your monitor for the sake of entertaining him? Yeah, he may have dropped it, multiple times, and broke it. Quite the clumsy fellow he is! Now you have no monitor, that sucks. However, he is actually a skilled technician and can actually fix your monitor in a matter of seconds. All you need to do is honk his nose when you see him in your office. Then, in a few seconds, you will have yourself a fixed monitor, good as new! Survive the night to win!",
        section: "tprr"
    },
    {
        name: "TPRR Black Ice Frostbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b2/TPRR_Black_Ice_Frostbear.png",
        description: "When the temperature gets really cold you will see his eyes fading in on your view, you must use the heater to make them fade away or else he will jumpscare you if they stay for too long.",
        section: "tprr"
    },
    {
        name: "TPRR Blacklight Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/89/TPRR_Blacklight_Bonnie.png",
        description: "He will appear in the Light System, he is immune to the light being shined on his face , touch both shining eyes to make him disappear. If both eyes are completely shining until 5 am, you must put on the mask the moment he appears in your office!",
        section: "tprr"
    },
    {
        name: "TPRR Blacklight Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/ab/TPRR_Blacklight_Chica.png",
        description: "Viewing the Kitchen camera on Floor 1 will cause her to fade in at the left and right doorway. Use a combination of the UV Flashlight and Power A/C to get rid of her before it's too late!",
        section: "tprr"
    },
    {
        name: "TPRR Blacklight Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c0/TPRR_Blacklight_Foxy.png",
        description: "Having an odd-numbered mode on for too long will result in a non-lethal jumpscare and make the radius of the Shakelight shrink (10+AI) % faster once per night.",
        section: "tprr"
    },
    {
        name: "TPRR Blacklight Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/74/TPRR_Blacklight_Freddy.png",
        description: "All flashlights will increase the noise meter by 1 and make a continuous slight buzzing sound. AI level affects the volume of the sound.",
        section: "tprr"
    },
    {
        name: "TPRR Blacklight Rockstar Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9b/TPRR_Blacklight_Rockstar_Freddy.png",
        description: "He will appear in the Light System, slumped over. He isn't an immediate threat until you see that his eyes light up. Once this happens, quickly shine your light on him while the Heater is on to melt him away.",
        section: "tprr"
    },
    {
        name: "R6 Withered Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/81/R6_Withered_Chica.png",
        description: "She will be in the Bakery on Floor 8. Every hour, she will attempt to bake a cupcake, which takes approximately 15 seconds. Having the Heater on for a few consecutive seconds will cause the cupcake to burn, which will drive her insane! She will start biting into wires connected to your systems and cause one of them to error out every (8-(AI/5)) seconds for the rest of the night!",
        section: "tprr"
    },
    {
        name: "R6 Withered Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b4/R6_Withered_Bonnie.png",
        description: "He'll sometimes appear on the right side of your office. if he does he'll start spamming the Jumpscare sound affect (this will not increases the noise meter.) To get rid of him pull out the Faz-Cam and use it to get rid of him.",
        section: "tprr"
    },
    {
        name: "R6 Phantom Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/23/R6_Phantom_Foxy.png",
        description: "He appears on the light system occassionally. If you shine your light at him, He will jumpscare you instantly, taking out your ventilation, audio, and cameras. Don't shine your light on him if he's there. He will change positions if you haven't spotted him yet.",
        section: "tprr"
    },
    {
        name: "R6 Phantom Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3e/R6_Phantom_Mangle.png",
        description: "A text box will randomly appear at 3:AM, and you must type in TPRR to make it go away, otherwise R6 Phantom Mangle will show up and make noise for the rest of the night, drastically raising the noise meter.",
        section: "tprr"
    },
    {
        name: "Retro Blacklight Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a7/Retro_Blacklight_Freddy.png",
        description: "He will move through the Vent System, immune to the snares and door. When you see his gold eyes in the front vent, shine your UV Flashlight on him to make him fade in. When he is fully visible, close the door on his face. Using the Golden Flashlight at any time will make him move 50% faster.",
        section: "tprr"
    },
    {
        name: "Retro Blacklight Rockstar Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4f/Retro_Blacklight_Rockstar_Freddy.png",
        description: "He loves color theory! Every hour, a task will appear in the Task System where you have to choose the correct color that is the result of two other colors being mixed. Answering incorrectly or not answering in time will remove a color from the night! The task will immediately be renewed if that happens.",
        section: "tprr"
    },
    {
        name: "TPRR Hallucination Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/bd/TPRR_Hallucination_Freddy.png",
        description: "Using too many office equipment at once will result in TPRR Hallucination Freddy to flash on the monitor screen, depleting your Oxygen meter while in view.",
        section: "tprr"
    },
    {
        name: "TPRR Hide & Seek Shadow Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/31/TPRR_Hide_%26_Seek_Shadow_Bonnie.png",
        description: "Throughout the night, his face will appear on one of the Televisions in your office. Go to Floor 8 and look for him on the cameras until you find him, once you find what camera he's hiding in, use the Alarm System on the camera he is on to make him disappear. If you are unsuccessful, then he'll jumpscare you! Game over!",
        section: "tprr"
    },
    {
        name: "TPRR Radioactive Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/29/TPRR_Radioactive_Foxy.png",
        description: "If you stare at the Telescope System for too long, then your Toxic meter will start to increase until you stop looking at it. You can also completely stop this from being a possibility by taking a Short-Sight pill which will make it so that your Toxic meter will never increase while viewing the Telescope System for the next in-game hour.",
        section: "tprr"
    },
    {
        name: "TPRR Ignited Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/16/TPRR_Ignited_Chica.png",
        description: "She will appear in your office occasionally, take a Short Sight pill to get rid of her. She takes a long time to kill you.",
        section: "tprr"
    },
    {
        name: "TPRR Ignited Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/45/TPRR_Ignited_Foxy.png",
        description: "He'll be floating in space! How did he get there, don't ask. All that matters is that you'll be able to see him on the Telescope System. You must click him to make him fall apart pace by pace until he is nothing but a head, once he's a head he'll explode and you'll be safe. If you fail to do this or forget about it, when 6:AM hit he'll gain cosmic powers and use them to fly to your office and kill you instantly!",
        section: "tprr"
    },
    {
        name: "TPRR Ignited Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c7/TPRR_Ignited_Freddy.png",
        description: "He'll have a chance to appear in the Window Room 2. You'll know when he's there as the sound of him knocking on the windows will be heard, go the the camera and use the light-flash on that camera to make him leave otherwise your night will end with a jumpscare!",
        section: "tprr"
    },
    {
        name: "TPRR Ignited Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f5/TPRR_Ignited_Golden_Freddy.png",
        description: "Putting down the monitor while the current selected floor is an odd-numbered floor will cause him to appear in the office, slumped over. Put on the mask before he ends your night! His presence will heat up the office to 120°.",
        section: "tprr"
    },
    {
        name: "TPRR Ignited Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/de/TPRR_Ignited_Springtrap.png",
        description: "His head will follow your cursor around while watching odd numbered floors. If his eyes ever light up, that means he is about to attack, and you'll have to switch to a even numbered floor to avoid him!",
        section: "tprr"
    },
    {
        name: "Sea Floor Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e4/Sea_Floor_Fredbear.png",
        description: "He will emerge from his flooded grave on The Graveyard in Floor 5. Once he's in the office, you need to fire a harpoon (which is stationary in your office) through his head to offline him for good, or else he'll send you to a watery grave.",
        section: "tprr"
    },
    {
        name: "Scopophobia Nightmare",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/93/Scopophobia_Nightmare.webp",
        description: "He'll always be on the Light System. Occasionally, his head will start to move to stare at your cursor. If he looks at it for too long, your panic meter will rise rapidly.",
        section: "tprr"
    },
    {
        name: "Withered Spring Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e7/Withered_Spring_Bonnie.png",
        description: "He can appear in either Window Room 1 or Window Room 2. If you see him in either of those cameras, use the Alarm System on him to scare him off. If he gets into the building, he will appear in your Office, moving around. Put on the mask and follow where he's moving to get him to leave! If he stays in the Office for too long, he will kill you.",
        section: "tprr"
    },
    {
        name: "TPRR VR Toy Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/53/TPRR_VR_Toy_Freddy.png",
        description: "He will occasionally appear in the office. Make sure you're on All-Off mode the next time you pull the monitor up!",
        section: "tprr"
    },
    {
        name: "TPRR System Error Toy Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/de/TPRR_System_Error_Toy_Bonnie.png",
        description: "He will cause error popups to appear on your screen. The more errors pop up, the more the internet meter will drain. Simply pressing the X button on a popup will get rid of it.",
        section: "tprr"
    },
    {
        name: "Pupaphobia Funtime Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/43/Pupaphobia_Funtime_Freddy.png",
        description: "There will be a puppet show on the Show Stage camera, his puppets will perform on that camera and Pupaphobia Funtime Freddy will kill if you try to look at the camera, wait for them to finish if you want to look at the show stage camera again.",
        section: "tprr"
    },
    {
        name: "Pediophobia Plushtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/95/Pediophobia_Plushtrap.png",
        description: "He will be in your office in pieces, at 1AM they will be scattered all over the place and you need to find them, for his head would be on the Duct System, for his torso and arms would be in the Light System, his legs would probably be somewhere on Floor 6, if you take too long to find them by 3AM, he will piece himself back together all by himself okay and kill you.",
        section: "tprr"
    },
    {
        name: "Pibble",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7b/Pibble.png",
        description: "The longer you wear the mask, the more he slowly fades in on the CAM System. There is no way to prevent or slow him.",
        section: "tprr"
    },
    {
        name: "Scuttler",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/25/Scuttler.png",
        description: "It will make Matriarch's Meter fill faster, and lengthen the time you need to keep the mask on by one second. Although, winding the Global Music box will now also rapidly increase how fast the Matriarch's Meter fills. Survive the night to win.",
        section: "tprr"
    },
    {
        name: "Matriarch",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/92/Matriarch.png",
        description: "The Matriarch will be sitting in the Basement floor, accumulating agony to power it's hive, which will be shown as a meter on the camera. You can reset the Meter by turning on the Heater for 2 seconds, which will boil the Agony it was acuminating. If the meter completely fills, a horde of Agony Robots will invade your office, which you can survive by keeping your mask on for about five seconds until they all collectively leave. Survive the night to win.",
        section: "tprr"
    },
    {
        name: "Bringer",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/5f/Bringer.png",
        description: "It will make Matriarch's Meter fill faster, and lengthen the time you need to keep the mask on by one second. Survive the night to win.",
        section: "tprr"
    },
    {
        name: "Animatronix Blacklight Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f6/Animatronix_Blacklight_Freddy.png",
        description: "His face will fade in the view of Floor 2. His weakness is UV light. Unfortunately, the Floor 2 flashlight is not a UV flashlight. Fortunately, you can recreate the effect of the UV flashlight by having Power A/C on while flashing any camera on Floor 2, making Animatronix Blacklight Freddy fade away.",
        section: "axhw"
    },
    {
        name: "Animatronix Blacklight Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/26/Animatronix_Blacklight_Bonnie.png",
        description: "Turning on any flashlight may make him disable your Neon Walls temporarily. Reduce the effect by having Power A/C on.",
        section: "axhw"
    },
    {
        name: "Animatronix Blacklight Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d0/Animatronix_Blacklight_Chica.png",
        description: "The visibility of your cursor will decrease if the UV Flashlight isn't used frequently.",
        section: "axhw"
    },
    {
        name: "Animatronix Blacklight Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/85/Animatronix_Blacklight_Foxy.png",
        description: "The left Neon Wall will be colored green and raise the Toxic Meter. The right neon wall will be colored blue and drain the Oxygen Meter. Having on All-Off mode will stop the effects for the time being.",
        section: "axhw"
    },
    {
        name: "Animatronix Phantom BB",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/32/Animatronix_Phantom_BB.png",
        description: "His body will appear in the office whenever you look at Floor 3. His body will be split in 2 pieces on the other sides of the office. You’ll have to put them back together to make him go away, or he will jumpscare you, causing errors.",
        section: "axhw"
    },
    {
        name: "Animatronix Phantom Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b6/Animatronix_Phantom_Foxy.png",
        description: "He will appear in your office with his hook in the side vent, you can pick it up and give it back to him, if you take too long he will jumpscare you so bad you die... yeah.",
        section: "axhw"
    },
    {
        name: "Animatronix Phantom Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/26/Animatronix_Phantom_Freddy.png",
        description: "There is now a flashlight that is usable on the Telescope System, by pressing Z while viewing the system. Animatronix Phantom Freddy will slowly fade in, and you'll have to use the flashlight on him to make him vanish. If he fully fades in, he will jumpscare you and disable the Telescope System for one hour.",
        section: "axhw"
    },
    {
        name: "Animatronix Withered Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b7/Animatronix_Withered_Golden_Freddy.png",
        description: "He will be in your office, slumped over. He will wither away completely if you have the mask on for a few accumulative seconds depending on the AI level. Get rid of him before 4AM.",
        section: "axhw"
    },
    {
        name: "Virtual Freddy Frostbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4d/Virtual_Freddy_Frostbear.png",
        description: "When the temperature gets too high, he will start to thaw off in the Ice Caverns on Floor 7. If he fully thaws off, he will make his way down to the Christmas Jukebox, and permanently keep it at its maximum volume. Once this happens, its only a matter of time before the music makes you go deaf for the rest of the night.",
        section: "axhw"
    },
    {
        name: "Withered Bonca",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/47/Withered_Bonca.webp",
        description: "They will appear in the Right Vent camera on F2 during the night, the sounds of loud vent banging will be heard when their in the vent. You must go to the camera and light-flash it to get them to scram, or a jumpscare will follow! You can also get rid of them by turning off the camera.",
        section: "yt"
    },
    {
        name: "Malware Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3b/Malware_Mangle.webp",
        description: "A part of Malware Mangle will appear on a random Floor 7 camera. Avoid hovering your mouse over them, or she will assemble in your office. If he's fully formed the next time you lift up the monitor, you're dead!",
        section: "yt"
    },
    {
        name: "Bloodbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/32/Bloodbear_Revamp.webp",
        description: "He will spawn at exactly 3:AM (how ironic), This will activate the 'Bloodbear Event'. When the Event happens, you MUST defend yourself from him at all costs. He will appear at the Doorways. Sometimes there will be random images flashing on your screen, distracting you, Make it to 5:AM and he will be gone.",
        section: "yt"
    },
    {
        name: "Mr. Puzzles",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/93/Mr_Puzzles_Resize.png",
        description: "He's trying to achieve that PERFECT five star rating, and he's using YOU to achieve it. The better you do in a night, the more stars will appear in the top left corner. Doing poorly however will make the ratings go down. Avoid having the ratings too high or too low for too long, or he'll kill you.",
        section: "yt"
    },
    {
        name: "Rewind Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/43/Rewind_Freddy.png",
        description: "He'll attempt to rewind time, causing the timer to go backwards instead of forwards. To stop this, skip a video on the Youtube System to make time go back to normal.",
        section: "yt"
    },
    {
        name: "Ransomware Freday",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6b/Ransomware_Freday_Resize.png",
        description: "When using the monitor too often, he'll block your monitor with a 'Anti-Piracy screen'. To remove it, pay them 20 Faz-Coins to get rid of it. If you don't, he'll steal your code. (Death).",
        section: "yt"
    },
    {
        name: "Doodle Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6b/Ransomware_Freday_Resize.png",
        description: "He will lose his cake each hour. Quickly find the cake in your office or he'll lock you from Floor 1! However, the cake it will be will affect certain mechanics throughout the night. Vanilla: It'll cover up the timer and clock. Chocolate: It'll cover up the meters in the bottom left corner. Strawberry: It'll cover up the system buttons on the monitor. Raspberry: It'll appear in a large portion of your office, covering it up. Whipped Creamed Cake: It does nothing.",
        section: "yt"
    },
    {
        name: "Dawko",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e2/Dawko.png",
        description: "Dawko will be playing a FNaF Fan-game in Floor 4, changing cameras every now and then. Avoid using the control shock when he is on a camera, or his gameplay will fizzle out. If you shock him a bunch of times, his game will crash, and he will kill you in a fit of rage.",
        section: "yt"
    },
    {
        name: "The Boiled One",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/35/The_Boiled_One.png",
        description: "Randomly in the night, The Boiled One may hijack your camera monitor. If you flip down your monitor and wait a few seconds, he will go away, however if you stay and watch him for a few seconds, he will lock your cursor for a while before you can regain control.",
        section: "yt"
    },
    {
        name: "Tony The Clock",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/65/Tony_The_Clock.webp",
        description: "The digital clock that appears on the top right of your UI will instead be replaced by Tony's head. Tony will sometimes get out of hand, making a lot of noise with his obnoxious beeping, and when this happens, you'll need to click the bottom of the him to delay him. If you change the clock while it isn't delayed, it will still work, meaning that he will delay himself. If Mechiplier is active, then a cover will appear over the clock.",
        section: "yt"
    },
    {
        name: "Weegee",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/07/Weegee_icon.png",
        description: "His head will sometimes appear in the video inside the Youtube System, click the Next Button to skip the video. Not doing so will result in the Weegee Army rushing to each doorway, close the corresponding doorway (Left or Right doorway) to prevent death.",
        section: "yt"
    },
    {
        name: "Jumpscare Purple Fan",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/89/FNaF_4_Fan_Jumpscare.png",
        description: "Every time he appears in the office, you must shine the flashlight on him. If you don't, he will scare you.",
        section: "yt"
    },
    {
        name: "Vintage Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a8/Vintage_Freddy.webp",
        description: "At the start of the night, the Fazbear Entertainment Video Manual will teach you how to repair Freddy. Remember the tapes instructions well, as at the end of the night, you'll have to repair Vintage Freddy. Repairing him wrong will force you to climb inside his torso and accept your death.",
        section: "yt"
    },
    {
        name: "Vintage Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2f/Vintage_Foxy.webp",
        description: "He will start his Pirate Cove Pre-Show in the Kitchen on F1 when the night begins. The real show will begin 10 in game minute's after the Pre-Show is over, and seeing that your the only other person in the building, Vintage Foxy will make YOU his audience and you don't want that to happen as it wont be very pleasant. There will be a Cassette Tape that you can rewind on the Kitchen camera to restart the Pre-Show and halt Vintage Foxy's arrival, but make sure you use it wisely, as if you use it more then five times, it will not work and the show will inevitably begin. (Death).",
        section: "yt"
    },
    {
        name: "Alito Virtual Yenndo Duo",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e1/Alito_Virtual_Yenndo_Duo.png",
        description: "These two bone heads will be on different floors. One will be on Floor 3 and one on Floor 8, keep them both away from the elevator by using the Audio Lure on F3 along side the Alarm System on F8 to lure them away from both of the floor's elevators. Yup, looks like you got this night down to the bone!",
        section: "oo"
    },
    {
        name: "Darkened Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/11/Darkened_golden_freddy_icon.png",
        description: "He will occasionally appear, flickering slightly. When he does, you’ll need to turn off the lights by pressing M to make him vanish.",
        section: "oo"
    },
    {
        name: "Radium Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/17/Radium_Bonnie.webp",
        description: "He'll appear in your office if you put the monitor down, turning to Radium Nightmare Bonnie. You should repeatedly switch modes to make him turn into normal Radium Bonnie again. If he becomes Nightmare Radium Bonnie, he will give you a taste of his radium ray and end your night.",
        section: "oo"
    },
    {
        name: "Flipmare",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a0/Flipmare.png",
        description: "He is invisible to the cameras and can only be seen once he reaches your right doorway. Once he's there, hover your mouse over him and use the Left/Right mouse buttons to raise different flags corresponding to the Left and Right doorways. If he's unable to get the correct flag, he'll accept defeat and walk away, if you don't however, he'll walk right in and kill you, oh well.",
        section: "oo"
    },
    {
        name: "Cursed Sidtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/de/Sidphillips.png",
        description: "Sidtrap will roam Floor 3. If you are using SIlent Ventilation, he'll go for the elevator at a decent pace. Once he gets in the elevator, you aren't immediately dead, but however he is right behind you now. Any time you use the controlled shock, his anger meter will go up by one. The bar will lower after 1 minute has passed, if the anger meter is above 10, you will die.",
        section: "oo"
    },
    {
        name: "Spring Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/82/Spring_Foxy_Resize.webp",
        description: "He will appear in the Foxy Hall camera on Floor 3, getting more angry if you don't look at him. Eventually he will leave the Foxy Hall and into the Elevator. The only thing to calm him down is to close all the doors and turn on the Silent Ventilation for several seconds. If he leaves the Foxy Hall for a long time, you die.",
        section: "oo"
    },
    {
        name: "Blacklight Grimm Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/cc/Blacklight_Grimm_Foxy.png",
        description: "He does not exist. Which means he will not appear during your night. Instead he will leave you a task on the Task System and that is to make him real! You must fill out a petition for him, in which after completing will make him real, and to show his thankfulness, he will give you his Point Value as a reward.",
        section: "oo"
    },
    {
        name: "Phantomized Popgoes",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/56/Phantomized_Popgoes.webp",
        description: "He works similar to both Nightmarionne and Adventure Nightmarionne, except he will fade in on any part of your screen no matter what. Avoid having your mouse cursor on him for too long, or he will non-lethally jumpscare you and cause a ventilation error.",
        section: "oo"
    },
    {
        name: "Withered Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4a/Withered_Fredbear.webp",
        description: "An anvil will now be floating above your wet floor sign (off screen.) Sometimes Withered Fredbear will appear at either the left or right side of your office, you must move your wet floor sign to the side he's on and press B to cut the rope and kill him.",
        section: "oo"
    },
    {
        name: "Unadventure White Rabbit",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b4/Unadventure_White_Rabbit.png",
        description: "A bar of White and dark chocolate will be on your desk, each of them doing different things. The dark chocolate will restore lost power, while the white chocolate will drain the toxic meter. However, eating the chocolates too much has side effects. Eating the white chocolate too often will anger Unadventure White Rabbit, while the dark chocolate will anger Inverted Unadventure White Rabbit. Have a even amount of both chocolates to avoid getting jumpscared by either of them.",
        section: "oo"
    },
    {
        name: "Unadventure Redbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ef/Unadventure_Redbear.webp",
        description: "If you see him in the monitor, stare at him to make him go away.",
        section: "oo"
    },
    {
        name: "Glitchrot Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/70/Glitchrot_Foxy.png",
        description: "His files will be in a random System every hour. If you find one, you can quickly shift & delete them (by holding the Shift & D key on the keyboard) which will weaken him. Your fight with him will begin at the end of the night, where you will be taken to a FNAF World-styled fight with him, where you can use Adventure Blacklight Freddy, Adventure Blacklight Bonnie, Adventure Blacklight Chica, And Adventure Blacklight Foxy to fight him off. Based on how many files you deleted, his health will be decreased by 10% which will make the fight easier. Just remember to Fight, Block, and Heal to Win!",
        section: "oo"
    },
    {
        name: "Virtual Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b1/Virtual_Fredbear.webp",
        description: "If Fredbear spawns in your office, you'll need to go the left hall camera on F1 and find the Freddy poster. Once you find it, you need to click it until it turns into a missing texture, then Fredbear will go away. If you fail to do this, then you'll die!",
        section: "oo"
    },
    {
        name: "Cardboard Freddy Mask",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/84/Cardboard_Freddy_Mask.png",
        description: "The mask is possessed which will make it levitate. When it appears in your office use the Pizza Cutter to cut the mask in half to release the spirit otherwise it will take (AI level/3) amount of power.",
        section: "oo"
    },
    {
        name: "Nightmare Flipbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6d/Nightmare_Flipbear.png",
        description: "He is invisible to the cameras and can only be seen once he reaches your doorways. Once he's there, he'll teleport to one of the doorways you're looking at, if you stare it him for too long, he'll kill you! Flip-flop between each doorway until he eventually goes away.",
        section: "oo"
    },
    {
        name: "Plush Based Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c3/Plush_Based_Mangle.webp",
        description: "She can appear in one of the two vents in Floor 2. While there you can faintly hear her usual garble sounds. Put on the mask until she goes away otherwise she'll get in and kill you.",
        section: "oo"
    },
    {
        name: "Stretched Virtual Bucket Bob",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a1/Svbb.png",
        description: "When the temperature is way too high, he will appear and become stretched and disable your mask. To get rid of him, use the flashlight to make him leave.",
        section: "oo"
    },
    {
        name: "Proxy Blacklight Foxy 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/82/Proxy_Blacklight_Foxy_2.png",
        description: "He'll be waiting for the release of Multiverse Custom Night. But he doesn't want to ask when it will come out, so he'll just be waiting for the game to release before he thinks about anything else. So i guess you get free points for now.",
        section: "oo"
    },
    {
        name: "Golden Chungus",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/da/Golden_Chungus.webp",
        description: "He will appear in your office at random with hallucinations. Quickly type 'GC' to get him away, or you will get jumpscared.",
        section: "oo"
    },
    {
        name: "Adventure Stuffed Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/72/Adventure_Stuffed_Freddy.png",
        description: "He'll be sitting in the Master Storage Room camera on Floor 8. Sometimes he'll stand up and weird garbled sounds will start playing. On that camera, there will be an Emotional State button. When clicked, the 'Run Memories' program will start. An image alongside text will start to appear, cycling through good and bad memories. Wait until you find a 'good memory' and press the 'Lock Memory' button to lock it in. Afterwards Adventure Stuffed Freddy will be at ease. Otherwise death is what you should expect.",
        section: "oo"
    },
    {
        name: "Chroma Blue Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1d/ChromaBlueFreddyProfilePic.png",
        description: "When Chroma Blue Freddy appears in your office, he will slowly start turning your office chroma blue. If the office becomes fully chroma blue, you die. When he appears, one of the modes will be highlighted. You must switch to the highlighted mode. The chroma blue effect goes away slowly while the correct mode is active. The highlighted mode can never be the same one twice in a row.",
        section: "oo"
    },
    {
        name: "The Averaged",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/41/The_averaged_icon.png",
        description: "When they attack, they will use one of 12 mechanics, which are slightly modified versions of mechanics from the original Ultimate Custom Night. The mugshot image of the original animatronic associated with the active mechanic will appear in the top-left corner of the screen, providing a visual cue for the player. This will help the player quickly identify which mechanic they need to handle. If the mechanic succeeds (only for non-lethal jumpscares, mechanics, and attacks), fails to reach the player, or takes too long to act, they will switch to a different mechanic for their next attack. The mechanics that can be used are: 1. They approach from the left hall. Keep track of them on the monitor and shut the door when they are standing in the doorway. They move faster as the building gets warmer. 2. While they don't care if the music box is wound up, they can grow tired of the selection playing. When the sound of pots and pans stops, you only have a short amount of time to change the music. The Global Music Box can also soothe them. 3. Put on your Freddy Fazbear mask quickly when they sneak into your room to fool them and make them go away. 4. They navigate through the vents, attempting to reach the opening. If they get there, they will jumpscare you. Use the vent-snare to stop them. 5. They will occasionally appear in your office. Throw on your Freddy mask or pull up your monitor quickly to cause them to disappear. 6. When you see them on your monitor, quickly close it or change the cam, otherwise they will jumpscare you and create an audio disturbance. 7. They are invisible to the cameras and can only be seen when they reach your right or left doorway. Close the door on their face to send them back into the darkness! 8. Don't let your mouse cursor linger over them for too long! 9. They make their way toward your office using the air ducts. Use the audio-lure to hold them in place, or the heater to push them back. 10. Check the left and right hallways, then place the wet-floor sign on the same side as them. They won't enter if the sign is in place. 11. They become active from noise and heat. They are too far away from the music box to be soothed by it, but the global music box can calm them down. 12. When they call, quickly mute them, otherwise it will create a lengthy audio disturbance. The mute button will appear in different places each time.",
        section: "oo"
    },
    {
        name: "Alito24",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/39/Alito24.png",
        description: "Sometimes one of the floor buttons will be replaced with themselves. If you click a floor button that they are covering then they will jumpscare you and add a new threat into your night, but don't worry as you can get rid of the new nuisance by looking though the floor that Alito24 was on and looking though the cameras for the characters AI Value, quickly set the Value to 0 by using the down arrow next to the number. If you are not quickly enough then that new threat will find you and end your night with a jumpscare! Game over.",
        section: "wiki"
    },
    {
        name: "Maundeplays",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/47/Maundeplays_Revamp.webp",
        description: "Maunde will be sitting in the Master Storage Room on Floor 8, wearing a VR headset and being strapped to a machine (said machine being the MMN simulation). You'll have to get her out of her trance before something comes to get her! You'll be able to purchase a pair of wirecutters on the Task System, and use them to disconnect Maunde from the machine! Once she does, she'll give you some extra fazcoins. If you don't get her out by the end of the night, He will kill you!",
        section: "wiki"
    },
    {
        name: "Number1GrimFoxyFan",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2c/Number1GrimFoxyFan_%28Revamp%29.png",
        description: "He will not stop gushing about Grimm Foxy despite being a variant of him. You must lure him to Grimm Foxy on the GPS System to make him stay near him, which raises a happiness meter on top of his icon. However, Grimm Foxy is very non-social and likes to move away from him as much as possible. Keep GrimFoxyFan near Grimm Foxy to raise his happiness, or he will jumpscare you in anger for not meeting his idol!",
        section: "wiki"
    },
    {
        name: "GrugMoment123",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/44/GrugMoment123.png",
        description: "Once activated into the night, Grug will show up (Duh). Due to his status as the creator of the game, he is able to randomly activate a random character, in a random AI level, or he will remove a character, at a random point in the night, at ANY time. This means that the entire roster will randomly shift characters and AI in random points to your night. You cannot stop this at all!",
        section: "wiki"
    },
    {
        name: "Derpyguy205",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/ad/Derpyguy205.webp",
        description: "He is haunting the Child's Bedroom, randomly showing up in that camera now and then. Avoid looking at him before he causes a blackout with a non-lethal jumpscare",
        section: "wiki"
    },
    {
        name: "Fun Bear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f5/Fun_Bear.png",
        description: "He has three separate ways he can attack you, changing how he attacks each time he does: 1. He will laugh, forcing you to track down what Floor 5 camera is on and stare him down to get him to leave. 2. He will appear directly in front of you in the Office. Stare him down to get him to disappear. 3. He will make a keypad descend from the ceiling of the Office. You will have to pay attention of the order of which the keys flash, and input that code again to avoid death.",
        section: "fnaf1r"
    },
    {
        name: "Bonny",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/28/Bonny.png",
        description: "He will appear in one of the office doorways, you must close the correct door on him to survive. However, the keybinds and monitor buttons of the doors will not work anymore, and you will have to drag the doors down to close them.",
        section: "fnaf1r"
    },
    {
        name: "Buddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0d/Buddy.png",
        description: "He will occasionally cause a virus to appear in the form of a pop-up on a random camera, in which the player will need to close the pop-up quickly, or else it will completely drain the power. He will also cause one of the TVs in the office to turn on, in which the player will need to click on them to turn them off, or they'll start to drain the power quickly.",
        section: "fnaf1r"
    },
    {
        name: "Oxy Pirate",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b6/Oxy_Pirate.png",
        description: "Their hook will descend from the ceiling of the office (indicated by a distorted version of Foxy's hum). The player must click on Oxy's hook to send them back, in order to prevent him from jumpscaring them, which they will do if the hook descends too much.",
        section: "fnaf1r"
    },
    {
        name: "Chick",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/95/Chick.png",
        description: "Their teeth will slowly begin to close in on you, change the music on the Kitchen Camera on Floor 1 to make her jaws open and prevent her from killing you.",
        section: "fnaf1r"
    },
    {
        name: "Movie Skeleton",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/ba/Movie_Skeleton_%28Minecraft%29.png",
        description: "It will be shooting flaming arrows at you whenever you have the Power Generator active. Getting hit by one will raise the temperature by 10% and also cause you to lose 5 HP from the HP bar. If your HP goes to 0, it's game over.",
        section: "mc"
    },
    {
        name: "Movie Steve",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2f/JackBlack.png",
        description: "Movie Steve will be with you the entire night, guiding you along the way. Occasionally, he'll say a line from his famous movie 'A Minecraft Movie' which will correlate to something that is happening. 'Chicken Jockey!': A Chicken Jockey has appeared and you have to fight it to move on, similar to Mini-P. 'Flint and Steel!': Fire will appear on the screen and rapidly spread and raise the temperature, click on the fire to stomp it out. 'An Ender Pearl': An ender pearl will fall from the top of the screen and if it hits the bottom, it'll randomize your floor and camera your looking at. Click on it to grab it before it touches the bottom. 'This, is a Crafting Table!': For the next hour, clicking on your systems will not fix them. Instead, you need to grab ingredients from the camera you're looking at and craft your broken system again to repair it.",
        section: "mc"
    },
    {
        name: "Glowstone",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/5a/GlowstoneBlock.png",
        description: "Floor 1 is completely in darkness! Exactly like Floor 2, but you don't have nothing to illuminate. Almost, because Glowstone is there, to glow. Yeah. You can click and drag it to illuminate the Floor 1.",
        section: "mc"
    },
    {
        name: "Grass Block",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/ba/MC_Grass_Block.png",
        description: "That's the main face of Minecraft! To maintain its glory you must constantly hydrate it to prevent its beautiful layer of grass from disappearing and transforming into a simple block of common dirt. You can use the bucket filled with water conveniently placed in your office for this. If you let it dehydrate, it will kill you for it.",
        section: "mc"
    },
    {
        name: "Skeleton",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f6/Skeleton_%28Minecraft%29.png",
        description: "The skeleton will be shooting arrows on the Light System. If they hit your cursor, you will lose 5 HP from the HP bar. If your HP goes to 0, the Skeleton will kill you. Alternatively, you can shine the Light System's flashlight directly onto the Skeleton, burning him to death. Unfortunately, since it is dead now, half of its point value will be subtracted from the night.",
        section: "mc"
    },
    {
        name: "Animal Gang",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ee/Animal_Gang.png",
        description: "All of the animals (apart from the Cod who is on the aquarium camera on Floor 4) will be in the Jungle Room on Floor 8. When you hear one of them make a dying sound, go into the Task System and click on the corresponding mob's spawn egg to bring them back. If all of them die, they will all spawn back in and kill you.",
        section: "mc"
    },
    {
        name: "Minecraft Lord Shen",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fb/Minecraft_Lord_Shen.png",
        description: "He is plotting a plan to take over the entire building. He will be leading an army of wolves and a whole stockpile of cannons in the GPS System. Click on the wolves to drive them back, and use the forcefield to reflect the cannons to Lord Shen. Failure to beat him before 6:AM will result in death.",
        section: "mc"
    },
    {
        name: "Diamond Sword",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0f/Diamond_Sword_Resize.webp",
        description: "Occasionally a Zombie will appear in a hallway from Floor 4. Quickly click X to swing the sword to kill the zombie, or they will kill you with their own diamond swords.",
        section: "mc"
    },
    {
        name: "Minecraft Miss Circle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f4/Minecraft_Miss_Circle.webp",
        description: "She will build a wall of blocks blocking the view of 5 cameras on Floor 8. If you wish to get rid of them go to the Prize Counter and buy the Maga TNT Block for 1 Red Rupee to completely get rid of all the blocks!",
        section: "mc"
    },
    {
        name: "Minecraft Miss Circle 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/75/Minecraft_Miss_Circle_2.webp",
        description: "She will appear in your office four times per night. If she happens to appear in your office, you will need to give her a Oreo. To give her an Oreo, press the E key on your keyboard to give her the Oreo, afterwards she will leave. If you pull up the monitor while she's in the office, she will kill you!",
        section: "mc"
    },
    {
        name: "Blaze",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/bd/Blaze.png",
        description: "At 2 AM and 4 AM, a Blaze will spawn on either side of your screen, shooting fireballs in a linear direction. If the fireballs hit your cursor, it will make your temperature rise by AI degrees. If you ever get hit by a fireball and your temperature goes over 120 degrees, you will burn to death.",
        section: "mc"
    },
    {
        name: "Creeper",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/09/Creeper.webp",
        description: "He can appear at your left or right sides of the office. Make sure your cursor isn't around him for too long as he'll start to puff up and explode resulting in death.",
        section: "mc"
    },
    {
        name: "Witch",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d4/Minecraft_Witch.webp",
        description: "At 3:AM, the witch will appear, and 4 potions will rapidly randomize in front of you. You have to click on the potions in order to not get jumpscared by the witch before 4:AM. However, each potion has a negative affect which will hinder your night. Poison Potion: Your toxic meter will rise up slowly, you cannot prevent this. Slowness Potion: The camera and office movement speed is decreased.  Weakness Potion: Your power will become 50% and the temperature will randomly reset to 60% or 120%. Damage Potion: Non-lethal jumpscares can now actually kill you.",
        section: "mc"
    },
    {
        name: "Elder Guardian",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3e/Elder_Guardian.webp",
        description: "From time to time, he will jumpscare you, resulting in some things being slowed down. This effect goes away after a few seconds.",
        section: "mc"
    },
    {
        name: "Guardian",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/35/Guardian.webp",
        description: "They will occassionally perform a vertical laser attack at your cursor. It takes (2-(AI/20)) seconds for it to charge up. Letting your cursor hit the beam will cause 'Clicking Fatigue' for a whole hour, which means that every action that requires a single click will now require a double click.",
        section: "mc"
    },
    {
        name: "Enderman",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f0/Enderman.webp",
        description: "He will appear in your office. If your cursor touches him, he'll teleport to a different location in your office. There is a bar next to him. Each time he teleports the bar goes down. It refills overtime unless it's empty. If it's empty you will die.",
        section: "mc"
    },
    {
        name: "Yellow Minecraft Yoshi",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ee/Yellow_Minecraft_Yoshi_Resize.webp",
        description: "He will be streaming games In the Master Storage Room on Floor 8. Make sure your internet is high enough so the game doesn’t buffer. If the game buffers and he is left waiting for too long, he will start blowing aggressively into his mic, raising the noise meter by 2 bars.",
        section: "mc"
    },
    {
        name: "Zombie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e5/Minecraft_Zombie.webp",
        description: "They will occasionally show up in both Doorways, in which you need to use the Fazblaster to send them away. Failure to do so will result in death.",
        section: "mc"
    },
];
