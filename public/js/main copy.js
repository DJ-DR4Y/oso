// import '../css/style.css'
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js'

let balises_a_deplacer = document.querySelectorAll(".teaser")

for (let balise of balises_a_deplacer) {

  let instance = new Drag(balise)

}

// Audio lecteur avec preload

// let div_chargement = document.querySelector('.chargement')

// let fichiers = [
//   // "audio/A4.mp3",
//   // "audio/A5.mp3",
//   // "audio/B4.mp3",
//   // "audio/B5.mp3",
//   // "audio/C4.mp3",
//   // "audio/C5.mp3",
//   // "audio/C6.mp3",
//   // './audio/tutti/Dolmens_drumKntk.wav',
//   // './audio/DancingKing.wav',
//   './audio/DancingKing.wav',
//   './audio/Atlantis_Undersea_webcut.wav',

// ]
// let fichiers_charges = 0

// for (let fichier of fichiers) {
//   let audio_bg = new Audio(fichier)
//   // let file = new File(fichier)

//   audio_bg.addEventListener('loadeddata', e => {
//     fichiers_charges += 1
//     let pourcentage = fichiers_charges / fichiers.length
//     div_chargement.style.width = pourcentage * 100 + '%'

//     if (pourcentage == 1) {
//       fin_chargement()
//     }
//   })
// }

// function fin_chargement() {

//   const audio_bg = new Audio('./audio/Atlantis_Undersea_webcut.wav')
//   audio_bg.volume = 1
//   audio_bg.pause()


// Preload




function preloadImages(urls, allImagesLoadedCallback) {
  let div_chargement = document.querySelector('.chargement')

  var loadedCounter = 0
  var toBeLoadedNumber = urls.length
  urls.forEach(function (url) {
    preloadImage(url, function () {
      loadedCounter++

      let pourcentage = loadedCounter / toBeLoadedNumber
      div_chargement.style.width = pourcentage * 100 + '%'
      if (loadedCounter == toBeLoadedNumber) {
        allImagesLoadedCallback()

      }
    })
  })
  function preloadImage(url, anImageLoadedCallback) {
    var img = new Image()
    img.src = url
    img.onload = anImageLoadedCallback
  }
}

preloadImages([
  './public/medias/images/starv3.png',
  './public/medias/images/starv4_black.png',
  './public/medias/images/bg_cfm-v4b.jpg',
  './public/medias/logos/cfm-logo_web.png',
  './public/medias/logos/cfm-logo-4K0_tapeV2.png',
  './public/medias/images/episode-1.jpg',
  './public/medias/images/episode1_colorv2.jpg',
  './public/medias/images/front_page002.jpg',
  './public/medias/logos/cfm-logo_web.png',
  './public/images/earth-1/earth_clouds_2048.png',
  './public/images/earth-1/earth_lights_2048.png',
  './public/images/earth-1/earth_specular_2048.jpg',
  './public/images/earth-1/earth_atmos_4096.jpg',
  './public/images/spikey.png',
  // './public/medias/videos/cfm.mp4',
  // './public/medias/videos/cinema_show-001.mp4',
  // './public/medias/videos/placeholder_vidéo.mp4',
  // '//upload.wikimedia.org/wikipedia/commons/d/da/Internet2.jpg',
  // '//www.csee.umbc.edu/wp-content/uploads/2011/08/www.jpg'
], function () {
  let charger = document.querySelector('.charger')
  charger.textContent = ' — Téléchargement réussi'
  console.log('All images were loaded')
})


// Stars vote
const stars = document.querySelectorAll(".stars-vote")
let over_star = 0
let star_click = 0
for (let star of stars) {
  star.addEventListener('mouseenter', e => {
    if (over_star == 0) {
      star.setAttribute('src', './public/medias/images/starv3.png')
      over_star = 0
    }
  })
  star.addEventListener('click', e => {
    if (star_click == 0) {
      star.setAttribute('src', './public/medias/images/starv4_black.png')
      star_click = 0
    }
  })

}

// const stars = document.querySelectorAll('img.stars-vote')
// let clic = 0

// for (let star of stars) {
//   star.addEventListener('click', e => {
//     if (clic = 0) {
//       star.setAttribute('src', './public/medias/images/starv3.png')
//       clic = 1
//     } else {
//       star.setAttribute('src', './public/medias/images/starv4_black.png')
//       clic = 0
//     }
//   })
// }



// SAFARI detection


if (navigator.userAgent.search('Safari') >= 0 && navigator.userAgent.search('Chrome') < 0) {
  alert('Browser is Safari')
  fermer_canvas3d.style.visibility = 'hidden'
}

// Récupérer le HREF de la balise a (item) et changer la source du vidéo player

let liens = document.querySelectorAll('.item > a')
let player = document.querySelector('#cfmvideo') // La balise video du player


for (let lien of liens) {
  lien.addEventListener('click', e => {
    e.preventDefault() // cancel le click original
    let source_video = lien.getAttribute('href') // Le href du <a>
    player.setAttribute('src', source_video)
    player.setAttribute('autoplay', 'true')


  })
}


// Fermer la section Infolettre et l'ajouter dans le menu

function fermer_infolettre() {
  let infolettre = document.querySelector('.all-connexion')
  let menu_info_delay = document.querySelector('.info-action')
  menu_info_delay.style.visibility = 'hidden'

  let menu_largeur = document.querySelector('.nav-menu')
  let menu_hauteur = document.querySelector('.nav-menu')
  let menu_wrap = document.querySelector('.nav-menu')
  menu_wrap.style.flexWrap = 'wrap'
  let align_items = document.querySelector('.nav-menu')
  let hauteur_teaser = document.querySelector('.teaser')

  infolettre.style.visibility = 'visible'
  menu_largeur.style.width = '681px'
  menu_hauteur.style.height = '64px'
  align_items.style.alignItems = 'center'



  let timeout
  function menuFunction_on() {
    timeout = setTimeout(menu_delay_on, 225);
  }

  function menu_delay_on() {
    menu_info_delay.style.visibility = 'visible'
  }

  let info = 0
  // let menu_info = 0
  document.querySelector('.btn-x').addEventListener('click', e => {
    e.preventDefault()
    if (info = !info) {
      infolettre.style.visibility = 'hidden'
      menuFunction_on()
      menu_largeur.style.width = '815px'
      menu_hauteur.style.height = '64px'
      align_items.style.alignItems = 'center'
      menu_wrap.style.flexWrap = 'wrap'
      hauteur_teaser.style.marginTop = '120px'
      info = 0
    }
    // setTimeout(function () { menu_info.style.visibility = 'visible' }, 200)
    //   else if (info == 1) {
    //     clearTimeout(menu_delay)
    //     menu_info.style.visibility = 'hidden'
    //     menu_largeur.style.width = '681px'
    //     menu_hauteur.style.height = '64px'
    //     align_items.style.alignItems = 'center'
    //     // menu_wrap.style.flexWrap = 'wrap'
    //     hauteur_teaser.style.marginTop = '320px'
    //     info = 0
    //   }
  })
  // return clearTimeout(timeout)
}

// fermer_infolettre()


//Ouvrir la section Infolettre et la retirer du menu

function ouvrir_infolettre() {
  let infolettre = document.querySelector('.all-connexion')
  let menu_info_fermer = document.querySelector('.info-action')
  // menu_info_fermer.style.visibility = 'hidden'

  let menu_largeur = document.querySelector('.nav-menu')
  let menu_hauteur = document.querySelector('.nav-menu')
  let menu_wrap = document.querySelector('.nav-menu')
  menu_wrap.style.flexWrap = 'wrap'
  let align_items = document.querySelector('.nav-menu')
  let hauteur_teaser = document.querySelector('.teaser')


  // Fermer l'onglet INFOLETTRE

  let timeout2
  function menuFunction_off() {
    timeout2 = setTimeout(menu_off, 0);

  }

  function menu_off() {
    menu_info_fermer.style.visibility = 'hidden'
  }

  // Réouvrir la section Abonnement

  let timeout3
  function infoFunction_on() {
    timeout3 = setTimeout(info_delay, 290);

  }

  function info_delay() {
    infolettre.style.visibility = 'visible'
    // infolettre.style.opacity = '1'
  }

  // Fermer le menu nav

  let timeout4
  function navFunction_off() {
    timeout4 = setTimeout(nav_delay, 600);

  }

  function nav_delay() {
    menu_largeur.style.width = '681px'


  }

  let info = 0
  // let menu_info = 0
  document.querySelector('.info-action').addEventListener('click', e => {
    e.preventDefault()
    menu_info_fermer.style.visibility = 'hidden'


    if (info = !info) {
      // infolettre.style.opacity = '0.0'

      menuFunction_off()
      infoFunction_on()
      navFunction_off()
      // menu_info_fermer.style.visibility = 'hidden'
      // setTimeout(function () { infolettre.style.visibility = 'visible' }, 200)
      // menu_largeur.style.width = '681px'
      menu_hauteur.style.height = '64px'
      align_items.style.alignItems = 'center'
      // menu_wrap.style.flexWrap = 'wrap'
      hauteur_teaser.style.marginTop = '320px'
      info = 0
    }
    // setTimeout(function () { infolettre.style.visibility = 'visible' }, 200)

    //else {
    //   infolettre.style.visibility = 'visible'
    //   menu_info.style.visibility = 'hidden'
    //   // menu_wrap.style.flexWrap = 'wrap'
    //   menu_largeur.style.width = '681px'
    //   menu_hauteur.style.height = '64px'
    //   align_items.style.alignItems = 'center'
    //   info = 0
    // }
  })
  // return clearTimeout(timeout3) && clearTimeout(timeout2) && clearTimeout(timeout4)
}

// ouvrir_infolettre()


// Fermer le canvas avec les animations THREE.JS
function changer_bg() {
  let btnJouer = document.querySelector('.btn-jouer')
  let fermer_canvas3d = document.querySelector('#bg')
  fermer_canvas3d.style.visibility = 'visible'

  let bg = 0
  let style_bg = '#0a0a0a'
  // let style_image = "url('./public/medias/images/bg_cfm-v4.jpg')"
  // let scroll_bg = "fixed"
  // let height_bg = "1000px"
  document.body.style.backgroundColor = style_bg
  document.querySelector('.btn-jouer').addEventListener('click', e => {
    e.preventDefault()
    if (bg == 0) {
      fermer_canvas3d.style.visibility = 'hidden'
      bg = 1
      document.body.style.backgroundColor = style_bg
      btnJouer.textContent = 'Mode Web'
    } else {
      fermer_canvas3d.style.visibility = 'visible'

      bg = 0

      btnJouer.textContent = 'Mode 3D'
    }
  })
  return
}

changer_bg()




// test de cache pour three
THREE.Cache.enabled = true;



const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'), antialias: true
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.autorClear = false
renderer.setClearColor(0x000000, 0.0)

camera.position.setZ(30)
camera.position.setX(-3)


const render = () => {
  renderer.render(scene, camera)

}


// Lights

const pointLight = new THREE.DirectionalLight(0xffffe6, 2.1)
pointLight.position.set(-105, 60, -175)
pointLight.castShadow = true

pointLight.shadow.mapSize.width = 2048 // default
pointLight.shadow.mapSize.height = 2048 // default
pointLight.shadow.camera.near = 0.5 // default
pointLight.shadow.camera.far = 4500


const ambientLight = new THREE.AmbientLight(0xefeff5, .55)
// const ambientLight = new THREE.AmbientLight(0x3f50b3, .65)
ambientLight.position.set(25, -48, 55)

scene.add(
  // logo1Light, 
  pointLight,
  ambientLight
  //logo1Light
)

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50)
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement)


// Stars geometry

// Version test





// Version-1

// const starTexture = new THREE.TextureLoader().load('./images/snow/snowflake5_alpha.png')
const starTexture = new THREE.TextureLoader().load('./public/images/spikey.png')

const pointsVertices = []


for (let i = 0; i < 15000; i++) {

  const x = THREE.MathUtils.randFloatSpread(2500)
  const y = THREE.MathUtils.randFloatSpread(2500)
  const z = THREE.MathUtils.randFloatSpread(2500)

  pointsVertices.push(x, y, z)

}


const pointsGeometry = new THREE.BufferGeometry()
pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(pointsVertices, 3))

// const pointsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1.0, sizeAttenuation: true })
const pointsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 6.0, sizeAttenuation: true, map: starTexture, alphaTest: 0, transparent: true, opacity: 0.75 })
// material.color.setHSL( 1.0, 0.3, 0.7 )
const points = new THREE.Points(pointsGeometry, pointsMaterial)

scene.add(points)

// Pluie de meteors

// function addMeteors() {


//   const meteorsTexture = new THREE.TextureLoader().load('./public/medias/images/episode-1.jpg')
//   // const normalsTexture = new THREE.TextureLoader().load('./images/rock_Asteroid_1Kl8bit_normal.png')

//   const geometry = new THREE.BoxGeometry(16, 9, 0.1)
//   const material = new THREE.MeshStandardMaterial({
//     map: meteorsTexture,
//     // normalMap: normalsTexture
//   })
//   const meteors = new THREE.Mesh(geometry, material)

//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(300))

//   meteors.position.set(x, y, z)
//   // meteors.rotation.x += 0.0025
//   meteors.castShadow = true
//   meteors.receiveShadow = true
//   scene.add(meteors)

// }

// Array(20).fill().forEach(addMeteors)

// // CFM episode

const clipTexture = new THREE.TextureLoader().load('./public/medias/images/episode1_colorv2.jpg')
// const normalTexture = new THREE.TextureLoader().load('./images/rock_Asteroid_1Kl8bit_normal.png')

const clip = new THREE.Mesh(
  new THREE.BoxGeometry(4, 2.25, 0.01),
  new THREE.MeshStandardMaterial({
    map: clipTexture,
    transparent: false, opacity: 1,

    // normalMap: normalTexture
  })
)

clip.castShadow = true
clip.receiveShadow = true
scene.add(clip)


clip.position.z = -5.5
clip.position.y = -1.020
clip.position.setX(0.2)
clip.rotation.y = 1.85


//______________________________________________________________________________
// // CFM Front Page

const pageTexture = new THREE.TextureLoader().load('./public/medias/images/front_page002.jpg')
// const normalTexture = new THREE.TextureLoader().load('./images/rock_Asteroid_1Kl8bit_normal.png')

const page = new THREE.Mesh(
  new THREE.BoxGeometry(4, 2.25, 0.01),
  new THREE.MeshStandardMaterial({
    map: pageTexture,
    // transparent: false,
    transparent: false, opacity: 1,
    //   color: 0x901fb3,//, wireframe: true
    blending: THREE.NormalBlending, side: THREE.FrontSide,
  })
)

page.castShadow = true
page.receiveShadow = true
scene.add(page)

page.position.z = -5.5
page.position.y = 1.37
page.position.setX(0.2)
page.rotation.y = 1.85




//______________________________________________________________________________



// Avatar

const logo1Texture = new THREE.TextureLoader().load('./public/medias/logos/cfm-logo_web.png')
const logo1_z = -5
const logo1_x = -3.03
const logo1_y = 0.8


const logo1 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), new THREE.MeshBasicMaterial({
  map: logo1Texture, transparent: true, opacity: 1,
  // specularMap: logo1Texture,
  // reflectivity: 50,
  // shininess: 10,
  blending: THREE.NormalBlending, side: THREE.FrontSide,
}))

// logo1.scale.set(.50, .50, .50)
logo1.castShadow = true
logo1.receiveShadow = true
scene.add(logo1)
logo1.position.z = logo1_z
logo1.position.x = logo1_x
logo1.position.y = logo1_y
// logo1.rotation.x = -0.96






// // Torus earth frame

// // const torusGeometry = new THREE.TorusKnotGeometry(21, .25, 128, 8)
// const torusGeometry = new THREE.TorusGeometry(13, .1, 2, 128)
// // const material = new THREE.MeshStandardMaterial({ color: 0x362b53f2 })
// const material = new THREE.MeshPhongMaterial({
//   //roughness: 0.5,
//   //metalness: .5,
//   transparent: true, opacity: 1,
//   color: 0xffe96f, wireframe: true,
//   blending: THREE.NormalBlending, side: THREE.DoubleSide,

// })

// const torus = new THREE.Mesh(torusGeometry, material)

// torus.castShadow = true
// torus.receiveShadow = true
// scene.add(torus)


// // const earth_size = 10
// // const earth_z = -30
// // const earth_y = 4
// // const earth_setX = -34

// torus.position.x = -34
// torus.position.y = 4
// torus.position.z = -30




// // Torus

// const torusGeometry = new THREE.TorusKnotGeometry(3.0, .05, 256, 8)
// // const torusGeometry = new THREE.TorusKnotGeometry(21, .25, 128, 8)
// // const torusGeometry = new THREE.TorusGeometry(10, 2, 32, 100)
// // const material = new THREE.MeshStandardMaterial({ color: 0x362b53f2 })
// const material = new THREE.MeshPhongMaterial({
//   //roughness: 0.5,
//   //metalness: .5,
//   transparent: true, opacity: 1,
//   color: 0x901fb3,//, wireframe: true
//   blending: THREE.NormalBlending, side: THREE.DoubleSide,

// })

// const torus = new THREE.Mesh(torusGeometry, material)

// torus.castShadow = true
// torus.receiveShadow = true
// scene.add(torus)

// torus.position.z = logo1_z
// torus.position.x = logo1_x
// // torus.position.z = -13
// // torus.position.setX(15)


// // Torus frame

// const torusGeometry2 = new THREE.TorusKnotGeometry(3.0, .2, 128, 3)
// // const torusGeometry = new THREE.TorusKnotGeometry(21, .25, 128, 8)
// // const torusGeometry = new THREE.TorusGeometry(10, 2, 32, 100)
// // const material = new THREE.MeshStandardMaterial({ color: 0x362b53f2 })
// const material2 = new THREE.MeshStandardMaterial({
//   roughness: .5,
//   metalness: .5,
//   // specular: 12,
//   transparent: true, opacity: .25,
//   color: 0x00ace6, wireframe: true
// })

// const torus2 = new THREE.Mesh(torusGeometry2, material2)

// // torus2.scale.set(1.007, 1.007, 1.007)
// torus2.castShadow = true
// torus2.receiveShadow = true
// scene.add(torus2)

// torus2.position.z = logo1_z
// torus2.position.x = logo1_x
// // torus.position.z = -13
// // torus.position.setX(15)


// Earth V2

const earth_size = 10
const earth_z = -30
const earth_y = 4
const earth_setX = -34



const atmoShader = {
  side: THREE.BackSide,
  // blending: THREE.AdditiveBlending,
  transparent: true,
  lights: true,
  uniforms: THREE.UniformsUtils.merge([

    THREE.UniformsLib["common"],
    THREE.UniformsLib["lights"]

  ]),
  vertexShader: [
    "varying vec3 vViewPosition;",
    "varying vec3 vNormal;",
    "void main() {",
    THREE.ShaderChunk["beginnormal_vertex"],
    THREE.ShaderChunk["defaultnormal_vertex"],

    "	vNormal = normalize( transformedNormal );",
    "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
    "vViewPosition = -mvPosition.xyz;",
    "gl_Position = projectionMatrix * mvPosition;",
    "}"

  ].join("\n"),

  fragmentShader: [

    THREE.ShaderChunk["common"],
    THREE.ShaderChunk["bsdfs"],
    THREE.ShaderChunk["lights_pars_begin"],
    THREE.ShaderChunk["normal_pars_fragment"],
    THREE.ShaderChunk["lights_phong_pars_fragment"],

    "void main() {",
    "vec3 normal = normalize( -vNormal );",
    "vec3 viewPosition = normalize( vViewPosition );",
    "#if NUM_DIR_LIGHTS > 0",

    "vec3 dirDiffuse = vec3( 0.0 );",

    "for( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {",

    "vec4 lDirection = viewMatrix * vec4( directionalLights[i].direction, 0.0 );",
    "vec3 dirVector = normalize( lDirection.xyz );",
    "float dotProduct = dot( viewPosition, dirVector );",
    "dotProduct = 1.0 * max( dotProduct, 0.0 ) + (1.0 - max( -dot( normal, dirVector ), 0.0 ));",
    "dotProduct *= dotProduct;",
    "dirDiffuse += max( 0.5 * dotProduct, 0.0 ) * directionalLights[i].color;",
    "}",
    "#endif",

    //Fade out atmosphere at edge
    "float viewDot = abs(dot( normal, viewPosition ));",
    "viewDot = clamp( pow( viewDot + 0.6, 10.0 ), 0.0, 1.0);",

    "vec3 color = vec3( 0.05, 0.09, 0.13 ) * dirDiffuse;",
    "gl_FragColor = vec4( color, viewDot );",

    "}"

  ].join("\n")
};

const earthAtmoMat = new THREE.ShaderMaterial(atmoShader);

const earthMat = new THREE.MeshPhongMaterial({
  color: 0xffffff,
  shininess: 100
});

const textureLoader = new THREE.TextureLoader();

textureLoader.load('./public/images/earth-1/earth_atmos_4096.jpg', function (tex) {

  earthMat.map = tex;
  earthMat.map.encoding = THREE.sRGBEncoding;
  earthMat.needsUpdate = true;

});
textureLoader.load('./public/images/earth-1/earth_specular_2048.jpg', function (tex) {

  earthMat.specularMap = tex;
  earthMat.specularMap.encoding = THREE.sRGBEncoding;
  earthMat.needsUpdate = true;

});

// let earthNormal = textureLoader.load( 'textures/planets/earth-new-normal-2048.jpg', function( tex ) {
// 	earthMat.normalMap = tex;
// 	earthMat.needsUpdate = true;
// } );

const earthLights = textureLoader.load('./public/images/earth-1/earth_lights_2048.png');
earthLights.encoding = THREE.sRGBEncoding;

const earthLightsMat = new THREE.MeshBasicMaterial({
  color: 0xf3e8aa,
  blending: THREE.AdditiveBlending,
  transparent: true,
  depthTest: false,
  map: earthLights,

});

const clouds = textureLoader.load('./public/images/earth-1/earth_clouds_2048.png');
clouds.encoding = THREE.sRGBEncoding;

const earthCloudsMat = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  blending: THREE.NormalBlending,
  transparent: true,
  depthTest: false,
  map: clouds
});


// sphereCloudsMesh.receiveShadow = true


const earthGeo = new THREE.SphereGeometry(earth_size, 32, 32);
const sphereMesh = new THREE.Mesh(earthGeo, earthMat);
sphereMesh.receiveShadow = true
scene.add(sphereMesh);

const sphereLightsMesh = new THREE.Mesh(earthGeo, earthLightsMat);
sphereLightsMesh.receiveShadow = true
scene.add(sphereLightsMesh);

const sphereCloudsMesh = new THREE.Mesh(earthGeo, earthCloudsMat);
sphereCloudsMesh.receiveShadow = true
scene.add(sphereCloudsMesh);

const sphereAtmoMesh = new THREE.Mesh(earthGeo, earthAtmoMat);
sphereAtmoMesh.scale.set(1.11, 1.11, 1.11);
scene.add(sphereAtmoMesh);




sphereMesh.position.z = earth_z
sphereMesh.position.y = earth_y
sphereMesh.position.setX(earth_setX)

sphereLightsMesh.position.z = earth_z
sphereLightsMesh.position.y = earth_y
sphereLightsMesh.position.setX(earth_setX)

sphereCloudsMesh.position.z = earth_z
sphereCloudsMesh.position.y = earth_y
sphereCloudsMesh.position.setX(earth_setX)

sphereAtmoMesh.position.z = earth_z
sphereAtmoMesh.position.y = earth_y
sphereAtmoMesh.position.setX(earth_setX)


// // Meteor

// const meteorTexture = new THREE.TextureLoader().load('./images/rock_Asteroid_1K8bit.png')
// const normalTexture = new THREE.TextureLoader().load('./images/rock_Asteroid_1Kl8bit_normal.png')

// const meteor = new THREE.Mesh(
//   new THREE.SphereGeometry(5, 64, 64),
//   new THREE.MeshStandardMaterial({
//     map: meteorTexture,
//     normalMap: normalTexture
//   })
// )

// meteor.castShadow = true
// meteor.receiveShadow = true
// scene.add(meteor)

// meteor.position.z = 30
// meteor.position.setX(-10)




// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top
  // meteor.rotation.x += 0.025
  // meteor.rotation.y += 0.015
  // meteor.rotation.z += 0.025

  // earth.rotation.y += 0.005
  // earth.position.x -= 0.05
  // earth.position.setX(earth_setX - 55)
  // earthIllumi.rotation.x += 0.01
  // clouds.rotation.x += 0.012
  // clouds.rotation.y += 0.012
  // clouds.position.x -= 0.05
  // clouds.position.setX(earth_setX - 55)

  // page.rotation.y += 0.05

  // EN TEST


  // sphereMesh.rotation.y -= 0.025
  // sphereLightsMesh.rotation.y -= 0.025
  // sphereCloudsMesh.rotation.y -= 0.025
  // sphereCloudsMesh.rotation.x += 0.00015

  // sphereAtmoMesh.rotation.y -= 0.025




  // clouds_shadow.rotation.x += 0.012
  // earth.rotation.y += 0.05

  logo1.rotation.y += 0.025
  // torus.rotation.x += 0.025
  // torus2.rotation.x += 0.025
  // logo1.rotation.x += 0.025
  // logo1.rotation.z += 0.025

  camera.position.z = t * -0.0055
  // camera.position.x = t * -0.0002
  // camera.rotation.y = t * -0.0002

}

document.body.onscroll = moveCamera
// document.body.addEventListener("onscroll", moveCamera)
moveCamera()

// Animation Loop

function animate() {
  requestAnimationFrame(animate)


  sphereMesh.rotation.y -= 0.0015
  sphereLightsMesh.rotation.y -= 0.0015
  sphereCloudsMesh.rotation.y -= 0.0017
  // sphereCloudsMesh.rotation.x -= 0.0015
  sphereAtmoMesh.rotation.y -= 0.0015


  // torus.rotation.x += 0.005
  // torus.rotation.y += 0.005
  // torus.rotation.z += 0.005

  // torus2.rotation.x += 0.005
  // torus2.rotation.y += 0.005
  // torus2.rotation.z += 0.005

  // meteor.rotation.x += 0.0025
  logo1.rotation.y += 0.0025

  // earth.rotation.x += 0.0002
  // earth.rotation.y += 0.0001
  // earthIllumi.rotation.x += 0.001
  // earthIllumi.rotation.y += 0.002
  // atmosphere.rotation.x += 0.002
  // atmosphere.rotation.y += 0.001
  // clouds.rotation.x += 0.000350
  // clouds.rotation.y += 0.000125
  // clouds_shadow.rotation.y += 0.003
  // clouds_shadow.rotation.y += 0.002
  // atmosphere.rotation.y += 0.004

  // controls.update()

  renderer.render(scene, camera)
}

animate()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  render()

}, false)


// Setup

// Julien href scroll test

// let items = document.querySelectorAll(".nav-items a")
// for (let item of items) {
//   let href = item.getAttribute("href") // #clients
//   item.addEventListener("click", e => {
//     e.preventDefault()
//     let cible = document.querySelector(href) // <h2 id="clients">
//     console.log(cible)
//     let position_cible = cible.getBoundingClientRect()
//     window.scrollTo({
//       top: position_cible.top,
//       left: 0,
//       behavior: "smooth",
//     })
//   })
// }


// const liens = document.querySelectorAll("nav-items a")

// const sections = [
//   document.querySelector("#accueil"),
//   document.querySelector("#clients"),
//   document.querySelector("#services"),
//   document.querySelector("#aptitudes"),
//   document.querySelector("#orageus"),
//   document.querySelector("#extraits"),
//   document.querySelector("#videos"),
//   document.querySelector("#liens"),
// ]

// //boucle: quand on clique sur un lien du menu nav
// for (let lien of liens) {
//   lien.addEventListener("click", e => {
//     e.preventDefault()
//     //va chercher l'attibut href de la section du menu cliqué
//     //affiche par exemple: #section1 
//     let href = lien.getAttribute("href")
//     //va chercher la balise href de celui ici-haut cliqué
//     //affiche: <section id="section1"></section>
//     let balise_section = document.querySelector(href)
//     //descend (scroll) dans la bonne section quand on clique
//     //le menu section
//     balise_section.scrollIntoView({ behavior: "smooth" })
//   })
// }

// //quand on scroll dans la section 2 par exemple, notre
// //lien du navigateur change pour cette section 2.
// document.addEventListener("scroll", e => {

//   //quelle section est activée (voir tableau "sections" plus-haut)
//   let section_actuelle = sections[0]
//   //boucle: permet de récupérer la position de la chaque
//   //sections quand ils arrivent a 50px du haut.
//   for (let section of sections) {
//     // permet de récupérer la position dans le navigateur
//     let position = section.getBoundingClientRect()
//     //position top de moins ou égale à 50px
//     if (position.top <= 10) {
//       section_actuelle = section
//     }
//   }
//   //on crée une constante de l'id de chaque section
//   const nom_section = section_actuelle.getAttribute("id")

//   //va chercher la section qui est active avec la concaténation
//   //equivaut a ("a[href='#section1']")
//   let balise_a = document.querySelector("a[href='#" + nom_section + "']")

//   let ancien_a = document.querySelector("nav-items a.actif")
//   ancien_a.classList.remove("actif")

//   //ajout d'une nouvelle class (à mettre après celle active, comme ici)
//   balise_a.classList.add("actif")

// })


