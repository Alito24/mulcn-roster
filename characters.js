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
        name: "Maskless Ennard",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e9/Maskless_Ennard.webp",
        description: "When you hear a metallic sound, look for his eyes in both doors and vents and close the corresponding door.",
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
        name: "Glamrock Lolbit",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/7/7b/Glamrock_Lolbit.png",
        description: "Glamrock Lolbit will randomly appear on your screen during the night and make lots of noise! Open your camera monitor and type L-O-L using the system modes that have the corresponding letters next to them. The order they appear in switches every time.",
        section: "fnafsb"
    },
    {
        name: "Virtual Yenndo",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/e/e4/Virtual_Yenndo.webp",
        description: "He will randomly appear in your office when putting the monitor down. When this happens, he will dramatically raise the toxic meter. Open up the monitor again before you die from the toxins.",
        section: "fnafhw2"
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
        name: "Vinnie",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/b/bb/Vinnie.webp",
        description: "When he appears in your office, that means he has locked you out of the Kitchen Camera. Change the Kitchen’s music via Switch Box Station to make him leave.",
        section: "fnac"
    },
    {
        name: "Dark Blacklight Glamrock Freddy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/f/ff/Dark_Blacklight_Glamrock_Freddy.png",
        description: "If you’re using too much power usage, he’ll run into your office. Turn off as much power you can and shine him with the UV flashlight or else he’ll end your game.",
        section: "funko"
    },
    {
        name: "Digital Glow Nightmare Foxy",
        imageUrl: "https://static.wikia.nocookie.net/multiverse-custom-night/images/a/a9/Digital_Glow_Nightmare_Foxy.png",
        description: "He will appear in your office at random points during the night. When he appears there will be two Nightmare Foxy's next to him. Use the Fazer-Blaster to shoot the one that's glowing.",
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
];
