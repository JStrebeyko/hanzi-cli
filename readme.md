# hanzi 汉字

## backend for language data collection and hosting

### reasoning

1. I am trying to learn chinese regularly.
2. I found the concept of [spaced repetition](https://ncase.me/remember/) very appealing.
3. The flash cards set I bought:
  - has around 600 items and is too clunky to bring around;
  - it has only three dividers.

 So, instead of getting four pieces of cardboard, I decided to create a CLI to help me digitilize what I learn daily, while learning Node.js data manipulation along the way.

### goal

For now it is only helping me to digitalize content, but as the dataset grows, I plan to equip it with  sorting and editing utilies, for it to ultimately become some sort of an API. I want to host it as a backend for chinese phrases/sentences/proverbs outlet or/and generator and feed it to some kind of [Mao](https://github.com/JStrebeyko/Mao).

example _hanzi_ model:
```js
{
 hanzi: {
  char: '汉字',
  pron: ''
  trans: {
    eng: 'character',
    pl: 'znak' 
   }
 },
 sentence: {
  char: '',
  pron: '',
  trans: {
      eng: '',
      pl: '',
    }
},
    id:1
    cat: []
}
```
todo: 
- [ ] (more) DRY questions
- [ ] handling empty additions
- [ ] checking the encoding type on input
- [ ] entry viewing
- [ ] entry edition
- [ ] entry deletion