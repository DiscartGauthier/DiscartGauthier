## Hi there 👋

**DiscartGauthier/DiscartGauthier** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...

<p align="center">
  <img src="https://capsule-render.vercel.app/api?text=Hey Everyone!🕹️&animation=fadeIn&type=waving&color=gradient&height=100"/>
</p>

<a href="https://www.instagram.com/thepiyushmalhotra/">
  <img height="50" src="https://user-images.githubusercontent.com/46517096/166974368-9798f39f-1f46-499c-b14e-81f0a3f83a06.png"/>
</a>

<h2> 🚀 &nbsp;Some Tools I Have Used and Learned</h2>
<p align="left">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="bash" width="45" height="45"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="php" width="45" height="45"/>
</p>



<!DOCTYPE html>

<!-- bottom left -->
<div class="tr-bl s-bl"></div>

<!-- top right -->
<div class="bl-tr s-tr"></div>

<!-- bottom right -->
<div class="tl-br"></div>
<div class="tr-br s-br"></div>
<div class="bl-br s-br"></div>
<div class="br-br"></div>

<!-- actual inventory -->
<div class="inventory middle">
<div class="top">
<div class="armor">
<div class="cell helmet"></div>
<div class="cell chest"></div>
<div class="cell leggings"></div>
<div class="cell boots"></div>
</div>
<div class="character cell"></div>
<div class="cell left"></div>
<div class="crafting"></div>
</div>
<div class="middle">
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
</div>
<div class="bottom">
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>
</div>
</div>
</div>
</body>
</html>


body, html {

.inventory .top .character {
background-color: black;
width: 5.7rem;
height: 100%;
box-sizing: border-box;
}

.inventory .top .crafting { flex: 1; }

/* middle for standard inventory items */
.inventory .middle {
display: grid;
grid-template-columns: repeat(9, auto);
}

/* bottom, hotbar */
.inventory .bottom {
display: grid;
grid-template-columns: repeat(9, auto);
}

/* ---------------- grid cell ---------------- */
.cell {
box-shadow: inset 2px 2px 0 0 #373737, inset -2px -2px 0 0 #ffffff;
background-color: #8b8b8b;
height: 2rem;
width: 2rem;
position: relative;
}

.cell:hover { background-color: #a1a1a1; }

/* corners */
.cell::before,
.cell::after {
content: "";
height: 2px;
width: 2px;
background-color: #8b8b8b;
position: absolute;
top: 0;
right: 0;
}

.cell::after {
top: auto;
right: auto;
left: 0;
bottom: 0;
}


