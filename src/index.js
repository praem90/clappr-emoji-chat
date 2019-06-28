import {Clappr, UIContainerPlugin, template, EVENTS} from 'clappr';
import html from './template.html';
import './emoji.scss';

export default class EmojiChatPlugin extends UIContainerPlugin {
  get name() { return 'EmojiChatPlugin' };
  
  get template() { return template(html) };

  get defaults() {
    return {
      emojis: [
        'like',
        'love',
        'haha',
        'wow',
        'sad',
        'angry',
      ],
      bottom: false,
    }
  }

  get attributes() {
    return {
      class: 'emojis-container animated faster d-flex rounded '
        + (this.options.emojiChat.bottom ? 'bottom-center' : ''),
    }
  }

  constructor(options) {
    super(options)
    this.options.emojiChat = this.options.emojiChat || {};
    this.options.emojiChat = Object.assign({}, this.defaults, this.options.emojiChat);
    this.render();
  }

  bindEmojiClickEvents() {
    let icon = this.$el.find('.emoji-icon');

    icon.click((e) => {
      let zoomOutClass = this.options.emojiChat.bottom ? 'zoomOutUp' : 'zoomOutRight';
      let el = $(e.target).addClass(zoomOutClass);
      setTimeout(() => el.removeClass(zoomOutClass), 1000);
      if (this.options.emojiChat && this.options.emojiChat.onClick) {
          this.options.emojiChat.onClick(el.data('emoji'));
      }
    });

    icon.mouseenter((e) => {
      $(e.target).addClass('rotateIn');
      setTimeout(() => $(e.target).removeClass('rotateIn'), 1000);
    });
  }

  updateEmojiCount(emoji, count) {
    let badge = this.$el.find('.emoji-icon-'+emoji + '-count');
    if (badge) {
        badge.html(count);
    }

    return this;
  }

  updateViewCount(count) {
    let badge = this.$el.find('.view_count');
    if (badge) {
        badge.html(count);
    }
  }

  show() {
    this.$el.show()
  }

  hide() {
    this.$el.hide()
  }

  render() {
    this.$el.hide()
    this.$el.html(this.template(this.options.emojiChat))
    this.container.$el.append(this.$el)
    this.$el.show();
    this.bindEmojiClickEvents();
    return this;
  }
}