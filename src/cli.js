import readlineSync from 'readline-sync';

const prompt = (message) => readlineSync.question(message);

export default prompt;
