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
exports.resetDb = exports.updateCardFromThemeByID = exports.deleteCardFromThemeByID = exports.getCards = exports.updateTheme = exports.createTheme = exports.deleteCardsByTheme = exports.deleteTheme = exports.getThemes = void 0;
const cards_1 = require("./cards");
let themes = cards_1.db.cardsThemes;
let { cards } = cards_1.db;
function getThemes() {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.resolve(themes);
    });
}
exports.getThemes = getThemes;
function deleteTheme(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!themes[id]) {
            return Promise.reject(new Error('Theme not found'));
        }
        themes.splice(id, 1);
        return Promise.resolve();
    });
}
exports.deleteTheme = deleteTheme;
function deleteCardsByTheme(id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!cards[id]) {
            return Promise.reject(new Error('Cards theme not found'));
        }
        cards.splice(id, 1);
        return Promise.resolve();
    });
}
exports.deleteCardsByTheme = deleteCardsByTheme;
function createTheme(name) {
    return __awaiter(this, void 0, void 0, function* () {
        if (themes.includes(name)) {
            return Promise.reject(new Error(`Theme ${name} already exists!`));
        }
        themes.push(name);
        cards.push([]);
        return Promise.resolve(name);
    });
}
exports.createTheme = createTheme;
function updateTheme(id, newName) {
    return __awaiter(this, void 0, void 0, function* () {
        themes[id] = newName;
    });
}
exports.updateTheme = updateTheme;
function getCards() {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.resolve(cards);
    });
}
exports.getCards = getCards;
function deleteCardFromThemeByID(theme, id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!cards[theme][id]) {
            return Promise.reject(new Error('Card not found'));
        }
        cards[theme].splice(id, 1);
        return Promise.resolve();
    });
}
exports.deleteCardFromThemeByID = deleteCardFromThemeByID;
function updateCardFromThemeByID(theme, id, word, translation) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!cards[theme][id]) {
            return Promise.reject(new Error('Card not found'));
        }
        cards[theme][id].word = word;
        cards[theme][id].translation = translation;
        return Promise.resolve();
    });
}
exports.updateCardFromThemeByID = updateCardFromThemeByID;
function resetDb() {
    return __awaiter(this, void 0, void 0, function* () {
        cards = [
            [
                {
                    word: 'cry',
                    translation: 'плакать',
                    image: 'img/cry.jpg',
                    audioSrc: 'audio/cry.mp3',
                },
                {
                    word: 'dance',
                    translation: 'танцевать',
                    image: 'img/dance.jpg',
                    audioSrc: 'audio/dance.mp3',
                },
                {
                    word: 'dive',
                    translation: 'нырять',
                    image: 'img/dive.jpg',
                    audioSrc: 'audio/dive.mp3',
                },
                {
                    word: 'draw',
                    translation: 'рисовать',
                    image: 'img/draw.jpg',
                    audioSrc: 'audio/draw.mp3',
                },
                {
                    word: 'fish',
                    translation: 'ловить рыбу',
                    image: 'img/fish.jpg',
                    audioSrc: 'audio/fish.mp3',
                },
                {
                    word: 'fly',
                    translation: 'летать',
                    image: 'img/fly.jpg',
                    audioSrc: 'audio/fly.mp3',
                },
                {
                    word: 'hug',
                    translation: 'обнимать',
                    image: 'img/hug.jpg',
                    audioSrc: 'audio/hug.mp3',
                },
                {
                    word: 'jump',
                    translation: 'прыгать',
                    image: 'img/jump.jpg',
                    audioSrc: 'audio/jump.mp3',
                },
            ],
            [
                {
                    word: 'open',
                    translation: 'открывать',
                    image: 'img/open.jpg',
                    audioSrc: 'audio/open.mp3',
                },
                {
                    word: 'play',
                    translation: 'играть',
                    image: 'img/play.jpg',
                    audioSrc: 'audio/play.mp3',
                },
                {
                    word: 'point',
                    translation: 'указывать',
                    image: 'img/point.jpg',
                    audioSrc: 'audio/point.mp3',
                },
                {
                    word: 'ride',
                    translation: 'ездить',
                    image: 'img/ride.jpg',
                    audioSrc: 'audio/ride.mp3',
                },
                {
                    word: 'run',
                    translation: 'бегать',
                    image: 'img/run.jpg',
                    audioSrc: 'audio/run.mp3',
                },
                {
                    word: 'sing',
                    translation: 'петь',
                    image: 'img/sing.jpg',
                    audioSrc: 'audio/sing.mp3',
                },
                {
                    word: 'skip',
                    translation: 'пропускать, прыгать',
                    image: 'img/skip.jpg',
                    audioSrc: 'audio/skip.mp3',
                },
                {
                    word: 'swim',
                    translation: 'плавать',
                    image: 'img/swim.jpg',
                    audioSrc: 'audio/swim.mp3',
                },
            ],
            [
                {
                    word: 'argue',
                    translation: 'ссориться',
                    image: 'img/argue.jpg',
                    audioSrc: 'audio/argue.mp3',
                },
                {
                    word: 'build',
                    translation: 'строить',
                    image: 'img/build.jpg',
                    audioSrc: 'audio/build.mp3',
                },
                {
                    word: 'carry',
                    translation: 'нести',
                    image: 'img/carry.jpg',
                    audioSrc: 'audio/carry.mp3',
                },
                {
                    word: 'catch',
                    translation: 'ловить',
                    image: 'img/catch.jpg',
                    audioSrc: 'audio/catch.mp3',
                },
                {
                    word: 'drive',
                    translation: 'водить',
                    image: 'img/drive.jpg',
                    audioSrc: 'audio/drive.mp3',
                },
                {
                    word: 'drop',
                    translation: 'ронять',
                    image: 'img/drop.jpg',
                    audioSrc: 'audio/drop.mp3',
                },
                {
                    word: 'pull',
                    translation: 'тянуть',
                    image: 'img/pull.jpg',
                    audioSrc: 'audio/pull.mp3',
                },
                {
                    word: 'push',
                    translation: 'толкать',
                    image: 'img/push.jpg',
                    audioSrc: 'audio/push.mp3',
                },
            ],
            [
                {
                    word: 'big',
                    translation: 'большой',
                    image: 'img/big.jpg',
                    audioSrc: 'audio/big.mp3',
                },
                {
                    word: 'small',
                    translation: 'маленький',
                    image: 'img/small.jpg',
                    audioSrc: 'audio/small.mp3',
                },
                {
                    word: 'fast',
                    translation: 'быстрый',
                    image: 'img/fast.jpg',
                    audioSrc: 'audio/fast.mp3',
                },
                {
                    word: 'slow',
                    translation: 'медленный',
                    image: 'img/slow.jpg',
                    audioSrc: 'audio/slow.mp3',
                },
                {
                    word: 'friendly',
                    translation: 'дружелюбный',
                    image: 'img/friendly.jpg',
                    audioSrc: 'audio/friendly.mp3',
                },
                {
                    word: 'unfriendly',
                    translation: 'недружелюбный',
                    image: 'img/unfriendly.jpg',
                    audioSrc: 'audio/unfriendly.mp3',
                },
                {
                    word: 'young',
                    translation: 'молодой',
                    image: 'img/young.jpg',
                    audioSrc: 'audio/young.mp3',
                },
                {
                    word: 'old',
                    translation: 'старый',
                    image: 'img/old.jpg',
                    audioSrc: 'audio/old.mp3',
                },
            ],
            [
                {
                    word: 'cat',
                    translation: 'кот',
                    image: 'img/cat.jpg',
                    audioSrc: 'audio/cat.mp3',
                },
                {
                    word: 'chick',
                    translation: 'цыплёнок',
                    image: 'img/chick.jpg',
                    audioSrc: 'audio/chick.mp3',
                },
                {
                    word: 'chicken',
                    translation: 'курица',
                    image: 'img/chicken.jpg',
                    audioSrc: 'audio/chicken.mp3',
                },
                {
                    word: 'dog',
                    translation: 'собака',
                    image: 'img/dog.jpg',
                    audioSrc: 'audio/dog.mp3',
                },
                {
                    word: 'horse',
                    translation: 'лошадь',
                    image: 'img/horse.jpg',
                    audioSrc: 'audio/horse.mp3',
                },
                {
                    word: 'pig',
                    translation: 'свинья',
                    image: 'img/pig.jpg',
                    audioSrc: 'audio/pig.mp3',
                },
                {
                    word: 'rabbit',
                    translation: 'кролик',
                    image: 'img/rabbit.jpg',
                    audioSrc: 'audio/rabbit.mp3',
                },
                {
                    word: 'sheep',
                    translation: 'овца',
                    image: 'img/sheep.jpg',
                    audioSrc: 'audio/sheep.mp3',
                },
            ],
            [
                {
                    word: 'bird',
                    translation: 'птица',
                    image: 'img/bird.jpg',
                    audioSrc: 'audio/bird.mp3',
                },
                {
                    word: 'fish',
                    translation: 'рыба',
                    image: 'img/fish1.jpg',
                    audioSrc: 'audio/fish1.mp3',
                },
                {
                    word: 'frog',
                    translation: 'жаба',
                    image: 'img/frog.jpg',
                    audioSrc: 'audio/frog.mp3',
                },
                {
                    word: 'giraffe',
                    translation: 'жираф',
                    image: 'img/giraffe.jpg',
                    audioSrc: 'audio/giraffe.mp3',
                },
                {
                    word: 'lion',
                    translation: 'лев',
                    image: 'img/lion.jpg',
                    audioSrc: 'audio/lion.mp3',
                },
                {
                    word: 'mouse',
                    translation: 'мышь',
                    image: 'img/mouse.jpg',
                    audioSrc: 'audio/mouse.mp3',
                },
                {
                    word: 'turtle',
                    translation: 'черепаха',
                    image: 'img/turtle.jpg',
                    audioSrc: 'audio/turtle.mp3',
                },
                {
                    word: 'dolphin',
                    translation: 'дельфин',
                    image: 'img/dolphin.jpg',
                    audioSrc: 'audio/dolphin.mp3',
                },
            ],
            [
                {
                    word: 'skirt',
                    translation: 'юбка',
                    image: 'img/skirt.jpg',
                    audioSrc: 'audio/skirt.mp3',
                },
                {
                    word: 'pants',
                    translation: 'брюки',
                    image: 'img/pants.jpg',
                    audioSrc: 'audio/pants.mp3',
                },
                {
                    word: 'blouse',
                    translation: 'блузка',
                    image: 'img/blouse.jpg',
                    audioSrc: 'audio/blouse.mp3',
                },
                {
                    word: 'dress',
                    translation: 'платье',
                    image: 'img/dress.jpg',
                    audioSrc: 'audio/dress.mp3',
                },
                {
                    word: 'boot',
                    translation: 'ботинок',
                    image: 'img/boot.jpg',
                    audioSrc: 'audio/boot.mp3',
                },
                {
                    word: 'shirt',
                    translation: 'рубашка',
                    image: 'img/shirt.jpg',
                    audioSrc: 'audio/shirt.mp3',
                },
                {
                    word: 'coat',
                    translation: 'пальто',
                    image: 'img/coat.jpg',
                    audioSrc: 'audio/coat.mp3',
                },
                {
                    word: 'shoe',
                    translation: 'туфли',
                    image: 'img/shoe.jpg',
                    audioSrc: 'audio/shoe.mp3',
                },
            ],
            [
                {
                    word: 'sad',
                    translation: 'грустный',
                    image: 'img/sad.jpg',
                    audioSrc: 'audio/sad.mp3',
                },
                {
                    word: 'angry',
                    translation: 'сердитый',
                    image: 'img/angry.jpg',
                    audioSrc: 'audio/angry.mp3',
                },
                {
                    word: 'happy',
                    translation: 'счастливый',
                    image: 'img/happy.jpg',
                    audioSrc: 'audio/happy.mp3',
                },
                {
                    word: 'tired',
                    translation: 'уставший',
                    image: 'img/tired.jpg',
                    audioSrc: 'audio/tired.mp3',
                },
                {
                    word: 'surprised',
                    translation: 'удивлённый',
                    image: 'img/surprised.jpg',
                    audioSrc: 'audio/surprised.mp3',
                },
                {
                    word: 'scared',
                    translation: 'испуганный',
                    image: 'img/scared.jpg',
                    audioSrc: 'audio/scared.mp3',
                },
                {
                    word: 'smile',
                    translation: 'улыбка',
                    image: 'img/smile.jpg',
                    audioSrc: 'audio/smile.mp3',
                },
                {
                    word: 'laugh',
                    translation: 'смех',
                    image: 'img/laugh.jpg',
                    audioSrc: 'audio/laugh.mp3',
                },
            ],
        ];
        themes = [
            'Action (set A)',
            'Action (set B)',
            'Action (set C)',
            'Adjective',
            'Animal (set A)',
            'Animal (set B)',
            'Clothes',
            'Emotions'
        ];
    });
}
exports.resetDb = resetDb;