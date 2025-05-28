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