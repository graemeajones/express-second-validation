// Imports ---------------------------------------
import { Router } from 'express';
import controller from '../controllers/users-controller.js';

// Configure CRUDL endpoints ---------------------
const router = Router();

// List all records
router.get('/', controller.list);

// Read specific record
router.get('/:id', controller.get);

// Create record
router.post('/', controller.post);

// Update specific record
router.put('/:id', controller.put);

// Delete specific record
router.delete('/:id', controller.delete);

export default router;
