import transporter from '../config/Mail'

const outPutUsers = (users) => users.map(user => `<li>${user.name}</li>`).join('')

const generateTemplate = (users) => {
  return `
    <div>
      <h5>Os seguinte colaboradores estão saindo de férias</h5>
      <ul>
        ${outPutUsers(users[0])}
      </ul>
      <h5>Os seguintes colaboradores estão retornando das férias</h5>
      <ul>
        ${outPutUsers(users[1])}
      </ul>
    </div>
  `
}

export const sendMail = async (users) => {
  let info = await transporter.sendMail({
    from: '"Douglas Souza Luz 🤪" <douglasluz@tranorte.com.br>', // sender address
    to: "douglasluz@tranorte.com.br", // list of receivers
    subject: "Funcionários de Férias", // Subject line
    text: "Hello world?", // plain text body
    html: generateTemplate(users)
  });

  console.log('Email enviado ', info)
  return
}


