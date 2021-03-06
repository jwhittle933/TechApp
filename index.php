<!DOCTYPE html>
<html lang="en">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <head>
      <title>TechHelp@sbts</title>
      <link rel="stylesheet" href="index.css">
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Sawarabi+Mincho" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Cinzel|Lobster" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/vue"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  </head>

  <body>
  <div id="menu-div">
    <svg class=" svg rotate-reset"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" version="1.1" width="120px" height="120px">
    <g id="surface1">
    <path style=" fill:#DFF0FE;" d="M 1.5 17.5 L 38.5 17.5 L 38.5 22.5 L 1.5 22.5 Z "/>
    <path style=" fill:#4788C7;" d="M 38 18 L 38 22 L 2 22 L 2 18 L 38 18 M 39 17 L 1 17 L 1 23 L 39 23 Z "/>
    <path style=" fill:#DFF0FE;" d="M 1.5 7.5 L 38.5 7.5 L 38.5 12.5 L 1.5 12.5 Z "/>
    <path style=" fill:#4788C7;" d="M 38 8 L 38 12 L 2 12 L 2 8 L 38 8 M 39 7 L 1 7 L 1 13 L 39 13 Z "/>
    <path style=" fill:#DFF0FE;" d="M 1.5 27.5 L 38.5 27.5 L 38.5 32.5 L 1.5 32.5 Z "/>
    <path style=" fill:#4788C7;" d="M 38 28 L 38 32 L 2 32 L 2 28 L 38 28 M 39 27 L 1 27 L 1 33 L 39 33 Z "/>
    <p>Menu</p>
  </div>

  <div id="menu">
    <div id="menu-items" class="menu-items-view">
      <ul>
        <li><a href="#" target="_blank">Submit a Technology Request</a></li>
        <li><a href="#" target="_blank">What do I need?</a></li>
        <li><a href="http://www.sbts.edu/services/campus-technology/" target="_blank">Campus Technology Home</a></li>
        <li><a href="http://www.sbts.edu" target="_blank">SBTS Home</a></li>
        <li><a href="login.html" target="_blank">Request Manager</a></li>
      </ul>
    </div>
  </div>


  <header>
    <h1 id="item">Tech Help @ SBTS</h1>
    <p id="item3">A quick help site when a technician is unavailable</p>
  </header>


  <main>
    <div id="forms-div">
      <ul>
        <li><form class="form" method="get" action="roompopulate.php">
          <label for="buildop">What building are you in?</label>
          <select id="buildop" value="" name="buildop" onchange = 'populateRoomMenu()'>
            <option></option>
            <option>Norton</option>
            <option>Carver</option>
            <option>Rankin</option>
            <option>Library</option>
            <option>Cooke</option>
          </select>
        </form></li>
        <li><form id = "roomform" class="form" style="display:none;" method="get" action="roomproblem.php">
          <label for="roomop">What room are you in?</label>
          <select id="roomop" name="roomop" onchange='roomSelection()'>
            <option></option>
          </select>
        </form></li>
        <li><form id="probform" class="form" style="display:none;" method="post" action="">
          <label for="probop">What's the Problem?</label>
          <select id="probop" name="probop" onchange='probSelection()'>
          </select>
        </form></li>
      </ul>
    </div>
    <div id = "suggestion-div" style="display:none">
      <h2>Suggestions:</h2>
      <ul id="suggestion-ul">
      </ul>
      <button class="solutionButton">Room Info</button>
      <button onclick="location.href='reportform.html'" class="solutionButton" type="submit">
        Report a problem</button>
    </div>
    <div id="solution-content-div">
      <button class="solution-close" type="submit">X</button>
      <h2>Room Details</h2>
      <p id="populate"></p>
    </div>
  </main>


  <footer>
    <div id="southern-links">
      <ul>
        <li>SBTS</li>
        <li>Canvas</li>
        <li>MySBTS</li>
      </ul>
    </div>
    <div id="other-links">
      <ul>
        <li>AlberMohler.com</li>
        <li>Campus Technology</li>
      </ul>
    </div>
    <div id='droptest'></div>
  </footer>
  <script src="techapp.js"></script>
  </body>
</html>
