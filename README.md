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



<p align="center">
  <img src="logo.png" width="140" alt="Logo" />
</p>

<details>
  <summary>Voir plus</summary>

  - Point 1
  - Point 2
</details>

<table>
  <tr><th>Col A</th><th>Col B</th></tr>
  <tr><td>Texte</td><td>Texte</td></tr>
</table>

Appuyez sur <kbd>Ctrl</kbd> + <kbd>C</kbd>

![build](https://img.shields.io/github/actions/workflow/status/USER/REPO/ci.yml)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="logo-dark.svg">
  <img alt="Logo" src="logo-light.svg" width="160">
</picture>


![test](https://github.com/user-attachments/assets/72e60f4b-a4eb-4d8a-8574-4ff1aa235796)





AUtre TEST avec du HTML + CSS inclu dans une balise <svg></svg>


<svg>
  <style>
      /* -------- Police Minecraft -------- */
  @font-face {
    font-family: "Minecraft";
    src:
      local("Minecraft Regular"),
      local("MinecraftRegular-Bmg3"),
      url("./minecraft-font/MinecraftRegular-Bmg3.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  :root{
    --cell-border:#2a2a2a;
    --text:#e8e8e8;
  }

  *{ box-sizing:border-box; }
  html,body{
    height:100%; margin:0; background:#0d0d0d; color:var(--text);
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif;
  }

  /* Le pannel en entier */
  .stats-panel{
    max-width: 960px;
    margin: 24px auto;
    padding: 16px 16px 6px;
    background: linear-gradient(#202020, #111);
    border: 1px solid #1d1d1d;
    box-shadow: 0 2px 10px rgba(0,0,0,.35) inset, 0 8px 30px rgba(0,0,0,.35);
    border-radius: 0px;
  }

  /* Titre */
  .title{
    margin: 0 0 12px;
    text-align: center;
    font-family: "Minecraft", monospace;   /* point 2 */
    font-size: 28px;
    letter-spacing: .5px;
    color: #dcdcdc;
    text-shadow: 0 1px 0 #000;
  }

  /* Le Pannel où on a les lignes */
  table.stats{
    width:100%;
    border-collapse: separate;
    border-spacing: 0;
    background: #0F0F0F;
    border: 1px solid #0C0C0C;
  }

  thead th, tbody th, tbody td{
    border-bottom: 1px solid var(--cell-border);
  }
  thead th:not(:first-child),
  tbody td:not(:first-child){
    border-left: 1px solid var(--cell-border);
  }

  thead th{
    padding: 6px 10px;
    height: calc(40px + 12px);
    vertical-align: middle;
  }

  .row-icon{
    width: 60px;
    text-align: center;
    padding: 6px;
  }

  /* Chaque case d'image */
  .pix{
    inline-size: 40px;
    aspect-ratio: 1 / 1;
    margin: 0 auto;
    background-color: #8C8C8C;
    padding: 5px;

    background:
      linear-gradient(#8C8C8C, #8C8C8C) top right / 2px 2px no-repeat,
      linear-gradient(#8C8C8C, #8C8C8C) bottom left / 2px 2px no-repeat,
      linear-gradient(#fff, #fff) top left  / 100% 2px no-repeat,
      linear-gradient(#373737, #373737) bottom left / 100% 2px no-repeat,
      linear-gradient(#fff, #fff) top left  / 2px 100% no-repeat,
      linear-gradient(#373737, #373737) top right / 2px 100% no-repeat,
      #8C8C8C
    ;
    display: grid;
    place-items: center;
    overflow: hidden;
  }

  .pix img{
    width: 100%; height: 100%;
    object-fit: contain;
    image-rendering: pixelated;   /* rendu pixel art */
  }

  /* Case haut gauche */
  .pix.corner{
    background: #f0c000;
    border-color: #8f6b00;
    padding: 0px;
  }

  .center-pix{
    max-inline-size: 100%;
    max-block-size: 100%;
    object-fit: contain;
    display: block;
    image-rendering: pixelated;
  }
  

  tbody .stat-row{ height: 48px; }
  tbody th.row-icon{ padding: 6px; }

  .num{
    font-family: "Minecraft", monospace;
    font-size: 18px;
    line-height: 1;
    text-align: right;
    padding: 10px 12px;
    white-space: nowrap;
    color: var(--text);
  }
  .num.muted{ color: #a0a0a0; }

  tbody tr:hover td, tbody tr:hover th{
    background: rgba(255,255,255,.02);
  }

  </style>
  <div class="stats-panel">
    <h1 class="title">Statistics</h1>
  
    <table class="stats">
      <thead>
        <tr>
          <th class="row-icon"><div class="pix corner"> <img class="" src="sprites/XGORATH_.png" alt=""> </div></th>
  
          <th><div class="pix"> <img class = "center-pix" src="sprites/Star.png" alt=""> </div></th>
          <th><div class="pix"> <img class="center-pix" src="sprites/Contribution.png" alt=""> </div></th>
          <th><div class="pix"> <img class="center-pix" src="sprites/Commit.png" alt=""> </div></th>
          <th><div class="pix"> <img class="center-pix" src="sprites/Code.png" alt=""> </div></th>
          <th><div class="pix"> <img class="center-pix" src="sprites/Size.png" alt=""> </div></th>
          <th><div class="pix"> <img class="center-pix" src="sprites/Fork.png" alt=""> </div></th>
        </tr>
      </thead>
  
      <tbody>
        <tr class="stat-row">
          <th class="row-icon">
            <div class="pix"> <img src="sprites/XGORATH_.png" alt=""> </div>
          </th>
  
          <td class="num">–</td>
          <td class="num">5,636,636</td>
          <td class="num">0</td>
          <td class="num">PHP</td>
          <td class="num">1,004</td>
          <td class="num">–</td>
        </tr>
  
        <tr class="stat-row">
          <th class="row-icon"><div class="pix"> <img src="sprites/XGORATH_.png" alt=""> </div></th>
          <td class="num muted">123,346</td>
          <td class="num muted">738,636</td>
          <td class="num muted">179</td>
          <td class="num muted">JAVA</td>
          <td class="num muted">–</td>
          <td class="num muted">164</td>
        </tr>
  
        <tr class="stat-row">
          <th class="row-icon"><div class="pix"> <img src="sprites/XGORATH_.png" alt=""> </div></th>
          <td class="num">364 K</td>
          <td class="num">6,253,540</td>
          <td class="num">42 M</td>
          <td class="num">C++</td>
          <td class="num">726,353</td>
          <td class="num">2 Md</td>
        </tr>
  
      </tbody>
    </table>
  </div>
</svg>




