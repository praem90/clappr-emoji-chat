## Clappr Emoji Chat Plugin
A Clappr plugin for add emiji and live viewers count. You can integrate and update count using web socket like socket.io or your own way

### Installation
Install Using npm 

`npm i --save clappr-emoji-chat`

Install using CDN 

Inlcude the plugin src next to the clappr src like below

```
...
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.js"></script>
<script type="text/javascript" charset="utf-8" src="https://cdn.jsdelivr.net/npm/clappr-emoji-chat@latest/dist/clappr-emoji-chat.min.js"> </script>
<script>
// Add this plugin to your clappr options 
  let player = new Clappr.player({
    ...
    plugins: [ClapprEmojiPlugin],
    emojiChat: {
      // This plugin provides below emojis out of the box.
      emojis: [
        'like',
        'love',
        'haha',
        'wow',
        'sad',
        'angry',
      ],
      onClick: EmojiClickHandler,
      bottom: false, //By deafault emoji container should takes place on the left. If set to `true`, it will be placed to the bottom 
    }
  });
  
  // Emoji Click handler
  // @param emoji string Emoji name 
  function EmojiClickHandler (emoji) {
    console.log(emoji + 'was clicked'); // haha was clicked 
    // Do your own operation here
  }

  // To Update view count
  player.getPlugin('EmojiChatPlugin').updateViewCount(10);
  
  // TO update emoji click count, 
  // @param string emoji name
  // @param int click count
  player.getPlugin('EmojiChatPlugin').updateEmojiCount('haha', 10);
</script>
...
```
Now you can see emojis on your player. ENJOY!!

### Template

Below template structure, You can use your css to update these

```
.emoji-container
  ul.emiji-list
    li.emoji-list-item
      span.emoji-icon.emoji-icon-{emojiName}
      span.emoji-icon-{emojiName}-count
```

### Add custom emoji

Add an element to `emojiChat.emojis` option on clappr options. Add css to style your emoji like `.emoji-icon-{emojiName}::after {content: "/*Your emoji utf-8 code*/"}`

```
  let player = Clappr.player({
    ...
    plugins: [EmojiChatPlugin],
    emojiChat: {
      emojis: [
        ...
        "beers"
      ]
    }
    ...
  });


  // And in your css

  .emoji-icon-beers::after {
    content: "\1F37B"
  }
```
