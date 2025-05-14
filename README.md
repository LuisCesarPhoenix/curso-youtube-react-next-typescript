# TypeScript Next.js example

This is a really simple project that shows the usage of Next.js with TypeScript.  
Este é um projeto muito simples que mostra o uso do Next.js com TypeScript.

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-typescript&project-name=with-typescript&repository-name=with-typescript)

## How to use it?

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app@latest --example with-typescript with-typescript-app
```

```bash
yarn create next-app@latest --example with-typescript with-typescript-app
```

```bash
pnpm create next-app@latest --example with-typescript with-typescript-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.  
Este exemplo mostra como integrar o sistema de tipos TypeScript ao Next.js. Como o TypeScript é suportado de fábrica pelo Next.js, tudo o que precisamos fazer é instalar o TypeScript.

```shell
npm install --save-dev typescript
```

```shell
yarn install --save-dev typescript
```

```shell
pnpm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.  
Para habilitar os recursos do TypeScript, instalamos as declarações de tipo para React e Node.

```shell
npm install --save-dev @types/react @types/react-dom @types/node
```

```shell
yarn install --save-dev @types/react @types/react-dom @types/node
```

```shell
pnpm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.  
Quando executarmos `next dev` na próxima vez, o Next.js começará a procurar por quaisquer arquivos `.ts` ou `.tsx` em nosso projeto e o compilará. Ele até cria automaticamente um arquivo `tsconfig.json` para o nosso projeto com as configurações recomendadas.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.  
O Next.js possui declarações TypeScript integradas, portanto, teremos o preenchimento automático para os módulos do Next.js imediatamente.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.  
Um script `type-check` também foi adicionado ao `package.json`, que executa a CLI `tsc` do TypeScript no modo `noEmit` para executar a verificação de tipo separadamente. Você pode então incluir isso, por exemplo, em seus scripts de `teste`.


## Crie um novo projeto Next.js com TypeScript

1.  No terminal, rode:

```bash
npx create-next-app@latest nome-do-seu-projeto -e with-typescript with-typescript-app
npx create-next-app@latest --nome-do-seu-projeto with-typescript with-typescript-app
```
O Next vai detectar e configurar tudo para TypeScript automaticamente.

Success! Created site-espaco-curumim at C:\Users\cesar\Documents\Documentos B\projeto-espaco-curumim\site-novo\new-site-espaco-curumim

2.  Este exemplo mostra como integrar o sistema de tipos TypeScript ao Next.js. Como o TypeScript é suportado de fábrica pelo Next.js, tudo o que precisamos fazer é instalar o TypeScript.

```shell
npm install --save-dev typescript
```
3.  Para habilitar os recursos do TypeScript, instalamos as declarações de tipo para React e Node.

```shell
npm install --save-dev @types/react @types/react-dom @types/node
```
4.  Inside that directory, you can run several commands:

Starts the development server.
```bash
npm run dev
```
Builds the app for production.
```bash
npm run build
```
Runs the built app in production mode.
```bash
npm start
```
5.  We suggest that you begin by typing:
```bash
cd site-espaco-curumim
npm run dev
```

   ▲ Next.js 15.3.2
   - Local:        http://localhost:3000
   - Network:      http://192.168.18.18:3000

 ✓ Starting...
   - Network:      http://192.168.18.18:3000