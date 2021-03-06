import { Router } from 'express';
import {
  createTheme, deleteCardFromThemeByID, deleteCardsByTheme, deleteTheme, getCards, getThemes, resetDb, updateCardFromThemeByID, updateTheme,
} from './functions';

const router = Router();

router.get('/', async (req, res) => {
  return res.sendStatus(200);
});
// themes routes
router.get('/admin/themes', async (req, res) => {
  const themes = await getThemes();
  res.json(themes);
});
router.put('/admin/themes/:id/:newName', async (req, res) => {
  const themeId = req.params.id;
  const { newName } = req.params;
  if (!+themeId) {
    return res.sendStatus(400);
  }
  try {
    await updateTheme(+themeId, newName);
    return res.sendStatus(200);
  } catch (e) {
    return res.status(404).send(e);
  }
});
router.post('/admin/themes/:newName', async (req, res) => {
  const data = req.params.newName;
  if (!data) return res.sendStatus(400);
  try {
    await createTheme(data);
  } catch (e) {
    return res.sendStatus(400);
  }
});
router.delete('/admin/themes/:id', async (req, res) => {
  const themeId = req.params.id;
  if (!themeId) {
    return res.sendStatus(400);
  }
  try {
    await deleteTheme(+themeId);
    return res.sendStatus(200);
  } catch (e) {
    return res.status(404).send(e);
  }
});
router.delete('/admin/cards/:id', async (req, res) => {
  const cardsId = req.params.id;
  if (!cardsId) {
    return res.sendStatus(400);
  }
  try {
    await deleteCardsByTheme(+cardsId);
    return res.sendStatus(200);
  } catch (e) {
    return res.status(404).send(e);
  }
});

// cards routes
router.get('/admin/cards', async (req, res) => {
  const cards = await getCards();
  res.json(cards);
});
router.delete('/admin/cards/:theme/:id', async (req, res) => {
  const cardsTheme = req.params.theme;
  const cardId = req.params.id;
  if (!+cardsTheme) {
    return res.sendStatus(400);
  }
  if (!+cardId) {
    return res.sendStatus(400);
  }
  try {
    await deleteCardFromThemeByID(+cardsTheme, +cardId);
    return res.sendStatus(200);
  } catch (e) {
    return res.status(404).send(e);
  }
});
router.put('/admin/cards/:theme/:id/:word/:transl', async (req, res) => {
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
    await updateCardFromThemeByID(+cardsTheme, +cardId, word, transl);
    return res.sendStatus(200);
  } catch (e) {
    return res.status(404).send(e);
  }
});
router.put('/admin/reset', async (req, res) => {
  try {
    await resetDb();
    return res.sendStatus(200);
  } catch (e) {
    return res.status(404).send(e);
  }
});

export default router;
