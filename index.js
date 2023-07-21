const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host:'ir.skyblock.uz',
  // port: 57285,
  username: 'Aiden',
  viewDistance: 'tiny',
  version: '1.18',
 })
 
 let continue_digging = true; 
 
bot.once("spawn", () => {
  bot.chat("/login qwasqwas");
})

bot.on('chat', (username, message) => {
  if (message.includes('Aiden tpa me')) {
    bot.chat(`/tpa stevestar414`); // Send "/tpa <username>" request
  }
});

bot.on('chat', (username, message) => {
  if (message == 'digAiden') {
    continue_digging=true;
    dig()  
  }
})

async function dig() {
  if(!continue_digging){return};
  if (!bot.heldItem || !bot.heldItem.name.includes('pickaxe')) {
    var pickaxe = bot.inventory.items().filter(i => i.name.includes('pickaxe'))[0]; 
  if (pickaxe) await bot.equip(pickaxe, 'hand')
  }
  var block = bot.blockAtCursor(4);
  if (!block) return setTimeout (function () { dig(); }, 100);
  await bot.dig(block, 'ignore')
  dig()
}
