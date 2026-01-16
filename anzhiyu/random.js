var posts=["2026/01/14/hello-world/","2026/01/16/周至/","2026/01/15/周记-1-15/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };