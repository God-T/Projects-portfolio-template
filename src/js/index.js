import '../css/index.css';
import '../css/about.css';
import '../css/landing.css';
import '../css/projects-list.css';
import '../css/animation.css';

import {
    renderProjectsList,
    renderLandingData,
    renderAboutData,
    renderContactDetails,
    renderFavicon,
} from './common/render.js';
import { bindBackToTopBtnEvent, bindLogoClickEvent } from './common/event.js';
import { bindAnimations } from './common/animation.js';

await renderProjectsList();
await renderLandingData();
await renderAboutData();
await renderContactDetails();
bindAnimations();
bindBackToTopBtnEvent();
bindLogoClickEvent();
