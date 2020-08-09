const encoder = new TextEncoder();

const InputText = encoder.encode('hello, thank you');

await Deno.writeFile("hello.txt",InputText);