import express from 'express';
import { createTeam } from '@controllers';

const router = express.Router();

router.post('/team/create', createTeam);

export default router;
