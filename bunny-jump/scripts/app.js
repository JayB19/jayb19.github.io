/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game/Carrot.js":
/*!****************************!*\
  !*** ./src/game/Carrot.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Carrot; });\n/* harmony import */ var _lib_phaser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/phaser.js */ \"./src/lib/phaser.js\");\n\r\n\r\nclass Carrot extends _lib_phaser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Physics.Arcade.Sprite {\r\n\r\n\tconstructor(scene, x, y, texture) {\r\n\t\tsuper(scene, x, y, texture)\r\n\t\tthis.setScale(.5)\r\n\t}\r\n\r\n}\n\n//# sourceURL=webpack:///./src/game/Carrot.js?");

/***/ }),

/***/ "./src/lib/phaser.js":
/*!***************************!*\
  !*** ./src/lib/phaser.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (window.Phaser);\n\n//# sourceURL=webpack:///./src/lib/phaser.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_phaser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/phaser.js */ \"./src/lib/phaser.js\");\n/* harmony import */ var _scenes_Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/Game.js */ \"./src/scenes/Game.js\");\n/* harmony import */ var _scenes_GameOver_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/GameOver.js */ \"./src/scenes/GameOver.js\");\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _lib_phaser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Game({\r\n\ttype: _lib_phaser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].CANVAS,\r\n\twidth: 480,\r\n\theight: 640,\r\n\tscene: [_scenes_Game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _scenes_GameOver_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]],\r\n\tscale: { mode: _lib_phaser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Scale.FIT, autoCenter: _lib_phaser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Scale.CENTER_BOTH },\r\n\tphysics: {\r\n\t\tdefault: 'arcade',\r\n\t\tarcade: {\r\n\t\t\tgravity: {\r\n\t\t\t\ty: 1200\r\n\t\t\t},\r\n\t\t\tdebug: false\r\n\t\t}\r\n\t}\r\n}));\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/scenes/Game.js":
/*!****************************!*\
  !*** ./src/scenes/Game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _lib_phaser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/phaser.js */ \"./src/lib/phaser.js\");\n/* harmony import */ var _game_Carrot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/Carrot.js */ \"./src/game/Carrot.js\");\n\r\n\r\n\r\nclass Game extends _lib_phaser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Scene {\r\n\r\n\t// player\t\t\t\t\t{Phaser.Physics.Arcade.Sprite}\r\n\t// platforms\t\t\t\t{Phaser.Physics.Arcade.StaticGroup}\r\n\t// carrots\t\t\t\t\t{Phaser.Physics.Arcade.Group}\r\n\t// cursors\t\t\t\t\t{Phaser.Types.Input.Keyboard.CursorKeys}\r\n\t// carrotsCollected = 0\t\t{number}\r\n\t// carrotsCollectedText\t\t{Phaser.GameObjects.Text}\r\n\r\n\tconstructor() {\r\n\t\tsuper('game')\r\n\t}\r\n\r\n\tinit() {\r\n\t\tthis.carrotsCollected = 0\r\n\t}\r\n\r\n\tpreload() {\r\n\t\tthis.load.image('background', 'assets/images/bg_layer1.png')\r\n\t\tthis.load.image('platform', 'assets/images/ground_grass.png')\r\n\t\tthis.load.image('carrot', 'assets/images/carrot.png')\r\n\t\tthis.load.image('bunny-stand', 'assets/images/bunny1_stand.png')\r\n\t\tthis.load.image('bunny-jump', 'assets/images/bunny1_jump.png')\r\n\t\tthis.load.audio('jump', 'assets/sfx/phaseJump1.ogg')\r\n\r\n\t\tthis.cursors = this.input.keyboard.createCursorKeys()\r\n\t}\r\n\r\n\tcreate() {\r\n\t\tthis.add.image(240, 320, 'background')\r\n\t\t\t.setScrollFactor(1, 0)\r\n\r\n\t\tthis.platforms = this.physics.add.staticGroup()\r\n\r\n\t\tfor (let i = 0; i < 5; ++i) {\r\n\t\t\tconst x = _lib_phaser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Math.Between(40, 440)\r\n\t\t\tconst y = 150 * i\r\n\t\t\tconst platform = this.platforms.create(x, y, 'platform')\r\n\t\t\tplatform.scale = .5\r\n\r\n\t\t\tconst body = platform.body\r\n\t\t\tbody.updateFromGameObject()\r\n\t\t}\r\n\r\n\t\tthis.player = this.physics.add.sprite(240, 320, 'bunny-stand')\r\n\t\t\t.setScale(0.5)\r\n\r\n\t\tthis.carrots = this.physics.add.group({\r\n\t\t\tclassType: _game_Carrot_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n\t\t})\r\n\r\n\t\tthis.physics.add.collider(this.platforms, this.player)\r\n\t\tthis.physics.add.collider(this.platforms, this.carrots)\r\n\t\tthis.physics.add.overlap(\r\n\t\t\tthis.player,\r\n\t\t\tthis.carrots,\r\n\t\t\tthis.handleCollectCarrot,\r\n\t\t\tundefined,\r\n\t\t\tthis\r\n\t\t)\r\n\r\n\t\tthis.player.body.checkCollision.up = false\r\n\t\tthis.player.body.checkCollision.left = false\r\n\t\tthis.player.body.checkCollision.right = false\r\n\r\n\t\tthis.cameras.main.startFollow(this.player)\r\n\t\tthis.cameras.main.setDeadzone(this.scale.width * 1.5)\r\n\r\n\t\tconst style = { color: '#000', fontSize: 24 }\r\n\t\tthis.carrotsCollectedText = this.add.text(240, 10, 'Carrots: 0', style)\r\n\t\t\t.setScrollFactor(0)\r\n\t\t\t.setOrigin(.5, 0)\r\n\t}\r\n\r\n\tupdate(t, dt) {\r\n\t\tthis.platforms.children.iterate(platform => {\r\n\t\t\tconst scrollY = this.cameras.main.scrollY\r\n\t\t\tif (platform.y >= scrollY + 700) {\r\n\t\t\t\tplatform.x = _lib_phaser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Math.Between(40, 440)\r\n\t\t\t\tplatform.y = scrollY// - Phaser.Math.Between(100, 250)\r\n\t\t\t\tplatform.body.updateFromGameObject()\r\n\t\t\t\tthis.addCarrotAbove(platform)\r\n\t\t\t}\r\n\t\t})\r\n\r\n\t\tconst pointer = this.input.activePointer\r\n\t\tlet pointerLeft\r\n\t\tlet pointerRight\r\n\t\tif (pointer.isDown) {\r\n\t\t\tlet center = this.scale.width * 0.5\r\n\t\t\tif (pointer.x < center - 80) {\r\n\t\t\t\tpointerLeft = true\r\n\t\t\t\tpointerRight = false\r\n\t\t\t} else if (pointer.y > center + 80) {\r\n\t\t\t\tpointerRight = true\r\n\t\t\t\tpointerLeft = false\r\n\t\t\t} else {\r\n\t\t\t\tpointerRight = false\r\n\t\t\t\tpointerLeft = false\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tpointerRight = false\r\n\t\t\tpointerLeft = false\r\n\t\t}\r\n\r\n\t\tconst touchingDown = this.player.body.touching.down\r\n\r\n\t\tif (touchingDown) {\r\n\t\t\tthis.player.setVelocityY(-700)\r\n\t\t\tthis.player.setTexture('bunny-jump')\r\n\t\t\tthis.sound.play('jump')\r\n\t\t}\r\n\t\tif (this.cursors.left.isDown || pointerLeft && !touchingDown) {\r\n\t\t\tthis.player.setVelocityX(-300)\r\n\t\t} else if (this.cursors.right.isDown || pointerRight && !touchingDown) {\r\n\t\t\tthis.player.setVelocityX(300)\r\n\t\t} else {\r\n\t\t\tthis.player.setVelocityX(0)\r\n\t\t}\r\n\r\n\t\tconst vy = this.player.body.velocity.y\r\n\t\tif (vy > 0 && this.player.texture.key !== 'bunny-stand') {\r\n\t\t\tthis.player.setTexture('bunny-stand')\r\n\t\t}\r\n\r\n\t\tthis.horizontalWrap(this.player)\r\n\r\n\t\tconst bottomPlatform = this.findBottomMostPlatform()\r\n\t\tif (this.player.y > bottomPlatform.y + 200) {\r\n\t\t\tthis.scene.start('game-over', { carrotsCollected: this.carrotsCollected })\r\n\t\t}\r\n\t}\r\n\r\n\thorizontalWrap(sprite) {\r\n\t\tconst halfWidth = sprite.displayWidth * 0.5\r\n\t\tconst gameWidth = this.scale.width\r\n\t\tif (sprite.x < -halfWidth) {\r\n\t\t\tsprite.x = gameWidth + halfWidth\r\n\t\t} else if (sprite.x > gameWidth + halfWidth) {\r\n\t\t\tsprite.x = -halfWidth\r\n\t\t}\r\n\t}\r\n\r\n\taddCarrotAbove(sprite) {\r\n\t\tconst x = _lib_phaser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Math.Between(sprite.x - sprite.displayWidth / 2, sprite.x + sprite.displayWidth / 2)\r\n\t\tconst y = sprite.y - sprite.displayHeight\r\n\t\tconst carrot = this.carrots.get(x, y, 'carrot')\r\n\t\tcarrot.setActive(true)\r\n\t\tcarrot.setVisible(true)\r\n\t\tthis.add.existing(carrot)\r\n\t\tcarrot.body.setSize(carrot.width, carrot.height)\r\n\t\tthis.physics.world.enable(carrot)\r\n\t\treturn carrot\r\n\t}\r\n\r\n\thandleCollectCarrot(player, carrot) {\r\n\t\tthis.carrots.killAndHide(carrot)\r\n\t\tthis.physics.world.disableBody(carrot.body)\r\n\t\tthis.carrotsCollected++\r\n\t\tconst value = `Carrots: ${this.carrotsCollected}`\r\n\t\tthis.carrotsCollectedText.text = value\r\n\t}\r\n\r\n\tfindBottomMostPlatform() {\r\n\t\tconst platforms = this.platforms.getChildren()\r\n\t\tlet bottomPlatform = platforms[0]\r\n\t\tfor (let i = 1; i < platforms.length; ++i) {\r\n\t\t\tconst platform = platforms[i]\r\n\t\t\tif (platform.y < bottomPlatform.y) {\r\n\t\t\t\tcontinue\r\n\t\t\t}\r\n\t\t\tbottomPlatform = platform\r\n\t\t}\r\n\t\treturn bottomPlatform\r\n\t}\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/scenes/Game.js?");

/***/ }),

/***/ "./src/scenes/GameOver.js":
/*!********************************!*\
  !*** ./src/scenes/GameOver.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameOver; });\n/* harmony import */ var _lib_phaser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/phaser.js */ \"./src/lib/phaser.js\");\n\r\n\r\nclass GameOver extends _lib_phaser_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Scene {\r\n\r\n\tconstructor() {\r\n\t\tsuper('game-over')\r\n\t}\r\n\r\n\tinit(data) {\r\n\t\tthis.carrotsCollected = data.carrotsCollected\r\n\t}\r\n\r\n\tcreate() {\r\n\t\tconst width = this.scale.width\r\n\t\tconst height = this.scale.height\r\n\r\n\t\t// Score text\r\n\t\tthis.add.text(width * 0.5, 10, `Carrots collected: ${this.carrotsCollected}`, { fontSize: 24, color: '#f88' })\r\n\t\t\t.setOrigin(.5, 0)\r\n\r\n\t\t// Game over text\r\n\t\tthis.add.text(width * 0.5, height * 0.5, 'Game Over', { fontSize: 48, color: '#fff' })\r\n\t\t\t.setOrigin(.5, 0)\r\n\r\n\t\t// Replay text\r\n\t\tthis.add.text(width * 0.5, height * 0.5 + 48, 'press SPACE to play again', { fontSize: 24, color: '#888' })\r\n\t\t\t.setOrigin(.5, 0)\r\n\r\n\t\t// Input\r\n\t\tthis.input.keyboard.once('keydown_SPACE', () => {\r\n\t\t\tthis.scene.start('game')\r\n\t\t\treturn\r\n\t\t})\r\n\t}\r\n\r\n\tupdate() {\r\n\t\tif (this.input.activePointer.isDown) {\r\n\t\t\tthis.scene.start('game')\r\n\t\t\treturn\r\n\t\t}\r\n\t}\r\n\r\n}\n\n//# sourceURL=webpack:///./src/scenes/GameOver.js?");

/***/ })

/******/ });