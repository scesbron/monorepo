# Presentation

To try eslint on command line do

    yarn
    
and then

    yarn lint
    
or

    cd packages/common
    yarn lint
    
There is no linter error about imports relative to the rule 
`"import/no-extraneous-dependencies": [ "error", { "packageDir": ["./", "../../" ] } ]`

If you open webstorm on this project and enable eslint configuration you have errors
for file `packages/common/index.js` :

- The package.json file could not be found
- 'lodash' should be listed in project dependencies ...

My guess is that eslint is executed relative to the root of the monorepo but for eslint
configuration it is relative to the `packages/common` directory.
