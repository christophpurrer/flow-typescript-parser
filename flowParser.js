const flowParser = require('flow-parser');

const FILE_TO_PARSE = `
export interface Spec extends TurboModule {
  +getMap: (arg: {[key: string]: number | null}) => {[key: string]: number | null};
}`;

function parse() {
    const ast = flowParser.parse(FILE_TO_PARSE, {enums: true});
    console.log(JSON.stringify(ast));
}

parse();
