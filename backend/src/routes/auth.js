import express from 'express';
import { joinUser, loginUser } from '@controllers';

const router = express.Router();

router.post('/auth/join', joinUser);

router.post('/auth/login', loginUser);

export default router;
