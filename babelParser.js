const babelParser = require('@babel/parser');

const FILE_TO_PARSE = `
export interface Spec extends TurboModule {
  readonly getMap: (arg: {[key: string]: number | null}) => {[key: string]: number | null};
}`;

function parse() {
    const ast = babelParser.parse(FILE_TO_PARSE, {
      sourceType: 'module',
      plugins: ['typescript'],
    }).program;
    console.log(JSON.stringify(ast));
}

parse();
