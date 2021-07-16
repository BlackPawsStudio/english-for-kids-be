"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const functions_1 = require("./functions");
const router = express_1.Router();
// themes routes
router.get('/themes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const themes = yield functions_1.getThemes();
    res.json(themes);
}));
router.put('/themes/:id/:newName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const themeId = req.params.id;
    const { newName } = req.params;
    if (!+themeId) {
        return res.sendStatus(400);
    }
    try {
        yield functions_1.updateTheme(+themeId, newName);
        return res.sendStatus(200);
    }
    catch (e) {
        return res.status(404).send(e);
    }
}));
router.post('/themes/:newName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.params.newName;
    if (!data)
        return res.sendStatus(400);
    try {
        yield functions_1.createTheme(data);
    }
    catch (e) {
        return res.sendStatus(400);
    }
}));
router.delete('/themes/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const themeId = req.params.id;
    if (!themeId) {
        return res.sendStatus(400);
    }
    try {
        yield functions_1.deleteTheme(+themeId);
        return res.sendStatus(200);
    }
    catch (e) {
        return res.status(404).send(e);
    }
}));
router.delete('/cards/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cardsId = req.params.id;
    if (!cardsId) {
        return res.sendStatus(400);
    }
    try {
        yield functions_1.deleteCardsByTheme(+cardsId);
        return res.sendStatus(200);
    }
    catch (e) {
        return res.status(404).send(e);
    }
}));
// cards routes
router.get('/cards', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cards = yield functions_1.getCards();
    res.json(cards);
}));
router.delete('/cards/:theme/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cardsTheme = req.params.theme;
    const cardId = req.params.id;
    if (!+cardsTheme) {
        return res.sendStatus(400);
    }
    if (!+cardId) {
        return res.sendStatus(400);
    }
    try {
        yield functions_1.deleteCardFromThemeByID(+cardsTheme, +cardId);
        return res.sendStatus(200);
    }
    catch (e) {
        return res.status(404).send(e);
    }
}));
router.put('/cards/:theme/:id/:word/:transl', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cardsTheme = req.params.theme;
    const cardId = req.params.id;
    const { word } = req.params;
    const { transl } = req.params;
    if (!+cardsTheme) {
        return res.sendStatus(400);
    }
    if (!+cardId) {
        return res.sendStatus(400);
    }
    try {
        yield functions_1.updateCardFromThemeByID(+cardsTheme, +cardId, word, transl);
        return res.sendStatus(200);
    }
    catch (e) {
        return res.status(404).send(e);
    }
}));
router.put('/reset', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield functions_1.resetDb();
        return res.sendStatus(200);
    }
    catch (e) {
        return res.status(404).send(e);
    }
}));
exports.default = router;
