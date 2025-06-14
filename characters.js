const characters = [
    {
        name: "Anniversary Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7d/Anniversary_Freddy.webp",
        description: "Through his special anniversary magic, he will sometimes cause your cursor to go invisible! Keep switching through your devices until he gets confused and makes your cursor visible again",
        section: "fnaf1"
    },
    {
        name: "Pumpkin",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e1/Pumpkin_1.png",
        description: "It would stay on the back desk. Shine your flashlight at it for a few seconds for it to go away. otherwise it will disable your doors.",
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
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/da/Dream_Puppet_Revamp.webp",
        description: "Using the Global Music Box for too long will make Dream Puppet slide towards you in your office and block the view with his face. Turn off the Global Music Box to make him go back.",
        section: "fnaf2"
    },
    {
        name: "Dream Yellow Bear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3c/Dream_Yellow_Bear_Revamp.webp",
        description: "Sometimes when you take off your mask, he will show up right in front of you. Quickly flip up the monitor to make him disappear before he kills you.",
        section: "fnaf2"
    },
    {
        name: "Toy Pumpkin",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a4/Pumpkin_2.png",
        description: "It would stay on the front desk. Shine your flashlight at it for a few seconds, otherwise it would disable your mask.",
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
        name: "Rotten Pumpkin",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/ab/Pumpkin_3.png",
        description: "4 of them would appear all over F3, make sure to get all 4 in the first hour otherwise you will lose access to the vent system.",
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
        description: "He will randomly appear on your screen, moving too fast, quickly click his nose to avoid him from blocking the Duct System FNAF 4 House Map.",
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
        name: "Seagoon",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/10/Seagoon_Revamp.png",
        description: "Though you can’t see his icon, he will walk around the Duct System. If your cursor hovers over him, he’ll run into your office. Quickly flip the mask on and off to not be killed.",
        section: "fnafw"
    },
    {
        name: "Totemole",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2d/Totemole.png",
        description: "He acts similar to Totem Panic. His parts will come from the sides of your screen from the left to right, but your cursor cannot go through them. If a part of him crushes your cursor to the other side of your screen, it’s game over.",
        section: "fnafw"
    },
    {
        name: "Tombstack",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/5b/Tombstack.webp",
        description: "His parts will be coming from the top of your screen, but your cursor cannot go through them. If he crushes you to the bottom of the screen, it’s game over.",
        section: "fnafw"
    },
    {
        name: "UFOS",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/da/UFOS.webp",
        description: "AI-7 (atleast 1) UFOS will spawn on the Fury's Rage Floor, shooting lasers in a vertical direction. Defeat them before they beat you.",
        section: "fnafw"
    },
    {
        name: "Universe End Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4a/Universe_End_Fredbear.webp",
        description: "If Universe End Fredbear 2 is in the night, the game will close. Other then that, Survive the night to win!",
        section: "fnafw"
    },
    {
        name: "Universe End Fredbear 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/82/Universe_End_Fredbear_2.webp",
        description: "If Universe End Fredbear is in the night, the game will close. Other then that, Survive the night to win!",
        section: "fnafw"
    },
    {
        name: "Chop 'N Roll",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c7/Chop_N%27_Roll.webp",
        description: "You can buy one of 4 Chop 'N Rolls in the Prize Corner that will cut down a tree for you in the Lumber Co camera. But be careful because one of these Chop 'N Rolls' will give you an immediate jumpscare if you buy it.",
        section: "fnafw"
    },
    {
        name: "Chillax",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9d/Chillax.webp",
        description: "It will run back and forth in Lumber Co.. Do not cut a tree while it runs by it or it’ll jumpscare you.",
        section: "fnafw"
    },
    {
        name: "Cheesehead",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/64/Cheesehead_Resize.png",
        description: "He will add a hunger meter to your night! Chicken legs will appear like Faz-Coins, hovering over them will collect them and add them to the meter. It will slowly go down as time progresses. If it goes fully down, you’ll die to starvation. Pizza will also appear, but avoid collecting them as that will decrease a bit of your hunger meter.",
        section: "fnafw"
    },
    {
        name: "Blacktrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/cf/Blacktrap.webp",
        description: "The higher the AI, the more chance it will appear on a random camera box in Floor 3 & 4. If you go on the same camera as it, you’ll be stuck inside the camera for 10 seconds and 50% of your power will be drained.",
        section: "fnafw"
    },
    {
        name: "Big Jack",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/09/Big_Jack.webp",
        description: "He stays on the Cam System and becomes larger and larger over time, thus blocking more and more of your view. Use the Global Music Box to reverse his progress.",
        section: "fnafw"
    },
    {
        name: "Beartrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/10/Beartrap_Revamp.png",
        description: "The higher the AI, the more chance it will appear on a random camera button in Floor 1 & 2. If you go on the same camera as it, you’ll be stuck inside the camera for 5 seconds and 25% of your power will be drained.",
        section: "fnafw"
    },
    {
        name: "Bard Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/02/Bard_Chica.webp",
        description: "If you use the Flashlight (Both the office and Floor 2 one) too frequently, Bard Chica may appear in your office and use her ability to temporally disable the Global Music Box.",
        section: "fnafw"
    },
    {
        name: "Boxbyte",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/45/Boxbyte_Revamp.png",
        description: "He will appear in the Oxygen Storage camera and steal the energy from the breaker box to charge himself. This unfortunately drains your Power. Quickly use the Control Shock (Floor 4) to send him away.",
        section: "fnafw"
    },
    {
        name: "Anchovy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/03/Anchovy_Revamp.webp",
        description: "Small fish will appear alongside the Faz-Coins when you go on a camera. Do not hover over them or your toxic meter will go up.",
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
        name: "Avatar Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a9/Avatar_Freddy_Revamp_2.png",
        description: "He will be on the GPS System, slowly moving towards your avatar. If he reaches you, he will disable your monitor for 1 ingame hour. Quickly use the lure to prevent this.",
        section: "fnafar"
    },
    {
        name: "Torch Cupcake",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a4/Torch_Cupcake.jpg",
        description: "He will be on your desk with his candle lit up. If his candle isn't lit up, shine the flashlight on him to reignite his candle. If his candle isn't lit up for a while, he will leave and make your office cool for the rest of the night.",
        section: "fnafar"
    },
    {
        name: "Special Delivery Box",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/88/Special_Delivery_Box_Revamp.png",
        description: "A box will appear in your office, tumbling. It is taped. You have a tape roller on your desk. Your package will sometimes rip the tape from inside the box with an audio cue, so you must fix it. There are four levels. If your package gets past all of the tape, they will attack you.",
        section: "fnafar"
    },
    {
        name: "Silhouette Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/28/Silhouette_Springtrap.png",
        description: "Silhouette Springtrap will be in your office. By 3:AM, he will fully become animated, and jumpscare you as there are no obstacles in his way. Cut the silhouette into pieces with the Pizza Cutter before 3:AM to survive.",
        section: "fnafar"
    },
    {
        name: "Silhouette Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/06/Silhouette_Mangle.png",
        description: "Silhouette Mangle will appear in the ducts, lurking in the system, barely visible. You will have to lure her away so she doesn't get to the end, where she would spark your monitor to close it and cause a vent error. Your duct and vent snares will also be forced open.",
        section: "fnafar"
    },
    {
        name: "Serpent Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d6/Serpent_Mangle.webp",
        description: "She'll be on Floor 6 in the Utility Room and will slowly start coming out of the ground. Using the Controlled Shock in the office will push him back one step. Use the Controlled Shock multiple times to push her back all the way and prevent his attack.",
        section: "fnafar"
    },
    {
        name: "Scorching Cupcake",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/40/Scorching_Cupcake.webp",
        description: "It will appear on random cameras. If you stay on the camera that it is currently on for too long, it will come into the office and make the heat go up faster than usual.",
        section: "fnafar"
    },
    {
        name: "Livewire Toy Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/14/Livewire_Toy_Freddy_Revamp.webp",
        description: "He will be in Parts & Service, plugged into the system. However this will allow him to make you play his crappy and rigged 8-bit games on your screen. If you beat them, Livewire Toy Freddy will overload from his failure and make himself explode. If you fail his games, he will jumpscare you.",
        section: "fnafar"
    },
    {
        name: "Moldy Cupcake",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c9/Moldy_cupcake.png",
        description: "The longer the cameras are down, the more chance of him appearing on your desk. When he's there, you will be unable to use the Pizza Cutter until you click on it, which increases toxicity by 25%.",
        section: "fnafar"
    },
    {
        name: "Calavera Cupcake",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/02/Calavera_Cupcake.webp",
        description: "If the temperature gets too high, he'll appear. If he does, the heater will be disabled until the office is cooled down.",
        section: "fnafar"
    },
    {
        name: "Glitch Black Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/78/Black_Bonnie.png",
        description: "He will randomly make the floor buttons invisible, with random ones being invisible or not. This is unavoidable.",
        section: "fnafar"
    },
    {
        name: "Choco Glitch Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/72/Choco_Glitch_Bonnie_Revamp.png",
        description: "He will stay in the Glitch Floor and will sometimes go to your office. When he is in the office, he will be invisible. The only way you can see him is to find glitched out visuals in the office. Click on the glitched visuals to send him back. Not doing so on time will result in your run to end.",
        section: "fnafar"
    },
    {
        name: "Easter Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/76/Easter_Chica.webp",
        description: "AI value * 3 eggs have been hidden across the cameras, which you can click on to collect. Your life is on the line by the way, because if you don't find them all by the end of the night, a jumpscare is all you'll get.",
        section: "fnafar"
    },
    {
        name: "%-Bit Baby",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/06/%25-Bit_Baby.webp",
        description: "4 numbers (From 1-20) will be on floors 1-4. Type them out in word form by 3:AM, or your cameras will be glitching out for the rest of the night. The higher the AI, the more glitchy the cameras would be.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Clown Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c1/0%25_Conditioned_Clown_Springtrap.png",
        description: "At random moments of the night, distorted circus music will start playing quietly in your Office. When this happens, you must search through Floor 8, as 1 camera will have the distorted music play louder, you must use The Alarm on the camera to make the music stop. If you take too long, 0% Conditioned Clown Springtrap will smack the camera with a hammer, making you unable to view said camera, nor be able to use the Alarm on said camera either.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Broiler Baby",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8d/0%25_Conditioned_Broiler_Baby.png",
        description: "She will slowly approach your office in the GPS system, desperate for repair. When she appears in the office, use the Faz-Wrench on her a couple of times to fully repair her! All you need to know is that she is a ticking time bomb whose explosion would engulf the office in deadly flames!",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Arctic Ballora",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2c/0%25_Conditioned_Arctic_Ballora.png",
        description: "She is slowly freezing you, making you slower. Either turn off the fan or turn on the heater to slowly remove the freezing. Turning both on will make the freezing go down faster. If both are left on for 30 seconds, 0% Conditioned Arctic Ballora will melt away.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Ballora",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/21/0%25_Conditioned_Ballora.png",
        description: "Looking at any system other than the camera system for a combined amount of an in game hour will lead to distorted music to start playing when looking at said system, if this happens, leave the system as soon as possible and look for 0% Conditioned Ballora on Floor 1 of the camera system, when you find her, turn on the global music box on the camera you find her to calm 0% Conditioned Ballora down. You can now use the system until the global music box is turned off, in which you will need to repeat the process.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Baby",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/79/0%25_Conditioned_Baby.png",
        description: "She will sometimes appear in your office whenever you drop your monitor, poised to attack. Right click on her faceplates to make her endo show up and spam click her with the left mouse button to make her leave before she kills you.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Balloon Boy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/70/0%25_Conditioned_Balloon_Boy.png",
        description: "This annoying child is scampering around in the Light System. If you see him with his eyes blue, shine your light on him. Seeing him with his eyes red is a sign to leave the system to avoid his attack. But if his eyes are white, stay on the system and leave him alone before he leaves on his own.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Bare Endo",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f3/0%25_Conditioned_Bare_Endo.png",
        description: "He will accidentally wind up on the Glitch Floor due to his condition. Spray him with a convenient hose that appears to not only drive him out, but will also clean him. If he stays in that floor for too long, he will kill you.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Black Ice Frostbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d8/0%25_Conditioned_Black_Ice_Frostbear.png",
        description: "He somehow got the wrong mechanic script sent to him! He works way different from other ice/cold characters. He actually can tolerate hot office temperatures but hates cold office temperatures. He'll just be chilling is your office, sitting on a lawn chair. If the office is cold for too long, he'll be so mad that he will stand up off of his lawn chair and kill you shortly after! However, if the office is hot, you will be fine. However, at 5:AM he will remember that he's actually supposed to hate hot office temperatures and like cold office temperatures, so you will need to keep the office cool and not hot.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f3/0%25_Conditioned_Bonnie.png",
        description: "When he appears in the office, quickly go to the Prize Corner and honk on the Bonnie Plushie's nose to drive him away before he kills you.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Firework Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/63/0%25_Conditioned_Firework_Freddy.png",
        description: "He's in this state specifically because a firework blew up in his face last week, because of this, he now is AFRAID of them. He'll be paying a visit to your office for reasons that have been yet to be documented, but, someone very mischievous (Like one of the many Balloon Boy clones that inhabit this place, god they are annoying, am I rambling on something else? Sorry.) has placed fireworks in your office, some only appearing later in the night. You need to click on them to get rid of them. If he gets in your office and there is a firework in it, he won't be scared but MAD. He'll scream in anger! After a few seconds of him screaming in anger, he'll make you go deaf for the rest of the night.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Easter Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8e/0%25_Conditioned_Easter_Bonnie.png",
        description: "Oh Dear, He's in the vent system completely invisible, he is currently chucking rotten eggs at other vent animatronics, Those who get eggs have a 50% change to speed up from anger, and another 50% chance to slow down instead. If there are no other vent animatronics active, he will disable himself and you won't get his points for the night. Survive the night to win!",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/27/0%25_Conditioned_Chica.png",
        description: "She will throw stale cupcakes at your cursor throughout the night. Getting hit by one will cause dirt to engulf a part of your screen. Clean the dirt off by shaking your screen with your cursor.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Frost Plushtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/44/0%25_Conditioned_Frost_Plushtrap.png",
        description: "He'll be in the Duct System. He'll appear on either the left or right Duct depending on the current temperature. If it's at 80° or lower he'll be at the left Duct, if it's at 81° or higher he'll be at the right Duct. He'll attack once per night at 3:AM, Have the Neon Wall at the correct Duct he's about to attack from before he kills you.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7f/0%25_Conditioned_Freddy.png",
        description: "You must use 2 things at the same time 1-20 times on your screen depending on the difficulty. You’ll hear a check mark noise when you’ve completed the goal. If you do not reach the goal, you die. He has a 0.999% chance of him entering your office and killing you.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3e/0%25_Conditioned_Golden_Freddy.png",
        description: "His limbs will be floating around in your office. If his legs and arms appear, click on them. If his head and torso appear, double-click on them. If all of his limbs are here at the same time, Golden Freddy will conjoin himself and jumpscare you.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Jack-O-Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0c/0%25_Conditioned_Jack-O-Bonnie.png",
        description: "He wanders around Floor 3, always showing up every now and then. If you happen to encounter this roasted rabbit in one of those cameras, the temperature will rapidly raise up. Perhaps your ability to switch the buttons on your monitor will ward him off...",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Jack-O-Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2c/0%25_Conditioned_Jack-O-Chica.png",
        description: "Leaving the temperature cold for too long will make her fade into the office since she really loves the heat. Turn up the temperature to make her fade away.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c9/0%25_Conditioned_Mangle.png",
        description: "Clicking on a random keybind of its choice will increase the chances of her to appear in your office. Put on your mask to ward her off.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Swamp BB",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/62/0%25_Conditioned_Swamp_BB.jpg",
        description: "The more noise is being made, the more he will move towards you in the GPS System. Lower the noise to slowly make him move back before he kills you.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Toxic Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/27/0%25_Conditioned_Toxic_Springtrap.png",
        description: "Having only one tool enabled in the GPS System will make the Toxic Meter fill up.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Toy Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/ae/0%25_Conditioned_Toy_Bonnie.png",
        description: "He is in the middle of recharging himself in Party Room B, signified by his eyes glowing more greener. To stop him from fully charging, shine the light at him for a while as the light weakens his battery power. If he fully charges up, you will die.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Toy Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/42/0%25_Conditioned_Toy_Chica.png",
        description: "Her beak will somehow come to life and will chase your mouse cursor around your screen. Avoid her beak until it decides to give up. If the beak manages to catch up to you, it will clamp down on your cursor and trap it in place. Shake your mouse like a madman to make it fall off to the bottom of the screen.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Toy Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/ba/0%25_Conditioned_Toy_Freddy.png",
        description: "When he appears on your monitor, switch cams to make him go away. Otherwise he will cover that exact camera with mold that blocks your view. Wash off the mold by Light-Flashing the camera.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Woodland Toy Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/51/0%25_Conditioned_Woodland_Toy_Freddy.png",
        description: "Fungai will sometimes grow on your screen, and will grow bigger and bigger to the point of covering most of your view. Uproot the fungai by holding and dragging your cursor onto them. The bigger the fungai, the longer it takes to uproot it.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c3/0%25_Conditioned_Springtrap.png",
        description: "He will randomly appear and haywire at the far right of your office when the monitor is flipped down. If his eyes are white, stare at him. If his eyes are red, look away from them. Doing the incorrect action will result in death.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Plushtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b4/0%25_Conditioned_Plushtrap.png",
        description: "If you somehow manage to find him in a random camera, you must be required to clean him up. First you need to buy a bottle of soap in the Prize Corner, then you need to find him again, and then double click him to use the soap to clean him up. Failure to do so before 4:AM will cause Plushtrap to leave out dust on every camera of whatever floor he was last seen in.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Melted Chocolate Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/69/0%25_Conditioned_Melted_Chocolate_Bonnie.png",
        description: "He will appear in your office, he will melt a lot of chocolate when the temperature is at 110 degrees. Stay fresh so that the chocolate does not melt by decreasing it to 60 degrees. If it gets too much hot in your office, he will kill you.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Heartsick Baby",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ed/0%25_Conditioned_Heartsick_Baby.png",
        description: "Looking at the light system for too long will cause her glowing eyes to fade in to the middle of the system, highlighting your mouse to her eyes if she fully fades in will lead to your demise. you can make her fade out of the light system via clicking the exotic butters (Ai level) Times.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/50/0%25_Conditioned_Foxy.png",
        description: "He will always be in the Oxygen Storage camera, always trying to leave. Watch over him, and use the Floor Shock Button on him if he appears to have almost left the camera view. Letting him escape will somehow cause your Oxygen to fully drop.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Boulder Toy Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/18/0%25_Conditioned_Boulder_Toy_Bonnie.webp",
        description: "A rock will be in the Child's Bedroom, where you must take care of it. You will have to give it five sprinkles per hour, which you can do by clicking the rock itself. Not giving the rock enough food will make it start crying, which will increase the Noise Meter. Letting the rock cry for too long will end with you getting a jumpscare.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Flamethrower Bare Endo",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/26/0%25_Conditioned_Flamethrower_Bare_Endo.png",
        description: "He is currently addicted to setting things on fire, he will be in your office and try and set certain things on fire, like your fan, your Exotic Butters, or any of the doors if they are shut. Shining the golden flashlight on him will get him to stop whatever he's doing. if an object burns for too long, it will turn into a pile of ash making said burned object no longer work.",
        section: "fnafar"
    },
    {
        name: "0% Conditioned Flaming Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fe/0%25_Conditioned_Flaming_Springtrap.png",
        description: "Having the Heater on while viewing a camera will cause its button to have a fiery outline, forcing you to view another camera. Attempting to view the affected camera will drain your oxygen. Have the fan and Silent Ventilation on for a bit to extinguish its flames.",
        section: "fnafar"
    },
    {
        name: "Candy Crazed Toy Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/19/Candy_Crazed_Toy_Freddy.png",
        description: "His shop will be set up in the Monkey Room, selling sweets and chocolates, that's it...what, you think the sweets are deadly and will kill you if you eat too many? You think Candy Crazed Toy Freddy thinks you're a sweet and come kill you? Get real, broski!",
        section: "ausd"
    },
    {
        name: "Shamrock Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/30/Shamrock_Bonnie.png",
        description: "Occasionally, a loud siren will blare out, which signals he has installed malware onto the Monitor! You will have to find the infectious popup on any of the systems and click on the X to get it to go away. If he stays for too long, Barack Obama himself will jumpscare you, disabling your monitor for a short while!",
        section: "ausd"
    },
    {
        name: "Discarded Lefty",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/14/Discarded_Lefty.png",
        description: "He has a lame music box mechanic, but he wants to get rid of it! His Discarded Music Box will stay on the Telescope System, but he will make it as hard as he can to be able to wind it. Meteors will circle the button to wind the music box, and if your cursor hits the meteors too many times, one of the meteors will be sent off of his course and hit the telescope, disabling the system. If the Discarded Music Box ever winds down too much, Discarded Lefty will now be able to attack normally, with a unique mechanic! If you ever see vines coming through the ducts in your Office, quickly cut them with the Pizza Cutter to avoid Discarded Lefty getting into the Office and killing you!",
        section: "ausd"
    },
    {
        name: "Abomination Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4b/Abomination_Springtrap.png",
        description: "Deemed a failed experiment, He is locked in The Laboratory on Floor 5. Whenever he appears on that camera, you must look away to another camera or use the Camera Flash to get him away. Staring at him will cause your Vision Meter to steadily rise and distort your vision for a few seconds.",
        section: "ausd"
    },
    {
        name: "Celebrator Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c2/Celebrator_Freddy.webp",
        description: "His body clock has gone nuts. He will pop his head through either office door, asking if it's Halloween or Christmas? You can send him to either Floor 5 or the Christmas Floor. However, if you send Celebrator Freddy to the same floor too often throughout the night, he'll realise you've tricked him, rush back to the elevator and kill you.",
        section: "ausd"
    },
    {
        name: "Scrapyard Withered Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f4/Scrapyard_Withered_Foxy.png",
        description: "He'll slowly start to approach you on the GPS System. He is unaffected by any of the tools until he gets close, where he will make the sound of metal scraping. You will have a split second to use the forcefield to send him back. If he gets in, he'll use his metal blade arm on one of the doors, breaking them for the rest of the night. He will continue to try and do this until he has broken all four doors.",
        section: "ausd"
    },
    {
        name: "Carved Balloon Boy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fc/Carved_BB_Revamp.png",
        description: "Carved Balloon Boy is the maintenance man of Floor 5. He will fuel the boiler to keep the house heated. However, he'll run out of coal. You need to collect 10 lumps of coal from the basement, or ask Santa Freddy to deliver it to him. If the boiler goes out, the room will go cold, causing Carved Balloon Boy's candle to go out, and he'll die.",
        section: "ausd"
    },
    {
        name: "Candy Master Toy Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/00/Candy_Master_Toy_Freddy.png",
        description: "He will always be in your office, making a special ingredient for his new brand of candy! Help him out by finding an AI level of candy pieces scattered around the cam system. Do so, and you will get a fantastic treat that somehow has the ability to spawn extra Faz-Coins. Not getting the pieces before 5:AM will make the candy bland, and eating its blandness will cause you to die... somehow?",
        section: "ausd"
    },
    {
        name: "Decaying Pumpkin",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9c/Decaying_Pumpkin_Revamp_2.png",
        description: "If you stay in your office for a long time, he will appear and raise the toxic meter. Open the monitor for a few seconds to make him disappear and drain the toxic meter.",
        section: "ausd"
    },
    {
        name: "Demeath-O-Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1f/Demeath-O-Bonnie_Resize.png",
        description: "You will know when he's in your office by his demented growl. Pull down your monitor and quickly blind him with the Fazcam, or you'll be greeted by this Hell-beast's jumpscare!",
        section: "ausd"
    },
    {
        name: "Disheveled Jack-O-Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d3/Disheveled_Jack-O-Chica.png",
        description: "Having the temperature too high will cause her to fade into the Basement. You must quickly shut the right vent door and use the Power/AC to get her away before she kills you.",
        section: "ausd"
    },
    {
        name: "Headless Withered Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/5a/Headless_Withered_Bonnie.webp",
        description: "Once per night, he'll laugh, which will signal that he has set a few Floor 2 cameras on fire. Find them and drag the holy water on every camera he set fire on before he throws his pumpkin head at you, burning you alive! (death).",
        section: "ausd"
    },
    {
        name: "Overgrown-Paradise Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/40/Paradise_Freddy_Revamp.png",
        description: "Flowers and vines will start covering the Lumber Co. camera. You need to make your office go above 100o to make them wither and die. if they fully cover the cam, Overgrown-Paradise Freddy will end your run!",
        section: "ausd"
    },
    {
        name: "Silent Performer Bon-Bon",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c3/Silent_Performer_Bon-Bon.png",
        description: "He will be on the GPS System. If you use the Forcefield to keep him out for too long, he'll silently cry. This will cause the map to go monochrome.",
        section: "ausd"
    },
    {
        name: "Silent Performer Funtime Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/97/Silent_Performer_Funtime_Freddy.png",
        description: "He'll be in the Foxy Hall on Floor 3. He needs to start up his show by 3:AM, but unfortunately his hat broke and scattered across multiple locations. At the start of the night, the pieces of his hat will be scattered across 4 random systems. Find the pieces and recollect them to rebuild Silent Performer Funtime Freddy's hat! If you do it before 3:AM, he'll reward you with a generous sum of power. If not, he'll just jumpscare you.",
        section: "ausd"
    },
    {
        name: "The Beast",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/29/The_Beast.png",
        description: "He will sneak up from behind you, breathing down your neck for his next prey. To put him back in the Ice Caverns on Floor 7, you must turn up the heater and the oven at the same time.",
        section: "ausd"
    },
    {
        name: "Undead Toy Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1a/Undead_Toy_Bonnie.png",
        description: "He will escape his grave in The Graveyard on Floor 5. Once he enters the office, use the Shock Button to send him offline or you die.",
        section: "ausd"
    },
    {
        name: "Anniversary Withered Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6c/Anniversary_Withered_Freddy.png",
        description: "A Chase Pinata will hang from the ceiling in your office. Anniversary Withered Freddy will try to hit it (because he hates Paw Patrol for taking their spotlight). Unfortunately, if you have too much noise, he'll end up accidentally hitting you in the eye, temporarily blinding you. If he's successful, he'll give you his prize at the end of the night.",
        section: "ausd"
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
        name: "Springtrap Cutout",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ef/Springtrap_Cutout.png",
        description: "There will now be a Fazerblaster button on all of the Floor 3 cameras. If Springtrap Cutout ever appears on them, quickly press the button before he jumpscares you, disabling the Floor 3 Audio Lure for a short while.",
        section: "fnafhw2"
    },
    {
        name: "Virtual Glamrock Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/88/Virtual_Glamrock_Chica.png",
        description: "Every 2 hours, she will appear on the other side of your desk, wanting something to eat or drink. Look on the GPS System to find the meal she requested and click on it to give it to her. If you take too long, she will take a bite out of you! (Death).",
        section: "fnafhw2"
    },
    {
        name: "Virtual Shattered Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7f/Virtual_Shattered_Chica.png",
        description: "She will go around the Vent System, eating trash manufactured by the Trash Factory, so that it doesn't make the air in the building toxic. However, she ate some spoiled pizza last night and called in sick for work, therefore you'll have to do her job instead! Eat trash by clicking on it in the Vent System. Letting too much of it accumulate will make the toxic meter rise on its own.",
        section: "fnafhw2"
    },
    {
        name: "Virtual Funtime Foxy 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/78/Virtual_Funtime_Foxy_2.png",
        description: "Your flashlight will be replaced by a Flash Beacon. This will make it so the Flashlight would turn for a couple of seconds before becoming deactivated again. You can use it by pressing right click. However if you flash too much, Funtime Foxy will jumpscare you.",
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
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/ca/Trailer_Stage_Freddy.webp",
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
        name: "Blacklight Godzilla",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f5/Blacklight_Godzilla.png",
        description: "Whenever you move to or interact with anything on the Task System, there is a chance that Blacklight Godzilla will begin to manifest. As he manifests, the monitor will slightly turn into a blacklight hue the longer you remain engaged with the Task System interface. Quickly exit the Task System by moving to another system, then close the monitor to dissipate the blacklight hue. If you remain engaged with the Task System interface for too long after Blacklight Godzilla has fully manifested, he will kill you with a blinding blacklight atomic breath.",
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
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/52/OMC_High-Score_Toy_Chica.webp",
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
        name: "OMC Ringmaster Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4c/OMC_Ringmaster_Foxy.png",
        description: "OMC Faz-Coins will be scattered on the Task System. Collecting them will subtract 1 Faz-Coin instead of gaining one. At a random point during the night however, OMC Ringmaster Foxy will appear on the Light System. Have AI X 3 OMC Faz-Coins by the time he appears, or he'll jumpscare you.",
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
        name: "Nonexistence Augmented Plushtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0e/Nonexistence_Augmented_Plushtrap.png",
        description: "He will appear randomly in the Supply Closet and the Prop Storage camera from time to time. If he appears in the Prop Storage, control shock him via cameras, if he appears in the Supply Closet however, control shock him via the office. When it hits 4:AM, the roles will reverse. If you shock him wrongly or take too long, he'll end your night.",
        section: "ulcn"
    },
    {
        name: "Nonexistence Challenger Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a8/Nonexistence_Challenger_Fredbear.png",
        description: "He will be in your office. Where he will give you tasks to do each hour. (Ex: Hey can you turn on the Power A/C for me?) After completing his task he will reward you by adding 500 points to your score. If you miss one he will let you slide by without any punishment, but if you miss too many, then you will be punished by him, resulting by him taking your points off for each task you fail. (AI level X 100 points).",
        section: "ulcn"
    },
    {
        name: "Nonexistence Challenger Nightmare Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/41/Nonexistence_Challenger_Nightmare_Freddy.png",
        description: "He appears in the office, nothing is going to happen since his mechanic is completely useless.",
        section: "ulcn"
    },
    {
        name: "Optimized Popgoes 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d1/Optimized_Popgoes_2.webp",
        description: "He will be in the Duct System quickly moving towards your office. When he makes it to the opening he will pop out of the duct, quickly use the Neon Wall to push him back into the Duct System.",
        section: "ulcn"
    },
    {
        name: "Optimized Popgoes 3",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/62/Optimized_Popgoes_3.webp",
        description: "He will be in the Vent System slowly moving towards your office. When he makes it to the Vent opening use the Faz-Cam to send him back into the Vent System.",
        section: "ulcn"
    },
    {
        name: "Optimized Popgoes 4",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fb/Optimized_Popgoes_4.webp",
        description: "He will be on the GPS System making his way towards the building. When he makes it to the building he will walk right in and kill you. Just turn on the Radio Jammer once and a while to keep him at bay.",
        section: "ulcn"
    },
    {
        name: "Optimized Popgoes 5",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/70/Optimized_Popgoes_5.webp",
        description: "He sent you a picture of himself on the Task System, That’s nice! You will need to delete it by clicking it which will take a (AI level) amount of time.",
        section: "ulcn"
    },
    {
        name: "Optimized Popgoes 6",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d9/Optimized_Popgoes_6.webp",
        description: "He will go through the side house map on the Duct System. Use the door buttons to keep him out, otherwise he will end you.",
        section: "ulcn"
    },
    {
        name: "Optimized Popgoes 7",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a5/Optimized_Popgoes_7.webp",
        description: "He will be on the Light System for no reason. Just check up on him to keep him company.",
        section: "ulcn"
    },
    {
        name: "Optimized Popgoes Gang",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/dc/Optimized_Popgoes_Gang.webp",
        description: "???",
        section: "ulcn"
    },
    {
        name: "Buff Toy Moyai",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3c/Buff_Toy_Moyai.webp",
        description: "The Moyai will slowly roll through the vents. When it reaches your office, close the vent on your right to imitate his famous vine boom sound before he kills you.",
        section: "ulcn"
    },
    {
        name: "CHAOS Dreadbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1e/CHAOS_Dreadbear.webp",
        description: "Due to being the main antagonist of his debut game, he has full command over the roster behind the scenes. To unlayer the truth, you must find 3 hidden artifacts all over the place in the night. Not finding the artifacts before 6:AM will result in CHAOS Dreadbear restarting the night from the very beginning. If you manage to find them before 6:AM hits, you will be sent to a boss fight with CHAOS Dreadbear. Avoid his attacks and deal damage to him so you can finally win the night.",
        section: "ulcn"
    },
    {
        name: "Crewmate",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/24/Crewmate.webp",
        description: "Every hour, there will be a Fix Wires task in the Task System. Fix it before the next hour or you won't be able to set Vent Snares for the rest of the night! Task difficulty depends on the AI level.",
        section: "ulcn"
    },
    {
        name: "Roster Builder Redbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ee/Roster_Builder_Redbear.webp",
        description: "When he appears in your office, click on all the Floor and System buttons to get rid of him. Taking too long will send you back to the roster screen with all sections jumbled up.",
        section: "ulcn"
    },
    {
        name: "Spambit",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b4/Spambit.webp",
        description: "His shop will stay in The Sewers. Using Faz-Coins, you can buy items like Death Coins. However, if you try to buy a item without the required amount of Faz-Coins, he'll jumpscare you.",
        section: "ulcn"
    },
    {
        name: "Special Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e3/Special_Freddy_Resize.webp",
        description: "He'll be making very special food in the Grand Kitchen on Floor 7. When he's finished making food, he'll appear in your office with the very special food, and leave it on your desk. Unfortunately, he's coated the special food with special poison, so if you eat it, it'll kill you.",
        section: "ulcn"
    },
    {
        name: "Summer Frostbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/70/Summer_Frostbear.png",
        description: "He'll sit on your desk. Do not, under any circumstances drink him! If you click (drink) him, you will start hallucinating, raising your panic meter till you die! The only way to stop the effects is to use the Normal Pills.",
        section: "ulcn"
    },
    {
        name: "The Hobos",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2d/The_Hobos.webp",
        description: "They stay on the Light System. Sometimes, one of their heads will be colored red (because they're angry!!) and the flashlight will soothe their head. If you do not do it fast enough, they will start to drain your power twice as fast until you flash the respective head.",
        section: "ulcn"
    },
    {
        name: "The Slayer",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fd/The_Slayer.webp",
        description: "He will run back and forth between the left and right hall on F4. If he's on a different camera than these two, find him and shock him. The longer the Power Generator is on, the stronger he becomes.",
        section: "ulcn"
    },
    {
        name: "VR Guest",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4c/VR_Guest.webp",
        description: "He can appear in your office whenever you use the Shock Panel. When he does, you mustn't let the noise meter above 3, otherwise, VR Guest kills you the next time you use the Shock Panel.",
        section: "ulcn"
    },
    {
        name: "Withered Dr. Pepper Chicken FNAF",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/72/Withered_Dr_Pepper_Chicken_FNAF.webp",
        description: "When the fan is on for too long, various types of Fanart will begin to appear on various cameras. You must look at the Fanart to make it go away. If too much Fanart is summoned, you'll experience your end.",
        section: "ulcn"
    },
    {
        name: "The Pig",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7d/The_Pig.webp",
        description: "He's such a pig on Floor 1. Put your mask on to stop it.",
        section: "ulcn"
    },
    {
        name: "Gumball Scribblehands",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/97/Gumball_Scribblehands.png",
        description: "It would appear on top of the vent system radar, blocking your view. Use the Global Music box to make it go away.",
        section: "ulcn"
    },
    {
        name: "Ultra !2222",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/de/Ultra_%212222.webp",
        description: "If the usage meter is low for too long, then they will start to appear in the Glitch Floor and cover the view. Raise the meter to make them fade out.",
        section: "ulcn"
    },
    {
        name: "Ultra %_^^&",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/20/Ultra_%25_%5E%5E%26.webp",
        description: "Keeping the internet for too high will make them spawn into the Office, disabling your flashlight and controlled shock. Lower the internet to make them fade away.",
        section: "ulcn"
    },
    {
        name: "Ultra 8-Bit Baby",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c7/Ultra_8-Bit_Baby.webp",
        description: "She will randomly appear on your desk when pulling the monitor down. Do not click on her or she will kill you.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Plushtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d3/Ultra_Adventure_Plushtrap.webp",
        description: "He may trigger Toxic Bite if you're on the Light System. Getting your mouse caught will raise the toxic meter slowly for an AI amount of seconds.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Withered Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/31/Ultra_Adventure_Withered_Bonnie.webp",
        description: "He will be in your office turned off. When his eyes turn red, turn on the heater to make them turn off. If you don't turn on the heater in time, you die.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Withered Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/30/Ultra_Adventure_Withered_Freddy.webp",
        description: "He may appear in the Ice Caverns on Floor 7, singing. When he does, turn the Christmas Jukebox down, which is conveniently connected to his microphone, to shut him up. If he sings for too long, he'll make icicles fall from the celling, where one will conveniently hit the camera, disabling it for the rest of the night.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Withered Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/43/AdventureWitheredGoldenFreddyIcon.webp",
        description: "When you put off the mask, Ultra Adventure Withered Golden Freddy can appear in your office with some hallucinations of the withered heads. Quickly spam the change floors buttons (F1, F2, F3, F4, F5, F6, F7 and F8) to make him quit!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Withered Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3d/Ultra_Adventure_Withered_Chica.webp",
        description: "When you see her on the first floor, you need to click on the Wet Floor Sign, then she will leave.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Withered Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/cb/Ultra_Adventure_Withered_Foxy.webp",
        description: "He now likes your flashlight, so, if you shine your flashlight, he will go to your office! But you don't want him to kill you, use your Golden Flashlight to scare him now so that he doesn't unlock his Golden Ultra Adventure Withered Foxy form!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Withered Foxy 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/03/Ultra_Adventure_Withered_Foxy_2.webp",
        description: "Click on me to see my full description on the wiki!",
        section: "ulcn",
        link: "https://multiverse-custom-night.fandom.com/wiki/Ultra_Adventure_Withered_Foxy_2"
    },
    {
        name: "Ultra Adventure Toy Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b5/Ultra_Adventure_Toy_Chica.webp",
        description: "Multiple images of her asking if you won't get tired of her voice will appear on your screen. The more of them are on your screen, the more noise it'll cause. Simply click and drag them off your screen to get rid of them. If too many appear, your cursor will be locked into the center of your screen for AI seconds, and the noise meter will be set to the max.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Toy Freddy 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/10/Ultra_Adventure_Toy_Freddy_2.webp",
        description: "His figurine will be on Toy Freddy's desk in Parts & Service on Floor 1. The blowing of the fan reminds him of Mr. Hugs, which he dislikes. He will be visibly shaking if it affects him too much. Calm him down from time to time by booping his nose. If he gets too angry, he will somehow jump on your cursor and cause it to move uncontrollably throughout the night!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Toy Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1c/Ultra_Adventure_Toy_Bonnie.webp",
        description: "If he appears in the House Hallway on Floor 6, wear the mask!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Toy Bonnie 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/21/Ultra_Adventure_Toy_Bonnie_2.webp",
        description: "If he appears in the House Hallway on Floor 6, don't put on the mask until he leaves!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/bc/Ultra_Adventure_Springtrap.webp",
        description: "He is very lazy, and will just sit in your office, drinking a large tub of soda and playing MCN on his laptop. Shining the light on him will cause him to run a lap, giving you extra faz-coins when finished. However, due to his fitness, he runs very slow.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Shadow Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/dd/Ultra_Adventure_Shadow_Bonnie.webp",
        description: "Your monitor is already locked in from the very beginning of the night. To unlock it, find a textbox, and type in 'RWQQWR'",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Shadow Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/05/Ultra_Adventure_Shadow_Freddy.webp",
        description: "Using the Alarm System too much will make him appear in the Office, and use Waterhose on you, taking away all of your fazcoins and rupees.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Puppet",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/27/Ultra_Adventure_Puppet.webp",
        description: "He has a lame music box mechanic! Wind his Ultra Adventure music box on the Task System before he kills you!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Phantom BB",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9a/Ultra_Adventure_Phantom_BB.webp",
        description: "He'll be flying around on the Light System. If he hits your cursor, it'll be knocked back. If he hits it too many times, he'll destroy it!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Phantom Puppet",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/bc/Ultra_Adventure_Phantom_Puppet.webp",
        description: "If you are in a camera where the music box (cam 04) is playing, it will begin to appear on your screen, not allowing you to see it, you can change the camera so that it disappears.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Phantom Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/84/Ultra_Adventure_Phantom_Mangle.webp",
        description: "She will have a chance to pop out of the top vent in your office, where he is preparing to use Toxic Bite on you! When she's there, turn on the fan to make him go away, but if she succeeds, your toxic meter will go up by 10% for each bite.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Phantom Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b0/Ultra_Adventure_Phantom_Freddy.webp",
        description: "He will haunt your office, and will sometimes infect the Control Shock button to make sure that his pals don't get fizzed out. Use the lever at least 3 times to scare him away.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Phantom Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/36/Ultra_Adventure_Phantom_Foxy.webp",
        description: "When you're on a floor for too long, he will make all of the camera screens black. To stop this, switch to a different floor to fix it.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Phantom Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/53/Ultra_Adventure_Phantom_Chica.webp",
        description: "She will appear in the Left Door randomly. Quickly go to the Kitchen camera and change the music to make her leave. If she is still there for too long, she will use Sludge attack and make you move slower through the office!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Nightmare",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f5/Ultra_Adventure_Nightmare.webp",
        description: "If you hear him laugh, turn the Christmas Jukebox down before he kills you!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Nightmare Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4d/Ultra_Adventure_Nightmare_Freddy.webp",
        description: "He lost his Ultra Adventure Freddles at the start at the night! You'll have to go around the Maze System and find AI of his Freddles before the end of the night, or he'll kill you out of anger of losing his children!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Nightmare Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e6/Ultra_Adventure_Nightmare_Fredbear.webp",
        description: "If you hear him laugh, turn the Christmas Jukebox up before he kills you!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Nightmare Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/20/Ultra_Adventure_Nightmare_Bonnie.webp",
        description: "He'll send Pizza Wheel 2 down the GPS System. Use the forcefield to deflect them, or he'll cover a random GPS function with it, disabling it.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Nightmare Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0d/Ultra_Adventure_Nightmare_Foxy.webp",
        description: "He's creating his own Roster Builder! On the Task System, different icons for different characters will appear, and you'll have to turn their AI Value to 0 to get rid of them! If they stay for too long, that character will be enabled at whatever AI value they were at.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Nightmare Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d7/Ultra_Adventure_Nightmare_Chica.webp",
        description: "If one of her eyes appear, you need to see what eye is in the dark, if it's the gray eye, close the door or she will drop your oxygen! If it's the yellow eye, avoid closing the door on her or she will drop your oxygen anyways!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Nightmare BB",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/18/Ultra_Adventure_Nightmare_BB.webp",
        description: "He can appear in the Main Hall camera. When you use the F2 flashlight there, his eyes will be out of his face, you need to check on his eye color. If it's red, nothing will happen, if it's blue, you need to put on your mask, if it's green, use the control shock button in your office, and if it's yellow, quicky turn off the F2 light!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/01/Ultra_Adventure_Mangle.webp",
        description: "She will randomly appear in the Aquarium camera, cleaning the tank from the outside. Using the controlled shock when she is there will cause her to fall off of her ladder, and causing her bucket of water to fry a random Floor 4 camera (With the exception of the Aquarium of course).",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure JJ",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d6/Ultra_Adventure_JJ.webp",
        description: "She will be traversing the void. Why? I have no idea honestly. However, there will be a extremely rare occasion where she will have escaped the eternally dark void. If this almost impossible outcome ever comes true, she'll run through the entirety of Floor 1 at lightspeed. She will eventually appear in your left doorway. When this ever does happen, close the left door to get rid of her. It's as simple as that. However, if you somehow forget she is even there (Or are just very incompetent and can't deal with a single character), she will appear in your office. Then, she will summon a few random Ultra Custom Night Characters into the night. She will then disappear.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/ce/Ultra_Adventure_Golden_Freddy.webp",
        description: "If he appears in your office, press B to blo- I mean to clap in order to make him leave. Failure to do so will cause him to make sure that whenever the fan is on, time will slowly reverse.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Jack-O-Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f7/Ultra_Adventure_Jack-O-Bonnie.webp",
        description: "He LOVES Halloween! Unfortunately though, it is infact not Halloween. He'll be sitting in the pumpkin patch on Floor 5, patiently waiting for Halloween to come. If a character passes through, he'll get scared, and fall through a hole in the floor to your Office. This wouldn't normally be a issue, but since he's ON FIRE, he'll burn down everything in the Office! (including you.) So, once a character is about to enter the pumpkin patch, click on Ultra Adventure Jack-O-Bonnie to hide him behind a pumpkin!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Jack-O-Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/65/Ultra_Adventure_Jack-O-Chica.webp",
        description: "If her Ultra Adventure Jack-O-Lantern replaces one of the pumpkins in the Pumpkin Patch, spam click it to remove it! If it stays for too long, Ultra Adventure Jack-O-Chica will jumpscare you!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ee/Ultra_Adventure_Fredbear.webp",
        description: "Once per night he will appear in your office. When you see him, go to the Task System and click four buttons with the numbers '1 2 3 4' on them in that order to get rid of him.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Funtime Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/93/Ultra_Adventure_Funtime_Foxy.webp",
        description: "He will use Cosmic Song every time an odd number hour is hit, making a flurry of comets (about 12) fall from the top right of the screen. Letting your courser get hit by too many of them will cause you to get jumpscared!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Freddy 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3e/Ultra_Adventure_Freddy_2.webp",
        description: "He will continuously perform 'Mic Toss' if the Noise Meter is high. A mic will be thrown from the left to the right on your screen every (10-(AI/4)) until the Noise Meter is below 3. Hitting a mic with your cursor will make you deaf for (3+(AI/10)) seconds.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Fredbear 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f0/Ultra_Adventure_Fredbear_2.webp",
        description: "A Fredbear will appear somewhere in the Light System. You need to give him a red lamp to distract him, that way he can make shadows with his face for the fun of it. If you don't, he will just remove your points 1 by 1 until you give him the lamp!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/cb/Ultra_Adventure_Foxy.png",
        description: "He will be in the Vent System, use the vent snares to fend him off. He is not blocked off by the vent door, as he will kill you the moment he gets into your office.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Foxy 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9b/Ultra_Adventure_Foxy_2.webp",
        description: "He is just here to advertise the new Multiverse Custom Night update, you must close the ad by pressing the skip button or the ENTER key when it appears or uh, it will block your view, yeah that is annoying right? Not being able to see your game, making it more difficult to stop characters from killing you, yeah that should make your night super difficult! Survive the night to win!",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d1/Ultra_Adventure_Bonnie.webp",
        description: "He is confused on whether if he is either playing Happy Jam or Bash Jam in Floor 3. He will try to do both songs, unaware that both songs have side effects. Him playing Happy Jam will disable the Audio Lure on Floor 3, and him playing Bash Jam will cause the ability to turn off the cameras to not function. Light-Flash the camera he is at to make him stop.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c8/Ultra_Adventure_Chica.webp",
        description: "She walks around Floor 4, but you will not be able to see her, you will only see her Cupcakes, if you see a Cupcake, she will not let you change the cameras, the systems, the floors and she will not let you lower the monitor. You will have to use Controlled Shock to be able to move normally around the monitor, but she will use the Party Favors attack to heal herself, but since this attack does a little damage, it will lower your HP a little, if it reaches 0, you die.",
        section: "ulcn"
    },
    {
        name: "Ultra Adventure Balloon Boy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/12/Ultra_Adventure_Balloon_Boy.webp",
        description: "He'll be in the Grand Kitchen on Floor 7, eating all of the hot cheese! The more hot cheese he eats, the colder the building will become! Turn the Christmas Jukebox all the way up to distract him for a while!",
        section: "ulcn"
    },
    {
        name: "Ultra 8-Bit Baby 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/91/Ultra_8-Bit_Baby_2.webp",
        description: "She will make your night endless unless you beat her minigame by clicking her in the office. In the minigame, you must play a short section of her music box in the right tone as the one being showcased. Not completing the minigame right will make her leave, and will continue to make the night endless until you die.",
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
        name: "Purple Man",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b5/PurpleMale.png",
        description: "He appears time and time again in your office and will go and help you to mute Phone Guy for you, though it will only last for a minute.",
        section: "gmod"
    },
    {
        name: "Purple87Guy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/ca/Purple87Guy.png",
        description: "He is confused on the fact he never appeared in the events map, go and explain a good reason why he was left out, giving him a bad reason would result him killing you.",
        section: "gmod"
    },
    {
        name: "Old Purple Guy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b8/OldPurpleGuy.png",
        description: "Many animatronic parts will scatter and flood your entire office, put the parts in a container to stop the flow and prevent yourself from drowning.",
        section: "gmod"
    },
    {
        name: "Purple Male",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/80/PurpleMan.png",
        description: "He will be at Floor 3 relaxing, but after Dee-Dee summons another character, he will go and try to disable the character's AI but he doesn't know who it is, help him by telling him what character Dee-Dee activated so he can go and disable the character's AI, failing would result him disabling all your cameras for 3 minutes.",
        section: "gmod"
    },
    {
        name: "Purple Person",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e4/PurplePerson.png",
        description: "He has send Black Mesa hitmen after you and will appear in your office, try to stop and kill them by using a gun he gave you and shoot all of the hitmen in the office, failing this would lead to death.",
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
        name: "NPC Voice Chat",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f3/NPCVoiceChat.png",
        description: "If you have this character turned on, then every character selected in the night will use the voice chat. It doesn't raise the noise meter, but it is pretty distracting, especially when dealing with sound related characters. The higher the AI is, the more frequently characters will voice chat.",
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
        name: "SCP-169",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0f/SCP-169.png",
        description: "SCP-169 is way to large to fit inside the building, so instead it sits where it original was, sleeping. If too much noise is made SCP-169 will awake from its slumber, and if noise is still being after that or just after some time, SCP-169 will attack the entire building by sending a tsunami! To make sure this doesn't happen, make as little noise as possible, and have the Global Music Box turned on, specifically to 'Swan Lake: Conclusion' to make SCP-169 fall back asleep faster.",
        section: "scp"
    },
    {
        name: "SCP-173",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9d/SCP-173.png",
        description: "SCP-173 will slowly advance to your office of Floor 4, looking at him on the cameras will stop him from moving any further. If he manages to reach the entrance, he will not reset and wait until the door is open and you have the monitor up to slip in.",
        section: "scp"
    },
    {
        name: "SCP-205",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3d/SCP-205.png",
        description: "The flashlight on the Light System has been replaced by SCP-205, which will always start being off. To turn SCP-205 on, click the left or right buttons on the sides to turn one instance on, illuminating half of the room. A woman's silhouette will appear on either one of the flood lamps, make sure the light is on for her before closing the monitor. If horned men appear, quickly turn off the flood lamp that shown on them, otherwise you will die. If Virtual Funtime Foxy is active, the buttons will create a quick flash instead, and if the horned men appear, flash the opposite light where they were.",
        section: "scp"
    },
    {
        name: "SCP-215",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/54/SCP-215.png",
        description: "SCP-215 will be attached to the Freddy Fazbear Mask the entire night. Wearing the mask for too long will cause paranoia, making you believe that certain objects in your office are sentient, raising the panic meter overtime. The time it takes for the panic meter to start going up is reset every time the mask is put on.",
        section: "scp"
    },
    {
        name: "SCP-498",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/35/SCP-498.png",
        description: "Every 45 seconds, SCP-498 will go off. Check the cameras between Floor 1 - 4 to find SCP-498, then hit snooze to reset it. Every 10 seconds that SCP-498 is not found, it will get louder overtime, raising the noise meter. If SCP-498 gets too loud, it will temporarily deafen you. If it gets even louder past that point, it will eventually kill you.",
        section: "scp"
    },
    {
        name: "SCP-500",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fd/SCP-500.png",
        description: "SCP-500 will be added to the pills shelf. If a pill from SCP-500 is taken, all meters and effects will be reset, examples being the Panic Meter and the bright yellow effects from Jumpscare Golden Freddy, as well as returning health back to 100% from healthbars for characters with boss fights, such as Mini-P. The higher the AI level is, the less pills there will be, and SCP-500 cannot be restocked.",
        section: "scp"
    },
    {
        name: "SCP-513",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4b/SCP-513.png",
        description: "If you clap 3 times in 2 seconds, you'll ring SCP-513. After that, SCP-513-1 will appear on the cameras and quickly disappear once seen, raising your panic meter by a little bit each time he's seen.",
        section: "scp"
    },
    {
        name: "SCP-682",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7b/682.png",
        description: "While SCP-682 can't be seen through out the entire night doesn't mean that it isn't there. He'll wander around the building, occasionally roaring and shaking the screen. At one point, he'll attack one of your tools, whether that'd be a door, video, audio, ventilation, systems, or vent snare which can't be fixed until 15 seconds later (with the exception of the ventilation). At 3AM, SCP-682 will break out of the building and have a fight with MTF helicopters, however, the MTF will always loose. Shortly after this fight, Alpha-Warheads will be detonated 90 seconds later, quickly search every camera and floor to find the button that disables it, after which MTF helicopters will return to recontain SCP-682, and SCP-682 will resume wreaking havoc on the building.",
        section: "scp"
    },
    {
        name: "SCP-714",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/ce/SCP-714.png",
        description: "You can wear SCP-714 at any time during the night by clicking it on the desk, doing so will overtime wear you out as well as slowing you down and making your vision darker, however, wearing SCP-714 will block the Panic Meter and Toxicity Meter from rising, while also keeping the Oxygen Meter at the same level. If a non-lethal character jumpscares you, there's a chance that they'll take it away from you for the rest of the night.",
        section: "scp"
    },
    {
        name: "SCP-867",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/10/SCP-867.png",
        description: "On certain occasions, one of the trees on the Lumber Co. floor will be replaced with SCP-867. If SCP-867 grows fully, it'll shoot it's needles into you, causing the tree to grow inside and eventually cause your death! Cut it down before it grows to it's full size!",
        section: "scp"
    },
    {
        name: "SCP-895",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fe/SCP-895.png",
        description: "When viewing the cameras, SCP-895 may sometimes appear on one of the cameras. When it does, quickly change the camera otherwise visual hallucinations will appear on the monitor and raise your panic meter.",
        section: "scp"
    },
    {
        name: "SCP-914",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/09/SCP-914.png",
        description: "Click on me to see my full description on the wiki!",
        section: "scp",
        link: "https://multiverse-custom-night.fandom.com/wiki/SCP-914"
    },
    {
        name: "SCP-1128",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/dd/SCP-1128.png",
        description: "Before the night started, you were affected by SCP-1128. Staring too long at the Aquarium or Bathroom camera will cause you to see shadows of SCP-1128 in the water swimming around, looking at these shadows for too long will cause your panic meter to rise. Occasionally, staring at SCP-1128 will cause him to make a sound, slowly raising the panic meter more even when you're not looking at SCP-1128.",
        section: "scp"
    },
    {
        name: "SCP-1471-A",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/21/SCP-1471.png",
        description: "SCP-1471-A will sometimes try to install 'MalO ver1.0.0' on your monitor, hit cancel when the download pops up. If you fail to hit cancel before it downloads, SCP-1471-A will occasionally appear on your camera monitor, the longer you look at them, the more your panic meter starts to rise!",
        section: "scp"
    },
    {
        name: "SCP-1733",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e6/SCP-1733.png",
        description: "A new rewind button is added on the monitor, pressing it and holding it will allow you to go a few seconds or minutes back into the night to fix any mistakes you've made. The more you press this button and go back, the more the characters selected for the night remember each playback, and grow more aggressive and desperate to end your run, getting faster each time. Eventually, if you hit the rewind button an amount of times, the lighting of all cameras and your office will shift to a deep reddish-hue.",
        section: "scp"
    },
    {
        name: "SCP-001-J - 'Sheaf of Playas'",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/bd/SheafofPlayas.png",
        description: "Love is in the air for everyone in MCN, this applies to animatronics to humans and to anomalies! However, they're not sure how to get to each other, so it's up to you to help them. When a new notification pops up in the corner of your screen, one new character will ask you to create a page for them, and they'll pay you a somewhat handsome faz-coin prize. When you're writing the page, actually give them a good description and describe their personality traits, if you make them look bad, they'll kill you instead.",
        section: "scp"
    },
    {
        name: "SCP-001-J",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/03/SCP-001-J.png",
        description: "SCP-001-J will sit on the far left side of your office for the entire night, push it if you want to die.",
        section: "scp"
    },
    {
        name: "SCP-001½-J",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a4/SCP-001andaahalf-J.png",
        description: "SCP-001½-J will sit on the far right side of your office for the entire night, push it to restart the night.",
        section: "scp"
    },
    {
        name: "SCP-420-J",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e1/420J.png",
        description: "Listen, dude, if your not hitting this stuff constantly, what are you doing?! You're gonna start feelin' tired and eventually pass out, dude! So here's the deal, you gotta hit this stuff about every... hour... or so, so you don't pass out! But there is a side effect to this! You smoke that doobie and you'll see some craaazy stuff, hahahahahahaha! Talk to you later, man!",
        section: "scp"
    },
    {
        name: "SCP-789-J",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ee/SCP-789-J.png",
        description: "Anytime you check Cam 6 (on any floor), SCP-789-J will create a loud and auditory disturbance.",
        section: "scp"
    },
    {
        name: "Dr. Bright's Killer Animatronics",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d0/KillerRobot.png",
        description: "Just because Dr. Bright has been banned from commissioning animatronics, doesn't mean he can't create them on his own, however, he needs some cash, and the only person to look forward towards is you. The more Faz-Coins you collect, the more Dr. Bright will appear on your monitor, obscuring your vision and blocking the camera, begging for some of your Faz-Coins for his project, the amount he asks for also gets more expensive the more Faz-Coins you have, but it wont equal more than the amount you already have. If you decide to give Dr. Bright some money, he'll build one part of each of the animatronics on the Light System. Once all of the animatronics have been constructed, they'll kill you, oh well.",
        section: "scp"
    },
    {
        name: "Wendigoon SCP-001",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e1/Wendigoon_SCP_001.webp",
        description: "During the night, they will not let you eat any sort of food at all! Nothing slips by them! If any food-like characters are in your night like Fredburger, Pickles or Cheesehead, they will take away all the points from those characters and throw them all away! If you want to get your points back, search the cameras and try to find Point Coins! Once you collect one, the Point Value from one of the active food characters in your night will be re-added to your score! Search the cameras for all the Point Coins to get all your lost points back before your night ends!",
        section: "scp"
    },
    {
        name: "Epsilon-11 'Nine-Tailed Fox'",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a3/NineTailedFox.png",
        description: "At a random point in the night, an intercom sound will play saying that Epsilon-11 has entered the building, while this raises the noise meter, it's heard all through out the building, so no animatronics will go to your location or become aggravated. If any SCPs are selected for the night, Epsilon-11 will recontain them and remove them from the night. On first glance, Epsilon-11 might be seen as the good guys, however you're a Class-D, and if they see any Class-D, they'll terminate them. They come from Floor 1 and travel to different floors as well, if you see an MTF unit at your door, close it, if you don't they'll walk in and kill you. If the door is closed an MTF unit might call to control for the door to be opened, which it will. Instead, you need to pull the lever in your office to disable all controls, which at that point the MTF can't open the door and will try to get inside another way, just note that when you turn off control, you can't close doors either!",
        section: "scp"
    },
    {
        name: "The Femur Breaker",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b9/FemurBreaker.png",
        description: "The Femur Breaker acts as a universal audio-lure against sound sensitive animatronics on all floors. Press the 'Activate Femur Breaker' button on your camera monitor to activate the Femur Breaker, just make sure you flipped the lever in your office first before activating it to turn on the buildings PA system, otherwise it won't work. The Femur Breaker only has one use, so use it in a pinch! The Femur Breaker works especially on SCP-106, which will remove him from the night. The higher the AI level, the slower the animatronics will be lured towards it.",
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
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/00/HideDozerIsHereIcon.png",
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
        name: "SEEKINGWALL!!!!",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/98/SEEKING_WALL.png",
        description: "It would appear on the Fury's Rage Floor. When it appears it would rush you. Quickly block it as otherwise you'll die.",
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
        name: "Retro Rush",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/be/Retro_Rush.png",
        description: "It would appear in any of the Floor 2 cameras. Once you hear the sound cue, close the monitor and put on the mask as otherwise you'll die.",
        section: "doors"
    },
    {
        name: "Retro Eyes",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/26/Retro_Eyes.png",
        description: "It would appear over one of the vent snares. if you have the vent snare on top of it, the Exposure meter will increase.",
        section: "doors"
    },
    {
        name: "Retro Screech",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f5/Retro_Screech.png",
        description: "It will shoot out a rocket launcher shot. Keep both doors open as if it hits one of the doors, it will become broken and unable to be closed.",
        section: "doors"
    },
    {
        name: "Retro Ambush",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f8/Retro_Ambush.png",
        description: "It appears in the GPS System, replacing your avatar. Quickly close the monitor and put on the mask as otherwise you'll die.",
        section: "doors"
    },
    {
        name: "DRAKOBLOXXER",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d0/DRAKOBLOXXER.png",
        description: "A roblox obby would appear as a seperate screen from time to time. Complete the obby in the time limit as if you run out of time, DRAKOBLOXXER is spawned and it would kill you.",
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
        name: "TPRR Teaser Nightmare Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b4/TPRR_Teaser_Nightmare_Fredbear.png",
        description: "His eyes will appear in both doorways. Alternate between the left and right House map doors to fend him off!",
        section: "tprr"
    },
    {
        name: "TPRR Withered Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/42/TPRR_Withered_Bonnie.png",
        description: "If the temperature is below 75%, he will rapidly appear in your office. Spam your mask move until the temperature is high enough. However, even though the temperature will be high, he still has a chance to appear in your room. Although he will be less aggressive...",
        section: "tprr"
    },
    {
        name: "TPRR Withered Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/62/TPRR_Withered_Foxy.png",
        description: "He's running everywhere. Quickly track him down, and turn on your UV Flashlight. This will make him disappear for the rest of the night. Not doing so by 2:AM will make you die by him.",
        section: "tprr"
    },
    {
        name: "TPRR Withered Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/07/TPRR_Withered_Freddy.png",
        description: "He's been hired to advertise some random toy company in London. Sometimes, an ad for the company will appear on the top TV. You need to wait 30 seconds for the ad to end, and the ads can increase the noise meter quite a bit. However, you can click on the TV to skip the ad, but TPRR Withered Freddy doesn't appreciate it if you do this too many times. Skipping the ads too much will lead to TPRR Withered Freddy ending your run. Having the Power Generator on will increase the chance of an ad appearing.",
        section: "tprr"
    },
    {
        name: "TPRR Withered Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/27/TPRR_Withered_Golden_Freddy.png",
        description: "He may occasionally fade onto your screen, click the middle TV and then click the 'Stop TPRR WG Freddy Button' to stop him in his tracks otherwise he'll jumpscare you!",
        section: "tprr"
    },
    {
        name: "TPRR Withered Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1e/TPRR_Withered_Chica.png",
        description: "She works in 3 phases throughout the night. At 12:AM, she approaches from the vents. Use the Vent Snares or Front Vent Door to stop her from getting in. At 2:AM, she approaches from the hallways or the side vent. She doesn't appear on the cameras, through the doors, and side vent. Listen to her audio garble and shut the appropriate door/vent. At 4:AM, she's permanently in the office now, but she'll give you a chance. There's a new button in the Kitchen called 'Make Pizza.' Press it, and a pizza will be made on your desk. Drag the pizza into her mouth and she will leave. If she gets in through the vents, doors, or if you don't give her the pizza by 6:AM, she will jumpscare you in any scenario.",
        section: "tprr"
    },
    {
        name: "TPRR Plushtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/74/TPRR_Plushtrap.png",
        description: "He will try to leave the building to touch some grass, however his chair has been anchored to the point where he wouldn't take it with him, you can go to the Task System and click on the task 'Unanchor Chair' once the task is complete he would actually leave for the rest of the night and even give you his point value, if he isn't unanchored by 4AM, he will kill you.",
        section: "tprr"
    },
    {
        name: "TPRR Phantom BB",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/00/TPRR_Phantom_BB.png",
        description: "His teeth are completely rotten! You must stop him from going to the pizza store at the GPS System, as that will make his tooth decay worse! If he makes it to the store, he will jumpscare you! You can use the Forcefield to block him from going to the pizza store, but 2000 points will be removed! (not really)",
        section: "tprr"
    },
    {
        name: "TPRR Phantom Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8d/TPRR_Phantom_Bonnie.png",
        description: "Every time you flip up your monitor, your screen turns slightly more blue. When you fix a system error on your monitor, the blue hue resets.",
        section: "tprr"
    },
    {
        name: "TPRR Phantom Puppet",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a6/TPRR_Phantom_Puppet.png",
        description: "He will start fading in on the camera you most recently looked at. If he fully fades in he'll appear in your office, staring at you and raising the noise meter for a lengthy amount of time. You can stop him from fading in by looking at a system or looking at your office instead.",
        section: "tprr"
    },
    {
        name: "TPRR Phantom Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c3/TPRR_Phantom_Freddy.png",
        description: "You won't receive TPRR Phantom Freddy's point value. He'll be in your office the whole night, bragging about how he can wiggle his eyebrows better than you can. There is a wiggle meter in the top left corner. You can type 'Wiggle' to increase the wiggle meter. When your wiggle meter reaches maximum, he'll challenge you to an eye wiggling contest. Time will stop (So will the other opponents in your night) and you will need to rapidly hit the space bar to increase your chance in winning the contest. If you beat TPRR Phantom Freddy, time will unpause and he will give you a disappointed look before walking sadly out of your office. You will then gain his point value. If you lose, he will just start bragging again. You will not receive the point value.",
        section: "tprr"
    },
    {
        name: "Retro Lefty",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/22/Retro_Lefty.webp",
        description: "Due to Retro Marionette being remodeled while inside of him, he's dead. This means he'll take away AI points instead of giving them.",
        section: "tprr"
    },
    {
        name: "Retro Withered Spring Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/54/Retro_Withered_Spring_Bonnie.png",
        description: "At some point around 2 AM, he will appear on the Task System because he needs help with a blood decal sitting in his mouth, you can take a 'Decal Deleter' tool and place it directly where the blood decal is, once it is removed he will leave, but if it hasn't been done by 4 AM he will kill you.",
        section: "tprr"
    },
    {
        name: "Retro Shamrock Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/50/Retro_Shamrock_Freddy.png",
        description: "Four-Leaf clovers will grow in the Lumber Co. Click on a fully grown one to receive 1% power. Taking too many at once or not taking one every hour will enrage Retro Shamrock Freddy, causing a disturbance in the ground in Lumber Co. Some of the dirt will end up in the office, causing you to involuntarily breathe it in which will slowly drain your oxygen and raise the Toxic Meter.",
        section: "tprr"
    },
    {
        name: "Retro Phantom Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/21/Retro_Phantom_Mangle.png",
        description: "She will infect the F4 Controlled Shock and rust it to oblivion. The button having a rusted texture is a sure sign to know when that happens. Pressing the button when it is rusted will instead shock your power meter, draining it by a few percent. After a while, he will un-rust that button and move to another one.",
        section: "tprr"
    },
    {
        name: "Retro Mangle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/ad/Retro_Mangle.webp",
        description: "She longs for the old days to return! In order to achieve this, he'll have to crawl through Floor 2, and reach the Time Turner all the way in Parts & Service. If you see her glowing white eye on any Floor 2 camera, shine the Flashlight on him to stall him. If he reaches Parts & Services, she'll start to rewind time to 2016, and since Multiverse Custom Night didn't exist back then, the fabric of this world will start to crumble!",
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
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a3/Doodle_Freddy.png",
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
        name: "The Man in The Suit",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9c/The_Man_In_The_Suit_Revamp.png",
        description: "Sometimes during your night, the lights in your office will turn off. This means he is in the room with you. Quickly use your flashlight and find him in your office and hold your light on him to scare him away! Otherwise . . .",
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
        name: "Black-and-White Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2d/B%26W_Chica.png",
        description: "If she appears in your office, it will turn black-and-white. If you do anything (open camera, change mode, turn on flashlight, open and close doors, etc.), you will die. She will leave after a short time.",
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
        description: "Click on me to see my full description on the wiki!",
        section: "oo",
        link: "https://multiverse-custom-night.fandom.com/wiki/The_Averaged"
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
    {
        name: "Management Wanted Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/60/MW_Freddy_Fazbear.png",
        description: "The W and F shortcuts for the vent doors don't work anymore, instead, you have to use the conveniently placed door levers there to close them.",
        section: "mc"
    },
    {
        name: "G1 Megatron",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7a/G1_Megatron.png",
        description: "He will be on floor 4, attempting to sabotage you depending on which room he's in, or just trying to kill you. You can cause him to move to another camera by using a controlled shock, but he'll move on his own too. If he's at one of the halls or the vent, using a controlled shock with the corresponding door open will cause you to die. Oxygen storage: Drains oxygen slowly. Prop storage: Blocks access to the prize counter. Left Closet: Forces the left duct open. Right Closet: Forces the right duct open. Aquarium: He will attempt to break the glass, flooding the building and causing you to get springlocked if you use the mask. Use a controlled shock to prevent this. Left/Right Hall: Close the corresponding door or he'll kill you. Vent: Close the front vent or he'll kill you.",
        section: "tf"
    },
    {
        name: "G1 Soundwave",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/76/G1_Soundwave.png",
        description: "He will be on your desk recording your night. You must change the noise meter (changing levels or source of noise) at least once per hour, or he will have nothing to record and he'll just kill you instead.",
        section: "tf"
    },
    {
        name: "G1 Shockwave",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/75/G1_Shockwave.png",
        description: "There will be 25 Energon cubes scattered throughout random cameras, and a space bridge on the task system. If you click an Energon cube, it will be sent to the space bridge. You can activate the space bridge at the cost of 5% power, and it will send all Energon cubes in it to Cybertron. You must send at least AI Energon cubes to Cybertron before the end of the night, or Shockwave will kill you. The space bridge has a limit of 5 Energon cubes at once, however.",
        section: "tf"
    },
    {
        name: "G1 Thundercracker",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/86/G1_Thundercracker.png",
        description: "He’ll sometimes fly through the GPS system. You need to use the forcefield while he’s nearby or the noise meter will get maxed out!",
        section: "tf"
    },
    {
        name: "G1 Skywarp",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/70/G1_Skywarp.png",
        description: "He’ll sometimes teleport into the GPS system. While he’s there, don’t use the lure or you’ll lure him towards you. If he reaches you, it’s game over. He’ll disappear on his own given enough time.",
        section: "tf"
    },
    {
        name: "G1 Rainmakers",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d1/G1_Rainmakers.png",
        description: "They will appear on the Fury’s Rage floor together once per night, creating a storm that weakens your defence, normal, and special attacks. It will last 1 in-game hour. The higher the AI level, the bigger the stat debuffs.",
        section: "tf"
    },
    {
        name: "G1 Galvatron",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/14/G1_Galvatron.png",
        description: "After too many uses of the controlled shock (either office or f4), he will appear on Floor 2, and will begin to make his way to either one of the air vents. He can be slowed down by the GMB. If he’s in the right vent, close the right door, If he’s in the left vent, close the left door. He will remove 2% power and reset back to before you used the controlled shock. If both doors are closed, he will remove 5% power instead of 2%.",
        section: "tf"
    },
    {
        name: "G1 Cyclonus",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e4/Cyclonus_Revamp.png",
        description: "He will roam around the Maze System. If he gets to you, it's game over. He is not fooled by the decoy. If you are outside his radius, he will continue in the direction he last saw you in. at the start of the night, he will move randomly, and he will also move randomly if you are outside his radius for long enough. Detection Radius: 3 Tiles.",
        section: "tf"
    },
    {
        name: "G1 Wreck-Gar",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/74/G1_Wreck-Gar.png",
        description: "Once per night, the TVs will show the big broadcast of 2006. You must take a normal pill and then turn off the TV, or 5 random characters will be added to your night!",
        section: "tf"
    },
    {
        name: "Animated Beachcomber",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4f/Animated_Beachcomber.png",
        description: "He will be on Floor 3, messing around with the Audio Lures and replace them with his own music. His music will not work on any character since it is not an affective lure. To fix the Audio Lure, find him on a F3 camera and light-flash him.",
        section: "tf"
    },
    {
        name: "Animated Blurr",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4d/Animated_Blurr.png",
        description: "He will be on the GPS System, but he's not actually there but rather on a seperate kind of maze with a circle like exit which you can toggle between, if he reaches the exit he will appear in your office just so he can start yapping for the rest of the night, raising the noise meter, you can double click on a button to close the door and if you had him cornered with both doors closed with no escape, press the 'CRUSH' button to kill the speedy blue racer! but you won't get any Faz-Coins out of him.",
        section: "tf"
    },
    {
        name: "Animated Lugnut",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e3/Animated_Lugnut.png",
        description: "He will stay in your office, sitting in front of your desk. Thrice per night, his eyes will glow red. Use the controlled shock before he jumpscares you.",
        section: "tf"
    },
    {
        name: "Animated Megatron",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/45/Animated_Megatron.png",
        description: "He will lurk in the top of the GPS System. At random times, he'll transform into his vehicle mode and start blasting at your forcefield until it breaks. He only appear if you use the alarm on floor 8 too often.",
        section: "tf"
    },
    {
        name: "Animated Perceptor",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0e/Animated_Perceptor.png",
        description: "Selecting an office equipment with the cursor instead of the function keys may disable it for a short while.",
        section: "tf"
    },
    {
        name: "Animated Shockwave",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/81/Animated_Shockwave.png",
        description: "He crawls in the duct system, and will always head towards the left duct exit. Use the lure to send him away from that duct, otherwise he will kill you.",
        section: "tf"
    },
    {
        name: "Animated Starscream",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/cb/Animated_Starscream.png",
        description: "He crawls in the Duct System, and will always head towards the right duct exit. Use the Heater to send him away from that duct exit before he kills you.",
        section: "tf"
    },
    {
        name: "2005 IDW Scrapper",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e3/2005_IDW_Scrapper.png",
        description: "The light of the flashlight may duplicate as a mirrored light, adding an extra bar of usage and can affect light-sensitive characters. Fuse the two lights into one by keeping them in the center of the screen for a short time until you hear an energy sound cue.",
        section: "tf"
    },
    {
        name: "Animated Swindle",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e0/Animated_Swindle.png",
        description: "Any time you buy something in the Prize Counter, he will replace the bought item with an action figure of himself. Light-Flash that camera to send those figures away. Buying a figure will cause a piece of Swindle to appear in your office. Buying too many figures will cause Swindle to fully put himself together and kill you.",
        section: "tf"
    },
    {
        name: "Animated Blitzwing",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d7/Animated_Blitzwing.png",
        description: "There will be a Blitzwing figurine on your desk, and Blitzwing will appear on the GPS System. When you put down the monitor, the Blitzwing figurine will change the face it's showing. When it has a specific face, you must activate the corresponding mode, or Blitzwing will move closer on the GPS System. He can be slowed down by the O.R.C.A Device, however. If he reaches you, it's game over. Fiery Blitzwing: Power A/C. Icy Blitzwing: Heater. Random Blitzwing: Global Music Box.",
        section: "tf"
    },
    {
        name: "The Mind-Fractured Mistake",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d4/Lord_Maddox.png",
        description: "Turning him on will somehow cause every characters AI difficulty up to 2x the max AI level. That means that his 2x multiplier causes character AI to go to 40! This is very concerning as this means that your night will literally become a living hell than ever before. What did you do? Why are they so aggressive all of a sudden? I don't think its that important... unless...you-",
        section: "wmtc"
    },
    {
        name: "Captain Olimar",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c5/Captain_Olimar.png",
        description: "He would go to either the left or right door. Once there he would use his whistle. Close the door on the side you hear the whistle. otherwise you die.",
        section: "pikmin"
    },
    {
        name: "Flies",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/76/Flies.png",
        description: "They would be added one by one onto your screen when the toxic meter rises. They don't do anything except be distractions.",
        section: "pikmin"
    },
    {
        name: "Character A",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7a/Character_A.png",
        description: "He would go through the vents. However, he is completely invisible to the map. You'öö only know he's there when the map gets replaced an image of him. Close the vent door otherwise you'll be jumpscared.",
        section: "pikmin"
    },
    {
        name: "Character D",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/71/Character_D.png",
        description: "Due to him being 'Dead' at the start of the night, he can't attack you. However, he can mess with the meters by making them randomly change their values.",
        section: "pikmin"
    },
    {
        name: "Sketch Bulborb",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0c/Sketch_Bulborb.png",
        description: "It would be in your office however he won't attack you because its a chill creature. However, you must keep the office below 80° otherwise it will kill you.",
        section: "pikmin"
    },
    {
        name: "Remembered Old Buddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/37/Remembered_Old_Buddy.png",
        description: "It would be on your desk. When its lenses turn green, use the controlled shock as it would waste power when the lenses are green.",
        section: "pikmin"
    },
    {
        name: "Louie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f3/Louie.png",
        description: "He would be at the Kitchen Camera, making Bulborb filets. when he comes to your office, make sure to eat his meal. However it causes slight food poisoning and increases the toxicity meter. If you dont eat his meal the 2nd time he appears. he will get pissed and kill you.",
        section: "pikmin"
    },
    {
        name: "Yellow Wollywog",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/63/Yellow_wollywog.png",
        description: "If your mouse cursor is below 25% of the screen, Yellow wollywog has a chance to appear which means you'll die.",
        section: "pikmin"
    },
    {
        name: "Gamepad User & Attraction Pikmin",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a4/Gamepad_User_%26_Attraction_Pikmin.png",
        description: "He would throw one of the pikmin into either duct, alongside this, there is a orb on the desk with it either being, red, yellow or blue which you can change via the + button on the Numberpad. change the color to the pikmin he throws, otherwise you'll die.",
        section: "pikmin"
    },
    {
        name: "Lord Shen",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6b/Lord_Shen_Icon_Revamp.webp",
        description: "Throughout the night, he will fling his weapons across the screen. His Guan Dao will go up and down, and his throwing knives will go left and right. Getting hit by them at least 5 times will result in death.",
        section: "kfp2"
    },
    {
        name: "Shen's Parents",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/35/Shen%27s_Parents_Revamp.png",
        description: "They are still sulking on their son's banishment in the Master Bedroom camera in Floor 5. You must constantly make them happy by clicking on them. If they become too depressed, they will die of heartbreak, and their ghosts will haunt you to death for breaking their promise.",
        section: "kfp2"
    },
    {
        name: "Shadow Puppet Shen",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/08/Shadow_Puppet_Shen_Revamp.png",
        description: "He will be making powder for his firework cannons in the Basement. Sometimes the smoke will enter your office, in which you must turn on the fan and use the Power A/C to get the smoke out of the room. If the smoke stays, it will decrease your oxygen.",
        section: "kfp2"
    },
    {
        name: "Yin-Yang Lord Shen",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/24/Yin-Yang_Lord_Shen.png",
        description: "There will be a black border covering half of every camera on Floor 4. You can click on the black border to switch the other half of the camera for you to see.",
        section: "kfp2"
    },
    {
        name: "Final Battle Lord Shen",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b7/Final_Battle_LS_Revamp.png",
        description: "Click on me to see my full description on the wiki!",
        section: "kfp2",
        link: "https://multiverse-custom-night.fandom.com/wiki/Final_Battle_Lord_Shen"
    },
    {
        name: "HE BF",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a9/63.png",
        description: "Everytime you change the Fan State, he will do the 'Hey!', that will raise the Noise Meter for one second! (like clapping) You can't avoid it.",
        section: "he"
    },
    {
        name: "HE BF (Miss)",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/86/64.png",
        description: "Several notes will fall from the Task System, click the arrow buttons in the exact moment to avoid HE Miss BF raise the Noise Meter for one second! If you fail too much, he will end your run by raising the Toxic Meter!",
        section: "he"
    },
    {
        name: "HE BF Colors Crew",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/20/65.png",
        description: "Click on me to see my full description on the wiki!",
        section: "he",
        link: "https://multiverse-custom-night.fandom.com/wiki/HE_BF_Colors_Crew"
    },
    {
        name: "HE Bambi",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4a/1.png",
        description: "He will throw multiple phones through the Front Vent Door. If you close the door, the phones will break it, instead, use the Shakelight or Straplight in the Front Vent door! Every phone that hits you depletes -10 HP.",
        section: "he"
    },
    {
        name: "HE Bambi (Relaxed)",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1f/69.png",
        description: "He will appear in the office, but he will not kill you, instead, he will remove all of your points of your night one by one! Quickly shoot him with the Fazer Blaster to make him leave and stop him from stealing your points! You need to be fast because you will not recover the lost points.",
        section: "he"
    },
    {
        name: "Upheaval Bambi",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/45/2_2.png",
        description: "He will walk around Floor 2. You can see his eyes in the darkness. Every time you flash the cam he is at, he will go back one step. Avoid him going into the elevator to survive! If he reaches one of the vents, closing the corresponding doors or doing anything else will not work, just flash him. But if you flash him too many times, he will glitch more and more. If he glitches too much, the game will crash.",
        section: "he"
    },
    {
        name: "Conbi",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/de/Conbi.png",
        description: "His eye will appear in the darkness of left door. Quickly use the Golden Flashlight to make him leave! But, everytime you shine him, he will disable your Golden Flashlight for several seconds. Don't close the door or he will disable it for the rest of the night! If you don't shine him, he will kill you.",
        section: "he"
    },
    {
        name: "Manbi Phase 1",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/10/3.png",
        description: "He will appear in one of your doors, you need to close all doors except the one where he is.",
        section: "he"
    },
    {
        name: "Manbi Phase 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/09/4.png",
        description: "He wants to give you a hug, but with those hands, he can't enter the office. An earthquake will happen, this will make him go inside. But YOU FELL FOR THE OLDEST TRICK! Actually he wants KILL YOU! That happened because you didn't use the Shakelight to make him go off!",
        section: "he"
    },
    {
        name: "Jeremy Phase 1",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/78/5_5.png",
        description: "He will stretch from your office when one of your doors is open, if the other door is closed when he reaches it, he will just hit himself in the head! He will steal all your rupees for that mistake!",
        section: "he"
    },
    {
        name: "Wuznick",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/07/20.png",
        description: "He will put his static effects through your monitor. You need to buy other Wuznick clones that appear at the Prize Corner to make the effects stop. (each clone costs 30 Faz-Coins).",
        section: "he"
    },
    {
        name: "Holy Expunged",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7b/14.png",
        description: "At the end of the night, before going to the Point Score, you will go to heaven to talk with him, if you want, you can ask him for whatever or idk. It will not do anything to your night, but you need to make your choice because if you just leave, Holy Expunged will just say you are a bad person! So when you leave, he will remove a few points from your score. BUT, you can do 'Double or Nothing', that means, you need to pass the night again and gain a double amount of points! Yes, and after that second night, you can talk with him again, and you can play 'Double or Nothing' as many times as you want and get so much points.",
        section: "he"
    },
    {
        name: "Jeremy Phase 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c9/17.png",
        description: "He, at the beginning of the night, stealed your modes! You need to find him in the cameras of Floor 3, and after that you need to force him to go to your office!",
        section: "he"
    },
    {
        name: "Cessated",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/ff/46.png",
        description: "He will be just chilling in your office, sometimes, he will glitch out, you need to fastly shock him, or else he will glitch out your game and will get you back to the menu!",
        section: "he"
    },
    {
        name: "Demiurge Crew",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/62/62.png",
        description: "Click on me to see my full description on the wiki!",
        section: "he",
        link: "https://multiverse-custom-night.fandom.com/wiki/Demiurge_Crew"
    },
    {
        name: "Hortas",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/bf/36.png",
        description: "He will be in your office, sometimes, he will talk too much, raising the Noise Meter, quickly clap while looking at him to make him shut up.",
        section: "he"
    },
    {
        name: "Hortas (Mad)",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/87/37.png",
        description: "Put on the mask when he says anything!",
        section: "he"
    },
    {
        name: "Hortas True Form",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b7/78.png",
        description: "Hear the side he's talking and quickly look at that side!",
        section: "he"
    },
    {
        name: "R'lyehian",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b9/28.png",
        description: "He controls time! He will go to the Aquarium to spy you through a magic ball. Every time he is in that camera, he will change the hour and time numbers to random numbers. That actually doesn't change the time, but you can't know how much time is left until 6:AM. Shock him to make him go to another camera.",
        section: "he"
    },
    {
        name: "Cyrill",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/50/29.png",
        description: "He will move to you in GPS System, but not actually moving. Instead of moving by himself, he will move one step everytime you Light-Flash a camera!",
        section: "he"
    },
    {
        name: "Morpheus Phase 1",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4d/40.png",
        description: "He will sometimes appear in the office! He will engage in a a boss fight with you. You need to avoid his attacks (do not let him touch your mouse) and attack him (spam click him) until he dies!",
        section: "he"
    },
    {
        name: "Morpheus Phase 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c2/41.png",
        description: "He's on Light System, be sure to make him glow with the flashlight to make sure he still in Light System. If he´s gone, he will run to the Basement, where a deactivated bomb is, and he will activate it, killing you in the process!",
        section: "he"
    },
    {
        name: "Morpheus Phase 3",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/50/79.png",
        description: "If you hear funny walks, you need to wait to his hat to appear in the Basement. Literally, you need to press the omgdodoexplode button in the Basement when that hat appears to disappear that f%cking hat and make this dude so f?cking sad and literally banish him in that void you call hell.",
        section: "he"
    },
    {
        name: "Manbi Phase 3",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f1/6.png",
        description: "He doesn't need his head since it isn't actually connected to him. You need to click and drag his head away from him when he appears or else he will steal your Faz-Coins. How? He has like, 6 hands.",
        section: "he"
    },
    {
        name: "Incomprehensible Bambi",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/68/39.png",
        description: "He will apply a smoke effect in your night! He's on the Duct System, being invisible. You can know how near he is from your office by seeing how strong the effect is. If it's too strong, seal the opposite duct at the one you have sealed!",
        section: "he"
    },
    {
        name: "RED Sniper",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/85/RED_Sniper_Revamp.png",
        description: "A red dot will follow your cursor throughout the night. Sometimes it will fully charge and stay still, in which you quickly need to move the cursor away from it. Eventually the sniper rifle will be shot at. If you get hit by the sniper rifle, it's an instant headshot (Death).",
        section: "tf2"
    },
    {
        name: "RED Demoman",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/61/RED_Demoman.png",
        description: "Sometimes when you leave a door open while looking at the monitor, he will set up sticky bombs on the bottom of the doorway. You must click on the sticky bombs to disable them before you close a door. Closing a door will cause it to become disabled for a couple of seconds.",
        section: "tf2"
    },
    {
        name: "RED Spy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/90/RED_Spy_Revamp.webp",
        description: "He will pretend to be Virtual Withered Bonnie in Floor 2. You must prevent him from going to Party Room B, as that will lead a path to you to be backstabbed. To stop him, you must flash the light at him when he appears in the Main Hallway to send him back to Parts And Service.",
        section: "tf2"
    },
    {
        name: "RED Engineer",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3c/Red_Engineer_Revamp.png",
        description: "Click on me to see my full description on the wiki!",
        section: "tf2",
        link: "https://multiverse-custom-night.fandom.com/wiki/RED_Engineer"
    },
    {
        name: "BLU Sniper",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/ff/BLU_Sniper_Revamp.png",
        description: "He is sitting in a sniping perch in the GPS System. You will also see a blue dot approaching your avatar. If the blue dot appears in your avatar, you will get headshotted from across the map. Turn on the Forcefield to deflect the bullet.",
        section: "tf2"
    },
    {
        name: "BLU Spy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/02/Blu_Spy.webp",
        description: "He has disguised himself as Virtual Withered Freddy. You must not let him into Party Room A, as that will result in him escaping and backstabbing you. To avoid this, flash your light at him when he is in the Main Hall to send him back to Parts/Service.",
        section: "tf2"
    },
    {
        name: "BLU Engineer",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e9/BLU_Engineer.webp",
        description: "He has given you the task of taking care of his newly built level 3 Sentry. Said sentry will stay in the office. However, when you aren't looking (Ex: Looking at your cameras), Spies will come in and start sapping it! In order to remove the sappers, you need to click on them to destroy them. Not doing so will cause the sentry to explode, killing you.",
        section: "tf2"
    },
    {
        name: "Demoknights",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/16/Demoknights_Resize.png",
        description: "They work similar to Ballora. If you hear one of them charging towards a doorway, close the corresponding door in order to not get your head cut off!",
        section: "tf2"
    },
    {
        name: "Elizabeth the Third",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d9/Elizabeth.png",
        description: "It'll sit on in a plant pot in the Prop Storage (CAM 06) camera. Occasionally it'll start growing hungry and want food, so when it does, go to the Kitchen (CAM 04) camera and find some meat in place of Faz-Coins, it has to be fresh though, as rotten meat will just make it angry and kill you. After grabbing an (AI/2) amount of meat, go back to where he is and click the 'FEED' button, which will cause it to grow. You can feed him as much as you want and it'll grow bigger and bigger, but if it grows too big, it'll eat you instead! If you don't feed it fast enough, it will grow so hungry that it will eat one of your tools for the rest of the night.",
        section: "tf2"
    },
    {
        name: "BLU Robot Spy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/aa/BLU_Robot_Spy.png",
        description: "If you hear him uncloak from behind you, quickly use the controlled shock to make him cloak again before he backstabs you!",
        section: "tf2"
    },
    {
        name: "Mimi Sentry",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/92/Mimi_Sentry.png",
        description: "She's got the day off! Which means she gets to listen to her favorite mixtape! You can find her on the Prop Storage camera. While she isn't bothered by mostly anything, some of the songs she refuses to take off of her mixtape do, and she doesn't like that. If one of these songs manages to play, she'll get angry and take her anger out on you! But you might be thinking, why doesn't she change the channel, well she can't, her mixtape is on the monitor which, obviously, you're using for the night. Go to the Task System and hit 'Shuffle' to change the song and calm her down.",
        section: "tf2"
    },
    {
        name: "Dispenser Lady",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9b/Dispenser_Lady.png",
        description: "She crawls through the vent system and towards your office. Her face will always display a happy expression, though at times it will change to disapproval. If she reaches the front vent and enters the office while she's happy, she will give you one random power-up. If she reaches the front vent while she's disappointed, however, she will simply kill you, to stop this, click on her face to flip it to the happy side. She cannot be stopped by the vent snare, she can, however, be stopped by the front vent when she's happy, so if you want a power-up, clear the way of any enemies before she reaches the entrance.",
        section: "tf2"
    },
    {
        name: "Fabulous Heavy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/30/Fabulous_Heavy.png",
        description: "When he appears on your monitor, switch the camera or close the monitor. If he's kept on the monitor for too long, he will make everything monochrome for a few seconds.",
        section: "tf2"
    },
    {
        name: "Kangaroo Wife",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/ad/Kangaroo_Wife.png",
        description: "After using the Death Coin, multiple images of Kangaroo Wife will begin to appear on your screen! Click on them to make them go away or else they'll completely overrun your screen!",
        section: "tf2"
    },
    {
        name: "Aimbot Sniper",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1d/Aimbot_Sniper.webp",
        description: "Within the first 2 seconds of the night, you must quickly close all 4 doorways in your office to deflect the Aimbot Sniper's bullet so that he dies for the rest of the night.",
        section: "tf2"
    },
    {
        name: "Godzilla 1954",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/96/Godzilla_1954_Revamp.png",
        description: "You will sometimes hear his stomping throughout the night. If you hear his stomping get louder, quickly use the controlled shock in the office to ward him off before he jumpscares you.",
        section: "gz"
    },
    {
        name: "KOTM Godzilla",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f7/KOTM_Godzilla_Revamp.png",
        description: "When you hear him charging his atomic breath, prepare to move your cursor out of the way when he fires it on your screen!",
        section: "gz"
    },
    {
        name: "Thermonuclear Godzilla",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fb/Thermonuclear_Godzilla.png",
        description: "Godzilla is having another nuclear meltdown in the Childs Bedroom on Floor 6, which rises as the night goes on. The hotter he is, the more the room will become more orange & distorted with heat. Stare at the camera to halt his meltdown, as it becomes faster if that camera isn't viewed for too long. Using the Fan also slows down his meltdown. If his radiation reaches peak overload, he will use his thermonuclear blast to shake your entire office, causing most of your office systems to become temporally disabled, & your temperature will instantly spike to 120 degrees.",
        section: "gz"
    },
    {
        name: "Reactor Glow Godzilla",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/61/Reactor_Glow_Godzilla.png",
        description: "Sometimes when switching systems, you will come across a system that is currently covered in radioactivity, signified by a green glow. The longer you are on a radioactive system, the more your Toxic Meter will rise. Simply leave that system to avoid having radioactive burns.",
        section: "gz"
    },
    {
        name: "GVK Godzilla",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/86/GVK_Godzilla.png",
        description: "A 'Kaiju Threat Level' meter will appear & fill up in the top center of your screen, slowly filling over time. High noise increases the meter slightly. When the meter reaches 100%, Godzilla will prepare to charge his atomic breath in the GPS System. You only have a few seconds to react before the beam vaporizes you, so use the Force-Field to make it absorb the atomic beam, although the radiation of it causes the office to heat up. Once deflected, Godzilla will retreat & the meter will reset to 0%.",
        section: "gz"
    },
    {
        name: "Kamanta Kun",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/56/Kamanta_Kun_Revamp.png",
        description: "He is in the Vent System, but is way too big to fit past the starting point. Because of this, only his head will stick out through the starting point of the Vent System. But that also means the gills are mushed to the point of flooding the whole system with its blood. This slows down other characters in the system, but once it reaches your office, you will be boiled alive. To prevent the flood, you must drain it by pulling the lever 5 times. The flood will resume in a moment afterwards.",
        section: "gz"
    },
    {
        name: "2014 Godzilla",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8c/2014_Godzilla_Revamp_2.png",
        description: "He will wander around the entire GPS System in a slow speed. He doesn't know that it will crush everything in the building if he walks towards it. You must use the ORCA Device to make him change directions, distracting him by making him go elsewhere.",
        section: "gz"
    },
    {
        name: "Augmented JJ",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b7/Augmented_JJ.png",
        description: "She will be under your desk for the whole night. Make sure to see if her eyes are glowing or not, as if they are glowing. the next time you pull up your monitor, she will jumpscare you. If you do see that her eyes are glowing, put on your mask to make them change back to normal.",
        section: "fk"
    },
    {
        name: "Augmented Endo-02",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/5a/Augmented_Endo-02.png",
        description: "He only appears if your noise is very low for a long time, you must put on the mask and use the shock, if you do it the other way around or do nothing Augmented Endo 02 will end your game!",
        section: "fk"
    },
    {
        name: "8-Bit Purple Guy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a5/8-Bit_Purple_Guy.png",
        description: "When you hear his laugh, check the GPS System. If he appears as 8-Bit Yellow Rabbit, switch systems or he'll make you his next victim. If he appears as his normal self, use the forcefield to prevent his approach.",
        section: "fk"
    },
    {
        name: "8-Bit Yellow Rabbit",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/ce/8-Bit_Yellow_Rabbit.jpg",
        description: "Click on me to see my full description on the wiki!",
        section: "fk",
        link: "https://multiverse-custom-night.fandom.com/wiki/8-Bit_Yellow_Rabbit"
    },
    {
        name: "Glitchsaken",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/06/Glitchsaken_Resize.webp",
        description: "Click on me to see my full description on the wiki!",
        section: "fk",
        link: "https://multiverse-custom-night.fandom.com/wiki/Glitchsaken"
    },
    {
        name: "Augmented Spring Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6f/Augmented_Spring_Bonnie.png",
        description: "He has put a Springlock suit head on every camera on Floor 5. If you are watching the camera for too long, the Springlock suit's jaws will slowly close more and more around the camera, until they chomp down and destroy the cameras, making all the cameras on F5 unviewable for the rest of the night. To reset the Springlocks, use the Lever next to the top vent to reset the Springlocks from going off.",
        section: "fk"
    },
    {
        name: "Augmented Mendo",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d6/Remade_Augmented_Mendo.png",
        description: "He will be in Festive Storage 2 on Floor 7. He was meant to help sort the presents, however, he lost his battery somewhere in the Frozen Wastes (outside) whilst being shipped in. You need to search around to locate it in the snow. If you don't find it before the night ends, you will have your score replaced with your name on The Naughty List.",
        section: "fk"
    },
    {
        name: "Legacy Augmented Mendo",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ed/Legacy_Augmented_Mendo.png",
        description: "You need to keep your internet up when he appears in the office. If it's 50% or lower, he'll change to Dark Mendo, which means both you and reality are doomed...because there is no Dark Mendo...yet!",
        section: "fk"
    },
    {
        name: "Augmented Nightmare BB",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/75/Augmented_Nightmare_BB.png",
        description: "Do not be deceived! Augmented Nightmare BB is NOT a real character in Multiverse Custom Night, and anyone who claims that they are Augmented Nightmare BB is an impostor! If you ever see anyone that resembles Augmented Nightmare BB on Floor 5, be ready for an attack from the entity! It can attack from any of the vents. If you see its hand reaching out from the opening, close the door to chop his hand off and get him to retreat! If it gets in... There is nothing you can do.",
        section: "fk"
    },
    {
        name: "Augmented Funtime Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7e/Augmented_Funtime_Foxy.png",
        description: "His stage will stay on the Light System. When he starts to perform, quickly use the Office shock (Which is conveniently linked to his stage's lights) to short circuit the stage and cut his performance short. If you take too long, he'll rush into your office and jumpscare you.",
        section: "fk"
    },
    {
        name: "Augmented Lolbit",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/70/Augmented_Lolbit.png",
        description: "Like many of the other Lolbits, when Augmented Lolbit appears, type LOL. If you don't, they will undergo mitosis, leading you needing to type LOL even more than before. When the mitosis is finished, Your screen will be covered by many Augmented Lolbits and your noise meter will be up so high that's now just a stretched out image of Augemented Lolbit's body. Augmented Lolbit will only appear once per night.",
        section: "fk"
    },
    {
        name: "Augmented Lefty",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d6/Augmented_Lefty_Revamp.webp",
        description: "Tired of waiting for Illumix. Augmented Lefty will try and enter your office by downloading himself off your tablet from his datafiles, you need to cancel his download or reality itself will implode and result in your run ending.",
        section: "fk"
    },
    {
        name: "Augmented Lefty 2",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/27/Augmented_Lefty_2.webp",
        description: "If your room is too quiet for too long, he’ll start approaching the building in the GPS System. Use the forcefield and Global Music Box to make him stop.",
        section: "fk"
    },
    {
        name: "Augmented Totem Panic",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c0/Augmented_Totem_Panic.png",
        description: "He will jumpscare you at 6 AM 100 times. There's no way to avoid this.",
        section: "fk"
    },
    {
        name: "Holiday Spirit Molten Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c9/Holiday_Spirit_Molten_Freddy.png",
        description: "As he crawls down the Duct System, your screen will start to turn blue and your temperature will drop, you need to use the Heater and the Radio Jammer to reset him or he'll jumpscare you.",
        section: "fk"
    },
    {
        name: "8-Bit Candellora",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a7/8-Bit_Candellora.png",
        description: "She will be in the Light System, but due to the cold temperature in that room, her candle will start to go out. Keep the heater on to make her candle light bigger. If the candle light fully fades out, she will kill you. However, if you keep the heater on for too long, she will start to melt. If she melts fully, then the wax will cover the Light System for the rest of the night.",
        section: "fk"
    },
    {
        name: "Candlereenas",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/38/Candlereena_Resize.webp",
        description: "They will randomly pop out from the bottom of your desk in the Office. The longer they stay, the more the room looks reddish and the more the temperature rises. Quickly use the Power/AC to ward them off!",
        section: "fk"
    },
    {
        name: "Nutcracker Bon-Bon",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/10/Nutcracker_Bon-Bon_Revamp.png",
        description: "He will be asleep in his present in the office. If the noise meter is too high, he'll wake up and jumpscare you.",
        section: "fk"
    },
    {
        name: "Woodcarver Funtime Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b1/Woodcarver_Funtime_Freddy.png",
        description: "He will be working away on his latest project in The Workshop on Floor 7. If you have the Music Box on whilst on that camera for too long, Wood Carver will lose his patience, and come carve you a new face! (in other words, he jumpscares you).",
        section: "fk"
    },
    {
        name: "Totem Bake",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/13/Totem_bake_icon.webp",
        description: "He will be chased by hungry kids in the Vent System. You have to use the vent snare at the correct moment to block the kids from getting him, else they will eat him alive. If Totem Bake successfully gets in your office, he'll give you 10 Fazcoins and 10 Blue Rupees as thanks for saving him.",
        section: "fk"
    },
    {
        name: "Augmented Carnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/db/Augmented_Carnie.webp",
        description: "Every hour, he'll drop rubber balls on a random camera in Floor 5. Quickly find it, or he'll jumpscare you.",
        section: "fk"
    },
    {
        name: "Scrap Metal Toy Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f8/Scrap_Metal_Toy_Bonnie.png",
        description: "A forgotten product from the Fazbear Funtime Service, left to corrode in The Sewers. Occasionally, he will attempt to escape the sewers. The only way to stop him is by using the heater. If he escapes, he'll kill you.",
        section: "fk"
    },
    {
        name: "Oversweet Frostbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f4/Oversweet_Frostbear_Revamp.webp",
        description: "Candy canes will fall diagonally across your screen. If your cursor is hit by them three times, Oversweet Frostbear will jumpscare you.",
        section: "fk"
    },
    {
        name: "John Baker",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9f/John_Baker_Revamp.png",
        description: "If you click on him on your desk to eat him, you will shatter your teeth. He will fade away if you ignore him long enough.",
        section: "fk"
    },
    {
        name: "Sweet Tooth Jack-O-Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/16/Sweet_Tooth_Chica_Revamp.png",
        description: "Sweet Tooth Jack-O-Chica will lurk in the Boiler Room on Floor 5. Every in-game hour, she will demand you get her sweets or chocolate from Candy Crazed Toy Freddy. If you take too long, she will eat you with a jumpscare!",
        section: "fk"
    },
    {
        name: "Bigfoot Lefty",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3d/Bigfoot_Lefty.png",
        description: "He will be on the Lumber Co Floor, you must find a shotgun that has been scattered in some places around the building, that being the barrel in Floor 1, the trigger being on Floor 3, and the buttstock being in Floor 5. Once you gathered all the pieces for your shotgun, you can find some ammo on your office desk. Once the night ends, you will engage in a Bigfoot-game style fight with him. If you defeat him, the night will end as usual, but if he defeats you.... you know what will happen.",
        section: "fk"
    },
    {
        name: "Paranormal Trash And The Gang",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a1/Paranormal_TATG_Revamp.webp",
        description: "They'll be hiding behind various graves in The Graveyard on Floor 5. Double-clicking the cam will make them leave. If all 5 appear, it's game over.",
        section: "fk"
    },
    {
        name: "Infested Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/12/Infested_Golden_Freddy_Resize.webp",
        description: "Infested Golden Freddy will move around in The Sewers. When he's very close to the camera (indicated by his glowing, orange eye), aim the Golden Flashlight on the Right Vent. If he escapes, you're doomed.",
        section: "fk"
    },
    {
        name: "Geode Frostbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3c/Geode_Frostbear_Revamp.png",
        description: "A geode texture will cover your camera system. Rapidly press the < & > keys to remove it, or else Geode Frostbear will swing his pickaxe into you, in other words, jumpscare you!",
        section: "fk"
    },
    {
        name: "Voxelreenas",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/01/Voxelreenas_Revamp.png",
        description: "They will appear in the doorways, the front vent and the side vent. Flip up your monitor and spam the 4 key. If all 4 appear in the office, it's game over!",
        section: "fk"
    },
    {
        name: "8-Bit Ballora",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1f/8-Bit_Ballora_Revamp.png",
        description: "Sometimes, her minigame will appear on your screen. You must figure out which direction she is going signaled by her music box. You must close one of 3 doors to ward her off and end her minigame. Otherwise it will result in death.",
        section: "fk"
    },
    {
        name: "Augmented Plus Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e9/Augmented_Plus_Freddy.png",
        description: "He's mad because FNaF Plus is not released! You need to end the task 'FNaF +' to make Augmented Plus Freddy Happy!",
        section: "fk"
    },
    {
        name: "Augmented Candy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2a/Augmented_Candy.png",
        description: "He has just recently killed a man. He will make his way to you through the Duct System. If he makes it to one of your openings, use the Neon Wall to keep him out or else it's game over.",
        section: "fk"
    },
    {
        name: "Trollface The Forsaken",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/de/TROLLREMADE.png",
        description: "He will be outside trying to get into the building. He will climb into the Outside Vent Cam on Floor 8 to get into the building. A text message will pop up on the Task System, indicating that he is inside the building. He will be on any Floor 8 cam. Ring the Floor 8 Alarm System to scare him back outside of the building.",
        section: "fk"
    },
    {
        name: "Walty Firewall",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1f/Walty_Firewall.png",
        description: "Walty will occasionally infect the Task System with a virus, and then complain about how weak your anti-virus is, raising the noise meter. To stop his whining, quickly buy an anti-virus from the prize counter to stop him.",
        section: "fk"
    },
    {
        name: "Augmented Sparky",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/be/Augmented_Sparky.png",
        description: "He'll lie in pieces on the office floor. As the night progresses, he'll start to reassemble himself. Use the Flashlight or the Golden Flashlight to reverse his progress. If he's fully reassembled by 5:AM, it's game over.",
        section: "fk"
    },
    {
        name: "Benny the Bunny",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/22/Benny.png",
        description: "Working similar to Augmented Springtrap. He'll completely obscure your view of GPS System. If his eyes are white, stay on that system till he leaves. If he has red eyes, you need to quickly switch to another system, or he'll make the GPS map completely disappear.",
        section: "fk"
    },
    {
        name: "Augmented Popgoes",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/84/Augmented_Popgoes.png",
        description: "He is playing a game of basketball with LeBron James, but if he wins, he'll have no other excuses to not work on POPGOES Evergreen, which will make him mad as he really wants to keep playing basketball with his friends. So you'll need to convince LeBron James to keep playing with Augmented Popgoes by sending them words of encouragement through the Task System. But nothing is free, so you'll need to pay 1 Faz-Coin to send a word of encouragement and make them play another game.",
        section: "fk"
    },
    {
        name: "Augmented Molten Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3c/Augmented_Molten_Freddy_Resize.webp",
        description: "He will crawl around in the Vent System. Except unlike the other characters, he will never attempt to attack you from the vent opening, instead he just wanders around the Vent System. However, he will be fully invisible in the cameras. Sometimes, his invisibility will shorten out, making him visible on the radar. When this happens, use the controlled shock in your office to make him invisible again before he kills you.",
        section: "fk"
    },
    {
        name: "Augmented Scraptrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/64/Augmented_Scraptrap_Resize.webp",
        description: "Click on me to see my full description on the wiki!",
        section: "fk",
        link: "https://multiverse-custom-night.fandom.com/wiki/Augmented_Scraptrap"
    },
    {
        name: "Echo",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/ce/Echo.png",
        description: "There will be a button on the Forest System, which you can press to summon her. If there is a character present on the system, she will hunt and despawn it. If there are no characters present on the system, she will hunt you and kill you.",
        section: "gtag"
    },
    {
        name: "Tallboy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1c/Tallboy.png",
        description: "Tallboy will walk around the Forest System. Hes just like... there? He doesnt do much and sometimes just vanishes out of existence...",
        section: "gtag"
    },
    {
        name: "PBBV",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/48/Pbbv.webp",
        description: "Once per night, PBBV will spawn in the Forest System and will start walking from the tree stump to the bridge, while making strange noises. You must press the 'Option 1' button to make him despawn. If he gets to the other side of the bridge, he will jumpscare you and crash your game!",
        section: "gtag"
    },
    {
        name: "Warning Bot",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3f/Warningbot_%281%29.png",
        description: "Warning Bot will appear in the Forest System tree stump whenever a character is about to attack on the same system, while also making noise.",
        section: "gtag"
    },
    {
        name: "J3VU",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e3/J3VU_Revamp_2.png",
        description: "J3VU will spawn in the Forest System tutorial area, repeatedly saying 'I AM J3VU', which causes your screen to become slightly green and increasing 2 bars on the noise meter. You must press the 'Option 1' button to make him despawn.",
        section: "gtag"
    },
    {
        name: "Spectral Phantom Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/da/Spectral_Phantom_Chica.png",
        description: "She will fade in on your monitor screen after you Light-Flash a camera. Close the monitor before she fully fades in and jumpscares you, erroring out all of your systems!",
        section: "fntd"
    },
    {
        name: "Ghastly Phantom Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/45/Ghastly_Phantom_Freddy.png",
        description: "He will start in a random camera on Floor 3. If you use the Audio Lure on the previous camera, he will jumpscare you and error out all of your systems! He will then move to another camera. Changing between the modes a couple of times while watching him may force him to move to another camera.",
        section: "fntd"
    },
    {
        name: "FNTD Phantom Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/79/FNTD_Phantom_Freddy.png",
        description: "He'll walk through the light system when it's being watched. If the silent ventilation is on, he'll walk backwards. If he reaches the end of the system, he'll jumpscare you, inverting your screen for an hour.",
        section: "fntd"
    },
    {
        name: "FNTD Phantom Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/69/FNTD_Phantom_Foxy.png",
        description: "If you try to use the 1-6 key to change the current mode active then there will be a 50% of you getting jumpscared and causing one of the three systems to error out.",
        section: "fntd"
    },
    {
        name: "FNTD Rockstar Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/cd/FNTD_Rockstar_Bonnie.png",
        description: "He's just a chill guy, so the only thing he does is rest in the office.",
        section: "fntd"
    },
    {
        name: "Circuit Breaker Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b0/Circuit_Breaker_Freddy.webp",
        description: "He will continuously glitch your GPS System defenses. Why? Because he's a utter prick! Enough said!",
        section: "fntd"
    },
    {
        name: "Astral Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/da/Astral_Withered_Bonnie.png",
        description: "He will appear once per night, standing in your office. Make sure to click on him and press X to sell him! Or else his black holes will end up consuming your save file...",
        section: "fntd"
    },
    {
        name: "Blighted Endo Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a3/Blighted_Endo_Withered_Bonnie.png",
        description: "Blighted Endo Bonnie will stay in the Parts & Service room on floor 2. If you go into the camera and Blighted Endo Bonnie isnt there, hold your flashlight on the camera until hes there or your flashlight will be disabled!",
        section: "fntd"
    },
    {
        name: "Old Man Krampus",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7d/Old_Man_Krampus_Resize.png",
        description: "Old Man Krampus will sometimes talk, to which he will set your office temperature to 60 degrees for 10 seconds. To prevent this, turn on the heater as well as keeping the fan off to keep him away.",
        section: "fntd"
    },
    {
        name: "Enforcer Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3a/Enforcer_Withered_Bonnie.png",
        description: "Light-Flashing a camera may cause Enforcer Bonnie to appear on that camera. Make sure to not change modes until his eyes turn black. He can not appear if a toggle is active in the GPS System.",
        section: "fntd"
    },
    {
        name: "Popstar Toy Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2d/Popstar_Toy_Chica.png",
        description: "She will re-add the Annotations to the Youtube System. Every time 50 seconds go by, there will be a 50% chance an Annotation will appear and cover a random part of the screen on the Youtube System (You will still be able to interact with anything the Annotation covers).",
        section: "fntd"
    },
    {
        name: "FNTD Withered Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6e/FNTD_Withered_Chica.png",
        description: "She will start in the office, progressively getting more and more wider, which will eventually lead to you losing access to the night! By eating the KFC in the duct system she will get scared and run away for the rest of the night.",
        section: "fntd"
    },
    {
        name: "FNTD Withered Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/59/FNTD_Withered_Foxy.png",
        description: "He will walk through the main hall in floor 2, when he's there close both doors in your office or your run will have its end.",
        section: "fntd"
    },
    {
        name: "Titan Crusher Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a4/Titan_Crusher_Withered_Golden_Freddy.png",
        description: "He will be on the GPS system, not moving, although he can randomly walk towards the office, making lots of noise and eventually jumpscaring you! You must use the forcefield to reset him.",
        section: "fntd"
    },
    {
        name: "FNTD Withered Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/5d/FNTD_Withered_Freddy.png",
        description: "He will sometimes shoot your screen with his minigun, make sure to dodge his bullets or else you're the one who will get shot.",
        section: "fntd"
    },
    {
        name: "Windup Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3b/Windup_Withered_Bonnie.png",
        description: "Windup Bonnie will sometimes speed up a random animatronic in the night (he cannot speed up himself). Go to the task system, click on him and press X to revert the speed boost.",
        section: "fntd"
    },
    {
        name: "FNTD Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f7/FNTD_Springtrap.png",
        description: "He will be on the vent system, and he cannot be stopped by the door or snares. However, using the heater and using the controlled shock at the same time will cause him to reset and not be active again until 20 seconds have passed.",
        section: "fntd"
    },
    {
        name: "FNTD Great Escape Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c5/FNTD_Great_Escape_Golden_Freddy.png",
        description: "Hes sad his spotlight as the 'soul summon secret' was taken by FNTD Hand Unit, due to Hand Unit being the better unit, and thats no good! Make sure to watch him on the basement floor every once in a while for him to feel happy! Not doing so will result in a jumpscare.",
        section: "fntd"
    },
    {
        name: "FNTD Frost Plushtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/76/FNTD_Frost_Plushtrap.png",
        description: "He will appear in the Basement and start throwing snowballs everywhere, if the basement becomes filled with snowballs completely you won't be able to see all the other animatronics there, you must turn on the Heater to reset his progress.",
        section: "fntd"
    },
    {
        name: "FNTD Freddy Frostbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/fa/FNTD_Freddy_Frostbear.png",
        description: "He doesnt like it that his brother (FNTD Dark Frostbear) is the cooler freddy frostbear! So every couple of seconds he will freeze any camera in a fit of rage!!! To unfreeze the camera, you must go to the basement floor and click him.",
        section: "fntd"
    },
    {
        name: "FNTD Flaming Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/aa/FNTD_Flaming_Springtrap.png",
        description: "He will be in the vent system, always going by the longest vent path. If he gets to your office, he will set your temperature to 120 degrees, the second time he enters the office, he will jumpscare you! To prevent this, you must turn on the fan to make him go back in the vent system.",
        section: "fntd"
    },
    {
        name: "FNTD Crying Child",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2d/FNTD_Crying_Child.png",
        description: "The souls of Chica, Freddy, Foxy, and Bonnie are flying across the office. If you hit one of them, you lose 5% power, start losing oxygen and Crying Child starts forming. Hit all four souls, and the Crying Child will jumpscare you.",
        section: "fntd"
    },
    {
        name: "FNTD Rockstar Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6f/FNTD_Rockstar_Chica.png",
        description: "While on the cameras, there is a chance she will spawn in your office and try to steal your fan! use the Fazer-Blaster to make her go away!",
        section: "fntd"
    },
    {
        name: "FNTD Rockstar Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/08/FNTD_Rockstar_Freddy.png",
        description: "He will be in floor 2, being just barely visible on any camera, every time you switch modes he will start moving up floors and becoming more visible, if he reaches the last floor he will become fully visible and will start causing the end of the universe!!! You must stop him by using an audio lure in floor 3 to keep him there. Although occasionally, when he is in floor 3 he may go back to floor 2.",
        section: "fntd"
    },
    {
        name: "FNTD Rockstar Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a0/FNTD_Rockstar_Foxy.png",
        description: "Click on me to see my full description on the wiki!",
        section: "fntd",
        link: "https://multiverse-custom-night.fandom.com/wiki/FNTD_Rockstar_Foxy"
    },
    {
        name: "FNTD Withered Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c3/FNTD_Withered_Bonnie.png",
        description: "He thinks hes the best character in this game because he was one of the original FNTD characters to be added! However thats obviously not true, so make sure to use the controlled shock whenever you feel his pride growing.",
        section: "fntd"
    },
    {
        name: "Sentinel Withered Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2a/Sentinel_Withered_Bonnie.png",
        description: "If the office stays at 60° or 120° for too long, Sentinel Bonnie will appear in any doorway barely visible. Shut the door on his face or experience a non-lethal jumpscare that jumbles up your mode buttons and hotkeys.",
        section: "fntd"
    },
    {
        name: "War Machine Withered Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6f/War_Machine_Withered_Foxy.png",
        description: "He will use his lethal weaponry on you at any hour once per night. You can tell that he is charging his attack if the GPS system is flickering. Use the Forcefield to repel his attack.",
        section: "fntd"
    },
    {
        name: "Caine Plush",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/5a/Caine_Plush_Revamp_2.png",
        description: "He will appear in your office when you start the night. Every minute, he asks for food. You must go to the Kitchen camera and grab something to feed him. If you fail to do this in 10 seconds, he'll kill you.",
        section: "fnap"
    },
    {
        name: "Peer",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/88/Peer_Revamp.png",
        description: "He will start at Floor 7, Cam 01, he will move between random cams until he crashes into your office. He will say that he's sorry, and you can choose to spare him or to kill him. If you kill him, he'll kill you, but if you spare him, he now sits as a decoration on your desk.",
        section: "fnap"
    },
    {
        name: "Rexie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0e/Rexie-placeholder.png",
        description: "He will start at Rexies Cove on Floor FNAP. He has the same mechanic as FNaF 1 Foxy.",
        section: "fnap"
    },
    {
        name: "Ultra Uil",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c2/Uil_Resize.webp",
        description: "She will randomly appear in the F1 Parts & Service. If she is there for too long, then she'll jumpscare you, Shut the Right Door to prevent her attack.",
        section: "fnap"
    },
    {
        name: "Robin",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/ae/Robin1.png",
        description: "Replaces the player. You will hallucinate the freddy plush on the desk sometimes blinking, or even moving, as well as the FNAP game over screen.",
        section: "fnap"
    },
    {
        name: "Game Over Robin",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e0/Game_Over_Robin_Resize.webp",
        description: "You will randomly hear his scream for help as he gets attacked by the plushies, to help him, find the plushies in the West Hall on Floor FNAP and swipe them away. If you do nothing, he and his plushies will jumpscare you.",
        section: "fnap"
    },
    {
        name: "Friedrich Fazbär",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/49/Fredrich.webp",
        description: "He'll be in the Vent System. When he's active, there will be a new Laser button in the vent system. When you hold down the button, a laser wall will appear at the vent entrance that will block Friedrich when he reaches it (it adds a bar of usage btw and the laser wall doesn't affect other characters). He isn't stopped by doors or vent snares. He moves faster if the GMB is on.",
        section: "fried"
    },
    {
        name: "Clara Das Küken",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6b/Clara.png",
        description: "There is a COOK PIZZA button on the Kitchen Camera. Click it to cook a pizza! If it stays off for too long Clara will take it into her own hands(literally)to cook pizzas. When she starts cooking, it'll start to get hotter. The heat she creates can't be cooled when she's cooking. She can also raise the temperature past 120 degrees. If it becomes 150 degrees, you're dead.",
        section: "fried"
    },
    {
        name: "Bernard Das Karnickel",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/b4/Bernard.png",
        description: "There will now be a Laser Door button on the side of the Left and Right doors. When you see his fingers holding on the door frame, use the Laser Door button to send him away. The normal doors won't work on him!",
        section: "fried"
    },
    {
        name: "Endoskelett",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/cc/Endoskelett_Icon.png",
        description: "Endoskelett will be in the Supply Closet on Floor 1. It'll slowly leave the camera to attempt to get the mop in your office that's there for some reason. When Endoskelett is in the office, your usage bar slowly increases. Find the mop in your office and tap it to move it out of the office to lure Endoskelett out of the office. Once he leaves the office back to the Supply Closet, the mop will appear back in your office somehow. Survive the night to win!",
        section: "fried"
    },
    {
        name: "Felix Der Schlaufuchs",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/6/6e/Felix.png",
        description: "At the Prize Corner there will be a wheel. You can tap it to spin it. If the wheel isn't spinning, Felix will come into the office and slowly start to make your night harder. First, your flashlight and controlled shock will be disabled, then your doors, then finally your entire office will lose power.",
        section: "fried"
    },
    {
        name: "Tycoon Withered Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/70/Tycoon_Withered_Foxy.png",
        description: "Unlike the other Withered Foxy's, he is actually fooled by the mask, although it could be because he went insane during The Great Cancellation of 24. However, there is a slight chance that he will ignore the mask, signified by his glowing eye. Use the flashlight when that happens to drive him off.",
        section: "ft"
    },
    {
        name: "Tycoon Lefty",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/09/Tycoon_Lefty.webp",
        description: "Lefty will try to enter the Office throughout Floor 2. He will start from the Parts & Service camera and will enter through one of the two vents. If he appears at the left vent, close the front vent door. If he appears at the right vent, close the right vent door. When lefty makes it into the office, he will appear in the center of the room. You must stare at him for 5-10 seconds, in which he will scan your face and recognize that you are friendly. He will then go back to Parts & Service. Looking away too quickly will result in your demise.",
        section: "ft"
    },
    {
        name: "Tycoon Trash and the Gang",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/16/Tycoon_Trash.png",
        description: "Click on me to see my full description on the wiki!",
        section: "ft",
        link: "https://multiverse-custom-night.fandom.com/wiki/Tycoon_Trash_and_the_Gang"
    },
    {
        name: "Sir Lampington",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8b/Sir_Lampington_Resize.png",
        description: "Your lights will randomly flicker during your night.",
        section: "ft"
    },
    {
        name: "Toasty",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/26/Toasty.png",
        description: "Randomly during your night, a piece of Toast will be levitating in your office. This means you must quickly type 'Toasty' on your keyboard, otherwise Toasty will take 10 of your points.",
        section: "ft"
    },
    {
        name: "Cardboard Bob",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f8/Cardboard_Bob.png",
        description: "During your night, Cardboard Bob might appear in your office either on the left or right side of it. Use the Wet Floor Sign to push it out of the office, otherwise you will get a non-lethal jumpscare.",
        section: "ft"
    },
    {
        name: "Extension Mode Lefty",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/08/Extension_Mode_Lefty.webp",
        description: "Once per night, he will appear in your office. He has switched out one of the plushies on the Prize Counter with a plush of himself. If the plush it replaces is already bought, a new cost will be added based on it's AI level. If the plush it replaces hasn't been bought yet, the cost will only count towards the Lefty plush. Buy the plush before the next hour before he kills you.",
        section: "ft"
    },
    {
        name: "Overloaded Adventure Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/86/Overloaded_Adventure_Golden_Freddy.webp",
        description: "When switching systems, there is a chance that he will appear in the Office, although being invisible. Find him by shining the shakelight and flashing it on him to get him to leave. If he stays in the Office for too long, he will jumpscare you, not killing you, but applying a weird effect on your screen.",
        section: "ocn"
    },
    {
        name: "Overloaded Adventure Purple Guy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/57/Overloaded_Adventure_Purple_Guy.webp",
        description: "He will throw slashers around the office. Dont let the slasher hit the cursor, or you'll lose oxygen and you will lose a random amount of power if you let it hit your cursor.",
        section: "ocn"
    },
    {
        name: "Overloaded Adventure Spring Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0b/Overloaded_Adventure_Spring_Bonnie.webp",
        description: "After flipping down the monitor, there is a chance that Spring Bonnie will be waiting for you in the office. When that happens, do not put on your mask while their in your office, as that will cause the springlocks to fail and your run will end right there.",
        section: "ocn"
    },
    {
        name: "Overloaded Adventure Withered Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a7/Overloaded_Adventure_Withered_Bonnie.webp",
        description: "He will stay in the F1 Parts/Service camera. If you see that his eyes have turned off, turn on one of the TVs in your office to make his eyes reappear! Why or how does this work, don't ask me, I'm just some text inside a box.",
        section: "ocn"
    },
    {
        name: "Overloaded Augmented Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0e/Overloaded_Augmented_Freddy.webp",
        description: "He will appear at the office at random, haywiring. Do not put your mouse cursor over him. Doing so will result in Overloaded Augmented Freddy ending your run.",
        section: "ocn"
    },
    {
        name: "Overloaded Foxy.EXE",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/14/Overloaded_Foxy.EXE.webp",
        description: "When you hear him speak, look for him at the vent system and use the correct vent-snare to stop him. He can't be stopped by the vent door.",
        section: "ocn"
    },
    {
        name: "Overloaded Teaser Nightmare Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/ac/Overloaded_Teaser_Nightmare_Fredbear.webp",
        description: "When his hat and bowtie appears in the office, quickly hide them by clicking on them to avoid his attack.",
        section: "ocn"
    },
    {
        name: "Overloaded Spring Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/53/Overloaded_Spring_Bonnie.webp",
        description: "His bowtie will sometimes appear on the desk. When you see it there, close both doors and vents.",
        section: "ocn"
    },
    {
        name: "Overloaded Withered Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/12/Overloaded_Withered_Freddy.webp",
        description: "This version of Withered Freddy is unlike any other, and has cosmic abilities! His giant head will float around the Telescope System. If your telescope lays its view onto it for too long, your panic meter will increase, and your internet meter will decrease. Avoid looking at him for too long.",
        section: "ocn"
    },
    {
        name: "Overloaded Virtual Jack-O-Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/58/Overloaded_Virtual_Jack-O-Bonnie.webp",
        description: "A Jack-O-Lantern will be sitting on the Bakery on F8. You will have to keep an eye on it to make sure no one tries to destroy it, if you see that someone is trying to, quickly use the Alarm System to scare them off! Letting the pumpkin get disobeyed will end with Jack-O-Bonnie getting real upset and make his way to your office, not to kill you, but to ask you who did it. As he makes his way to you, your panic meter will start to increase, and when it fills up all the way you'll have a heart attack and die by getting jumpscared by your own heart!",
        section: "ocn"
    },
    {
        name: "Overloaded Virtual Jack-O-Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/bf/Overloaded_Virtual_Jack-O-Chica.webp",
        description: "When the temperature is above 85° she will very slowly start to form in your office, if she fully forms all Rupees you collect and have will now all burn up and turn to ash. The only way to make her disappear for some time is to take a Normal Pill. Otherwise you can say bye-bye to your Rupees!",
        section: "ocn"
    },
    {
        name: "Overloaded Virtual Funtime Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8d/Overloaded_Virtual_Funtime_Freddy.webp",
        description: "When he announces a surprise, he will send Overloaded Virtual Bon-Bon into the Duct system, (immune to the Audio Lure and Heater.). Once Bon-Bon makes it to one of the duct openings, the sound of vent banging will play on the side that Bon-Bon is at, alongside his icon being revealed. When he attacks, have the corresponding duct shut to avoid his jumpscare. After you fend him off, Bon-Bon will return to Freddy and you'll have to wait until he announces another surprise.",
        section: "ocn"
    },
    {
        name: "Overloaded Shadow Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/80/Overloaded_Shadow_Freddy.webp",
        description: "Each time you look at the cameras, he will block the view of a random camera on each floor. There is no way to get rid of him.",
        section: "ocn"
    },
    {
        name: "Overloaded Scrap Plushbabies",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0a/Overloaded_Scrap_Plushbabies.webp",
        description: "Every time you successfully fend off a characters that uses the Golden Flashlight they will take away AI x 50 Points away form your score, the only why to get your points back is to go to the Light System and look for a Plushbaby and hold your flashlight on them until they disappears, then it will give all your points back!",
        section: "ocn"
    },
    {
        name: "Overloaded Phantom Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/20/Overloaded_Phantom_Foxy.webp",
        description: "He will randomly appear in your office. Don't hover your mouse cursor over on him or else he will jumpscare you, causing a ventilation error and switch your mode to ALL OFF!",
        section: "ocn"
    },
    {
        name: "Overloaded Roxanne",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0c/Overloaded_Roxanne.webp",
        description: "She will always be in the office, deactivated. If she activates and just opens her eyes, shock her to deactivate her. If she activates and changes her pose, use the mask. You only have a short amount of time to do so.",
        section: "ocn"
    },
    {
        name: "Overloaded Prototime Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9b/Overloaded_Prototime_Foxy.webp",
        description: "He will be standing next to the Funtime Cove. When he goes away, close the right door to prevent him from entering the office. He can only kill you when you pull down the monitor.",
        section: "ocn"
    },
    {
        name: "Overloaded Phantom Puppet",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a5/Overloaded_Phantom_Puppet.webp",
        description: "For some reason he'll appear in the Left Hall on F1. If you see him there, you can stare at him to make vanish from existence, if you pull down your monitor while looking at them, they will feel quite insulted by your actions and add an extra 30 seconds to your night!",
        section: "ocn"
    },
    {
        name: "Overloaded Pan Stan",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e7/Overloaded_Pan_Stan.webp",
        description: "He really likes the wet floor sign and when he appears, he will stand next to it. Move it to the other side to make him disappear or he'll jumpscare you. If you let him jumpscare you 5 times, the power will go out.",
        section: "ocn"
    },
    {
        name: "Overloaded Nightmare Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d1/Overloaded_Nightmare_Foxy.webp",
        description: "Once you see his eyes in your right doorway, go to the Master Storage Room and buy the Foxy plush to avoid his attack! You can only buy the plush if you've collected a certain amount of Rupees, (the price will change based on the AI).",
        section: "ocn"
    },
    {
        name: "Overloaded Moon",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f1/Overloaded_Moon.webp",
        description: "When you hear him start talking, check the Left and Right halls on F1. See which hall he's in, then use the Distraction button on that camera to make him leave! Taking too long will end with with him ending your night!",
        section: "ocn"
    },
    {
        name: "Overloaded Map Bot",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8c/Overloaded_Map_Bot.webp",
        description: "He thinks that you are lost and you need a map, when he appears in your office, you better take it from him if you want to use the cameras again.",
        section: "ocn"
    },
    {
        name: "Overloaded Jack-O-Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1e/Overloaded_Jack-O-Bonnie.webp",
        description: "When the building heats up to 90° his face will appear in both doors and the top vent. Cool the Building down to 70° to see which one of them is real and close the correct door.",
        section: "ocn"
    },
    {
        name: "Overloaded Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/ff/Overloaded_Golden_Freddy.webp",
        description: "He works almost exactly the same as Withered Golden Freddy. He will randomly appear sitting in the office after flipping down the monitor. Put on your mask or flip it back up to make him vanish.",
        section: "ocn"
    },
    {
        name: "Overloaded Funtime Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8b/Overloaded_Funtime_Freddy.webp",
        description: "He will keep saying lines with his original voice and his german accent. If you hear him speak with his normal voice, Bon-Bon is in the office, click on him. If he speaks with his German accent, he is coming himself, use the control shock.",
        section: "ocn"
    },
    {
        name: "Overloaded Freddy Frostbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/c2/Overloaded_Freddy_Frostbear.webp",
        description: "If you keep using the power generator too much, Freddy Frostbear will appear and start cooling the down the building. Use the heater to make him disappear. If the temperature goes to 0°, your run will come to an end.",
        section: "ocn"
    },
    {
        name: "Boxsoft Adventure Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d0/Boxsoft_Adventure_Fredbear.webp",
        description: "When his hat appears on the desk, close both of the vents to avoid his jumpscare.",
        section: "bcn"
    },
    {
        name: "Boxsoft Yenndo",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/af/Boxsoft_Yenndo.webp",
        description: "At random points in the night, a thumping sound is heard. That means that Yenndo is approaching right near the vent entrance in a rapid pace. Quickly use the heater to deter him before he kills you.",
        section: "bcn"
    },
    {
        name: "Boxsoft Withered Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/0c/Boxsoft_Withered_Freddy.webp",
        description: "He crawls in the Duct System. He isn't affective by the Audio Lure. He only moves to the left duct, in which you need to use the appropriate duct seal to ward him off.",
        section: "bcn"
    },
    {
        name: "Boxsoft Withered Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/93/Boxsoft_Withered_Foxy.webp",
        description: "He crawls in the Vent System, immune to the Vent Snares or front vent door. When he arrives at the vent entrance, use the lever to blow some air onto Foxy, causing him to get blown away back to the starting point, otherwise he will jumpscare you.",
        section: "bcn"
    },
    {
        name: "Boxsoft Virtual Spring Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e0/Boxsoft_Virtual_Spring_Bonnie.png",
        description: "He'll start in the Vent System and make his way to the front vent opening. Once he make it to the opening he'll entire the office, shin the Golden Flashlight on him to send him back into the vent's or you'll die shortly after. You can also avoid this interlay by using the vent snares on him before he makes it to the vent opening.",
        section: "bcn"
    },
    {
        name: "Boxsoft Teaser Nightmare Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8e/BTNF.webp",
        description: "When activated, your screen will become black and white for one in-game hour.",
        section: "bcn"
    },
    {
        name: "Boxsoft UCN Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/30/Boxsoft_UCN_Golden_Freddy.png",
        description: "He will be in your office at all times, at some point he will start spazzing, in which you need to shock him using the Office Shock Panel, otherwise he will kill you.",
        section: "bcn"
    },
    {
        name: "Boxsoft Stage Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a5/Boxsoft_Stage_Freddy.webp",
        description: "He'll be in your office at all times, deactivated. If you are in the office for a while, he will activate and play the toreador march, raising the Noise Meter. Flip up the monitor to get him to deactivate & prevent a major noise disturbance.",
        section: "bcn"
    },
    {
        name: "Boxsoft Snowcone",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/01/Boxsoft_Snowcone.webp",
        description: "When Snowcone appears in the office, the temperature will go down. Flip up your monitor to get rid of him. If the temperature reaches 0, it is a game over for you.",
        section: "bcn"
    },
    {
        name: "Boxsoft Spring Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/39/Boxsoft_Spring_Bonnie.webp",
        description: "When Spring Bonnie appears in the office, put on the mask to get rid of him, however, if Remade Springtrap is active alongside Spring Bonnie, close both of the doors to get rid of him as putting the mask on will result in an instant death.",
        section: "bcn"
    },
    {
        name: "Boxsoft Shadow Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/54/Boxsoft_Shadow_Freddy.webp",
        description: "Using the flashlight too much will cause him to appear in either the left, right or front vent doorways. If he is there for too long, he will collapse said doorway, disabling it for a few seconds. Shine your Shakelight at the doorway he is on to make him go away.",
        section: "bcn"
    },
    {
        name: "Boxsoft Phantom Chica",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/4/4c/Boxsoft_Phantom_Chica.webp",
        description: "She comes from the top vent, when you see her face there, close the vent or else she will jumpscare you, causing a ventilation error.",
        section: "bcn"
    },
    {
        name: "Boxsoft Phantom Puppet",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/9/9e/Boxsoft_Phantom_Puppet.webp",
        description: "Upon switching systems, he will appear randomly, blocking the view of said system. You can't get rid of him, although he will disappear on his own.",
        section: "bcn"
    },
    {
        name: "Boxsoft Phantom Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ee/Boxsoft_Phantom_Freddy.webp",
        description: "He appears on the cameras, when he does, flip down the monitor or switch views to get rid of him.",
        section: "bcn"
    },
    {
        name: "Boxsoft Phantom Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a1/Boxsoft_Phantom_Foxy.webp",
        description: "He will slowly materialize in the tank from the F4 Aquarium camera. If he fades in all the way, he will jumpscare you, causing a ventilation error. Light-Flash the camera to make him disappear.",
        section: "bcn"
    },
    {
        name: "Boxsoft Nightmare Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d6/Boxsoft_Nightmare_Foxy.webp",
        description: "A foxy plushie will randomly appear in one of 3 different positions on your desk upon flipping down the monitor. If it is on the far left, close the left door, if it is on the middle, close the front vent door, & if it is on the far right, close the right door to avoid Nightmare Foxy's attack.",
        section: "bcn"
    },
    {
        name: "Boxsoft Lefty",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/ae/Boxsoft_Lefty.webp",
        description: "He works like the other vent animatronics, but the vent snare won't work on him. He doesn't make a sound when he reaches the vent entrance. Close the door on him when he arrives there.",
        section: "bcn"
    },
    {
        name: "Boxsoft Jumpscare Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ee/Boxsoft_Jumpscare_Golden_Freddy.png",
        description: "He will jumpscare you at the start of the night, giving you a negative effect that stays for the rest of the night, there's no way to avoid him.",
        section: "bcn"
    },
    {
        name: "Boxsoft JJ",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a4/Boxsoft_JJ.webp",
        description: "When she shows up in the office under your desk, the oxygen meter will decrease fast. Close both doors to make her leave.",
        section: "bcn"
    },
    {
        name: "Boxsoft Jack-O-Bonnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/1/1a/Boxsoft_Jack-O-Bonnie.png",
        description: "The office will burn, and when it reaches to maximum heat, you will die from the fire.",
        section: "bcn"
    },
    {
        name: "Boxsoft Golden Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/2/2a/Boxsoft_Golden_Freddy.webp",
        description: "Randomly throughout the night, & increasingly often if the temperature is high, your monitor will begin to glitch out. The more you leave the monitor alone, the worse the glitches get. Find a yellow button on the bottom of the monitor screen & click on it to stop the glitches, although you will be locked out of it for 3-5 seconds. Failure to do so will cause Golden Freddy to jumpscare you, causing a system crash & setting up your run to end (The office light dims, doorways remain open & unresponsive, & the monitor remains glitched permanently).",
        section: "bcn"
    },
    {
        name: "Boxsoft Glitchtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/3d/Boxsoft_Glitchtrap.webp",
        description: "He will attempt to manifest himself in your office near your left & right doorways. Figure out where he will show up by seeing if the doorway is slightly more purplish & glitchy, then close the door on him. Closing the wrong door or taking too long will result in death.",
        section: "bcn"
    },
    {
        name: "Boxsoft Games Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/3/36/Boxsoft_Games_Springtrap.webp",
        description: "He appears in the Duct System, causing the system camera to glitch out the closer he is to a duct seal. He is immune to the duct seals & lure. Use the Power/AC to send him back.",
        section: "bcn"
    },
    {
        name: "Boxsoft Bouncer",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/d/d7/Boxsoft_Bouncer.webp",
        description: "When Bouncer appears in the office, the temperature will go down. Put on your mask to get rid of him. If the temperature reaches 0, it is a game over for you.",
        section: "bcn"
    },
    {
        name: "Boxsoft Funtime Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/77/Boxsoft_Funtime_Freddy.webp",
        description: "Funtime Freddy will start on the Arcade Room on Floor 3, deactivated. Using the Audio Lure on a room will deter Funtime Freddy, making him slowly head towards the lure. If he reaches a lured room, he will then wander around the rest of the floor. Using the lure each subsequent time by 4 times will make him faster & faster. You can also Light-Flash him to stop him on his tracks & deactivate him again. Do not let him reach the exit camera, or he will enter the elevator & kill you.",
        section: "bcn"
    },
    {
        name: "Boxsoft Freddy Frostbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/c/ca/Boxsoft_Freddy_Frostbear.webp",
        description: "He will freeze the player's screen for one in-game hour. This does not affect any game function, as it only blocks the view with an ice effect.",
        section: "bcn"
    },
    {
        name: "Boxsoft Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/f2/Boxsoft_Fredbear.webp",
        description: "When you see Fredbear's hat on the desk, close both of the left & right doors to avoid his jumpscare.",
        section: "bcn"
    },
    {
        name: "Boxsoft Foxy.EXE",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/8/8c/Boxsoft_FoxyEXE.webp",
        description: "A small Foxy plush will randomly appear in the office, slowly glitching out more & more. If it glitches too much, Foxy.EXE will jumpscare you. Find it & use the Golden Flashlight to 'purify' the plush, slowly making it un-glitchful & disappear.",
        section: "bcn"
    },
    {
        name: "Boxsoft Endo-02",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/ee/Boxsoft_Endo-02.webp",
        description: "He appears in the F7 Dining Hall, currently attuned to the Christmas Jukebox. As long as music is playing there, he will not harm you. However, if the jukebox stops, he will slowly awaken & will jumpscare you if awaken too long. Turn it back on by raising the volume to make him calm again.",
        section: "bcn"
    },
    {
        name: "Boxsoft Dark Springtrap",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/5/56/Boxsoft_Dark_Springtrap.webp",
        description: "When Dark Springtrap is about to enter your office, signaled by a wheezing sound, the temperature will begin to rise quicker than usual. Quickly use the Power/AC to send him away. Failure to activate it in time, or if the temperature raises to the max, he will jumpscare you.",
        section: "bcn"
    },
    {
        name: "Boxsoft Challenger Fredbear",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/0/06/Boxsoft_Challenger_Fredbear.webp",
        description: "When his hat appears on the desk, put on your mask to get rid of him. If you ignore it, he will attack you with a Mega Bite, causing a ventilation error. If he does this 5 times, it is a game over for you.",
        section: "bcn"
    },
];
