# Read_Dbc

## Compilando para sua versão

Dado a complexidade do desenvolvimento desse módulo o ideal é descrever os passos em que ocorreu.

1. *Primeiro instale o node-gyp para buildar os bindings pro node**

```
npm i -g node-gyp
```

2. *Vá para a pasta `addon` e crie o arquivo _binging.gyp_*

3. *Remova qualquer arquivo de binding anterior e qualquer file referenciando versões anteriores do node*

```
node-gyp clean
node-gyp remove <VERSÃO>
```

4. *Configure os bindings*

```
node-gyp configure
```

5. *Build*

```
node-gyp build
```


## TODO

1. O main funciona com muita informação que eu previamente sei mas a pessoa que vai usar não, *i.e.* as siglas dos estados são informações que podem confundir e estão hardcoded. O ideal era estar em tabelas com as descrições e propriedades pertinentes. Os tipos de datasource também são um problema. A questão é onde colocar, talvez eles devam ficar em memória mesmo mas em um banco SQL. Não existe necessidade de isso estar escrito em HD, senão tornaria o processo mais lento. Todavia, outras coisas precisarão estar escritas em HD então teremos dois tipos de persistência pelo menos na aplicação.
* Descobrir como usar o sqlite
* Passar essas tabelas mencionadas para lá
* Criar os DAO
* Integrar aonde eles são chamados (geralmente nos filtros/criteria)
