const getIndex = (req, res) => {
  res.send("<h1>Práctica JWT</h1>");
};

const getApi = (req, res) => {
  res.status(200).json({
    posts: [
      {
        id: 0,
        title: "Primer post",
        username: 'Pepe'
      },
      {
        id: 1,
        title: "Segundo post",
        username: 'Ana'
      }
    ]
  });
};

const getLogin = (req, res) => {
  res.send(`
    <html>
      <head>
        <title></title>
      </head>
      <body>
        <form method="POST" action="/auth">

          <div>Nombre de Usuario: <input type='text' name='username'> </div>
          <div>Contraseña: <input type='text' name='paswword'> </div>
          <div> <input type='submit' value='Iniciar sesión'  >  </div>

        </form>
      </body>
    </html>
  `);
};

const postAuth = (req, res) => {
  const { username, password } = req.body;

  const user = { username: username };
};

module.exports = {
  getIndex,
  getApi,
  getLogin,
  postAuth
};
