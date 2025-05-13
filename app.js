const tg = window.Telegram.WebApp;
tg.expand();

function makeBet(choice) {
    const result = Math.floor(Math.random() * 6) + 1;
    const outcome = result % 2 === 0 ? 'Четное' : 'Нечетное';
    let message = `Твой выбор: ${choice}\nВыпало: ${result} (${outcome})\n`;

    if (choice === outcome) {
        message += '🎉 Ты выиграл!';
    } else {
        message += '😢 Ты проиграл!';
    }

    tg.sendData(message);
    tg.close();
}