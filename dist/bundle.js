/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const gameID = '31OYXj0MHKvWiIdWxnyl';\nconst URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`;\n\nconst ulElement = document.getElementById('recent-scores-ul');\nconst refreshButton = document.getElementById('refresh-button');\nconst nameInput = document.getElementById('form-name');\nconst scoreInput = document.getElementById('form-score');\nconst submitButton = document.getElementById('submit-button');\n\nconst transformData = (data) => {\n  ulElement.innerHTML = '';\n\n  data.forEach((result) => {\n    const { user, score } = result;\n\n    const liElement = document.createElement('li');\n    const spanNameElement = document.createElement('span');\n    const spanScoreElement = document.createElement('span');\n    liElement.classList.add('recent-scores-li');\n    spanNameElement.classList.add('name');\n    spanScoreElement.classList.add('score');\n\n    spanNameElement.innerHTML = `${user}: `;\n    spanScoreElement.innerHTML = score;\n\n    liElement.appendChild(spanNameElement);\n    liElement.appendChild(spanScoreElement);\n    ulElement.appendChild(liElement);\n  });\n};\n\nconst handleGetGames = async () => {\n  try {\n    const response = await fetch(URL);\n\n    const data = await response.json();\n    const { result } = data;\n\n    transformData(result);\n  } catch (error) {\n    throw new Error(error.message);\n  }\n};\n\nconst handlePostScores = async () => {\n  if (nameInput.value && scoreInput.value) {\n    try {\n      await fetch(URL, {\n        method: 'POST',\n        body: JSON.stringify({\n          user: nameInput.value,\n          score: scoreInput.value,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      });\n\n      nameInput.value = '';\n      scoreInput.value = '';\n    } catch (error) {\n      throw new Error(error.message);\n    }\n  }\n};\n\nrefreshButton.addEventListener('click', handleGetGames);\nsubmitButton.addEventListener('click', handlePostScores);\ndocument.addEventListener('DOMContentLoaded', () => {\n  handleGetGames();\n});\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;