import React from 'react';
import { createRoot } from 'react-dom/client';
import { App, type Page } from './App';
import './styles.css';

const page = (document.body.dataset.page ?? 'home') as Page;
const root = document.getElementById('root');
if (!root) throw new Error('Missing root element');
createRoot(root).render(<React.StrictMode><App page={page} /></React.StrictMode>);
