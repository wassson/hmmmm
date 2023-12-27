type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type Route<Method extends HttpMethod = 'GET'> = {
  method?: Method;
  path: string;
  collection?: string[];
  member?: string[];
};

const root: Route = { 
  path: '/',
  method: 'GET'
};

// TODO: establish controller action keywords 
// ex: index, create, etc.
const posts: Route = {
  path: '/dashboard',
  collection: ['index', 'new', 'create'],
  member: ['show', 'edit', 'update', 'destroy']
};

// TODO: Split this out into a separate utils file
const logRoutes = () => {
  ROUTES.forEach(route => {
    console.log(`${route.method || 'GET'}: ${route.path}`)
    console.log('====================')
  })
}

export const ROUTES = [root, posts];

logRoutes()
