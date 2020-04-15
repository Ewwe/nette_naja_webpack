import 'nette-forms';
import '@daar/nette-ajax';
import naja from 'naja';

import '../scripts/bootstrap.min.css'

document.addEventListener(
  'DOMContentLoaded',
    () => {{
        naja.addEventListener('complete',() => {{

        }});
        naja.initialize();
    }}
);