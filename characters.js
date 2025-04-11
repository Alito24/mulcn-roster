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
