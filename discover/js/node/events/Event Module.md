# Event Module

É um mecanismo para
* Disparar eventos
* Ouvir eventos
* Fazer alguma ação quando ouvir o evento
* É a base para outros módulos como: http, stream, file system, etc...

# Oq vamos aprender

* Utilizar os eventos
* Disparar eventos
* Ouvir eventos
* Executar ações para determinados eventos
* Entender como ele é a base para os outros módulos

### Passo a passo
    Extrair do events o eventEmitter
        const {EventEmitter} = require("events")

        ** EventEmitter -> função do estilo classe **

    Criar
        const emitter = new EventEmitter()

    ouvir evento (segundo parâmetro opcional)
        emitter.on("NameEvent", (message) => {
            oq executar no evento
        })

    ouvir uma única vez
        emitter.once("NameEvent", (message) => {
            oq executar no evento
        })

    Emitir (não esta ouvindo se não tiver o emitter.on no código)
        emitter.emit("NameEvent", "message")

