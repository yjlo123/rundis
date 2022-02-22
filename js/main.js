let runtime = runtimeExecuter();
let evaluator = runtimeEvaluator();
let parser = runtimeParser();

let jqconsole = $('#console').jqconsole();
jqconsole.Write('Rundis v0.1\nType `help` to see the available commands.\n', 'console-gray');
jqconsole.SetPromptLabel('');

runtime.config(parser, evaluator, null, jqconsole, null, {});

let startPrompt = function () {
	jqconsole.Prompt(true, function (input) {
		jqconsole.Write('[Session Ended]\nPlease refresh this page to start a new session.', 'console-default');
	});
}
startPrompt();

runtime.restart();
runtime.executeAll(null, rundisSrc);
