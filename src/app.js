import {WebAPI} from './web-api';
import 'jQuery';
import 'bootstrap';

export class App {
  static inject = [WebAPI];
  constructor(api) {
    this.api = api;
  }

  configureRouter(config, router) {
    config.title = 'Contacts';
    config.map([
      { route: '', name: 'no-selection',      moduleId: './no-selection',      nav: true, title: 'Select' },
      { route: 'contacts/:id', name: 'contact-detail',      moduleId: './contact-detail', href: 'contact/123',      nav: true, title: 'Contact Detail' }
    ]);

    this.router = router;
  }
}
