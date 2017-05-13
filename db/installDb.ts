import childProcess = require('child_process');

const selectedCommand = process.env.COMMAND;
const dbName = 'pushpad';
const dbTestsName = 'pushpad_tests';
const userName = 'postgres';

var command: string;

switch (selectedCommand) {
    case 'create_dev_dbs':
        command = `
echo ===Creating the ${dbName} dev db===
createDb -E UTF8 --lc-collate C --lc-ctype C -U ${userName} -T template0 ${dbName}
echo ===Creating the ${dbTestsName} dev db===
createDb -E UTF8 --lc-collate C --lc-ctype C -U ${userName} -T template0 ${dbTestsName}
echo ===Setting up the ${dbName} dev db===
psql -f db/setupDb.sql -U ${userName} -d ${dbName}
echo ===Setting up the ${dbName} dev db===
psql -f db/setupDb.sql -U ${userName} -d ${dbTestsName}
`;
        break;
    case 'drop_dev_dbs':
        command = `
echo ===dropping the ${dbName} dev db===
dropdb -U ${userName} ${dbName}
echo ===dropping the ${dbTestsName} dev db===
dropdb -U ${userName} ${dbTestsName}
`;
        break;
    case 'generate_scripts':
        command = `
echo ===Create the setupDb.sql file===
pg_dump --schema-only -W -w -f db/setupDb.sql -p 5432 -U ${userName} ${dbName}
`;
        break;
};

console.log("===Starting DB Command===");
console.log(`Executing ${selectedCommand}`);

command.split('\n').forEach(command => {
    console.log(childProcess.execSync(command).toString());
});


