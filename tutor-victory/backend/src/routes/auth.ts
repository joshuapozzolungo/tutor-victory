import { Router } from "express";

const router = Router();

router.post('/register');
router.post('/register/mfa');
router.post('/login');
router.post('/login/mfa');
router.post('/logout');
router.post('/password-reset/request');
router.post('/password-reset/confirm');
