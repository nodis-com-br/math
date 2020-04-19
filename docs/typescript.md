# Typescript

All frontend projects are coded with [Typescript](https://www.typescriptlang.org/). They take advantage that our backend are made with [GraphQL](https://graphql.org/) and generate all types, enums and interfaces based on their Schemas.

## LHC - Generating types based on Backend's Schemas

We have a repository called [LHC](https://github.com/nodis-com-br/lhc). It implements a library called [GraphQL Code Generator](https://graphql-code-generator.com/) that receives the Schemas of the backend APIs and generates the Typescript types.

Then we get all the `.ts` generated files and upload that to a `NPM Module` and install that into your application like `yarn add @nodis/lhc-sku-seller`.

## Optional Chaining Operator

Now that we are using the Backends types, we know when something can be null. So we can use the Typescripts new [Optional Chaining Operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining) to make easy and fast null-checks.

[< Go back](https://nodis-com-br.github.io/math/)
