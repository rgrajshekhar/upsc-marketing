{
  "version": 2,
  "builds": [
    {
      "src": "nishchay-frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    },
    {
      "src": "nishchay-frontend/api/**/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "nishchay-frontend/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "nishchay-frontend/$1"
    }
  ]
}
