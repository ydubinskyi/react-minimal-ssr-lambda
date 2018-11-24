function template(title, content = '') {
  let page = `<!DOCTYPE html>
                  <html lang="en">
                  <head>
                    <meta charset="utf-8">
                    <title> ${title} </title>
                    <link rel="stylesheet" href="assets/styles.css">
                  </head>
                  <body>
                    <div class="content">
                       <div id="app" class="wrap-inner">
                          ${content}
                       </div>
                    </div>
                    <script src="assets/client.js"> </script>
                  </body>
                  </html>
                  `;

  return page;
}

module.exports = template;
