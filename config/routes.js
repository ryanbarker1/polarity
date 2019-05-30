import { router as indexController } from '../app/controllers/index.controller'

import { router as profilesController } from '../app/controllers/profiles.controller'

export function configuretRoutes(app){
  app.all("*", function(req, res, next){
  
    next();
  });

  app.use('/', indexController);

  app.use('/', profilesController);
}