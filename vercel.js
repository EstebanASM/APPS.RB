{
    "version": 2,
    "builds": [
      {
        "src": "app.rb",
        "use": "@vercel/ruby"
      }
    ],
    "routes": [
      {
        "src": "/(.*)",
        "dest": "/app.rb"
      }
    ]
  }
  
  