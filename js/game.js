const storyTextElement = document.getElementById('story-text');

const playButton = document.getElementById('play');

function startGame() {
   storyTextElement.innerHTML = "<p>You find yourself in the capital of the noble humans, Bytehaven, there is so much to and so much to learn, but you only have eyes for one craft; Codecraftsman. You are goal is simple, you want to be the very best at coding and you won’t stop for anything. So there you are in the middle of Bytehaven and you just finished your basic lessons, which has thought you many things, but nothing you can use to become a Codecraftsman.</p><p>Your first task is to find a master that can point you into the direction of starting to learn this craft!</p>"
   showOptions(["Find a master"]);
}

function showOptions(options) {
   const optionsContainer = document.createElement('div');

   options.forEach((option, index) => {
      const button = document.createElement('button');
      button.innerHTML = option;
      button.onclick = () => makeChoice(option);
      optionsContainer.appendChild(button);
   });

   storyTextElement.appendChild(optionsContainer);

   if (playButton) {
      playButton.style.display = "none";
   }
}

function makeChoice(choice) {
   if (choice === "Find a master") {
      storyTextElement.innerHTML = "<p>You found a master that told you that the skill you want to achieve can’t be achieved unless you finish the basic studies first. He has noticed that you are motivated to become a Codecraftsman but you lack the level of skill to become this. So you set out on a series of challenges while in secret you start to learn enchanting. Enchanting makes life more interactive and helps overcome basic challenges, this craft includes two skills; HTML and CSS.</p>";
      showOptions(["Learn HTML"]);
   } else if (choice === "Learn HTML") {
      storyTextElement.innerHTML = "<p>You found a master with the name Master Google who specializes in HTML, it took you a full year to master this skill. You had to do this in secret because the other master expected you to learn magic instead of enchanting. With magic you can make magical scrolls to inform other users with magnificent designs. You think you are a full fledged enchanter now but Master Google reminds you, there is more to be learned before you can go on...</p>";
      showOptions(["Learn CSS"]);
   } else if (choice === "Learn CSS") {
      storyTextElement.innerHTML = "<p>Even though this one seems to be a bit more of a puzzle than HTML, you eventually finish your studies and master both skills perfectly. Master Google hands you a scroll which you place in your inventory carefully. The master tells you that you can use this in the future whenever you need to learn more skills.</p>";
      showOptions(["Go on your way"]);
   } else if (choice === "Go on your way") {
      storyTextElement.innerHTML = "<p>You go back to the Master of Magic and finish your required studies in order to move onwards and hopefully be able to follow the study to become a Codecraftsman. You finish your studies and get an official diploma “Scroll of Magic Masters”, you place this is in your inventory and go on to your next studies outside of Bytehaven.</p>";
      showOptions(["Go outside of Bytehaven"]);
   } else if (choice === "Go outside of Bytehaven") {
      storyTextElement.innerHTML = "<p>You find yourself at the edge of a dark forest, Academia is known for its dark forests, you heard rumors of many coding challenges that are sometimes even too harsh for Masters of the Codecraft. You have no choice but to go into the forest and find a master to continue your studies.</p>";
      showOptions(["Go deeper into the forest"]);
   } else if (choice === "Go deeper into the forest") {
      storyTextElement.innerHTML = "<p>You find yourself in the middle of the forest and keep falling because you can’t see anything. You remember your skills from earlier, HTML and CSS, you can use this to your advantage.</p>";
      showOptions(["Use HTML to craft a portal", "Use HTML and CSS to craft a lantern"]);
   } else if (choice === "Use HTML to craft a portal") {
      storyTextElement.innerHTML = "<p>You close your eyes and use your mind to visualize a portal, it doesn’t have any specific details but that’s not needed, as long as it functions as a way to get out of the forest. A black portal appears...</p>";
      showOptions(["Take a chance and leap in it", "Craft a lantern instead"]);
   } else if (choice === "Take a chance and leap in it") {
      storyTextElement.innerHTML = "<p>You find yourself at the end of the forest, the portal worked and this is the first challenge you have overcome. You feel overjoyed and gain more motivation.</p>";
      showOptions(["Go look for your next master"]);
   } else if (choice === "Use HTML and CSS to craft a lantern") {
      storyTextElement.innerHTML = "<p>You close your eyes and visualize a bright light contained in a glass lantern. You can see a light appear through your eyelids and as soon as you open them you see a bright lid area around a lantern that sits on a log in front of you.</p>";
      showOptions(["Continue your journey"]);
   } else if (choice === "Craft a lantern instead") {
      storyTextElement.innerHTML = "<p>You close your eyes and visualize a bright light contained in a glass lantern. You can see a light appear through your eyelids and as soon as you open them you see a bright lid area around a lantern that sits on a log in front of you.</p>";
      showOptions(["Continue your journey"]);
   } else if (choice === "Continue your journey") {
      storyTextElement.innerHTML = "<p>The light attracted a monster, you heard rumors about his monster back in Bytehaven. People told you that there is an old master set in his ways living deep in the forest, if you don’t do anything he will reset your skills and remove your motivation to continue studying.</p>";
      showOptions(["Use HTML and CSS to craft a mighty sword", "Run away"]);
   } else if (choice === "Use HTML and CSS to craft a mighty sword") {
      storyTextElement.innerHTML = "<p>You created an amazing sword that glows when there are monsters nearby. You swing with all your strength and slay the monster where it stands! Victorious!</p>";
      showOptions(["Go look for your next master"]);
   } else if (choice === "Run away") {
      storyTextElement.innerHTML = "<p>You seem to have gotten away, but not without harm. You lost half of your health. If you could only find a way to regain this health. You heard in the capital of people who master the art of alchemy to create health potions.</p>";
      showOptions(["Go look for your next master"]);
   } else if (choice === "Go look for your next master") {
      storyTextElement.innerHTML = "<p>You found your master, he promises you to teach in the skill of shadow magic! Uh... but wait, you wanted to be thought the skill of alchemy to become a better codecraftsman. You learn you have been lied to and misinformed for the better part of 4 years...</p>";
      showOptions(["Learn shadow magic", "Quit"]);
   } else if (choice === "Learn shadow magic") {
      storyTextElement.innerHTML = "<p>Although this is what you wanted, you have decided to continue and learn shadow magic, the master promises you to give you a better scroll of diploma which gives you a ticket into the Master Sanctum of Codecraft.</p>";
      showOptions(["What is shadow magic?"]);
   } else if (choice === "What is shadow magic?") {
      storyTextElement.innerHTML = "<p>Shadow magic is a way of giving color and style to everything around you. You can build entire worlds which you can only access with certain magical machines that are connected to the World Wide Wizards, mighty beings that control everything you do with these magical machines.</p>";
      showOptions(["Continue to learn"]);
   } else if (choice === "Continue to learn") {
      storyTextElement.innerHTML = "<p>You finished another two years of hard study with an internship that managed to get into your first guild as an enchanter. And above all else, you gained the scroll of diploma which allows you to learn more and specialize for a specific role within a guild!</p>";
      showOptions(["Work for the guild"]);
   } else if (choice === "Work for the guild") {
      storyTextElement.innerHTML = "<p>You decided to take a two year break from studying and work for the guild as an enchanter. But.. with all the money you get from the guild you can go back to studying without having to worry about funding.</p>";
      showOptions(["Continue work"]);
   } else if (choice === "Continue work") {
      storyTextElement.innerHTML = "<p>After working for two years, a dangerous virus tore the world apart and due to your guilds business being in that line of work, you are left without work, an important choice awaits you...</p>";
      showOptions(["Quit", "Go to the Master Sanctum of Codecraft"]);
   } else if (choice === "Go to the Master Sanctum of Codecraft") {
      storyTextElement.innerHTML = "<p>After a full nine years you finally got into the Master Sanctum of Codecraft but the following year is going to have many challenges, the world has changed and what was formerly known as Academia is now known as the Plaguelands a world controlled by a virus and regulations.</p><p>You find out that these studying aren't as easy as the ones you have had before, but after a year and half you finally made it and can now choose a craft to study.</p>";
      showOptions(["Go learn Codecraft"]);
   } else if (choice === "Go learn Codecraft") {
      storyTextElement.innerHTML = "<p>You learned many crafts in the past few years which you put to the test, you find out that you have a hard time showing these masters that you have the skills and that you can function as a professional. Your mind is on the verge of breaking, but are you a quiter or do you want to learn more form external masters?</p>";
      showOptions(["Quit", "Go do an internship at another guild"]);
   } else if (choice === "Go do an internship at another guild") {
      storyTextElement.innerHTML = "<p>You found another guild to do an internship at, you have a great time here and managed to get a contract for work as long as you can combine it with your upcoming studies. This contract allows you to earn money, learn even more and better things and stay in touch with professional masters of codecraft.</p>";
      showOptions(["Combine guild work with studies"]);
   } else if (choice === "Combine guild work with studies") {
      storyTextElement.innerHTML = "<p>Thank you for playing</p><p>This is the story for now, but there is yet more to come as I'm not a full Master of Codecraftsman, I will not stop until I have finished the studies in the Master Sanctum of Codecraft.</p>";
      showOptions(["Quit"]);
   } else if (choice === "Quit") {
      storyTextElement.innerHTML = "<p>Thank you for playing, feel free to play again to discover the other possibilities!</p>";
      clearOptions();
   }

   if (choice === "Quit") {
      if (playButton) {
         playButton.style.display = "inline-block";
      }
   }
}

function clearOptions() {
   const optionsContainer = storyTextElement.querySelector('div');

   if (optionsContainer) {
      optionsContainer.remove();
   }
}
