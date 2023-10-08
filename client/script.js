import bot from './assets/bot.svg'
import user from './assets/user.svg'

const form = document.querySelector('form')
const chatContainer = document.querySelector('#chat_container')

let loadInterval;
let intervalId;
// Check if user has scrolled up
let isScrolled = false;
function keepChatVisible() {
    const chatContainer = document.querySelector('#chat_container');
    // Set the scroll position of the chat container to the bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
  

function startChatScrolling(){
    intervalId = setInterval(() => {
        keepChatVisible();
    }, 1111);
}

function stopChatScrolling(){
    clearInterval(intervalId);
}

function loader(element) {
    element.textContent = ''

    loadInterval = setInterval(() => {
        // Update the text content of the loading indicator
        element.textContent += '.';

        // If the loading indicator has reached three dots, reset it
        if (element.textContent === '....') {
            element.textContent = '';
        }
    }, 300);
}

function typeText(element, text) {
    let index = 0

    startChatScrolling();

    let interval = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index)
            index++
        } else {
            clearInterval(interval)
            stopChatScrolling()
        }
    }, 20)
}

// generate unique ID for each message div of bot
// necessary for typing text effect for that specific reply
// without unique ID, typing text will work on every element
function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
}

function chatStripe(isAi, value, uniqueId) {
    return (
        `
        <div class="wrapper ${isAi && 'ai'}">
            <div class="chat">
                <div class="profile">
                    <img 
                      src=${isAi ? bot : user} 
                      alt="${isAi ? 'bot' : 'user'}" 
                    />
                </div>
                <div class="message" id=${uniqueId}>${value}</div>
            </div>
        </div>
    `
    )
}


const handleSubmit = async (prompt) => {
    // user's chatstripe
    chatContainer.innerHTML += chatStripe(false, prompt)

    // to clear the textarea input 
    form.reset()

    // bot's chatstripe
    const uniqueId = generateUniqueId()
    chatContainer.innerHTML +=
    chatStripe(true, " ", uniqueId)

    // to focus scroll to the bottom 
    chatContainer.scrollTop = chatContainer.scrollHeight;
    
    // specific message div 
    const messageDiv = document.getElementById(uniqueId)
    
    // messageDiv.innerHTML = "..."
    loader(messageDiv)

// log messages
    console.log(prompt);
   
    



    
    
    
    const data = { prompt }
    
    const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    
    clearInterval(loadInterval)
    messageDiv.innerHTML = " "
    
    if (response.ok) {
        const data = await response.json();
        const parsedData = data.bot.trim() // trims any trailing spaces/'\n' 
        

        typeText(messageDiv, parsedData)
    } else {
        const err = await response.text()
    
        messageDiv.innerHTML = "Something went wrong, try again."
        
            
          
          
        
    }
    
    }
    
    document.addEventListener("DOMContentLoaded", function(){
        const customPrompt = "Greetings, what can you help with?";
        handleSubmit(customPrompt);
    });
    



    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const prompt = event.target.querySelector('textarea').value;
        handleSubmit(prompt);
    });
    
    form.querySelector('textarea').addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            
            const prompt = event.target.value;
            handleSubmit(prompt);
        }
    });
    







    // UX



    
var sickPrimary = {
    autoplay: true,
    autoplaySpeed: 22110,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1100,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    asNavFor: '.text-slider',
    centerMode: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
}

var sickSecondary = {
    autoplay: true,
    autoplaySpeed: 22110,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1100,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    asNavFor: '.image-slider',
    prevArrow: $('.prev'),
    nextArrow: $('.next'),


}

$('.image-slider').slick(sickPrimary);
$('.text-slider').slick(sickSecondary);



// img height




$('#openux').click(function() {
    setTimeout(function() {
      $('.ux').css({
        'opacity': 1,
        'display': 'initial',
        'z-index': '111',
      });
    }, 0);

    setTimeout(function() {
      $('.slick-slide.slick-center').css({
        'z-index': '111',
      });
    }, 5000);

    setTimeout(function() {
        $('#app').css({
          'z-index': '0',
          'opacity': '0',
        });
      }, 0);


     

      setTimeout(function() {
        $('.main_menu').css({
          'z-index': '0',
          'opacity': '0',
        });
      }, 0);


      setTimeout(function() {
        $('.loadingScreen').css({
          'z-index': '3',
          'opacity': '1',
        });
      }, 0);

      setTimeout(function() {
        $('.loadingScreen').css({
          'z-index': '0',
          'opacity': '0',
        });
      }, 0);


      setTimeout(function() {
        $('.closeux').css({
          'z-index': '9',
          'opacity': '1',
        });
      },);


      $('.logo').css({
        'opacity': 0,
        
          'z-index': '0',

      });


      $('.logoTitle').css({
        'opacity': 0,
        
          'z-index': '0',

      });


      $(".closeConnect").trigger("click");



});




$(document).ready(function(){
  var video = document.getElementById("myVideo");
  video.playbackRate = 0.333; // set the playback speed to half
});






    $('.closeux').click(function() {
        $('.ux').css({
          'opacity': 0,
          
            'z-index': '0',

        });

        $('.closeux').css({
            'opacity': 0,
            
              'z-index': '0',
  
          });

          $('#app').css({
            'opacity': 1,
              'z-index': '5',
        
          });


          $('.main_menu').css({
            'opacity': 1,
              'z-index': '7',
        
          });


          $('.logo').css({
            'opacity': 1,
            
              'z-index': '7',
    
          });
    

          $('.logoTitle').css({
            'opacity': 1,
            
              'z-index': '7',
    
          });
         


        });
    


$('.cta2').click(function() {
$('.fullimg').css({
  'opacity': 0,
  'display': 'none',
    'z-index': '111',
  'background': 'rgba(14,14,14,0.55)'
});
});

$('.closefull').click(function() {
$('.fullimg').css({
  'opacity': 0,
 
    'z-index': '0',
  'background': 'rgba(14,14,14,0.55)'
});
});








// Noize





const noise = () => {
  let canvas, ctx;

  let wWidth, wHeight;

  let noiseData = [];
  let frame = 0;

  let loopTimeout;

  // Create Noise
  const createNoise = () => {
    const idata = ctx.createImageData(wWidth, wHeight);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;

    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.5) {
        buffer32[i] = 0xff000000;
      }
    }

    noiseData.push(idata);
  };

  // Play Noise
  const paintNoise = () => {
    if (frame === 5) {
      frame = 0;
    } else {
      frame++;
    }

    ctx.putImageData(noiseData[frame], 0, 0);
  };

  // Loop
  const loop = () => {
    paintNoise(frame);

    loopTimeout = window.setTimeout(() => {
      window.requestAnimationFrame(loop);
    }, 1000 / 25);
  };

  // Setup
  const setup = () => {
    wWidth = window.innerWidth;
    wHeight = document.body.scrollHeight;
    canvas.width = wWidth;
    canvas.height = wHeight;

    for (let i = 0; i < 10; i++) {
      createNoise();
    }

    loop();
  };

  // Reset
  let resizeThrottle;
  const reset = () => {
    window.addEventListener(
      "resize",
      () => {
        window.clearTimeout(resizeThrottle);

        resizeThrottle = window.setTimeout(() => {
          window.clearTimeout(loopTimeout);
          setup();
        }, 200);
      },
      false
    );
  };

  // Init
  const init = (() => {
    canvas = document.getElementById("logonoize");
    ctx = canvas.getContext("2d");

    setup();
  })();
};

noise();



// connect

$(document).ready(function() {
  $(".connect").click(function() {
    $("#app").css("opacity", "0");


    $("#about").css("top", "19%");

  });
});


// close connect

$(document).ready(function() {
  $(".closeConnect").click(function() {
    $("#app").css("opacity", "1");


    $("#about").css("top", "-100vh");

  });
});












// threejs

// Seed for world generation
var seed = "H4CK3R";
var TILE_SIZE = 33; // Set your desired tile size here
var WORLD_SIZE = Math.max(window.innerWidth, window.innerHeight) / TILE_SIZE; // World size adjusted based on tile size
var TILES_AROUND_PLAYER = 1.44;
var CLUSTER_SIZE = 1; // Number of tiles in each cluster

// Initialize the scene
var scene = new THREE.Scene();

// Create the camera
var camera = new THREE.OrthographicCamera(
  window.innerWidth / -2,
  window.innerWidth / 2,
  window.innerHeight / 2,
  window.innerHeight / -2,
  1,
  1000
);
camera.position.z = 100;

// Set up the renderer
var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.position = "absolute";
renderer.domElement.style.top = "0";
renderer.domElement.style.left = "0";
document.body.appendChild(renderer.domElement);

// Generate the world map
var worldMap = generateWorldMap(seed);

// Function to generate the world map based on the seed
function generateWorldMap(seed) {
  var map = [];
  var random = new Math.seedrandom(seed);

  for (var i = -WORLD_SIZE / 2; i < WORLD_SIZE / 2; i += CLUSTER_SIZE) {
    for (var j = -WORLD_SIZE / 2; j < WORLD_SIZE / 2; j += CLUSTER_SIZE) {
      var clusterType;
      var noise = random();

      if (noise < 0.2) {
        clusterType = "water";
      } else if (noise < 0.6) {
        clusterType = "forest";
      } else if (noise < 0.9) {
        clusterType = "grassland";
      } else {
        clusterType = "mountain";
      }

      for (var x = i; x < i + CLUSTER_SIZE; x++) {
        for (var y = j; y < j + CLUSTER_SIZE; y++) {
          map.push({ x: x, y: y, type: clusterType });
        }
      }
    }
  }

  return map;
}

// Function to render the world map
function renderWorldMap() {
  for (var i = 0; i < worldMap.length; i++) {
    var tile = worldMap[i];

    var tileGeometry = new THREE.PlaneGeometry(TILE_SIZE, TILE_SIZE);
    var tileMaterial = new THREE.MeshBasicMaterial({ color: getTileColor(tile.type), transparent: true, opacity: 0 });

    var tileMesh = new THREE.Mesh(tileGeometry, tileMaterial);
    tileMesh.position.set(tile.x * TILE_SIZE + TILE_SIZE / 2, tile.y * TILE_SIZE + TILE_SIZE / 2, 0);
    scene.add(tileMesh);
  }
}

// Function to get the color based on tile type
function getTileColor(type) {
  switch (type) {
    case "water":
      return 0x0000ff;
    case "forest":
      return 0x00ff00;
    case "grassland":
      return 0xffff00;
    case "mountain":
      return 0xaaaaaa;
    default:
      return 0xffffff; // Default color if type is not recognized
  }
}

// Variables to store player position
var playerX = 0;
var playerY = 0;

// Variables to store target player position
var targetPlayerX = 0;
var targetPlayerY = 0;

// Function to update the game state
function update(event) {
  var mouseX = event.clientX - window.innerWidth / 2;
  var mouseY = -(event.clientY - window.innerHeight / 2);

  targetPlayerX = mouseX;
  targetPlayerY = mouseY;
}

// Function to update the player position
function updatePlayerPosition() {
  var easing = 0.05; // Smoothing factor (adjust as needed)

  var deltaX = targetPlayerX - playerX;
  var deltaY = targetPlayerY - playerY;

  playerX += deltaX * easing;
  playerY += deltaY * easing;
}

// Function to animate tiles based on player position
function animateTiles() {
  var playerTileX = Math.floor(playerX / TILE_SIZE);
  var playerTileY = Math.floor(playerY / TILE_SIZE);

  for (var i = 0; i < scene.children.length; i++) {
    var tile = scene.children[i];
    var tileX = Math.floor(tile.position.x / TILE_SIZE);
    var tileY = Math.floor(tile.position.y / TILE_SIZE);

    var distance = Math.sqrt((playerTileX - tileX) ** 2 + (playerTileY - tileY) ** 2);

    if (distance <= TILES_AROUND_PLAYER) {
      if (tile.material.opacity === 0) {
        // Fade in
        new TWEEN.Tween(tile.material)
          .to({ opacity: 0.7 }, 1000)
          .start();
      }
    } else {
      if (tile.material.opacity === 0.7) {
        // Fade out
        new TWEEN.Tween(tile.material)
          .to({ opacity: 0 }, 1000)
          .start();
      }
    }
  }
}

// Create the player
var player = new THREE.Mesh(
  new THREE.CircleGeometry(TILE_SIZE / 2, 32),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
player.position.set(playerX, playerY, 1); // Set the initial player position
scene.add(player);

// Handle mouse movement
function onMouseMove(event) {
  update(event);
}

document.addEventListener("mousemove", onMouseMove);

// Function to render the scene
function render() {
  requestAnimationFrame(render);

  updatePlayerPosition();
  animateTiles();
  TWEEN.update(); // Update the Tween.js library

  renderer.render(scene, camera);
}

// Set up the initial world map
renderWorldMap();

// Function to change the seed every 5 seconds
function changeSeed() {
  seed = generateRandomSeed(); // Generate a new random seed
  worldMap = generateWorldMap(seed); // Generate a new world map based on the new seed

  // Remove existing tiles from the scene
  for (var i = scene.children.length - 1; i >= 0; i--) {
    var child = scene.children[i];
    if (child !== player) {
      scene.remove(child);
    }
  }

  // Render the new world map
  renderWorldMap();
}

// Function to generate a random seed
function generateRandomSeed() {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var length = 6; // Desired length of the random seed
  var result = "";

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

// Start rendering the scene
render();

// Change the seed every 55 seconds
setInterval(changeSeed, 55000);



// Define the variables
let timeoutId;
let seedChangeInterval = 55000; // 55 seconds
let mouseStillDuration = 5000; // 3 seconds



// Function to handle mouse movement
function handleMouseMovement() {
  // Clear the previous timeout if it exists
  clearTimeout(timeoutId);

  // Set a new timeout
  timeoutId = setTimeout(checkMouseStill, mouseStillDuration);
}

// Function to check if the mouse is still
function checkMouseStill() {
  // Call the changeSeed() function
  changeSeed();

  // Set a new timeout to keep calling the changeSeed() function
  timeoutId = setTimeout(checkMouseStill, mouseStillDuration);
}

// Start the initial seed-changing interval
setInterval(changeSeed, seedChangeInterval);

// Add event listener for mouse movement
document.addEventListener("mousemove", handleMouseMovement);





//

//

// custom mouse


document.addEventListener('mousemove', function(e) {
  var customCursor = document.querySelector('.custom-cursor');
  customCursor.style.left = (e.clientX - 13) + 'px';
  customCursor.style.top = (e.clientY - 55) + 'px';
});






// image project gallery


$(document).ready(function() {
  // Hide content by default
  $('.content').hide();

  // Define an array of data for the menu items
  var menuData = [
    {
      imageSrc: '/images/projectz_imagez/dragonpathy0.png',
      title: 'Dragonpath',
      paragraph: 'Ett RPG spel gjort med openai. Låt servern ladda klart vid varje klick, inte fixat laddningsanimation än.',
      link: 'https://dragonpath-doz.vercel.app/',
    },
    {
      imageSrc: 'images/projectz_imagez/bastuklubben.png',
      title: 'Bastu Bokningssystem',
      paragraph: 'Bastuföreningen i bygden behövde en bokningsserver, bygger denna just nu. Låt servern starta tar några sekunder. Demo konto: bastuexempel@gmail.com | password',
      link: 'https://bastu.webflow.io',
    },
    {
      imageSrc: 'images/projectz_imagez/oliver.png',
      title: 'Olivprodukter',
      paragraph: 'Lokalföretagare som ville ha en statisk hemsida. Byggde dock swishbetalnings system för beställningar också. Ni kan pröva boka, med ett stochkolms postnr, då endast gbg postnr funkar.',
      link: 'https://www.olivprodukter.se',
    },
    {
      imageSrc: 'images/projectz_imagez/noteplus.png',
      title: 'Note Deluxe',
      paragraph: 'Trött på o bli bländad när man sitter och skriver poesi på nätterna. Under konstruktion.',
      link: 'https://codepen.io/rasmus-p-lundin/full/bGOQPjB',
    },
    {
      imageSrc: 'images/projectz_imagez/searchzone.png',
      title: 'Wikilux (SearchZone) Beta 0.55',
      paragraph: 'Bara den översta raden av keywordzen funkar än så länge.',
      link: 'https://codepen.io/rasmus-p-lundin/full/eYbQwQr',
    },
    {
      imageSrc: 'images/projectz_imagez/trackerzone.png',
      title: 'Tracker Zone',
      paragraph: 'Litet projekt jag byggde. Ska finputsa och vidareutveckla i sinom tid.',
      link: 'https://codepen.io/rasmus-p-lundin/full/ZEVmdmx',
    },
    {
      imageSrc: '',
      title: 'Mountain Retreat',
      paragraph: 'Paragraph 7',
      link: 'https://example.com/link7',
    },
    {
      imageSrc: 'https://picsum.photos/900/500?technology=8',
      title: 'Desert Oasis',
      paragraph: 'Paragraph 8',
      link: 'https://example.com/link8',
    },
    {
      imageSrc: 'https://picsum.photos/900/500?technology=9',
      title: 'Tropical Paradise',
      paragraph: 'Paragraph 9',
      link: 'https://example.com/link9',
    }
  ];



  // Handle menu item click
  $('.menu-item').click(function() {


    // Remove active class from all menu items
    $('.menu-item').removeClass('active');

    // Add active class to clicked menu item
    $(this).addClass('active');

    // Get the index of the clicked menu item
    var menuIndex = $(this).index();

    // Get data for the clicked menu item
    var menuItemData = menuData[menuIndex];

// Hide the content instantly
    $('.content_text').hide();

    // Animate the content change with slideUp and slideDown
    $('.content').slideUp(function() {
      // Update content and then slide it down
      $('.image-preview').css('background-image', 'url("' + menuItemData.imageSrc + '")');
      $('.text-preview').text(menuItemData.title);
      
      $('.paragraph-preview').html('Paragraph ' + (menuIndex + 1) + '<button class="open-link">View</button>');

// Attach the link to the "Open Link" button
$('.open-link').data('link', menuItemData.link);      
$('.content_text').fadeIn(1555);
      $('.content').slideDown();
    });
  });
  

  // Handle "Open Link" button click
  $('.content').on('click', '.open-link', function(event) {
    event.stopPropagation(); // Prevent the menu item click from triggering


    // Get the link from the data attribute
    var link = $(this).data('link');

    // Change the background color of the button when clicked
    $(this).css('background-color', '#97410f'); // Change 'red' to your desired color

    var button = document.querySelector('.open-link');

    // Add hover effect using JavaScript
    button.addEventListener('mouseenter', function() {
      // Change the background color to blue when hovered over
      button.style.backgroundColor = 'green';
    });

    button.addEventListener('mouseleave', function() {
      // Change the background color back to green when the mouse leaves
      button.style.backgroundColor = '#97410f';
    });



    // Open the link in a new window/tab
    if (link) {
      window.open(link, '_blank');
    }
  });
});



     // Wait for the document to be ready
     $(document).ready(function() {
      // Trigger a click event on the first menu item
      $('.menu-item:first').click();
  });





  